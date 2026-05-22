import { ProductSummaryCards } from '@/features/products/components/ProductSummaryCards';

export default function AdminPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

      <ProductSummaryCards />
    </div>
  );
}
