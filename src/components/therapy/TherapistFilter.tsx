"use client";

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { therapyTypes } from '@/constants/therapists';

export type TherapyFilters = {
  type: string;
  location: string;
};

interface TherapistFilterProps {
  onFilterChange: (filters: TherapyFilters) => void;
  initialFilters: TherapyFilters;
}

export function TherapistFilter({ onFilterChange, initialFilters }: TherapistFilterProps) {
  const handleTypeChange = (value: string) => {
    onFilterChange({ ...initialFilters, type: value === 'all' ? '' : value });
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...initialFilters, location: event.target.value });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Filter Therapists</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="therapy-type">Therapy Type</Label>
            <Select onValueChange={handleTypeChange} defaultValue={initialFilters.type || 'all'}>
              <SelectTrigger id="therapy-type">
                <SelectValue placeholder="Select therapy type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {therapyTypes.map(type => (
                  <SelectItem key={type} value={type}>{type} Therapy</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              placeholder="Enter city or region" 
              value={initialFilters.location}
              onChange={handleLocationChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
