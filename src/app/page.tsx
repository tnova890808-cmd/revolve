import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product, Category } from "@/lib/types";
import { getAllProducts, getCategories } from "@/services/catalogue";

const values = [
  { t: "Born in Mzansi", d: "Made for our people." },
  { t: "Street approved", d: "Built for everyday." },
  { t: "Quality you can feel", d: "Style that lasts." },
  { t: "Fair prices", d: "Premium feel." },
];

export default function HomePage() {
  const products = getAllProducts() as Product[];
  const categories = getCategories() as Category[];
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-black">
        <div className="mx-auto flex max-w-shell flex-col items-center px-5 py-20 text-center md:py-28">
          <Image
            src="/images/revolve/branding/1000825605.jpg"
            alt="Revolve — Move Different"
            width={440}
            height={440}
            priority
            className="h-auto w-56 md:w-72"
          />
          <p className="eyebrow mt-8">From our streets to the world</p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-black leading-tight text-white text-balance md:text-5xl">
            Clothing, footwear &amp; lifestyle for those who move different.
          </h1>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/shop"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold-soft"
            >
              Shop the range
            </Link>
            <Link
              href="/c/accessories"
              className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-gold hover:text-gold"
            >
              Accessories
            </Link>
          </div>
        </div>
      </section>

      {/* Preview notice */}
      <div className="border-b border-line bg-surface">
        <p className="mx-auto max-w-shell px-5 py-3 text-center text-xs text-neutral-400">
          Preview store · final prices, sizes and colours are being confirmed and shown as placeholders for now.
        </p>
      </div>

      {/* Featured */}
      <section className="mx-auto max-w-shell px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">New in</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              Featured pieces
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-neutral-300 hover:text-gold">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-shell px-5 pb-16">
        <p className="eyebrow">Browse</p>
        <h2 className="mt-2 mb-8 font-display text-2xl font-extrabold text-white md:text-3xl">
          Shop by category
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/c/${c.slug}`}
              className="group flex items-center justify-between rounded-lg border border-line bg-surface px-6 py-8 transition-colors hover:border-gold/60"
            >
              <div>
                <p className="font-display text-xl font-bold text-white">{c.name}</p>
                <p className="mt-1 text-sm text-neutral-400">{c.description}</p>
              </div>
              <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section className="border-t border-line bg-black">
        <div className="mx-auto grid max-w-shell grid-cols-2 gap-px bg-line md:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="bg-black px-6 py-10">
              <p className="font-display text-base font-bold text-gold">{v.t}</p>
              <p className="mt-1 text-sm text-neutral-400">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
