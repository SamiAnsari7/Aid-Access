
// src/components/layout/AppLayout.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { navigationLinks } from '@/constants/navigation';
import { Activity, LogOut, UserCircle } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase'; 
import { signOut } from 'firebase/auth'; 
import { ThemeToggle } from '@/components/shared/ThemeToggle'; // Added import

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push('/login');
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout Failed",
        description: "Could not log you out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const currentUser = auth.currentUser; 

  return (
    <SidebarProvider defaultOpen>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader className="items-center justify-center p-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Activity className="h-7 w-7 text-primary" />
            <span className="group-data-[collapsible=icon]:hidden">Aid Access</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navigationLinks.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === link.href || (link.matchStartsWith && pathname.startsWith(link.href))}
                  tooltip={{ children: link.label, className: "capitalize" }}
                >
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center p-2 h-auto">
                 <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.photoURL || "https://placehold.co/100x100.png"} alt={currentUser?.displayName || "User"} data-ai-hint="user avatar" />
                    <AvatarFallback>{currentUser?.displayName?.charAt(0) || 'AA'}</AvatarFallback>
                  </Avatar>
                <span className="ml-2 group-data-[collapsible=icon]:hidden">{currentUser?.displayName || "User Profile"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" className="w-56">
              <DropdownMenuLabel>{currentUser?.email || "My Account"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Page specific title or breadcrumbs could go here */}
          </div>
          <ThemeToggle /> {/* Added ThemeToggle here */}
        </header>
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
