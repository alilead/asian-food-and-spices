import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from 'react';
import { Product } from '@/data/products';
import { apiUrl, cartHeaders, CART_SESSION_STORAGE_KEY } from '@/lib/api';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  /** False until first cart/backend probe finishes */
  cartReady: boolean;
  /** Server-backed cart when API is reachable */
  useBackendCart: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_CART_KEY = 'cart_local_fallback';

function mergeLocalLine(
  prev: CartItem[],
  product: Product,
  quantity: number,
): CartItem[] {
  const existing = prev.find((item) => item.product.id === product.id);
  if (existing) {
    return prev.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
  }
  return [...prev, { product, quantity }];
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartReady, setCartReady] = useState(false);
  const [useBackend, setUseBackend] = useState(false);
  const itemsRef = useRef<CartItem[]>([]);
  itemsRef.current = items;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let cartId = localStorage.getItem(CART_SESSION_STORAGE_KEY);
        if (!cartId) {
          const r = await fetch(apiUrl('/api/cart/session'), { method: 'POST' });
          if (!r.ok) throw new Error('session');
          const j = (await r.json()) as { cartId: string };
          cartId = j.cartId;
          localStorage.setItem(CART_SESSION_STORAGE_KEY, cartId);
        }
        let localParsed: CartItem[] | null = null;
        const rawLocal = localStorage.getItem(LOCAL_CART_KEY);
        if (rawLocal) {
          try {
            localParsed = JSON.parse(rawLocal) as CartItem[];
          } catch {
            /* ignore */
          }
        }
        const cr = await fetch(apiUrl('/api/cart'), {
          headers: cartHeaders(cartId),
        });
        if (!cr.ok) throw new Error('cart');
        let data = (await cr.json()) as { items: CartItem[] };
        if (
          (!data.items || data.items.length === 0) &&
          localParsed &&
          localParsed.length > 0
        ) {
          const sr = await fetch(apiUrl('/api/cart/sync'), {
            method: 'POST',
            headers: cartHeaders(cartId),
            body: JSON.stringify({
              items: localParsed.map((i) => ({
                productId: i.product.id,
                quantity: i.quantity,
              })),
            }),
          });
          if (sr.ok) data = (await sr.json()) as { items: CartItem[] };
        }
        localStorage.removeItem(LOCAL_CART_KEY);
        if (!cancelled) {
          setItems(data.items || []);
          setUseBackend(true);
        }
      } catch {
        const rawLocal = localStorage.getItem(LOCAL_CART_KEY);
        if (rawLocal) {
          try {
            if (!cancelled) setItems(JSON.parse(rawLocal) as CartItem[]);
          } catch {
            /* ignore */
          }
        }
        if (!cancelled) setUseBackend(false);
      } finally {
        if (!cancelled) setCartReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!cartReady || useBackend) return;
    localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(items));
  }, [items, cartReady, useBackend]);

  const addToCart = (product: Product, quantity: number = 1) => {
    if (!useBackend) {
      setItems((prev) => mergeLocalLine(prev, product, quantity));
      return;
    }
    const cartId = localStorage.getItem(CART_SESSION_STORAGE_KEY);
    if (!cartId) {
      setItems((prev) => mergeLocalLine(prev, product, quantity));
      setUseBackend(false);
      return;
    }
    const prev = itemsRef.current;
    const existing = prev.find((item) => item.product.id === product.id);
    const newQty = (existing?.quantity ?? 0) + quantity;
    void (async () => {
      const res = await fetch(apiUrl('/api/cart/items'), {
        method: 'POST',
        headers: cartHeaders(cartId),
        body: JSON.stringify({ productId: product.id, quantity: newQty }),
      });
      if (!res.ok) {
        setUseBackend(false);
        setItems((p) => mergeLocalLine(p, product, quantity));
        return;
      }
      const data = (await res.json()) as { items: CartItem[] };
      setItems(data.items);
    })();
  };

  const removeFromCart = (productId: string) => {
    if (!useBackend) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    const cartId = localStorage.getItem(CART_SESSION_STORAGE_KEY);
    if (!cartId) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      setUseBackend(false);
      return;
    }
    void (async () => {
      const res = await fetch(apiUrl(`/api/cart/items/${encodeURIComponent(productId)}`), {
        method: 'DELETE',
        headers: cartHeaders(cartId),
      });
      if (!res.ok) {
        setUseBackend(false);
        setItems((prev) => prev.filter((item) => item.product.id !== productId));
        return;
      }
      const data = (await res.json()) as { items: CartItem[] };
      setItems(data.items);
    })();
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    if (!useBackend) {
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        ),
      );
      return;
    }
    const cartId = localStorage.getItem(CART_SESSION_STORAGE_KEY);
    if (!cartId) {
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        ),
      );
      setUseBackend(false);
      return;
    }
    void (async () => {
      const res = await fetch(apiUrl('/api/cart/items'), {
        method: 'POST',
        headers: cartHeaders(cartId),
        body: JSON.stringify({ productId, quantity }),
      });
      if (!res.ok) {
        setUseBackend(false);
        setItems((prev) =>
          prev.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          ),
        );
        return;
      }
      const data = (await res.json()) as { items: CartItem[] };
      setItems(data.items);
    })();
  };

  const clearCart = () => {
    if (!useBackend) {
      setItems([]);
      return;
    }
    const cartId = localStorage.getItem(CART_SESSION_STORAGE_KEY);
    if (!cartId) {
      setItems([]);
      return;
    }
    void (async () => {
      const res = await fetch(apiUrl('/api/cart'), {
        method: 'DELETE',
        headers: cartHeaders(cartId),
      });
      if (!res.ok) {
        setItems([]);
        setUseBackend(false);
        return;
      }
      const data = (await res.json()) as { items: CartItem[] };
      setItems(data.items);
    })();
  };

  const getTotal = () => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
        cartReady,
        useBackendCart: useBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components -- hook + provider pair
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
