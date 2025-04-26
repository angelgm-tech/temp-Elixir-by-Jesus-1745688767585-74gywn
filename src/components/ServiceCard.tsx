import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './Button';
import { type Service } from '../data/services';
import { Check, X } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className="relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 group h-full flex flex-col">
        {/* Glow effect container */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          {/* Light beams */}
          <div className="light-beam" style={{ left: '20%', animationDelay: '0s' }}></div>
          <div className="light-beam" style={{ left: '60%', animationDelay: '0.5s' }}></div>
        </div>

        <div className="h-64 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"
            style={{ mixBlendMode: 'multiply' }}
          ></div>
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <div className="flex items-baseline gap-2">
              <p className="text-amber-500 font-display text-2xl font-medium group-hover:text-amber-400 transition-colors duration-300">{service.price}</p>
              <p className="text-gray-400 text-sm">{service.duration}</p>
            </div>
          </div>
        </div>
        
        <div className="relative p-6 flex-1 flex flex-col bg-black/40 before:absolute before:inset-0 before:bg-black/40 before:-z-10">
          <div className="mb-6">
            <h3 className="font-display text-2xl text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
              {t(`${service.id}Title` as any)}
            </h3>
            <p className="text-gray-400">
              {t(`${service.id}Description` as any)}
            </p>
          </div>
          
          <ul className="space-y-3 mb-6">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <Check size={16} className="text-amber-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full font-medium tracking-wide group-hover:border-amber-500/50 transition-colors duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 glass-effect max-w-4xl w-full rounded-xl overflow-hidden relative animate-fadeIn">
            <button 
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="h-80">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>
            
            <div className="p-8 relative">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-3xl text-white mb-2">{t(`${service.id}Title` as any)}</h3>
                  <p className="text-gray-400 text-lg">{t(`${service.id}Description` as any)}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-display text-amber-500">{service.price}</p>
                  <p className="text-gray-400">{service.duration}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-display text-xl mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <Check size={16} className="text-amber-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-display text-xl mb-4">Book Now</h4>
                  <p className="text-gray-400 mb-6">
                    Ready to elevate your event? Contact us to check availability and discuss your specific needs.
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;