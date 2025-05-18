
import type { CartItem } from '@/lib/types';

export const mockCartItems: CartItem[] = [
  {
    id: 'med1',
    name: 'Paracetamol 500mg',
    description: 'Effective relief from pain and fever.',
    price: '$5.99',
    imageUrl: 'https://www.bambangpharma.com/cdn/shop/files/2_a6ae9072-14f3-4aca-825f-a672c798b184.jpg',
    imageAiHint: 'pain relief pills',
    category: 'Pain Relief',
    quantity: 2,
  },
  {
    id: 'med3',
    name: 'Vitamin C 1000mg Effervescent',
    description: 'Boosts immunity and supports overall health.',
    price: '$12.99',
    imageUrl: 'https://placehold.co/100x100.png',
    imageAiHint: 'vitamin supplement',
    category: 'Vitamins & Supplements',
    quantity: 1,
  },
];
