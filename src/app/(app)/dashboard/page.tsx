
"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { MedicineSuggestions } from '@/components/dashboard/MedicineSuggestions';
import { PatientProgressOverview } from '@/components/dashboard/PatientProgressOverview'; // Import new component
import { LayoutDashboard } from 'lucide-react';
import type { MedicalProfile } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

// Mock initial profile data - this will be used by MedicineSuggestions on the dashboard.
// The actual editable profile is now on the /profile page.
const mockInitialProfile: MedicalProfile = {
  name: 'Jane Doe',
  age: 34,
  gender: 'Female',
  currentHealthProblems: 'Chronic migraines and occasional insomnia',
  medicalHistory: 'No major surgeries. Allergic to penicillin.',
  currentMedication: 'Sumatriptan 50mg as needed for migraines. Melatonin 3mg for sleep.',
};


export default function DashboardPage() {
  // patientProfile state remains to feed MedicineSuggestions, but is not updated by a form on this page anymore.
  const [patientProfile, setPatientProfile] = useState<MedicalProfile | null>(mockInitialProfile);
  
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Patient Dashboard" 
        description="View your medical overview, progress, and get AI-powered insights." // Updated description
        icon={<LayoutDashboard />}
      />
      
      <PatientProgressOverview /> {/* Add new component here */}

      <Separator className="my-8" />

      <MedicineSuggestions patientProfile={patientProfile} />
    </div>
  );
}
