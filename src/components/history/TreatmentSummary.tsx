// src/components/history/TreatmentSummary.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; // Added import
import { generateTreatmentSummaryAction } from '@/lib/actions';
import type { GenerateTreatmentSummaryOutput } from '@/ai/flows/generate-treatment-summary';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { BotMessageSquare, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { MedicalProfile } from '@/lib/types'; // For potential input fields

interface TreatmentSummaryProps {
   // In a real app, you might pass patient data here to prefill
   // For now, we'll use hardcoded inputs or simple text areas
}

// Example structure for patient data, adapt as needed
interface PatientDataForSummary {
  patientName: string;
  medicalHistory: string;
  medications: string;
  visits: string; // Could be a summary of timelineEvents
}


export function TreatmentSummary({}: TreatmentSummaryProps) {
  const [summary, setSummary] = useState<GenerateTreatmentSummaryOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // State for form inputs - these would ideally be pulled from patient data
  const [patientName, setPatientName] = useState('Jane Doe');
  const [medicalHistory, setMedicalHistory] = useState('No major surgeries. Allergic to penicillin. History of migraines.');
  const [medications, setMedications] = useState('Sumatriptan 50mg (migraines), Melatonin 3mg (sleep), Ibuprofen (pain).');
  const [visits, setVisits] = useState('Initial consultation (Dr. Smith) - discussed symptoms. Follow-up - reviewed tests, symptoms improving.');

  const handleGenerateSummary = async () => {
    if (!patientName || !medicalHistory || !medications || !visits) {
        toast({
            title: "Missing Information",
            description: "Please fill all patient data fields to generate a summary.",
            variant: "destructive",
        });
        return;
    }
    
    setIsLoading(true);
    setError(null);
    setSummary(null);

    const result = await generateTreatmentSummaryAction({
      patientName,
      medicalHistory,
      medications,
      visits,
    });

    setIsLoading(false);

    if ('error' in result) {
      setError(result.error);
      toast({
        title: "Error Generating Summary",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setSummary(result);
      toast({
        title: "Summary Generated",
        description: "AI-powered treatment summary is ready.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BotMessageSquare className="text-primary" />
          AI Treatment Summary
        </CardTitle>
        <CardDescription>
          Get an AI-generated summary of the patient's treatment history based on the provided information.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Form for inputting data for summary generation - in a real app, this might be pre-filled */}
        <div className="space-y-3 p-4 border rounded-md bg-secondary/30">
            <h4 className="text-sm font-medium text-muted-foreground">Patient Data for Summary (Editable for Demo)</h4>
            <div>
                <Label htmlFor="summaryPatientName">Patient Name</Label>
                <Input id="summaryPatientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
            </div>
            <div>
                <Label htmlFor="summaryMedicalHistory">Medical History</Label>
                <Textarea id="summaryMedicalHistory" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} rows={3} />
            </div>
            <div>
                <Label htmlFor="summaryMedications">Medications</Label>
                <Textarea id="summaryMedications" value={medications} onChange={(e) => setMedications(e.target.value)} rows={2} />
            </div>
            <div>
                <Label htmlFor="summaryVisits">Visits Summary</Label>
                <Textarea id="summaryVisits" value={visits} onChange={(e) => setVisits(e.target.value)} rows={3} />
            </div>
        </div>


        {isLoading && <div className="flex justify-center p-4"><LoadingSpinner /></div>}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {summary && (
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertTitle>Generated Summary</AlertTitle>
            <AlertDescription className="whitespace-pre-wrap">{summary.summary}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full md:w-auto">
          {isLoading ? 'Generating...' : 'Generate AI Summary'}
        </Button>
      </CardFooter>
    </Card>
  );
}
