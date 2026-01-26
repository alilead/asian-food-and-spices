export interface Product {
  id: string;
  name: string;
  nameFr: string;
  unit: string;
  price: number;
  category: string;
  categoryFr: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  nameFr: string;
  icon: string;
  count: number;
}

export const products: Product[] = [
  // Beverages & Tea
  { id: "1", name: "Elephant Necto 12 x 500 ml", nameFr: "Elephant Necto 12 x 500 ml", unit: "1 x 6L", price: 14.9, category: "Beverages & Tea", categoryFr: "Boissons & Thé", image: "/placeholder.svg" },
  { id: "2", name: "Elephant Necto 8 x 1.5 L", nameFr: "Elephant Necto 8 x 1.5 L", unit: "1 x 12L", price: 20.9, category: "Beverages & Tea", categoryFr: "Boissons & Thé", image: "/placeholder.svg" },
  { id: "3", name: "Horlicks 6 x 400 g", nameFr: "Horlicks 6 x 400 g", unit: "1 x 2.4kg", price: 35.9, category: "Beverages & Tea", categoryFr: "Boissons & Thé", image: "/placeholder.svg" },
  { id: "4", name: "PG Tips Tea Bags 12 x 40 pcs", nameFr: "Sachets de Thé PG Tips 12 x 40 pcs", unit: "1 x 480 bags", price: 26.9, category: "Beverages & Tea", categoryFr: "Boissons & Thé", image: "/placeholder.svg" },
  { id: "5", name: "PG Tips Tea Bags 12 x 80 pcs", nameFr: "Sachets de Thé PG Tips 12 x 80 pcs", unit: "1 x 960 bags", price: 39.9, category: "Beverages & Tea", categoryFr: "Boissons & Thé", image: "/placeholder.svg" },
  
  // Coconut Products
  { id: "6", name: "Aroy-D Coconut Milk UHT 12 x 1 L", nameFr: "Lait de Coco UHT Aroy-D 12 x 1 L", unit: "3 x 12L", price: 41.3, category: "Coconut Products", categoryFr: "Produits de Noix de Coco", image: "/placeholder.svg" },
  { id: "7", name: "Maggi Coconut Milk Powder 12 x 1 kg", nameFr: "Lait de Coco en Poudre Maggi 12 x 1 kg", unit: "3 x 12kg", price: 154.8, category: "Coconut Products", categoryFr: "Produits de Noix de Coco", image: "/placeholder.svg" },
  { id: "8", name: "TRS Desiccated Coconut Fine 6 x 1 kg", nameFr: "Noix de Coco Râpée Fine TRS 6 x 1 kg", unit: "1 x 6kg", price: 35.5, category: "Coconut Products", categoryFr: "Produits de Noix de Coco", image: "/placeholder.svg" },
  { id: "9", name: "TRS Desiccated Coconut Medium 6 x 1 kg", nameFr: "Noix de Coco Râpée Moyenne TRS 6 x 1 kg", unit: "1 x 6kg", price: 41.9, category: "Coconut Products", categoryFr: "Produits de Noix de Coco", image: "/placeholder.svg" },
  
  // Dried Fish & Seafood
  { id: "10", name: "SME Dried Queen Fish 25 x 200 g", nameFr: "Poisson Queen Séché SME 25 x 200 g", unit: "1 x 5kg", price: 124.9, category: "Dried Fish & Seafood", categoryFr: "Poissons & Fruits de Mer Séchés", image: "/placeholder.svg" },
  { id: "11", name: "SME Dried Smoked Pangash Steak 25 x 200g", nameFr: "Steak de Pangash Fumé Séché SME 25 x 200g", unit: "1 x 5kg", price: 120.9, category: "Dried Fish & Seafood", categoryFr: "Poissons & Fruits de Mer Séchés", image: "/placeholder.svg" },
  
  // Ethnic Vegetables
  { id: "12", name: "Asia Choi-Sum", nameFr: "Choi-Sum d'Asie", unit: "5.5 Kg", price: 3.6, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  { id: "13", name: "Asia Kai-Lan", nameFr: "Kai-Lan d'Asie", unit: "6 Kg", price: 4.9, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  { id: "14", name: "Asia Pak-Choi Shanghai", nameFr: "Pak-Choi Shanghai d'Asie", unit: "5.1 Kg", price: 2.8, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  { id: "15", name: "Bitter Melon", nameFr: "Melon Amer", unit: "5 Kg", price: 7.5, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  { id: "16", name: "Fresh Ginger Organic", nameFr: "Gingembre Frais Bio", unit: "13.6 Kg", price: 3.9, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  { id: "17", name: "Okra Chinese Luffa", nameFr: "Okra Luffa Chinois", unit: "6.5 Kg", price: 5.9, category: "Ethnic Vegetables", categoryFr: "Légumes Ethniques", image: "/placeholder.svg" },
  
  // Fresh Herbs
  { id: "18", name: "Lemongrass 12x100g", nameFr: "Citronnelle 12x100g", unit: "1 Colis", price: 14.5, category: "Fresh Herbs", categoryFr: "Herbes Fraîches", image: "/placeholder.svg" },
  { id: "19", name: "Fresh Coriander x20", nameFr: "Coriandre Fraîche x20", unit: "1 Colis", price: 23.5, category: "Fresh Herbs", categoryFr: "Herbes Fraîches", image: "/placeholder.svg" },
  { id: "20", name: "Curry Leaves 10x40g", nameFr: "Feuilles de Curry 10x40g", unit: "2 Colis", price: 22.0, category: "Fresh Herbs", categoryFr: "Herbes Fraîches", image: "/placeholder.svg" },
  { id: "21", name: "Fresh Mint x20", nameFr: "Menthe Fraîche x20", unit: "1 Colis", price: 23.5, category: "Fresh Herbs", categoryFr: "Herbes Fraîches", image: "/placeholder.svg" },
  
  // Instant Noodles
  { id: "22", name: "Mama Instant Noodle Chicken 30 x 55 g", nameFr: "Nouilles Instantanées Mama Poulet 30 x 55 g", unit: "1 x 1.65kg", price: 10.9, category: "Instant Noodles", categoryFr: "Nouilles Instantanées", image: "/placeholder.svg" },
  { id: "23", name: "Mama Instant Noodle Duck 30 x 55 g", nameFr: "Nouilles Instantanées Mama Canard 30 x 55 g", unit: "1 x 1.65kg", price: 10.3, category: "Instant Noodles", categoryFr: "Nouilles Instantanées", image: "/placeholder.svg" },
  { id: "24", name: "Mama Instant Tom Yum Shrimp 30 x 60 g", nameFr: "Nouilles Mama Tom Yum Crevettes 30 x 60 g", unit: "1 x 1.8kg", price: 10.9, category: "Instant Noodles", categoryFr: "Nouilles Instantanées", image: "/placeholder.svg" },
  { id: "25", name: "Mama Instant Noodle Vegetable 30 x 60 g", nameFr: "Nouilles Instantanées Mama Légumes 30 x 60 g", unit: "1 x 1.8kg", price: 11.9, category: "Instant Noodles", categoryFr: "Nouilles Instantanées", image: "/placeholder.svg" },
  
  // Rice & Grains
  { id: "26", name: "Kings Extra Long Basmati Rice 4 x 5kg", nameFr: "Riz Basmati Extra Long Kings 4 x 5kg", unit: "2 x 20kg", price: 49.9, category: "Rice & Grains", categoryFr: "Riz & Céréales", image: "/placeholder.svg" },
  { id: "27", name: "Kings Keeri Samba Rice 4 x 5kg", nameFr: "Riz Keeri Samba Kings 4 x 5kg", unit: "2 x 20kg", price: 45.9, category: "Rice & Grains", categoryFr: "Riz & Céréales", image: "/placeholder.svg" },
  { id: "28", name: "Kings Red Raw Rice 4 x 5kg", nameFr: "Riz Rouge Cru Kings 4 x 5kg", unit: "1 x 20kg", price: 35.9, category: "Rice & Grains", categoryFr: "Riz & Céréales", image: "/placeholder.svg" },
  { id: "29", name: "Leela Par Boiled Rice 5 x 5 kg", nameFr: "Riz Étuvé Leela 5 x 5 kg", unit: "2 x 25kg", price: 51.9, category: "Rice & Grains", categoryFr: "Riz & Céréales", image: "/placeholder.svg" },
  { id: "30", name: "Kings Suduru Samba 4 x 5 kg", nameFr: "Riz Suduru Samba Kings 4 x 5 kg", unit: "2 x 20kg", price: 65.9, category: "Rice & Grains", categoryFr: "Riz & Céréales", image: "/placeholder.svg" },
  
  // Pulses & Lentils
  { id: "31", name: "TRS Red Lentils 10 x 1 kg", nameFr: "Lentilles Rouges TRS 10 x 1 kg", unit: "1 x 10kg", price: 25.9, category: "Pulses & Lentils", categoryFr: "Légumineuses & Lentilles", image: "/placeholder.svg" },
  { id: "32", name: "TRS Chick Peas 6 x 2 kg", nameFr: "Pois Chiches TRS 6 x 2 kg", unit: "1 x 12kg", price: 32.9, category: "Pulses & Lentils", categoryFr: "Légumineuses & Lentilles", image: "/placeholder.svg" },
  { id: "33", name: "TRS Moong Dal 8 x 500 g", nameFr: "Moong Dal TRS 8 x 500 g", unit: "3 x 4kg", price: 12.9, category: "Pulses & Lentils", categoryFr: "Légumineuses & Lentilles", image: "/placeholder.svg" },
  { id: "34", name: "TRS Urid Dal 6 x 2 kg", nameFr: "Urid Dal TRS 6 x 2 kg", unit: "1 x 12kg", price: 35.9, category: "Pulses & Lentils", categoryFr: "Légumineuses & Lentilles", image: "/placeholder.svg" },
  
  // Spices & Seasonings
  { id: "35", name: "Kings Jaffna Curry Powder 24 x 900 g", nameFr: "Poudre de Curry Jaffna Kings 24 x 900 g", unit: "1 x 21.6kg", price: 189.6, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "36", name: "TRS Black Pepper Whole 10 x 400 g", nameFr: "Poivre Noir Entier TRS 10 x 400 g", unit: "3 x 4kg", price: 49.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "37", name: "TRS Garam Masala Powder 20 x 100 g", nameFr: "Poudre de Garam Masala TRS 20 x 100 g", unit: "1 x 2kg", price: 22.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "38", name: "TRS Turmeric Powder 10 x 400 g", nameFr: "Poudre de Curcuma TRS 10 x 400 g", unit: "5 x 4kg", price: 20.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "39", name: "TRS Cumin Whole 10 x 400 g", nameFr: "Cumin Entier TRS 10 x 400 g", unit: "1 x 4kg", price: 48.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "40", name: "TRS Fennel Seeds 10 x 400 g", nameFr: "Graines de Fenouil TRS 10 x 400 g", unit: "3 x 4kg", price: 39.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  { id: "41", name: "TRS Kashmiri Chilli Powder 20 x 100 g", nameFr: "Poudre de Piment Kashmiri TRS 20 x 100 g", unit: "1 x 2kg", price: 37.9, category: "Spices & Seasonings", categoryFr: "Épices & Assaisonnements", image: "/placeholder.svg" },
  
  // Sauces & Condiments
  { id: "42", name: "Mae Krua Oyster Sauce 12 x 600 ml", nameFr: "Sauce Huître Mae Krua 12 x 600 ml", unit: "1 x 7.2L", price: 35.9, category: "Sauces & Condiments", categoryFr: "Sauces & Condiments", image: "/placeholder.svg" },
  { id: "43", name: "Pearl River Soy Sauce Dark 12 x 600 ml", nameFr: "Sauce Soja Foncée Pearl River 12 x 600 ml", unit: "1 x 7.2L", price: 33.9, category: "Sauces & Condiments", categoryFr: "Sauces & Condiments", image: "/placeholder.svg" },
  { id: "44", name: "Dragon Tamarind 36 x 400 g", nameFr: "Tamarin Dragon 36 x 400 g", unit: "1 x 14.4kg", price: 79.9, category: "Sauces & Condiments", categoryFr: "Sauces & Condiments", image: "/placeholder.svg" },
  
  // Snacks & Crackers
  { id: "45", name: "Maliban Chocolate Cream 12 x 500 g", nameFr: "Crème au Chocolat Maliban 12 x 500 g", unit: "1 x 6kg", price: 24.9, category: "Snacks & Crackers", categoryFr: "Snacks & Crackers", image: "/placeholder.svg" },
  { id: "46", name: "TRS Papadam Plain 60 x 200 g", nameFr: "Papadam Nature TRS 60 x 200 g", unit: "1 x 12kg", price: 89.9, category: "Snacks & Crackers", categoryFr: "Snacks & Crackers", image: "/placeholder.svg" },
  { id: "47", name: "TRS Popcorn 8 x 500 g", nameFr: "Popcorn TRS 8 x 500 g", unit: "3 x 4kg", price: 9.9, category: "Snacks & Crackers", categoryFr: "Snacks & Crackers", image: "/placeholder.svg" },
  
  // Flour & Baking
  { id: "48", name: "Aashirvaad Atta Flour 10 x 2 kg", nameFr: "Farine Atta Aashirvaad 10 x 2 kg", unit: "1 x 20kg", price: 49.9, category: "Flour & Baking", categoryFr: "Farine & Pâtisserie", image: "/placeholder.svg" },
  { id: "49", name: "TRS Gram Flour Fine 12 x 1 kg", nameFr: "Farine de Pois Chiche Fine TRS 12 x 1 kg", unit: "2 x 12kg", price: 29.9, category: "Flour & Baking", categoryFr: "Farine & Pâtisserie", image: "/placeholder.svg" },
  
  // Oils & Fats
  { id: "50", name: "Parachute Coconut Oil 500 ml", nameFr: "Huile de Coco Parachute 500 ml", unit: "12 x 500ml", price: 6.9, category: "Oils & Fats", categoryFr: "Huiles & Graisses", image: "/placeholder.svg" },
  { id: "51", name: "Subash Sesame Oil 15 x 750 ml", nameFr: "Huile de Sésame Subash 15 x 750 ml", unit: "3 x 11.25L", price: 97.5, category: "Oils & Fats", categoryFr: "Huiles & Graisses", image: "/placeholder.svg" },
];

export const categories: Category[] = [
  { id: "beverages", name: "Beverages & Tea", nameFr: "Boissons & Thé", icon: "☕", count: 5 },
  { id: "coconut", name: "Coconut Products", nameFr: "Produits de Noix de Coco", icon: "🥥", count: 4 },
  { id: "vegetables", name: "Ethnic Vegetables", nameFr: "Légumes Ethniques", icon: "🥬", count: 6 },
  { id: "herbs", name: "Fresh Herbs", nameFr: "Herbes Fraîches", icon: "🌿", count: 4 },
  { id: "noodles", name: "Instant Noodles", nameFr: "Nouilles Instantanées", icon: "🍜", count: 4 },
  { id: "rice", name: "Rice & Grains", nameFr: "Riz & Céréales", icon: "🍚", count: 5 },
  { id: "pulses", name: "Pulses & Lentils", nameFr: "Légumineuses & Lentilles", icon: "🫘", count: 4 },
  { id: "spices", name: "Spices & Seasonings", nameFr: "Épices & Assaisonnements", icon: "🌶️", count: 7 },
  { id: "sauces", name: "Sauces & Condiments", nameFr: "Sauces & Condiments", icon: "🫙", count: 3 },
  { id: "snacks", name: "Snacks & Crackers", nameFr: "Snacks & Crackers", icon: "🍪", count: 3 },
  { id: "flour", name: "Flour & Baking", nameFr: "Farine & Pâtisserie", icon: "🌾", count: 2 },
  { id: "oils", name: "Oils & Fats", nameFr: "Huiles & Graisses", icon: "🫒", count: 2 },
];
