/** Must match CartContext localStorage key for checkout + API cart. */
export const CART_SESSION_STORAGE_KEY = 'cart_session_id';

/** Base for API calls. Empty uses same-origin `/api` (Vite dev proxy → Express :3001; Netlify → function). */
export function apiUrl(path: string): string {
  const base = import.meta.env.VITE_API_URL ?? '';
  if (path.startsWith('http')) return path;
  return `${base}${path}`;
}

export function cartHeaders(cartId: string | null): HeadersInit {
  const h: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (cartId) h['X-Cart-Id'] = cartId;
  return h;
}
