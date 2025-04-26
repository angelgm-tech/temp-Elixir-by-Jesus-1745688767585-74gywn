export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'event' | 'cocktail';
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Corporate Mixer at Google',
    description: 'Custom branded cocktails for a tech industry gathering',
    image: 'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'event'
  },
  {
    id: 2,
    title: 'Signature Old Fashioned',
    description: 'A modern twist on a classic cocktail featuring smoked bourbon',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cocktail'
  },
  {
    id: 3,
    title: 'Wedding Reception in Napa',
    description: 'Elegant service with custom bride and groom signature drinks',
    image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'event'
  },
  {
    id: 4,
    title: 'Spicy Mezcal Margarita',
    description: 'Smoky mezcal with fresh lime and jalapeño',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cocktail'
  },
  {
    id: 5,
    title: 'Tech Startup Launch Party',
    description: 'High-volume service with innovative cocktails',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'event'
  },
  {
    id: 6,
    title: 'Berry Gin Fizz',
    description: 'Fresh seasonal berries with artisanal gin and egg white foam',
    image: 'https://images.pexels.com/photos/4021977/pexels-photo-4021977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cocktail'
  }
];