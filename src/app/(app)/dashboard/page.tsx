"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { MedicalProfileForm } from '@/components/dashboard/MedicalProfileForm';
import { MedicineSuggestions } from '@/components/dashboard/MedicineSuggestions';
import { LayoutDashboard } from 'lucide-react';
import type { MedicalProfile } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

// Mock initial profile data - in a real app, this would come from a store or API
const mockInitialProfile: MedicalProfile = {
  name: 'Jane Doe',
  age: 34,
  gender: 'Female',
  currentHealthProblems: 'Chronic migraines and occasional insomnia',
  medicalHistory: 'No major surgeries. Allergic to penicillin.',
  currentMedication: 'Sumatriptan 50mg as needed for migraines. Melatonin 3mg for sleep.',
};


export default function DashboardPage() {
  const [patientProfile, setPatientProfile] = useState<MedicalProfile | null>(mockInitialProfile);

  const handleProfileUpdate = (updatedProfile: MedicalProfile) => {
    setPatientProfile(updatedProfile);
  };
  
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Patient Dashboard" 
        description="Manage your medical profile and get AI-powered insights."
        icon={<LayoutDashboard />}
      />
      
      <MedicalProfileForm 
        initialProfile={patientProfile || undefined} 
        onSubmitSuccess={handleProfileUpdate}
      />

      <Separator className="my-8" />

      <MedicineSuggestions patientProfile={patientProfile} />
    </div>
  );
}
