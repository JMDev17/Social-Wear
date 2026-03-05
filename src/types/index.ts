export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'terno' | 'camisa' | 'calcas' | 'colete' | 'acessorios';
  sizes: string[];
  colors: string[];
  description: string;
  featured?: boolean;
  new?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
}
