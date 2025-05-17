"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { findRareMedicinesAction } from '@/lib/actions';
import type { FindRareMedicinesOutput } from '@/ai/flows/find-rare-medicines';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Pill } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const rareMedicineSchema = z.object({
  medicineName: z.string().min(1, 'Medicine name is required'),
  patientCondition: z.string().min(1, 'Patient condition is required'),
  additionalDetails: z.string().optional(),
});

type RareMedicineFormData = z.infer<typeof rareMedicineSchema>;

interface RareMedicineFormProps {
  onSearchComplete: (results: FindRareMedicinesOutput | null, error?: string) => void;
}

export function RareMedicineForm({ onSearchComplete }: RareMedicineFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<RareMedicineFormData>({
    resolver: zodResolver(rareMedicineSchema),
  });

  const onSubmit: SubmitHandler<RareMedicineFormData> = async (data) => {
    setIsLoading(true);
    onSearchComplete(null); // Clear previous results

    const result = await findRareMedicinesAction(data);
    setIsLoading(false);

    if ('error' in result) {
      onSearchComplete(null, result.error);
      toast({
        title: "Search Error",
        description: result.error,
        variant: "destructive",
      });
    } else {
      onSearchComplete(result);
      toast({
        title: "Search Complete",
        description: "Information for the rare medicine has been found.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Pill className="text-primary" />
          Find Rare Medicines
        </CardTitle>
        <CardDescription>Use our AI-assisted tool to find information about rare medicines.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="medicineName">Medicine Name</Label>
            <Input id="medicineName" {...register('medicineName')} placeholder="e.g., Cenobamate" />
            {errors.medicineName && <p className="text-sm text-destructive mt-1">{errors.medicineName.message}</p>}
          </div>
          <div>
            <Label htmlFor="patientCondition">Patient Condition</Label>
            <Input id="patientCondition" {...register('patientCondition')} placeholder="e.g., Lennox-Gastaut syndrome" />
            {errors.patientCondition && <p className="text-sm text-destructive mt-1">{errors.patientCondition.message}</p>}
          </div>
          <div>
            <Label htmlFor="additionalDetails">Additional Details (Optional)</Label>
            <Textarea id="additionalDetails" {...register('additionalDetails')} placeholder="e.g., Specific dosage requirements, patient age" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading ? <LoadingSpinner size={18} className="mr-2" /> : null}
            {isLoading ? 'Searching...' : 'Search for Medicine'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
