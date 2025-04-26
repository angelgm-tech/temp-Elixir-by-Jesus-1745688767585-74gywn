import React, { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Update title
    document.title = 'Elixir by Jesús | Professional Bartending Services';
    
    // Listen for scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <Navbar activeSection={activeSection} />
          <main>
            <Home />
            <Services />
            <Portfolio />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;