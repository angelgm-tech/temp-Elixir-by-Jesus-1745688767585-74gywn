import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  
  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="bg-[url('https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div 
          className="max-w-3xl mx-auto text-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <span className="inline-block text-amber-500 text-lg mb-3 tracking-wider">{t('heroSubtitle')}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle')}
            <span className="block text-amber-500">Elixir by Jesús</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('bookNow')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={scrollToServices}>
        <ChevronDown size={32} className="text-amber-500" />
      </div>
    </section>
  );
};

export default Home;