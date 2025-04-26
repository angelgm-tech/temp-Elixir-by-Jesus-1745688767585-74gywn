import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title={t('servicesTitle')} 
          subtitle={t('servicesDescription')}
          center
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;