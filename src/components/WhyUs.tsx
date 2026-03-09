import { Truck, BadgePercent, LeafyGreen, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const WhyUs = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: Award, title: t('qualityProducts'), description: t('qualityDesc'), color: 'bg-primary/10 text-primary' },
    { icon: Truck, title: t('fastDelivery'), description: t('deliveryDesc'), color: 'bg-primary/10 text-primary' },
    { icon: BadgePercent, title: t('bestPrices'), description: t('pricesDesc'), color: 'bg-primary/10 text-primary' },
    { icon: LeafyGreen, title: t('freshProducts'), description: t('freshDesc'), color: 'bg-primary/10 text-primary' },
  ];

  const countries = [
    'Thaïlande', 'Vietnam', 'Chine', 'Japon', 'Inde', 'Corée', 'Indonésie', 'Philippines',
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">{t('ourCommitment')}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('whyShopWithUs')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('whyUsSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground">
            {countries.map((name) => (
              <span key={name} className="text-sm font-medium">
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyUs;
