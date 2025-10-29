'use client';

import { MainLayout } from '@/components/MainLayout';
import { FirebaseClientProvider } from '@/firebase';


export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <MainLayout>{children}</MainLayout>
    </FirebaseClientProvider>
  );
}
