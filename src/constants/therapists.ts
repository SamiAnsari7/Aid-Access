
import type { Therapist } from '@/lib/types';

export const therapyTypes = ['Speech', 'Occupational', 'Behavioral', 'Physical'] as const;


export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Jabbar Fahad',
    type: 'Speech',
    location: 'New York, NY',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'woman doctor', // Note: hint might need update if gender changes significantly
    description: 'Specializes in pediatric speech disorders and language development. 10+ years of experience.',
    contact: 'ecarter@therapy.com',
  },
  {
    id: '2',
    name: 'Sai Charan',
    type: 'Occupational',
    location: 'San Francisco, CA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'man therapist',
    description: 'Focuses on helping adults regain independence in daily activities after injury or illness.',
    contact: 'jlee@therapy.com',
  },
  {
    id: '3',
    name: 'Sami Ansari',
    type: 'Behavioral',
    location: 'Chicago, IL',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'child therapist', // Note: hint might need update if gender changes significantly
    description: 'Works with children and adolescents on behavioral challenges, including ADHD and ASD.',
    contact: 'asharma@therapy.com',
  },
  {
    id: '4',
    name: 'Omer Yafai',
    type: 'Physical',
    location: 'Austin, TX',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'sports therapist',
    description: 'Expert in sports rehabilitation and post-operative physical therapy for all ages.',
    contact: 'mbrown@therapy.com',
  },
  {
    id: '5',
    name: 'Hamza',
    type: 'Speech',
    location: 'Boston, MA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'speech therapist',
    description: 'Specializes in adult speech therapy, including stuttering and voice disorders.',
    contact: 'sdavis@therapy.com',
  },
  {
    id: '6',
    name: 'David Wilson', // This name remains as you provided 5 new names.
    type: 'Occupational',
    location: 'Seattle, WA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'occupational therapist',
    description: 'Helps individuals with disabilities adapt to their environment and improve their quality of life.',
    contact: 'dwilson@therapy.com',
  },
];
