
"use client";

import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Therapist } from '@/lib/types';
import { MapPin, CalendarPlus } from 'lucide-react'; // Removed Phone, Mail
import { Button } from '@/components/ui/button';

interface TherapistCardProps {
  therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
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
          {/* Removed contact email display section */}
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t flex flex-col gap-2">
        {/* Removed Contact Therapist Button */}
        <Button asChild variant="default" className="w-full">
          <Link href={`/therapy/${therapist.id}/book`}>
            <CalendarPlus className="h-4 w-4 mr-2" /> Book Appointment
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
