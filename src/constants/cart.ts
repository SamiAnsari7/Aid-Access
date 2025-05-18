
import type { CartItem } from '@/lib/types';

export const mockCartItems: CartItem[] = [
  {
    id: 'med1',
    name: 'Paracetamol 500mg',
    description: 'Effective relief from pain and fever.',
    price: '$5.99',
    imageUrl: 'https://picsum.photos/seed/cartmed1/100/100', // Using a different seed for cart
    imageAiHint: 'pain relief pills',
    category: 'Pain Relief',
    quantity: 2,
  },
  {
    id: 'med3',
    name: 'Vitamin C 1000mg Effervescent',
    description: 'Boosts immunity and supports overall health.',
    price: '$12.99',
    imageUrl: 'https://picsum.photos/seed/cartmed3/100/100', // Using a different seed for cart
    imageAiHint: 'vitamin supplement',
    category: 'Vitamins & Supplements',
    quantity: 1,
  },
];
