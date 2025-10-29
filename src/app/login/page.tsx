'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from '@/components/Logo';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type Role = 'admin' | 'student' | 'teacher';

const RoleSelection = ({ onSelectRole }: { onSelectRole: (role: Role) => void }) => (
  <Card>
    <CardHeader>
      <CardTitle className="font-headline text-2xl">Select Your Role</CardTitle>
      <CardDescription>Please choose how you want to log in.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <Button className="w-full justify-start" size="lg" onClick={() => onSelectRole('admin')}>
        <User className="mr-2 h-5 w-5" />
        Admin
      </Button>
      <Button className="w-full justify-start" size="lg" variant="secondary" onClick={() => onSelectRole('student')}>
        <GraduationCap className="mr-2 h-5 w-5" />
        Student
      </Button>
      <Button className="w-full justify-start" size="lg" variant="secondary" onClick={() => onSelectRole('teacher')}>
        <Briefcase className="mr-2 h-5 w-5" />
        Teacher
      </Button>
    </CardContent>
  </Card>
);

const AdminLogin = ({ onBack }: { onBack: () => void }) => {
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({ title: 'Login successful!' });
      router.push('/admin');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: error.message || 'Please check your credentials and try again.',
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
        <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="admin@dakitechs.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="link" className="w-full" onClick={onBack}>
              Back to role selection
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleSelectRole = (role: Role) => {
    if (role === 'student' || role === 'teacher') {
      window.location.href = 'https://dakitech.moodiy.com/';
    } else {
      setSelectedRole(role);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary/5 p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Link href="/" className="inline-block">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        
        {selectedRole === 'admin' ? (
          <AdminLogin onBack={() => setSelectedRole(null)} />
        ) : (
          <RoleSelection onSelectRole={handleSelectRole} />
        )}
      </div>
    </div>
  );
}
