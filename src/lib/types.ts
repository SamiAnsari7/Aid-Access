
import type React from 'react';

export type UserRole = 'Patient' | 'Caregiver' | 'Therapist';

export interface MedicalProfile {
  name: string;
  age: number | null;
  gender: 'Male' | 'Female' | 'Other' | '';
  currentHealthProblems: string;
  medicalHistory: string;
  currentMedication: string;
}

export interface Therapist {
  id: string;
  name: string;
  type: 'Speech' | 'Occupational' | 'Behavioral' | 'Physical';
  location: string;
  imageUrl?: string;
  imageAiHint?: string; // Added field for specific AI hints
  description: string;
  contact: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'Visit' | 'Medication' | 'Suggestion' | 'System' | 'AppointmentScheduled'; // Added 'AppointmentScheduled'
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface RareMedicineResult {
  medicineInfo: string;
  availabilityStatus: string;
  potentialVendors: string;
  suggestions?: string;
}

export interface MedicineSuggestion {
  suggestion: string; // Individual suggestion string
}
