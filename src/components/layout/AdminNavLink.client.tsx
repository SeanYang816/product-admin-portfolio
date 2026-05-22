'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AdminNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function AdminNavLink({ href, children }: AdminNavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === '/admin' ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`rounded px-3 py-2 transition ${
        isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
}
