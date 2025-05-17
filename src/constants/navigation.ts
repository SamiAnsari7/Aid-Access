import type React from 'react';
import { LayoutDashboard, Pill, Users, History, BotMessageSquare, Syringe } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
  matchStartsWith?: boolean; // For active link matching
}

export const navigationLinks: NavLink[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, matchStartsWith: true },
  { href: '/aid-access', label: 'Medicines', icon: Pill, matchStartsWith: true },
  { href: '/therapy', label: 'Therapy Services', icon: Users, matchStartsWith: true },
  { href: '/history', label: 'History & Summaries', icon: History, matchStartsWith: true },
];

export const authLinks: NavLink[] = [
  { href: '/login', label: 'Login', icon: LayoutDashboard },
  { href: '/register', label: 'Register', icon: Users },
];
