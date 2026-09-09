import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { getAllProducts, getProduct } from "@/services/catalogue";

const categoryLabel: Record<string, string> = {
  clothing: "Clothing",
  shoes: "Shoes",
  accessories: "Accessories",
};

export function generateStaticParams() {
  return (getAllProducts() as Product[]).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug) as Product | undefined;
  if (!product) return { title: "Product" };
  return { title: product.name };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug) as Product | undefined;
  if (!product) notFound();

  const gallery = product.images?.length ? product.images : [product.image];

  return (
    <div className="mx-auto max-w-shell px-5 py-10">
      <p className="text-xs text-neutral-500">
        <Link href="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/c/${product.category}`} className="hover:text-gold">
          {categoryLabel[product.category] ?? product.category}
        </Link>
      </p>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line bg-black">
            <Image
              src={gallery[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded border border-line bg-black"
                >
                  <Image
                    src={src}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="eyebrow">{categoryLabel[product.category] ?? product.category}</p>
          <h1 className="mt-3 font-display text-3xl font-black text-white md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-gold">
            {product.price == null ? "Price to be confirmed" : `R ${(product.price / 100).toFixed(2)}`}
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
            {product.description}
          </p>

          {/* Placeholder selectors — not yet wired (Phase 1) */}
          <div className="mt-8 space-y-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Colour
              </p>
              <span className="inline-block rounded border border-dashed border-line px-3 py-1.5 text-xs text-neutral-500">
                To be confirmed
              </span>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Size
              </p>
              <span className="inline-block rounded border border-dashed border-line px-3 py-1.5 text-xs text-neutral-500">
                To be confirmed
              </span>
            </div>
          </div>

          <button
            type="button"
            disabled
            className="mt-9 w-full cursor-not-allowed rounded-full border border-line bg-surface py-3.5 text-sm font-semibold text-neutral-500 sm:w-auto sm:px-12"
          >
            Add to cart — coming soon
          </button>

          <p className="mt-4 text-xs text-neutral-600">
            Cart, sizes, colours and checkout arrive in a later phase.
          </p>
        </div>
      </div>
    </div>
  );
}
