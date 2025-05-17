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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { MedicalProfile } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const medicalProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.preprocess(
    (val) => (val === "" ? null : Number(val)),
    z.number().positive('Age must be a positive number').nullable()
  ),
  gender: z.enum(['Male', 'Female', 'Other', '']),
  currentHealthProblems: z.string().min(1, 'Current health problems are required'),
  medicalHistory: z.string().optional(),
  currentMedication: z.string().optional(),
});

interface MedicalProfileFormProps {
  initialProfile?: MedicalProfile;
  onSubmitSuccess?: (data: MedicalProfile) => void;
}

export function MedicalProfileForm({ initialProfile, onSubmitSuccess }: MedicalProfileFormProps) {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(!initialProfile); // Start in edit mode if no initial profile

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch, setValue } = useForm<MedicalProfile>({
    resolver: zodResolver(medicalProfileSchema),
    defaultValues: initialProfile || {
      name: '',
      age: null,
      gender: '',
      currentHealthProblems: '',
      medicalHistory: '',
      currentMedication: '',
    },
  });
  
  const currentGender = watch('gender');

  const onSubmit: SubmitHandler<MedicalProfile> = async (data) => {
    // In a real app, this would save to Firestore
    console.log('Medical Profile Submitted:', data);
    toast({
      title: 'Profile Updated',
      description: 'Your medical profile has been saved.',
    });
    setIsEditing(false);
    if (onSubmitSuccess) {
      onSubmitSuccess(data);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleCancel = () => {
    reset(initialProfile); // Reset to initial values or defaults
    setIsEditing(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical Profile</CardTitle>
        <CardDescription>Keep your medical details up to date for accurate AI assistance.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" {...register('name')} disabled={!isEditing} />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" {...register('age')} disabled={!isEditing} />
                {errors.age && <p className="text-sm text-destructive mt-1">{errors.age.message}</p>}
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select 
                  name="gender"
                  value={currentGender}
                  onValueChange={(value) => setValue('gender', value as MedicalProfile['gender'], { shouldValidate: true })}
                  disabled={!isEditing}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-sm text-destructive mt-1">{errors.gender.message}</p>}
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="currentHealthProblems">Current Health Problems</Label>
            <Textarea id="currentHealthProblems" {...register('currentHealthProblems')} rows={3} disabled={!isEditing} />
            {errors.currentHealthProblems && <p className="text-sm text-destructive mt-1">{errors.currentHealthProblems.message}</p>}
          </div>

          <div>
            <Label htmlFor="medicalHistory">Medical History (Optional)</Label>
            <Textarea id="medicalHistory" {...register('medicalHistory')} rows={3} disabled={!isEditing} />
            {errors.medicalHistory && <p className="text-sm text-destructive mt-1">{errors.medicalHistory.message}</p>}
          </div>

          <div>
            <Label htmlFor="currentMedication">Current Medication (Optional)</Label>
            <Textarea id="currentMedication" {...register('currentMedication')} rows={3} disabled={!isEditing} />
            {errors.currentMedication && <p className="text-sm text-destructive mt-1">{errors.currentMedication.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {isEditing ? (
            <>
              <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save Profile'}
              </Button>
            </>
          ) : (
            <Button type="button" onClick={handleEdit}>Edit Profile</Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
