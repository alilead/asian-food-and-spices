import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { language, t } = useLanguage();
  
  return (
    <Link to={`/shop?category=${encodeURIComponent(category.name)}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {language === 'fr' ? category.nameFr : category.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {category.count} {t('products')}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
