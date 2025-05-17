// src/components/layout/AuthLayout.tsx
import React from 'react';
import { Activity } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mb-8 flex items-center text-3xl font-bold text-primary">
        <Activity className="mr-2 h-8 w-8" />
        MediPath
      </div>
      <div className="w-full max-w-md">
        {children}
      </div>
      <Toaster />
    </div>
  );
}
