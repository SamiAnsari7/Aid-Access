import { AuthLayout } from '@/components/layout/AuthLayout';
import type React from 'react';

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
