export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'wedding',
    title: 'Signature Wedding Experience',
    description: 'Custom cocktail menu, full bar setup, professional service',
    price: '$400',
    duration: '4 hours',
    features: [
      'Custom cocktail menu tailored to your preferences',
      'Full bar setup and breakdown',
      'Professional service throughout your special day',
      'Assistance with alcohol ordering and quantities',
      'Non-alcoholic beverage station',
      'Premium glassware options'
    ],
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'corporate',
    title: 'Corporate Mixology',
    description: 'Branded drinks, high-volume service, tailored to corporate needs',
    price: '$500',
    duration: '3 hours + $50/hr',
    features: [
      'Branded cocktails featuring company colors/theme',
      'High-volume service capability',
      'Multiple bartenders available',
      'Corporate-appropriate presentation',
      'Non-alcoholic options',
      'Experience with prestigious venues'
    ],
    image: 'https://images.pexels.com/photos/4344250/pexels-photo-4344250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'private',
    title: 'Intimate Party Bar',
    description: 'Mobile bar, signature cocktails, intimate event focus',
    price: '$250',
    duration: '2 hours + $50/hr',
    features: [
      'Mobile bar setup for easy transport',
      'Signature cocktails tailored to theme',
      'Themed cocktail options',
      'Non-alcoholic beverage options',
      'Shopping list assistance',
      'Pre-batched cocktail options'
    ],
    image: 'https://images.pexels.com/photos/3023317/pexels-photo-3023317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];