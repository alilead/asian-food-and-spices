import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, X } from 'lucide-react';

const Shop = () => {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  
  const selectedCategory = searchParams.get('category') || '';
  
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = search === '' || 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.nameFr.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
        product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);
  
  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === selectedCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryName);
    }
    setSearchParams(searchParams);
  };
  
  const clearFilters = () => {
    setSearch('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {t('allProducts')}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {t('products')}
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('searchProducts')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => clearFilters()}
              className="rounded-full"
            >
              {t('allCategories')}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryClick(category.name)}
                className="rounded-full"
              >
                {language === 'fr' ? category.nameFr : category.name}
              </Button>
            ))}
          </div>
          
          {/* Active Filters */}
          {(search || selectedCategory) && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{t('activeFilters')}</span>
              {search && (
                <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-sm">
                  "{search}"
                  <button onClick={() => setSearch('')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                  {language === 'fr' 
                    ? categories.find(c => c.name === selectedCategory)?.nameFr 
                    : selectedCategory}
                  <button onClick={() => handleCategoryClick(selectedCategory)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button 
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                {t('clearAll')}
              </button>
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              {t('noProductsFound')}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t('viewAllProducts')}
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
