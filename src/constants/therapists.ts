
import type { Therapist } from '@/lib/types';

export const therapyTypes = ['Speech', 'Occupational', 'Behavioral', 'Physical'] as const;


export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Jabbar Fahad',
    type: 'Speech',
    location: 'New York, NY',
    imageUrl: 'https://d35oenyzp35321.cloudfront.net/Varun_Khurana_a6e7c98365.jpg',
    imageAiHint: 'male therapist',
    description: 'Specializes in pediatric speech disorders and language development. 10+ years of experience.',
    contact: 'ecarter@therapy.com',
  },
  {
    id: '2',
    name: 'Sai Charan',
    type: 'Occupational',
    location: 'San Francisco, CA',
    imageUrl: 'https://d35oenyzp35321.cloudfront.net/Tarun_Lala_730915f486.jpg',
    imageAiHint: 'male therapist',
    description: 'Focuses on helping adults regain independence in daily activities after injury or illness.',
    contact: 'jlee@therapy.com',
  },
  {
    id: '3',
    name: 'Sami Ansari',
    type: 'Behavioral',
    location: 'Chicago, IL',
    imageUrl: 'https://d35oenyzp35321.cloudfront.net/Murali_5a00f23e13.jpg',
    imageAiHint: 'male therapist',
    description: 'Works with children and adolescents on behavioral challenges, including ADHD and ASD.',
    contact: 'asharma@therapy.com',
  },
  {
    id: '4',
    name: 'Omer Yafai',
    type: 'Physical',
    location: 'Austin, TX',
    imageUrl: 'https://www.aspirephysio.in/images/dr-ayush-ranjan.png',
    imageAiHint: 'male therapist',
    description: 'Expert in sports rehabilitation and post-operative physical therapy for all ages.',
    contact: 'mbrown@therapy.com',
  },
  {
    id: '5',
    name: 'Hamza',
    type: 'Speech',
    location: 'Boston, MA',
    imageUrl: 'https://d35oenyzp35321.cloudfront.net/Rohit_20_Chawla_8f66db989d.jpg',
    imageAiHint: 'male therapist',
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
