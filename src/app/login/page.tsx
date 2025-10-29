
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
import { User, Briefcase, GraduationCap, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type Role = 'admin' | 'student' | 'teacher';

const RoleSelection = ({ onSelectRole }: { onSelectRole: (role: Role) => void }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="w-full max-w-md shadow-2xl bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Select Your Role</CardTitle>
        <CardDescription>Please choose how you want to log in.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full justify-start text-base py-6" size="lg" onClick={() => onSelectRole('admin')}>
          <User className="mr-3 h-5 w-5" />
          Admin
        </Button>
        <Button className="w-full justify-start text-base py-6" size="lg" variant="secondary" onClick={() => onSelectRole('student')}>
          <GraduationCap className="mr-3 h-5 w-5" />
          Student
        </Button>
        <Button className="w-full justify-start text-base py-6" size="lg" variant="secondary" onClick={() => onSelectRole('teacher')}>
          <Briefcase className="mr-3 h-5 w-5" />
          Teacher
        </Button>
      </CardContent>
    </Card>
  </motion.div>
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
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-md shadow-2xl bg-background/80 backdrop-blur-sm">
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
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to role selection
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="w-full max-w-md z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="inline-block">
            <Logo className="h-10 w-auto" />
          </Link>
        </motion.div>
        
        {selectedRole === 'admin' ? (
          <AdminLogin onBack={() => setSelectedRole(null)} />
        ) : (
          <RoleSelection onSelectRole={handleSelectRole} />
        )}

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Button variant="ghost" asChild>
                <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
        </motion.div>
      </div>
    </div>
  );
}
