import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product, Category } from "@/lib/types";
import { getCategories, getCategory, getProductsByCategory } from "@/services/catalogue";

export function generateStaticParams() {
  return (getCategories() as Category[]).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug) as Category | undefined;
  if (!category) return { title: "Category" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug) as Category | undefined;
  if (!category) notFound();

  const products = getProductsByCategory(category.id) as Product[];

  return (
    <div>
      <section className="border-b border-line bg-ink-2">
        <div className="shell py-14">
          <p className="text-xs text-neutral-500">
            <Link href="/shop" className="hover:text-gold">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-300">{category.name}</span>
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-neutral-400">{category.description}</p>
        </div>
      </section>

      <section className="shell py-12">
        {products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line bg-panel px-6 py-20 text-center">
            <p className="eyebrow">Coming soon</p>
            <p className="mt-3 font-display text-2xl font-black text-white">The {category.name.toLowerCase()} line is dropping soon</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
              We’re putting the finishing touches on this collection. Join the movement below to be first
              when it lands.
            </p>
            <Link href="/shop" className="btn-ghost mt-8">Browse everything</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 4} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
