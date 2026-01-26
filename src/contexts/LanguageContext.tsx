import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { fr: "Accueil", en: "Home" },
  shop: { fr: "Boutique", en: "Shop" },
  categories: { fr: "Catégories", en: "Categories" },
  contact: { fr: "Contact", en: "Contact" },
  cart: { fr: "Panier", en: "Cart" },
  
  // Hero
  heroTitle: { fr: "Saveurs d'Asie au cœur de Genève", en: "Authentic Asian Flavors in the Heart of Geneva" },
  heroSubtitle: { fr: "Découvrez notre sélection d'ingrédients authentiques importés directement d'Asie", en: "Discover our selection of authentic ingredients imported directly from Asia" },
  shopNow: { fr: "Découvrir", en: "Shop Now" },
  viewAll: { fr: "Voir tout", en: "View All" },
  
  // Categories
  featuredCategories: { fr: "Nos Catégories", en: "Our Categories" },
  exploreCategories: { fr: "Explorez notre sélection de produits authentiques", en: "Explore our selection of authentic products" },
  
  // Products
  featuredProducts: { fr: "Produits Vedettes", en: "Featured Products" },
  bestSellers: { fr: "Nos meilleures ventes pour vous", en: "Our best sellers for you" },
  allProducts: { fr: "Tous les Produits", en: "All Products" },
  addToCart: { fr: "Ajouter au panier", en: "Add to Cart" },
  viewProduct: { fr: "Voir le produit", en: "View Product" },
  price: { fr: "Prix", en: "Price" },
  quantity: { fr: "Quantité", en: "Quantity" },
  relatedProducts: { fr: "Produits similaires", en: "Related Products" },
  
  // Cart
  yourCart: { fr: "Votre Panier", en: "Your Cart" },
  cartEmpty: { fr: "Votre panier est vide", en: "Your cart is empty" },
  continueShopping: { fr: "Continuer vos achats", en: "Continue Shopping" },
  subtotal: { fr: "Sous-total", en: "Subtotal" },
  checkout: { fr: "Commander", en: "Checkout" },
  remove: { fr: "Supprimer", en: "Remove" },
  
  // Checkout
  checkoutTitle: { fr: "Finaliser la commande", en: "Complete Your Order" },
  customerInfo: { fr: "Informations client", en: "Customer Information" },
  firstName: { fr: "Prénom", en: "First Name" },
  lastName: { fr: "Nom", en: "Last Name" },
  email: { fr: "Email", en: "Email" },
  phone: { fr: "Téléphone", en: "Phone" },
  address: { fr: "Adresse", en: "Address" },
  city: { fr: "Ville", en: "City" },
  postalCode: { fr: "Code postal", en: "Postal Code" },
  deliveryOption: { fr: "Option de livraison", en: "Delivery Option" },
  delivery: { fr: "Livraison à domicile", en: "Home Delivery" },
  pickup: { fr: "Retrait en magasin", en: "Store Pickup" },
  orderSummary: { fr: "Résumé de la commande", en: "Order Summary" },
  placeOrder: { fr: "Passer la commande", en: "Place Order" },
  orderSuccess: { fr: "Commande confirmée!", en: "Order Confirmed!" },
  orderSuccessMessage: { fr: "Merci pour votre commande. Vous recevrez un email de confirmation.", en: "Thank you for your order. You will receive a confirmation email." },
  
  // Why Us
  whyShopWithUs: { fr: "Pourquoi Nous Choisir", en: "Why Shop With Us" },
  qualityProducts: { fr: "Produits de Qualité", en: "Quality Products" },
  qualityDesc: { fr: "Ingrédients authentiques importés directement d'Asie", en: "Authentic ingredients imported directly from Asia" },
  fastDelivery: { fr: "Livraison Rapide", en: "Fast Delivery" },
  deliveryDesc: { fr: "Livraison à Genève et environs", en: "Delivery in Geneva and surroundings" },
  bestPrices: { fr: "Meilleurs Prix", en: "Best Prices" },
  pricesDesc: { fr: "Prix compétitifs pour tous les budgets", en: "Competitive prices for all budgets" },
  
  // Newsletter
  newsletter: { fr: "Newsletter", en: "Newsletter" },
  newsletterText: { fr: "Inscrivez-vous pour recevoir nos offres exclusives", en: "Subscribe to receive our exclusive offers" },
  emailPlaceholder: { fr: "Votre email", en: "Your email" },
  subscribe: { fr: "S'inscrire", en: "Subscribe" },
  
  // Footer
  aboutUs: { fr: "À Propos", en: "About Us" },
  aboutText: { fr: "Asia Market Genève est votre destination pour les meilleurs ingrédients asiatiques à Genève. Nous importons des produits authentiques pour vous offrir les saveurs de l'Asie.", en: "Asia Market Genève is your destination for the finest Asian ingredients in Geneva. We import authentic products to bring you the flavors of Asia." },
  quickLinks: { fr: "Liens Rapides", en: "Quick Links" },
  contactUs: { fr: "Contactez-nous", en: "Contact Us" },
  openingHours: { fr: "Horaires d'ouverture", en: "Opening Hours" },
  mondayFriday: { fr: "Lundi - Vendredi", en: "Monday - Friday" },
  saturday: { fr: "Samedi", en: "Saturday" },
  sunday: { fr: "Dimanche", en: "Sunday" },
  closed: { fr: "Fermé", en: "Closed" },
  allRightsReserved: { fr: "Tous droits réservés", en: "All rights reserved" },
  
  // Filter
  filterByCategory: { fr: "Filtrer par catégorie", en: "Filter by Category" },
  allCategories: { fr: "Toutes les catégories", en: "All Categories" },
  searchProducts: { fr: "Rechercher des produits...", en: "Search products..." },
  noProductsFound: { fr: "Aucun produit trouvé", en: "No products found" },
  products: { fr: "produits", en: "products" },
  backToShop: { fr: "Retour à la boutique", en: "Back to Shop" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
