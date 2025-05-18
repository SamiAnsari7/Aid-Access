
import type { MarketplaceMedicine } from '@/lib/types';

export const marketplaceMedicines: MarketplaceMedicine[] = [
  {
    id: 'med1',
    name: 'Valparen',
    description: 'Used for managing certain types of seizures and neurological conditions.',
    price: '$25.50',
    imageUrl: 'https://assets.truemeds.in/Images/ProductImage/TM-TACR1-069374/valparin-500-tablet-15_valparin-500-tablet-15--TM-TACR1-069374_1.png?width=320',
    imageAiHint: 'prescription medication',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med2',
    name: 'Cloba',
    description: 'Prescribed to help control seizures, often as adjunctive therapy.',
    price: '$32.75',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'neurology pills',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med3',
    name: 'Zonigran',
    description: 'An anticonvulsant medication used in the treatment of epilepsy.',
    price: '$28.99',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'epilepsy treatment',
    category: 'Anti-Epileptics',
  },
  {
    id: 'med4',
    name: 'Attera',
    description: 'May be used to treat symptoms of attention-deficit/hyperactivity disorder (ADHD).',
    price: '$45.00',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'adhd medication',
    category: 'CNS Stimulants',
  },
  {
    id: 'med5',
    name: 'Rize2',
    description: 'A medication sometimes used in managing sleep disorders or anxiety.',
    price: '$22.15',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'sleep aid',
    category: 'Sedatives/Anxiolytics',
  },
];
