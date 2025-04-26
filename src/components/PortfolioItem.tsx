import React, { useState } from 'react';
import { type PortfolioItem as PortfolioItemType } from '../data/portfolio';
import { X } from 'lucide-react';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div 
        className="rounded-xl overflow-hidden cursor-pointer group relative h-72 border border-amber-500/10 hover:border-amber-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]"
        onClick={() => setIsOpen(true)}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
          <h3 className="font-display text-xl text-white group-hover:text-amber-500 transition-colors duration-300">{item.title}</h3>
          <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm rounded-lg mt-2 font-medium">
            {item.category === 'event' ? 'Event' : 'Cocktail'}
          </span>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 glass-effect max-w-3xl w-full rounded-xl overflow-hidden relative animate-fadeIn">
            <button 
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="h-96">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-white">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm rounded-lg font-medium">
                  {item.category === 'event' ? 'Event' : 'Cocktail'}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;