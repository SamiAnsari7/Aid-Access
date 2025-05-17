
"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, CheckCircle, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Mock data for progress stats
const progressStats = {
  appointmentsAttended: 5,
  totalAppointments: 7,
  medicationAdherence: 80, // percentage
  wellBeingScore: 7, // out of 10
};

// Mock data for chart
const monthlyProgressData = [
  { month: 'Jan', recoveryScore: 30, moodLevel: 5 },
  { month: 'Feb', recoveryScore: 45, moodLevel: 6 },
  { month: 'Mar', recoveryScore: 60, moodLevel: 7 },
  { month: 'Apr', recoveryScore: 75, moodLevel: 8 },
];

const chartConfig = {
  recoveryScore: {
    label: "Recovery Score",
    color: "hsl(var(--chart-1))",
  },
  moodLevel: {
    label: "Mood Level (1-10)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


export function PatientProgressOverview() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const appointmentProgress = (progressStats.appointmentsAttended / progressStats.totalAppointments) * 100;

  if (!isClient) {
    // Render nothing or a placeholder on the server to avoid hydration mismatch for charts
    return null; 
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="text-primary" />
          Your Progress Overview
        </CardTitle>
        <CardDescription>A summary of your recent activity and well-being.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-sm">
                <CheckCircle className="h-4 w-4 text-accent" /> Appointments
              </CardDescription>
              <CardTitle className="text-2xl">
                {progressStats.appointmentsAttended} / {progressStats.totalAppointments}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={appointmentProgress} aria-label={`${appointmentProgress}% appointments attended`} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-sm">
                <Activity className="h-4 w-4 text-primary" /> Medication Adherence
              </CardDescription>
              <CardTitle className="text-2xl">{progressStats.medicationAdherence}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progressStats.medicationAdherence} aria-label={`${progressStats.medicationAdherence}% medication adherence`} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-accent-foreground" /> Well-being Score
              </CardDescription>
              <CardTitle className="text-2xl">{progressStats.wellBeingScore} / 10</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progressStats.wellBeingScore * 10} aria-label={`${progressStats.wellBeingScore} out of 10 well-being score`} />
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Monthly Progress</h3>
          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyProgressData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Legend />
                  <Bar dataKey="recoveryScore" fill="var(--color-recoveryScore)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="moodLevel" fill="var(--color-moodLevel)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
