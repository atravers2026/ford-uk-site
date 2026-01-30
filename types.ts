export interface Vehicle {
  id: string;
  name: string;
  tagline?: string;
  image: string;
  type: 'Electric' | 'Hybrid' | 'Petrol' | 'Diesel';
  tags: string[];
  price?: string;
  monthlyPrice?: string;
}

export interface NavItem {
  label: string;
  href: string;
}