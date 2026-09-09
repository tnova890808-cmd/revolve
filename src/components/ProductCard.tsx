import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

const categoryLabel: Record<string, string> = {
  clothing: "Clothing",
  shoes: "Shoes",
  accessories: "Accessories",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/p/${product.id}`}
      className="group block overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-gold/60"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{product.name}</p>
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            {categoryLabel[product.category] ?? product.category}
          </p>
        </div>
        <span className="shrink-0 text-xs font-medium text-gold">
          {product.price == null ? "Price TBC" : `R ${(product.price / 100).toFixed(2)}`}
        </span>
      </div>
    </Link>
  );
}
