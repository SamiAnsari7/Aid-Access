
import type { MarketplaceMedicine } from '@/lib/types';

export const marketplaceMedicines: MarketplaceMedicine[] = [
  {
    id: 'med1',
    name: 'Paracetamol 500mg',
    description: 'Effective relief from pain and fever. Suitable for adults and children over 12.',
    price: '$5.99',
    imageUrl: 'https://picsum.photos/seed/med1/300/200',
    imageAiHint: 'pain relief pills',
    category: 'Pain Relief',
  },
  {
    id: 'med2',
    name: 'Ibuprofen 200mg',
    description: 'Anti-inflammatory drug for pain, fever, and swelling. 24 tablets.',
    price: '$7.49',
    imageUrl: 'https://picsum.photos/seed/med2/300/200',
    imageAiHint: 'anti inflammatory tablets',
    category: 'Pain Relief',
  },
  {
    id: 'med3',
    name: 'Vitamin C 1000mg Effervescent',
    description: 'Boosts immunity and supports overall health. Orange flavor, 20 tablets.',
    price: '$12.99',
    imageUrl: 'https://picsum.photos/seed/med3/300/200',
    imageAiHint: 'vitamin supplement',
    category: 'Vitamins & Supplements',
  },
  {
    id: 'med4',
    name: 'Antacid Liquid',
    description: 'Fast-acting relief from heartburn and indigestion. Mint flavor, 200ml.',
    price: '$8.99',
    imageUrl: 'https://picsum.photos/seed/med4/300/200',
    imageAiHint: 'antacid medicine',
    category: 'Digestive Health',
  },
  {
    id: 'med5',
    name: 'Allergy Relief Tablets',
    description: 'Non-drowsy formula for hay fever and other allergies. 30 tablets.',
    price: '$15.29',
    imageUrl: 'https://picsum.photos/seed/med5/300/200',
    imageAiHint: 'allergy medicine',
    category: 'Allergy & Hayfever',
  },
  {
    id: 'med6',
    name: 'Multivitamin Gummies for Adults',
    description: 'Daily multivitamin to support energy and well-being. Mixed fruit flavor.',
    price: '$18.79',
    imageUrl: 'https://picsum.photos/seed/med6/300/200',
    imageAiHint: 'multivitamin gummies',
    category: 'Vitamins & Supplements',
  },
];
