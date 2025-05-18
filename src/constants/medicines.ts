
import type { MarketplaceMedicine } from '@/lib/types';

export const marketplaceMedicines: MarketplaceMedicine[] = [
  {
    id: 'med1',
    name: 'Paracetamol 500mg',
    description: 'Effective relief from pain and fever. Suitable for adults and children over 12.',
    price: '$5.99',
    imageUrl: 'https://www.bambangpharma.com/cdn/shop/files/2_a6ae9072-14f3-4aca-825f-a672c798b184.jpg?v=1719451620&width=1445',
    imageAiHint: 'pain relief pills',
    category: 'Pain Relief',
  },
  {
    id: 'med2',
    name: 'Ibuprofen 200mg',
    description: 'Anti-inflammatory drug for pain, fever, and swelling. 24 tablets.',
    price: '$7.49',
    imageUrl: 'https://athome.medline.com/media/catalog/product/cache/acfe2056cc8b1150a39e64f71d0d4d2e/o/t/otc132460.jpg',
    imageAiHint: 'anti inflammatory tablets',
    category: 'Pain Relief',
  },
  {
    id: 'med3',
    name: 'Vitamin C 1000mg Effervescent',
    description: 'Boosts immunity and supports overall health. Orange flavor, 20 tablets.',
    price: '$12.99',
    imageUrl: 'https://i5.walmartimages.com/seo/ORAZ-Vitamin-C-1000mg-20-Vegetable-Effervescent-Tablets-Orange-Flavored_d18dd009-0ce1-4f1b-98a4-b3e457f01554.bb0729f7dcea4dedec3717de4029ea86.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    imageAiHint: 'vitamin supplement',
    category: 'Vitamins & Supplements',
  },
  {
    id: 'med4',
    name: 'Antacid Liquid',
    description: 'Fast-acting relief from heartburn and indigestion. Mint flavor, 200ml.',
    price: '$8.99',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'antacid medicine',
    category: 'Digestive Health',
  },
  {
    id: 'med5',
    name: 'Allergy Relief Tablets',
    description: 'Non-drowsy formula for hay fever and other allergies. 30 tablets.',
    price: '$15.29',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'allergy medicine',
    category: 'Allergy & Hayfever',
  },
  {
    id: 'med6',
    name: 'Multivitamin Gummies for Adults',
    description: 'Daily multivitamin to support energy and well-being. Mixed fruit flavor.',
    price: '$18.79',
    imageUrl: 'https://placehold.co/300x200.png',
    imageAiHint: 'multivitamin gummies',
    category: 'Vitamins & Supplements',
  },
];
