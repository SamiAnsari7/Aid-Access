
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { timelineEvents as defaultTimelineEvents } from '@/constants/timeline';
import type { TimelineEvent } from '@/lib/types';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';

interface TreatmentTimelineProps {
  events?: TimelineEvent[];
}

export function TreatmentTimeline({ events = defaultTimelineEvents }: TreatmentTimelineProps) {
  const sortedEvents = [...events].sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Timeline</CardTitle>
        <CardDescription>A chronological view of your visits, medications, and suggestions.</CardDescription>
      </CardHeader>
      <CardContent>
        {sortedEvents.length === 0 ? (
          <p className="text-muted-foreground">No timeline events available yet.</p>
        ) : (
          <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
            {sortedEvents.map((event, index) => (
              <div key={event.id} className="relative mb-8 pl-8 group">
                <div className={cn(
                  "absolute left-[-25.5px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2",
                  event.type === 'Visit' ? 'bg-blue-500 border-blue-600' :
                  event.type === 'Medication' ? 'bg-green-500 border-green-600' :
                  event.type === 'Suggestion' ? 'bg-yellow-500 border-yellow-600' :
                  event.type === 'AppointmentScheduled' ? 'bg-purple-500 border-purple-600' : // Added style for AppointmentScheduled
                  'bg-gray-500 border-gray-600' // Default for System or other types
                )}>
                  {event.icon && <event.icon className="h-3 w-3 text-white" />}
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm transition-all group-hover:shadow-md">
                  <p className="text-xs text-muted-foreground mb-1">
                    {format(parseISO(event.date), "MMMM d, yyyy 'at' h:mm a")} - <span className="font-medium">{event.type}</span>
                  </p>
                  <h4 className="font-semibold text-md mb-1">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
