import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { CreateProductButton } from './CreateProductButton';
import { ProductSearchInput } from './ProductSearchInput.client';

type ProductListProps = {
  query: string;
};

export function ProductList({ query }: ProductListProps) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <CreateProductButton />
      </div>

      <div className="mb-6">
        <ProductSearchInput />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded border border-dashed p-10 text-center">
          <h2 className="text-xl font-semibold">No products found</h2>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
