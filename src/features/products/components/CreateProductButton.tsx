import Link from "next/link";

export function CreateProductButton() {
  return (
    <Link
      href="/admin/products/new"
      className="rounded bg-black px-4 py-2 text-white"
    >
      Create Product
    </Link>
  );
}
