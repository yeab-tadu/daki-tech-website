'use client';

import { MainLayout } from '@/components/MainLayout';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
