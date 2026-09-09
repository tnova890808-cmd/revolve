import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";
import { getAllProducts } from "@/services/catalogue";

export const metadata: Metadata = {
  title: "Shop — All Products",
  description: "Browse the full Revolve range — clothing, footwear and accessories.",
};

export default function ShopPage() {
  const products = getAllProducts() as Product[];

  return (
    <div className="mx-auto max-w-shell px-5 py-14">
      <p className="eyebrow">All products</p>
      <h1 className="mt-2 font-display text-3xl font-black text-white md:text-4xl">Shop</h1>
      <p className="mt-3 max-w-xl text-sm text-neutral-400">
        {products.length} pieces. Prices, sizes and colours are being finalised — shown as placeholders for now.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
