import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Product, Category } from "@/lib/types";
import {
  getCategories,
  getCategory,
  getProductsByCategory,
} from "@/services/catalogue";

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
  return {
    title: category.name,
    description: category.description,
  };
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
    <div className="mx-auto max-w-shell px-5 py-14">
      <p className="text-xs text-neutral-500">
        <Link href="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-300">{category.name}</span>
      </p>
      <h1 className="mt-3 font-display text-3xl font-black text-white md:text-4xl">
        {category.name}
      </h1>
      <p className="mt-3 max-w-xl text-sm text-neutral-400">{category.description}</p>

      {products.length === 0 ? (
        <div className="mt-12 rounded-lg border border-dashed border-line bg-surface px-6 py-16 text-center">
          <p className="font-display text-lg font-bold text-white">Dropping soon</p>
          <p className="mt-2 text-sm text-neutral-400">
            The {category.name.toLowerCase()} line is on its way. Check back shortly.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block rounded-full border border-line px-6 py-2.5 text-sm font-medium text-neutral-200 hover:border-gold hover:text-gold"
          >
            Browse everything
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
