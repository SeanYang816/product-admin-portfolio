'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function ProductSearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get('query') ?? '';

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    router.push(`/admin/products?${params.toString()}`);
  }

  return (
    <input
      value={query}
      onChange={(event) => handleChange(event.target.value)}
      placeholder="Search products..."
      className="w-full rounded border px-3 py-2"
    />
  );
}
