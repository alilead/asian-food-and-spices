import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('messageSent'),
      description: t('messageSentDesc'),
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            {t('contactUs')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contactIntro')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-primary text-primary-foreground rounded-xl p-8 mb-8">
              <h2 className="font-display text-2xl font-bold mb-6">
                Asia Market Genève
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t('addressLabel')}
                    </h3>
                    <p className="text-primary-foreground/80">
                      Rue du Commerce 15<br />
                      1204 Genève, Suisse
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('email')}</h3>
                    <a 
                      href="mailto:info@asiamarket-geneve.ch"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      info@asiamarket-geneve.ch
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
<h3 className="font-semibold mb-1">
                    {t('phone')}
                    </h3>
                    <a 
                      href="tel:+41221234567"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      +41 22 123 45 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('openingHours')}</h3>
                    <div className="text-primary-foreground/80 space-y-1">
                      <p>{t('mondayFriday')}: 9:00 - 19:00</p>
                      <p>{t('saturday')}: 9:00 - 18:00</p>
                      <p>{t('sunday')}: {t('closed')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Google Maps</p>
                <p className="text-sm">Rue du Commerce 15, Genève</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold mb-6">
                {t('sendMessage')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">
                    {t('fullName')} *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">
                    {t('subject')} *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">{t('messageLabel')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1.5"
                  />
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {t('send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
