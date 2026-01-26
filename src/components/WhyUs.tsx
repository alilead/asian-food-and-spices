import { Truck, Star, BadgePercent, LeafyGreen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Star,
      title: t('qualityProducts'),
      description: t('qualityDesc'),
    },
    {
      icon: Truck,
      title: t('fastDelivery'),
      description: t('deliveryDesc'),
    },
    {
      icon: BadgePercent,
      title: t('bestPrices'),
      description: t('pricesDesc'),
    },
    {
      icon: LeafyGreen,
      title: 'Produits Frais',
      description: 'Légumes et herbes frais chaque semaine',
    },
  ];
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {t('whyShopWithUs')}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Votre destination pour les meilleurs ingrédients asiatiques authentiques
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
