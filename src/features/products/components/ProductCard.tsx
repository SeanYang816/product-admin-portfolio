import Link from 'next/link';
import type { Product } from '../types/product';
import { formatProductPrice } from '../utils/format-product-price';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/admin/products/${product.id}`}
      className="block rounded border p-4 transition hover:bg-gray-100"
    >
      <h2 className="text-xl font-semibold">{product.name}</h2>

      <p className="text-gray-600">{formatProductPrice(product.price)}</p>
    </Link>
  );
}
