"use client";

import React from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { TreatmentTimeline } from '@/components/history/TreatmentTimeline';
import { TreatmentSummary } from '@/components/history/TreatmentSummary';
import { History } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Treatment History & Summaries"
        description="View your past medical events and AI-generated summaries."
        icon={<History />}
      />
      
      <TreatmentTimeline />

      <Separator className="my-8" />
      
      <TreatmentSummary />
    </div>
  );
}
