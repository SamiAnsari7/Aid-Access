"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { MedicalProfile } from '@/lib/types';
import { getMedicineSuggestionsAction } from '@/lib/actions';
import type { GenerateMedicineSuggestionsOutput } from '@/ai/flows/generate-medicine-suggestions';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MedicineSuggestionsProps {
  patientProfile: MedicalProfile | null; // Receive current profile data
}

export function MedicineSuggestions({ patientProfile }: MedicineSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<GenerateMedicineSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // States for manual input if profile is not complete
  const [healthProblems, setHealthProblems] = useState(patientProfile?.currentHealthProblems || '');
  const [medications, setMedications] = useState(patientProfile?.currentMedication || '');


  const handleGetSuggestions = async () => {
    const problemsToSubmit = patientProfile?.currentHealthProblems || healthProblems;
    const medicationsToSubmit = patientProfile?.currentMedication || medications;

    if (!problemsToSubmit) {
      toast({
        title: "Missing Information",
        description: "Please provide current health problems to get suggestions.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions(null);

    const result = await getMedicineSuggestionsAction({
      healthProblems: problemsToSubmit,
      medications: medicationsToSubmit,
    });

    setIsLoading(false);

    if ('error' in result) {
      setError(result.error);
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setSuggestions(result);
      toast({
        title: "Suggestions Generated",
        description: "AI-powered suggestions are ready.",
      });
    }
  };
  
  const canFetchSuggestions = (patientProfile?.currentHealthProblems || healthProblems) && (patientProfile?.currentMedication || medications);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="text-primary" />
          AI-Powered Suggestions
        </CardTitle>
        <CardDescription>
          Get AI-driven suggestions for medicine or therapy based on your health problems and current medications.
          { !patientProfile && " Ensure your profile is up-to-date for best results or fill in the details below."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        { !patientProfile && (
          <div className="space-y-4 p-4 border rounded-md bg-secondary/30">
            <p className="text-sm text-muted-foreground">Provide your details below if not in your profile:</p>
             <div>
                <Label htmlFor="manualHealthProblems">Current Health Problems</Label>
                <Textarea 
                    id="manualHealthProblems" 
                    value={healthProblems} 
                    onChange={(e) => setHealthProblems(e.target.value)}
                    placeholder="e.g., Chronic migraines, Insomnia"
                />
            </div>
            <div>
                <Label htmlFor="manualMedications">Current Medications</Label>
                <Textarea 
                    id="manualMedications" 
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                    placeholder="e.g., Sumatriptan 50mg, Melatonin 5mg"
                />
            </div>
          </div>
        )}

        {isLoading && <div className="flex justify-center p-4"><LoadingSpinner /></div>}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {suggestions && (
          <div className="space-y-4">
            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Suggestions Summary</AlertTitle>
              <AlertDescription>{suggestions.summary}</AlertDescription>
            </Alert>
            {suggestions.suggestions && suggestions.suggestions.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Detailed Suggestions:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm bg-muted p-3 rounded-md">
                  {suggestions.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleGetSuggestions} disabled={isLoading || !canFetchSuggestions} className="w-full md:w-auto">
          {isLoading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
        </Button>
      </CardFooter>
    </Card>
  );
}
