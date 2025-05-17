"use client";

import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { TherapistCard } from '@/components/therapy/TherapistCard';
import { TherapistFilter, type TherapyFilters } from '@/components/therapy/TherapistFilter';
import { therapists as allTherapists } from '@/constants/therapists';
import { Users } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function TherapyPage() {
  const [filters, setFilters] = useState<TherapyFilters>({ type: '', location: '' });

  const filteredTherapists = useMemo(() => {
    return allTherapists.filter(therapist => {
      const typeMatch = filters.type ? therapist.type === filters.type : true;
      const locationMatch = filters.location 
        ? therapist.location.toLowerCase().includes(filters.location.toLowerCase()) 
        : true;
      return typeMatch && locationMatch;
    });
  }, [filters]);

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Therapy Services"
        description="Find verified therapists specializing in various fields."
        icon={<Users />}
      />
      
      <TherapistFilter initialFilters={filters} onFilterChange={setFilters} />
      
      {filteredTherapists.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTherapists.map(therapist => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      ) : (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>No Therapists Found</AlertTitle>
          <AlertDescription>
            No therapists match your current filter criteria. Try adjusting your search.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
