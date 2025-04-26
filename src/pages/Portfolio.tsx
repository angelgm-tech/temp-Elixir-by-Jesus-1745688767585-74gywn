import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';
import { portfolioItems } from '../data/portfolio';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'event' | 'cocktail'>('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
  
  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
      {/* Ambient light effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title={t('portfolioTitle')} 
          subtitle={t('portfolioDescription')}
          center
          light
        />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-black/40 backdrop-blur-sm rounded-xl p-1 border border-white/5">
            {[
              { id: 'all', label: 'All' },
              { id: 'event', label: 'Events' },
              { id: 'cocktail', label: 'Cocktails' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as typeof filter)}
                className={`
                  relative px-6 py-2.5 rounded-lg font-medium transition-all duration-300
                  ${filter === item.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                {item.label}
                <div 
                  className={`
                    absolute inset-0 rounded-lg transition-all duration-300
                    ${filter === item.id 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 opacity-100' 
                      : 'opacity-0 hover:bg-white/5'
                    }
                    -z-10
                  `}
                ></div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;