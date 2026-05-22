import { notFound } from "next/navigation";
import { getProductById } from "@/features/products/data/products";
import { ProductForm } from "@/features/products/components/ProductForm.client";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Edit Product</h1>

      <ProductForm
        initialValues={{
          name: product.name,
          price: product.price,
        }}
      />
    </div>
  );
}
