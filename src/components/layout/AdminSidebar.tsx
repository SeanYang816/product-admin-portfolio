import { AdminNavLink } from '@/components/layout/AdminNavLink.client';

export default function AdminSidebar() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-6">
        <h2 className="mb-6 text-2xl font-bold">Admin Panel</h2>

        <nav className="flex flex-col gap-2">
          <AdminNavLink href="/admin">Dashboard</AdminNavLink>
          <AdminNavLink href="/admin/products">Products</AdminNavLink>
        </nav>
      </aside>
    </div>
  );
}
