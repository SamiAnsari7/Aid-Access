
"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { therapists as allTherapists } from '@/constants/therapists';
import type { Therapist } from '@/lib/types';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { CalendarCheck, User, Clock, ArrowLeft, AlertTriangle } from 'lucide-react';

const mockTimeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

export default function BookAppointmentPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const therapistId = params.therapistId as string;

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);

  const therapist = allTherapists.find(t => t.id === therapistId);

  const handleBookingConfirmation = () => {
    if (!selectedDate || !selectedTimeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time slot.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Appointment Booked (Mock)",
      description: `Your mock appointment with ${therapist!.name} on ${selectedDate.toLocaleDateString()} at ${selectedTimeSlot} has been scheduled.`,
    });
    // In a real app, you might add this to a timeline or database
  };

  if (!therapist) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-4">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <h1 className="text-2xl font-semibold mb-2">Therapist Not Found</h1>
        <p className="text-muted-foreground mb-6">The therapist you are looking for does not exist or the ID is incorrect.</p>
        <Button asChild variant="outline">
          <Link href="/therapy">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Therapy Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Book Appointment with ${therapist.name}`}
        description={`Schedule your session with ${therapist.type} therapist, ${therapist.name}.`}
        icon={<CalendarCheck />}
      />

      <Button variant="outline" onClick={() => router.back()} className="mb-2">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Therapists
      </Button>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Therapist Info Card */}
        <Card className="md:col-span-1">
          <CardHeader className="p-0 relative">
            {therapist.imageUrl && (
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-t-lg">
                <Image
                  src={therapist.imageUrl}
                  alt={therapist.name}
                  fill
                  className="object-cover"
                  data-ai-hint={therapist.imageAiHint || 'therapist portrait'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="mb-2 text-2xl">{therapist.name}</CardTitle>
            <p className="mb-1 text-sm text-muted-foreground">
              <User className="inline w-4 h-4 mr-2 text-primary" />
              {therapist.type} Therapist
            </p>
            <p className="text-sm text-muted-foreground">{therapist.description}</p>
          </CardContent>
        </Card>

        {/* Booking Form Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Select Date and Time</CardTitle>
            <CardDescription>Choose a suitable date and time slot for your appointment.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="appointment-date" className="block mb-2 text-sm font-medium">Select Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="p-0 border rounded-md [&_button]:text-sm"
                disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() -1)) } 
              />
            </div>
            <div>
              <Label htmlFor="time-slot" className="block mb-2 text-sm font-medium">Select Time Slot</Label>
              <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                <SelectTrigger id="time-slot">
                  <SelectValue placeholder="Choose a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {mockTimeSlots.map(slot => (
                    <SelectItem key={slot} value={slot}>
                      <Clock className="inline w-4 h-4 mr-2 text-muted-foreground" />
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleBookingConfirmation} className="w-full md:w-auto" size="lg">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
