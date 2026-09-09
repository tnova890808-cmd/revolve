import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";
import { getAllProducts, getProduct, getProductsByCategory } from "@/services/catalogue";
import { categoryLabel, formatPrice } from "@/lib/format";

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

const details = [
  {
    q: "Product details",
    a: "Premium Revolve piece finished to last. Full specification — materials, fit and care — is being confirmed and will appear here at launch.",
  },
  {
    q: "Shipping",
    a: "Nationwide delivery across South Africa. Delivery options and fees are being finalised and will be shown at checkout in an upcoming release.",
  },
  {
    q: "Returns",
    a: "Easy returns on unworn items. Our full returns policy will be published before checkout goes live.",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug) as Product | undefined;
  if (!product) notFound();

  const gallery = product.images?.length ? product.images : [product.image];
  const related = (getProductsByCategory(product.category) as Product[])
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="shell py-8 md:py-12">
      <p className="text-xs text-neutral-500">
        <Link href="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/c/${product.category}`} className="hover:text-gold">
          {categoryLabel[product.category] ?? product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-300">{product.name}</span>
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <ProductGallery images={gallery} name={product.name} />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">{categoryLabel[product.category] ?? product.category}</p>
          <h1 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-gold">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">{product.description}</p>

          {/* Colour (placeholder) */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide2 text-neutral-300">Colour</span>
              <span className="text-xs text-neutral-500">Confirmed at launch</span>
            </div>
            <div className="flex gap-2">
              {["#0a0a0b", "#f5f4f1", "#4b5320"].map((c) => (
                <span
                  key={c}
                  title="Colour to be confirmed"
                  className="h-8 w-8 rounded-full border border-line opacity-50"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Size (placeholder) */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide2 text-neutral-300">Size</span>
              <span className="text-xs text-neutral-500">Sizing coming soon</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <span
                  key={s}
                  className="grid h-10 min-w-[2.5rem] cursor-not-allowed place-items-center rounded border border-dashed border-line px-3 text-sm text-neutral-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <AddToCart product={product} />

          {/* Details accordions */}
          <div className="mt-10 divide-y divide-line border-y border-line">
            {details.map((d) => (
              <details key={d.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                  {d.q}
                  <span className="text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{d.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-2xl font-extrabold text-white">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
