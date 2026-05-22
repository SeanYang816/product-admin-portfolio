import { ProductList } from '@/features/products/components/ProductList';

type ProductsPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { query = '' } = await searchParams;

  return <ProductList query={query} />;
}
