import { redirect } from 'next/navigation';

export default function RootPage() {
  // In a real app, you'd check authentication status here
  // and redirect to '/login' if not authenticated.
  redirect('/dashboard');
  
  // Return null or a loading indicator if needed, though redirect should happen server-side.
  return null; 
}
