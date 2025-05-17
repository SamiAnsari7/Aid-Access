
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { RareMedicineResult } from '@/lib/types'; // Using a simplified type for display
import { Info, CheckCircle, XCircle, Building, Lightbulb, MessageCircleQuestion } from 'lucide-react';

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
              <Lightbulb className="text-primary h-5 w-5" /> AI Insights & Discussion Points
            </h3>
            <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">{results.suggestions}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

