'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  validateProductForm,
  ProductFormErrors,
} from '@/features/products/utils/validate-product-form';

type ProductFormProps = {
  initialValues?: {
    name: string;
    price: number;
  };
};

export function ProductForm({ initialValues }: ProductFormProps) {
  const router = useRouter();
  const [name, setName] = useState(initialValues?.name ?? '');
  const [price, setPrice] = useState(initialValues?.price?.toString() ?? '');
  const [errors, setErrors] = useState<ProductFormErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateProductForm({
      name,
      price,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log({
      name,
      price: Number(price),
    });

    alert(initialValues ? 'Product updated.' : 'Product created.');

    router.push('/admin/products');
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="mb-1 block font-medium">Product Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded border px-3 py-2"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="mb-1 block font-medium">Price</label>
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="w-full rounded border px-3 py-2"
          type="number"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}
      </div>

      <button className="rounded bg-black px-4 py-2 text-white">
        {initialValues ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
