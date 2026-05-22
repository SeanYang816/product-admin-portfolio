import Link from "next/link";
import type { Product } from "../types/product";
import { formatProductPrice } from "../utils/format-product-price";
import { DeleteProductButton } from "./DeleteProductButton.client";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="mt-6 rounded border p-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>

      <p className="mt-2 text-gray-600">Product ID: {product.id}</p>

      <p className="mt-2 text-gray-600">{formatProductPrice(product.price)}</p>

      <div className="mt-6 flex gap-3">
        <Link
          href={`/admin/products/${product.id}/edit`}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Edit Product
        </Link>

        <DeleteProductButton productId={product.id} />
      </div>
    </div>
  );
}
