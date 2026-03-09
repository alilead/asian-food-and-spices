import { Link } from 'react-router-dom';
import { Fish, Beef, Wheat, Package, Leaf, Snowflake, LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

const categoryIcons: Record<string, LucideIcon> = {
  seafood: Fish,
  butcher: Beef,
  rice: Wheat,
  pantry: Package,
  produce: Leaf,
  frozen: Snowflake,
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { language, t } = useLanguage();
  const Icon = categoryIcons[category.id] ?? Package;

  return (
    <Link to={`/shop?category=${encodeURIComponent(category.name)}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-border overflow-hidden">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="h-6 w-6" />
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
