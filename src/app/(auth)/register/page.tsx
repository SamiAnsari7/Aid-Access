"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { UserRole } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const userRoles: UserRole[] = ['Patient', 'Caregiver', 'Therapist'];

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for registration logic
    toast({
      title: "Registration Successful (Mock)",
      description: "You can now log in.",
    });
    router.push('/login');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Register for MediPath</CardTitle>
        <CardDescription>Create an account to access AI-powered medical aid.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="30" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact (Phone)</Label>
              <Input id="contact" placeholder="123-456-7890" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location (City, Country)</Label>
            <Input id="location" placeholder="New York, USA" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="user-type">User Type</Label>
            <Select name="userType" required>
              <SelectTrigger id="user-type">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                {userRoles.map(role => (
                  <SelectItem key={role} value={role}>{role}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full">Create Account</Button>
          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline text-primary hover:text-primary/80">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
