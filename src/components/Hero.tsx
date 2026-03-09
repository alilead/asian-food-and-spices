import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                {t('sinceGeneva')}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1]">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="text-base md:text-lg px-8 py-6 gap-2 group shadow-lg">
                <Link to="/shop">
                  {t('shopNow')}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base md:text-lg px-8 py-6 bg-card/80 border-border">
                <Link to="/contact">
                  {t('visitUs')}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-display">200+</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {t('authenticProducts')}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-display">8</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {t('countriesOfOrigin')}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-display">9</p>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {t('yearsOfExpertise')}
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
