import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Facebook, Twitter, Mail, Phone, ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-black to-black border-t border-amber-500/10 overflow-hidden">
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="light-beam" style={{ left: '0%', animationDelay: '0s' }}></div>
        <div className="light-beam" style={{ left: '20%', animationDelay: '1s' }}></div>
        <div className="light-beam" style={{ left: '40%', animationDelay: '2s' }}></div>
        <div className="light-beam" style={{ left: '60%', animationDelay: '3s' }}></div>
        <div className="light-beam" style={{ left: '80%', animationDelay: '4s' }}></div>
        <div className="light-beam" style={{ left: '100%', animationDelay: '5s' }}></div>
      </div>
      
      {/* Ambient glow effect */}
      <div className="glow-effect"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div 
              className="inline-block group cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="text-2xl font-display">
                <span className="text-amber-500">Elixir</span>
                <span className="text-white"> by Jesús</span>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting Unforgettable Experiences, One Cocktail at a Time
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Twitter size={20} />, label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-black/40 backdrop-blur-sm border border-amber-500/10 p-2.5 rounded-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['services', 'portfolio', 'about', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 block"
                  >
                    {t(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:tbabartender@gmail.com" 
                  className="flex items-center text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Mail size={16} className="mr-2 flex-shrink-0" />
                  <span>tbabartender@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14083001163" 
                  className="flex items-center text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Phone size={16} className="mr-2 flex-shrink-0" />
                  <span>(408) 300-1163</span>
                </a>
              </li>
              <li className="text-gray-400">
                <p>465 Stonefield Ct</p>
                <p>San Jose, CA 95136</p>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-display text-white mb-6">Hours</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 10:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-amber-500/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Elixir by Jesús. {t('copyright')}
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
              {t('termsOfService')}
            </a>
            <button
              onClick={scrollToTop}
              className="bg-black/40 backdrop-blur-sm border border-amber-500/10 p-2 rounded-lg text-gray-400 hover:text-amber-500 hover:border-amber-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;