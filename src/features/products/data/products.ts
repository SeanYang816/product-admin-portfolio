import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 16",
    price: 35000,
  },
  {
    id: "2",
    name: "MacBook Pro",
    price: 72000,
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
