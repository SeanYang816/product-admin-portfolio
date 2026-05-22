import { ReactNode } from 'react';
import AdminSidebar from '@/components/layout/AdminSidebar';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
