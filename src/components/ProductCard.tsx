import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { categoryLabel, formatPrice } from "@/lib/format";

export default function ProductCard({
  product,
  badge,
  priority = false,
}: {
  product: Product;
  badge?: string;
  priority?: boolean;
}) {
  const gallery = product.images?.length ? product.images : [product.image];
  const hover = gallery[1];

  return (
    <Link href={`/p/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-panel">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] ${
            hover ? "group-hover:opacity-0" : ""
          }`}
        />
        {hover && (
          <Image
            src={hover}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        )}

        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide2 text-gold backdrop-blur">
            {badge}
          </span>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="block rounded-full bg-cream py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-black">
            View product
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">{product.name}</h3>
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            {categoryLabel[product.category] ?? product.category}
          </p>
        </div>
        <span className="shrink-0 text-xs font-medium text-gold">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
