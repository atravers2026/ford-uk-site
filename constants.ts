import { Vehicle } from './types';

export const NAV_ITEMS: string[] = [
  "Vehicles",
  "Finance & Promotions",
  "Going Electric",
  "Technology",
  "Owners",
  "Business",
  "Support"
];

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: 'kuga',
    name: "Kuga",
    tagline: "Win a Kuga Plug-In Hybrid Competition",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    type: "Hybrid",
    tags: ["Hybrid-PHEV", "Hybrid-FHEV", "Hybrid-MHEV"]
  },
  {
    id: 'puma-gen-e',
    name: "Puma Gen-E",
    tagline: "New All-Electric",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
    type: "Electric",
    tags: ["Electric"]
  },
  {
    id: 'puma',
    name: "Puma",
    tagline: "Mild Hybrid Efficiency",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
    type: "Hybrid",
    tags: ["Hybrid-MHEV"]
  },
  {
    id: 'mustang-mach-e',
    name: "Mustang Mach-E",
    tagline: "All-Electric SUV",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
    type: "Electric",
    tags: ["Electric"]
  }
];