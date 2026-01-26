import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: language === 'fr' ? 'Inscription réussie!' : 'Successfully subscribed!',
        description: language === 'fr' 
          ? 'Merci de vous être inscrit à notre newsletter.'
          : 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t('newsletter')}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {t('newsletterText')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground"
              required
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="gap-2 shrink-0"
            >
              {t('subscribe')}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
