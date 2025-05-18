
import type { Therapist } from '@/lib/types';

export const therapyTypes = ['Speech', 'Occupational', 'Behavioral', 'Physical'] as const;


export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Emily Carter',
    type: 'Speech',
    location: 'New York, NY',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'woman doctor',
    description: 'Specializes in pediatric speech disorders and language development. 10+ years of experience.',
    contact: 'ecarter@therapy.com',
  },
  {
    id: '2',
    name: 'Johnathan Lee',
    type: 'Occupational',
    location: 'San Francisco, CA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'man therapist',
    description: 'Focuses on helping adults regain independence in daily activities after injury or illness.',
    contact: 'jlee@therapy.com',
  },
  {
    id: '3',
    name: 'Dr. Anya Sharma',
    type: 'Behavioral',
    location: 'Chicago, IL',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'child therapist',
    description: 'Works with children and adolescents on behavioral challenges, including ADHD and ASD.',
    contact: 'asharma@therapy.com',
  },
  {
    id: '4',
    name: 'Michael Brown',
    type: 'Physical',
    location: 'Austin, TX',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'sports therapist',
    description: 'Expert in sports rehabilitation and post-operative physical therapy for all ages.',
    contact: 'mbrown@therapy.com',
  },
  {
    id: '5',
    name: 'Dr. Sarah Davis',
    type: 'Speech',
    location: 'Boston, MA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'professional woman',
    description: 'Specializes in adult speech therapy, including stuttering and voice disorders.',
    contact: 'sdavis@therapy.com',
  },
  {
    id: '6',
    name: 'David Wilson',
    type: 'Occupational',
    location: 'Seattle, WA',
    imageUrl: 'https://placehold.co/400x300.png',
    imageAiHint: 'male counsellor',
    description: 'Helps individuals with disabilities adapt to their environment and improve their quality of life.',
    contact: 'dwilson@therapy.com',
  },
];
