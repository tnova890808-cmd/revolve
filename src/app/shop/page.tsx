import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";
import { getAllProducts, getCategories } from "@/services/catalogue";
import type { Category } from "@/lib/types";

export const metadata: Metadata = {
  title: "Shop — All Products",
  description: "Browse the full Revolve range — clothing, footwear and accessories.",
};

export default function ShopPage() {
  const products = getAllProducts() as Product[];
  const categories = getCategories() as Category[];

  return (
    <div>
      {/* Collection header */}
      <section className="border-b border-line bg-ink-2">
        <div className="shell py-14">
          <p className="eyebrow">The collection</p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Shop all
          </h1>
          <p className="mt-4 max-w-xl text-sm text-neutral-400">
            {products.length} pieces across clothing, footwear and accessories. Pricing, sizes and colours
            are being finalised — shown as placeholders for now.
          </p>

          {/* Category filter chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black">
              All
            </span>
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/c/${c.slug}`}
                className="rounded-full border border-line px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:border-gold hover:text-gold"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 4} />
          ))}
        </div>
      </section>
    </div>
  );
}
