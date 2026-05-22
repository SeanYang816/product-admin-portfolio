import { products } from "../data/products";
import { formatProductPrice } from "../utils/format-product-price";

export function ProductSummaryCards() {
  const totalProducts = products.length;

  const totalValue = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded border p-6">
        <p className="text-sm text-gray-500">Total Products</p>
        <p className="mt-2 text-3xl font-bold">{totalProducts}</p>
      </div>

      <div className="rounded border p-6">
        <p className="text-sm text-gray-500">Total Inventory Value</p>
        <p className="mt-2 text-3xl font-bold">
          {formatProductPrice(totalValue)}
        </p>
      </div>
    </div>
  );
}
