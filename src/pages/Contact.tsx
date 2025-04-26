import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { CalendarIcon, Clock, Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_zw11ttc',
        'template_i5h4y6f',
        {
          name: formState.name,
          email: formState.email,
          event_date: formState.eventDate,
          event_type: formState.eventType,
          message: formState.message,
          time: new Date().toLocaleString()
        },
        'Zvhe7IbN1R1WYKcls'
      );
      
      setFormState({
        name: '',
        email: '',
        eventDate: '',
        eventType: '',
        message: ''
      });
      
      alert('Thanks for your message! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title={t('contactTitle')} 
          subtitle={t('contactDescription')}
          center
          light
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-xl p-8 hover:border-amber-500/20 transition-colors duration-300">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      {t('name')}*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-gray-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      {t('email')}*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 text-white border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-gray-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-white mb-2">
                      {t('eventDate')}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formState.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 text-white border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-gray-500 transition-colors duration-300"
                      />
                      <CalendarIcon size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-white mb-2">
                      {t('eventType')}
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formState.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 text-white border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-gray-500 transition-colors duration-300"
                    >
                      <option value="" className="bg-gray-900">Select event type</option>
                      <option value="wedding" className="bg-gray-900">Wedding</option>
                      <option value="corporate" className="bg-gray-900">Corporate Event</option>
                      <option value="private" className="bg-gray-900">Private Party</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {t('message')}*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 text-white border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-gray-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : t('submit')}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
            {[
              {
                icon: <Mail size={24} />,
                title: 'Email',
                content: <a href="mailto:tbabartender@gmail.com" className="text-gray-300 hover:text-amber-500 transition-colors">tbabartender@gmail.com</a>
              },
              {
                icon: <Phone size={24} />,
                title: 'Phone',
                content: <a href="tel:+14083001163" className="text-gray-300 hover:text-amber-500 transition-colors">(408) 300-1163</a>
              },
              {
                icon: <MapPin size={24} />,
                title: 'Location',
                content: <p className="text-gray-300">San Jose, CA 95136</p>
              },
              {
                icon: <Clock size={24} />,
                title: 'Availability',
                content: <p className="text-gray-300">Monday - Sunday<br />9:00 AM - 9:00 PM</p>
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 p-4 rounded-xl mr-6 group-hover:border-amber-500/20 transition-all duration-300">
                  <div className="text-amber-500">{item.icon}</div>
                </div>
                <div>
                  <h4 className="font-display text-xl text-white mb-2">{item.title}</h4>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;