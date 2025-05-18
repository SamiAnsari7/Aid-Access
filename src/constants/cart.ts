
import type { CartItem } from '@/lib/types';

export const mockCartItems: CartItem[] = [
  {
    id: 'med1',
    name: 'Paracetamol 500mg',
    description: 'Effective relief from pain and fever.',
    price: '$5.99',
    imageUrl: 'https://www.bambangpharma.com/cdn/shop/files/2_a6ae9072-14f3-4aca-825f-a672c798b184.jpg?v=1719451620&width=1445',
    imageAiHint: 'pain relief pills',
    category: 'Pain Relief',
    quantity: 2,
  },
  {
    id: 'med3',
    name: 'Vitamin C 1000mg Effervescent',
    description: 'Boosts immunity and supports overall health.',
    price: '$12.99',
    imageUrl: 'https://i5.walmartimages.com/seo/ORAZ-Vitamin-C-1000mg-20-Vegetable-Effervescent-Tablets-Orange-Flavored_d18dd009-0ce1-4f1b-98a4-b3e457f01554.bb0729f7dcea4dedec3717de4029ea86.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    imageAiHint: 'vitamin supplement',
    category: 'Vitamins & Supplements',
    quantity: 1,
  },
];
