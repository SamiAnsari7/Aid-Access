"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { RareMedicineResult } from '@/lib/types'; // Using a simplified type for display
import { Info, CheckCircle, XCircle, Building } from 'lucide-react';

interface MedicineLocatorResultsProps {
  results: RareMedicineResult | null;
  error?: string | null;
}

export function MedicineLocatorResults({ results, error }: MedicineLocatorResultsProps) {
  if (error) {
    return (
      <Alert variant="destructive" className="mt-6">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Search Failed</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!results) {
    return (
      <div className="mt-6 text-center text-muted-foreground">
        <Info className="mx-auto h-8 w-8 mb-2" />
        <p>Enter search criteria above to find medicine information.</p>
      </div>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Medicine Information</CardTitle>
        <CardDescription>Details found for the requested medicine.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
            <Info className="text-primary" /> Medicine Details
          </h3>
          <p className="text-sm bg-muted p-3 rounded-md">{results.medicineInfo || 'No specific details provided.'}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
            <CheckCircle className="text-accent-foreground" /> Availability Status
          </h3>
          <p className="text-sm bg-muted p-3 rounded-md">{results.availabilityStatus || 'Availability not specified.'}</p>
        </div>

        {results.potentialVendors && (
          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Building className="text-primary" /> Potential Vendors/Sources
            </h3>
            <p className="text-sm bg-muted p-3 rounded-md">{results.potentialVendors}</p>
          </div>
        )}

        {results.suggestions && (
           <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Lightbulb className="text-primary" /> AI Suggestions
            </h3>
            <p className="text-sm bg-muted p-3 rounded-md">{results.suggestions}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper component, if needed
const Lightbulb = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

