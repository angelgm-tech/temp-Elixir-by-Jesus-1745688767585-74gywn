import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold cursor-pointer group" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-amber-500">Elixir</span>
          <span className="text-white"> by Jesús</span>
          <div className="h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative text-sm uppercase tracking-wider hover:text-amber-500 transition-colors ${
                activeSection === section ? 'text-amber-500' : 'text-white'
              }`}
            >
              {t(section as any)}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                  activeSection === section ? 'w-full' : 'w-0'
                }`}
              ></div>
            </button>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-white hover:text-amber-500 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={18} className="mr-1" />
            <span className="text-xs font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {['home', 'services', 'portfolio', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`py-3 text-left text-sm uppercase tracking-wider hover:text-amber-500 transition-colors ${
                activeSection === section ? 'text-amber-500' : 'text-white'
              }`}
            >
              {t(section as any)}
            </button>
          ))}
          
          {/* Mobile Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center py-3 text-white hover:text-amber-500 transition-colors"
          >
            <Globe size={18} className="mr-2" />
            <span>{language === 'en' ? 'English' : 'Español'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;