import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import WhyUs from '@/components/WhyUs';
import Newsletter from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  
  const featuredProducts = products.slice(0, 8);
  const displayCategories = categories.slice(0, 6);
  
  return (
    <Layout>
      {/* Hero */}
      <Hero />
      
      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              {t('featuredCategories')}
            </h2>
            <p className="text-muted-foreground">
              {t('exploreCategories')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {displayCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/shop">
                {t('viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Us */}
      <WhyUs />
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              {t('featuredProducts')}
            </h2>
            <p className="text-muted-foreground">
              {t('bestSellers')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="gap-2">
              <Link to="/shop">
                {t('viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
