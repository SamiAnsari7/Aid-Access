import type { TimelineEvent } from '@/lib/types';
import { Stethoscope, PillIcon, Lightbulb, CalendarDays } from 'lucide-react';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days ago
    type: 'Visit',
    title: 'Initial Consultation with Dr. Smith',
    description: 'Discussed symptoms and medical history. Ordered initial tests.',
    icon: Stethoscope,
  },
  {
    id: '2',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 25).toISOString(), // 25 days ago
    type: 'Medication',
    title: 'Started Amoxicillin',
    description: 'Prescribed for a bacterial infection. 250mg, 3 times a day for 7 days.',
    icon: PillIcon,
  },
  {
    id: '3',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(), // 15 days ago
    type: 'Visit',
    title: 'Follow-up Appointment',
    description: 'Reviewed test results and adjusted treatment plan. Symptoms improving.',
    icon: Stethoscope,
  },
  {
    id: '4',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
    type: 'Suggestion',
    title: 'AI Suggestion: Consider Physical Therapy',
    description: 'Based on reported joint pain, AI suggested exploring physical therapy options.',
    icon: Lightbulb,
  },
  {
    id: '5',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    type: 'Medication',
    title: 'Started Ibuprofen for pain relief',
    description: '400mg as needed for inflammation and pain.',
    icon: PillIcon,
  },
   {
    id: '6',
    date: new Date().toISOString(), // Today
    type: 'System',
    title: 'Next Appointment Scheduled',
    description: 'Follow-up with specialist scheduled for next week.',
    icon: CalendarDays,
  },
];
