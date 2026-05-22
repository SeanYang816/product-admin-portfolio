import { ProductForm } from "@/features/products/components/ProductForm.client";

export default function NewProductPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Create Product</h1>

      <ProductForm />
    </div>
  );
}
