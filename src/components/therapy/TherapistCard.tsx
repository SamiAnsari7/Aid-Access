
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Therapist } from '@/lib/types';
import { MapPin, Phone, Mail, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast'; // Added useToast

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
  const { toast } = useToast(); // Initialize toast

  const handleBookAppointment = () => {
    toast({
      title: "Appointment Booked (Mock)",
      description: `Your mock appointment with ${therapist.name} has been scheduled.`,
    });
    // In a real app, you would trigger an action here to save the appointment
    // and potentially update the timeline data.
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <CardHeader className="p-0 relative">
        {therapist.imageUrl && (
          <div className="aspect-[4/3] w-full relative overflow-hidden">
            <Image
              src={therapist.imageUrl}
              alt={therapist.name}
              fill
              className="object-cover block"
              data-ai-hint={therapist.imageAiHint || 'therapist portrait'}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-1">{therapist.name}</CardTitle>
        <div className="flex gap-2 mb-2">
          <Badge variant="secondary">{therapist.type} Therapy</Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground mb-3 min-h-[60px]">{therapist.description}</CardDescription>
        
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 shrink-0" />
            <span>{therapist.location}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 shrink-0" />
            <a href={`mailto:${therapist.contact}`} className="hover:underline">{therapist.contact}</a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t flex flex-col gap-2">
        <Button variant="outline" className="w-full">
          <Phone className="h-4 w-4 mr-2" /> Contact Therapist
        </Button>
        <Button variant="default" className="w-full" onClick={handleBookAppointment}>
          <CalendarPlus className="h-4 w-4 mr-2" /> Book Appointment (Mock)
        </Button>
      </CardFooter>
    </Card>
  );
}
