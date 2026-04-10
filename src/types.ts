export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  duration: string;
  category: 'facial' | 'body' | 'advanced';
}

export interface Appointment {
  id: string;
  customerId: string;
  customerName: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  firstVisit: boolean;
}

export const SPA_SERVICES: Service[] = [
  {
    id: 'bunny-glow',
    name: 'Bunny Glow Facial',
    price: 75,
    description: 'A gentle, brightening facial that leaves your skin soft, dewy, and radiant.',
    features: ['Deep pore cleanse', 'Brightening enzyme mask', 'Hydrating serum & SPF finish'],
    duration: '50 min',
    category: 'facial',
  },
  {
    id: 'spring-renewal',
    name: 'Spring Renewal Facial',
    price: 95,
    description: 'Revive dull, tired skin with our signature brightening boost treatment.',
    features: ['Vitamin C brightening complex', 'Light chemical exfoliation', 'Collagen-boosting massage'],
    duration: '60 min',
    category: 'facial',
  },
  {
    id: 'rose-gold',
    name: 'Rose & Gold Glow Facial',
    price: 115,
    description: 'Our most luxurious classic facial — pure radiance from start to finish.',
    features: ['24K gold & rose extract mask', 'Lymphatic drainage massage', 'LED light therapy'],
    duration: '75 min',
    category: 'facial',
  },
  {
    id: 'deluxe-hydro',
    name: 'Deluxe Hydrofacial',
    price: 160,
    description: 'The ultimate all-in-one treatment for instant glass skin and long-lasting glow.',
    features: ['HydraFacial vortex cleanse', 'Peptide infusion & brightening boosters', 'Red LED + cooling mask'],
    duration: '90 min',
    category: 'facial',
  },
  {
    id: 'hydro-glow',
    name: 'Hydrofacial Glow',
    price: 130,
    description: 'Achieve instant glass skin with a deep cleanse, exfoliation, and intense hydration.',
    features: ['Vortex exfoliation & extraction', 'Antioxidant serum infusion', 'Instant visible results'],
    duration: '75 min',
    category: 'advanced',
  },
  {
    id: 'microneedling',
    name: 'Microneedling Facial',
    price: 180,
    description: 'Stimulate collagen production to visibly reduce acne scars and fine lines.',
    features: ['Collagen induction therapy', 'Targeted acne scar & fine line treatment', 'Calming hyaluronic serum finish'],
    duration: '75 min',
    category: 'advanced',
  },
  {
    id: 'acne-clear',
    name: 'Acne Clear Facial',
    price: 120,
    description: 'Targeted breakout control with professional extractions and calming technology.',
    features: ['Deep pore extraction', 'Blue light & LED therapy', 'Anti-inflammatory calming mask'],
    duration: '60 min',
    category: 'advanced',
  },
  {
    id: 'cavitation',
    name: 'Ultrasonic Cavitation',
    price: 85,
    description: 'Non-invasive treatment that targets stubborn fat and helps reduce inches.',
    features: ['Ultrasonic fat-cell disruption', 'Targeted body contouring', 'Inch reduction results'],
    duration: '45 min',
    category: 'body',
  },
  {
    id: 'cavitation-rf',
    name: 'Cavitation + Radio Frequency',
    price: 110,
    description: 'Combines fat reduction and skin tightening for a firmer, more sculpted look.',
    features: ['Cavitation fat reduction', 'RF skin tightening & firming', 'Enhanced body contour'],
    duration: '60 min',
    category: 'body',
  },
  {
    id: 'cavitation-deluxe',
    name: 'Cavitation Deluxe Sculpt',
    price: 135,
    description: 'Our comprehensive sculpting session for maximum contouring and skin rejuvenation.',
    features: ['Ultrasonic cavitation', 'Radio frequency lift', 'Lymphatic drainage massage'],
    duration: '75 min',
    category: 'body',
  },
];
