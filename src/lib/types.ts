
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
  imageAiHint?: string;
  description: string;
  contact: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'Visit' | 'Medication' | 'Suggestion' | 'System' | 'AppointmentScheduled';
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
  suggestion: string;
}

export interface MarketplaceMedicine {
  id: string;
  name: string;
  description: string;
  price: string; // Keep as string for display, parse for calculations
  imageUrl: string;
  imageAiHint: string;
  category: string;
}

// For simplicity in this mock, CartItem will extend MarketplaceMedicine and add quantity
export interface CartItem extends MarketplaceMedicine {
  quantity: number;
}
