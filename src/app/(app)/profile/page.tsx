
"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { MedicalProfileForm } from '@/components/dashboard/MedicalProfileForm';
import { UserCircle } from 'lucide-react';
import type { MedicalProfile } from '@/lib/types';

// Mock initial profile data for the profile page - in a real app, this would come from a store or API
const mockInitialProfile: MedicalProfile = {
  name: 'Jane Doe',
  age: 34,
  gender: 'Female',
  currentHealthProblems: 'Chronic migraines and occasional insomnia',
  medicalHistory: 'No major surgeries. Allergic to penicillin.',
  currentMedication: 'Sumatriptan 50mg as needed for migraines. Melatonin 3mg for sleep.',
};

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<MedicalProfile | null>(mockInitialProfile);

  const handleProfileUpdate = (updatedProfile: MedicalProfile) => {
    setUserProfile(updatedProfile);
    // In a real app, you would also persist this change to your backend/database.
    console.log("Profile updated on profile page:", updatedProfile);
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title="User Profile"
        description="Manage your personal and medical information."
        icon={<UserCircle />}
      />
      
      <MedicalProfileForm 
        initialProfile={userProfile || undefined} 
        onSubmitSuccess={handleProfileUpdate}
      />
    </div>
  );
}
