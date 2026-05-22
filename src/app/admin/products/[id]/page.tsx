import { notFound } from "next/navigation";
import { getProductById } from "@/features/products/data/products";
import ProductDetail from "@/features/products/components/ProductDetail";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  await delay(1000);

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Product Detail</h1>

      <ProductDetail product={product} />
    </div>
  );
}
