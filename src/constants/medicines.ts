
import type { MarketplaceMedicine } from '@/lib/types';

export const marketplaceMedicines: MarketplaceMedicine[] = [
  {
    id: 'med1',
    name: 'Valparen',
    description: 'Used for managing certain types of seizures and neurological conditions.',
    price: '₹1850.50', // Updated price
    imageUrl: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-069374/valparin-500-tablet-15_valparin-500-tablet-15--TM-TACR1-069374_1.png?width=320',
    imageAiHint: 'prescription medication',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med2',
    name: 'Cloba',
    description: 'Prescribed to help control seizures, often as adjunctive therapy.',
    price: '₹2450.75', // Updated price
    imageUrl: 'https://images.apollo247.in/pub/media/catalog/product/c/l/clo0001.jpg?tr=w-264,q-80,f-webp,dpr-false,c-at_max',
    imageAiHint: 'neurology pills',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med3',
    name: 'Zonigran',
    description: 'An anticonvulsant medication used in the treatment of epilepsy.',
    price: '₹2100.00', // Updated price
    imageUrl: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-045350/zonegran-tablet-10_zonegran-tablet-10--TM-TACR1-045350_1.png?width=320',
    imageAiHint: 'epilepsy treatment',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med4',
    name: 'Attera',
    description: 'May be used to treat symptoms of attention-deficit/hyperactivity disorder (ADHD).',
    price: '₹3200.00', // Updated price
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'adhd medication',
    category: 'CNS Stimulants',
  },
  {
    id: 'med5',
    name: 'Rize2',
    description: 'A medication sometimes used in managing sleep disorders or anxiety.',
    price: '₹1600.50', // Updated price
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'sleep aid',
    category: 'Sedatives/Anxiolytics',
  },
];
