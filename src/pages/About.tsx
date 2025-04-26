import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import { Award, Globe, Check } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title={t('aboutTitle')} 
              subtitle={t('aboutDescription')}
              light
            />
            
            <div className="space-y-6 text-gray-300">
              <p>
                With over 13 years of experience in the bartending industry, I bring expertise and passion to every event. From high-profile corporate gatherings at Google and Facebook to intimate weddings and private parties, I've crafted unforgettable experiences through exceptional service and creative mixology.
              </p>
              <p>
                My journey began at the San Jose Convention Center, where I honed my skills serving large crowds with efficiency and charisma. My time at Servers on Demand allowed me to work at prestigious venues throughout the Bay Area, adapting to diverse clientele and event styles.
              </p>
              <p>
                Today, I offer personalized bartending services that elevate any occasion. Whether you're planning a corporate event, wedding, or private celebration, I'll bring professionalism, creativity, and a passion for crafting the perfect cocktail experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: <Award size={24} />,
                    title: t('experience'),
                    description: t('yearsExperience')
                  },
                  {
                    icon: <Check size={24} />,
                    title: t('certification'),
                    description: t('professional')
                  },
                  {
                    icon: <Globe size={24} />,
                    title: t('bilingual'),
                    description: "English/Español"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="relative group h-[180px]"
                  >
                    <div className="relative h-full bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-xl p-6 transition-all duration-300 group-hover:border-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] flex flex-col items-center justify-center">
                      <div className="flex justify-center mb-4">
                        <div className="text-amber-500 bg-amber-500/10 p-3 rounded-lg">
                          {item.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white text-center mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 text-center">
                        {item.description}
                      </p>
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-500/10">
              <img 
                src="https://images.pexels.com/photos/8133357/pexels-photo-8133357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jesús bartending"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border-8 border-black">
              <img 
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cocktail preparation"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-1/2 aspect-square bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-center p-4">
              <div>
                <span className="block text-4xl font-bold text-white">13+</span>
                <span className="text-white font-medium">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;