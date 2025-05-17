"use client";

import React, { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { RareMedicineForm } from '@/components/aid-access/RareMedicineForm';
import { MedicineLocatorResults } from '@/components/aid-access/MedicineLocatorResults';
import { Pill } from 'lucide-react';
import type { FindRareMedicinesOutput } from '@/ai/flows/find-rare-medicines';

export default function AidAccessPage() {
  const [searchResults, setSearchResults] = useState<FindRareMedicinesOutput | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearchComplete = (results: FindRareMedicinesOutput | null, error?: string) => {
    setSearchResults(results);
    setSearchError(error || null);
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Aid Access: Medicine Locator"
        description="Find information on rare medicines, their availability, and potential vendors."
        icon={<Pill />}
      />
      
      <RareMedicineForm onSearchComplete={handleSearchComplete} />
      
      <MedicineLocatorResults results={searchResults} error={searchError} />

      {/* Placeholder for "Lost-to-follow-up" reporting. Could be a simple form/button. */}
      {/* 
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Report Lost-to-Follow-Up Patient</CardTitle>
          <CardDescription>Help reconnect patients to essential services.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This feature is intended for healthcare providers and caregivers. 
            If you need to report a patient who has been lost to follow-up, 
            please use the dedicated portal (Feature coming soon).
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" disabled>Access Reporting Portal (Coming Soon)</Button>
        </CardFooter>
      </Card> 
      */}
    </div>
  );
}
