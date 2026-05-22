'use client';

import { useRouter } from 'next/navigation';

type DeleteProductButtonProps = {
  productId: string;
};

export function DeleteProductButton({ productId }: DeleteProductButtonProps) {
  const router = useRouter();

  function handleDelete() {
    const confirmed = confirm('Are you sure you want to delete this product?');

    if (!confirmed) return;

    console.log('Delete product:', productId);

    alert('Product deleted.');

    router.push('/admin/products');
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Delete Product
    </button>
  );
}
