import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "@/components/icons";
import type { Product } from "@/lib/types";
import { getAllProducts, getProductsByCategory } from "@/services/catalogue";

const marquee = [
  "MOVE DIFFERENT",
  "BORN IN MZANSI",
  "FROM OUR STREETS TO THE WORLD",
  "ONE BRAND · ONE CULTURE",
  "EST. 2024",
];

const values = [
  { t: "Born in Mzansi", d: "Designed and made for our people." },
  { t: "Street approved", d: "Built for everyday movement." },
  { t: "Quality you feel", d: "Premium finishes that last." },
  { t: "Fair prices", d: "Township prices, premium feel." },
];

function firstImage(list: Product[], fallback: string) {
  return list[0]?.image ?? fallback;
}

export default function HomePage() {
  const products = getAllProducts() as Product[];
  const shoes = getProductsByCategory("shoes") as Product[];
  const accessories = getProductsByCategory("accessories") as Product[];
  const newArrivals = products.slice(0, 4);
  const featured = products.slice(0, 8);

  const collections = [
    {
      name: "Clothing",
      href: "/c/clothing",
      image: "/images/revolve/branding/1000825597.jpg",
      tag: "Dropping soon",
    },
    {
      name: "Shoes",
      href: "/c/shoes",
      image: firstImage(shoes, "/images/revolve/shoes/1000825611.jpg"),
      tag: `${shoes.length} styles`,
    },
    {
      name: "Accessories",
      href: "/c/accessories",
      image: firstImage(accessories, "/images/revolve/accessories/1000825657.jpg"),
      tag: `${accessories.length} pieces`,
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-black">
        <div className="shell grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-fadeUp">
            <p className="eyebrow">Premium streetwear · South Africa</p>
            <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Move
              <br />
              Different<span className="text-gold">.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-300">
              Clothing, footwear and lifestyle for those who move different. Born in Mzansi, built for
              everyday — from our streets to the world.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/shop" className="btn-gold">
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/c/accessories" className="btn-ghost">
                New in accessories
              </Link>
            </div>
          </div>

          <div className="relative animate-fadeIn">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-panel shadow-card">
              <Image
                src="/images/revolve/shoes/1000825611.jpg"
                alt="Revolve footwear"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide2 text-gold backdrop-blur">
                The footwear collection
              </div>
            </div>
            <div className="pointer-events-none absolute -right-3 -top-3 hidden h-24 w-24 rounded-tr-2xl border-r-2 border-t-2 border-gold/60 md:block" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line bg-ink-2 py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="mx-6 text-xs font-semibold uppercase tracking-wide2 text-neutral-500"
            >
              {m} <span className="ml-6 text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* COLLECTIONS */}
      <section className="shell py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Browse</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white md:text-4xl">
              Shop by collection
            </h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-medium text-neutral-300 hover:text-gold sm:block">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-panel"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide2 text-gold">{c.tag}</p>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="font-display text-2xl font-black text-white">{c.name}</h3>
                  <span className="translate-x-0 text-gold transition-transform group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="shell pb-16 md:pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white md:text-4xl">New arrivals</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-neutral-300 hover:text-gold">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} badge="New" priority={i < 2} />
          ))}
        </div>
      </section>

      {/* EDITORIAL / CAMPAIGN */}
      <section className="relative border-y border-line">
        <div className="relative min-h-[70vh] w-full overflow-hidden">
          <Image
            src="/images/revolve/branding/1000825597.jpg"
            alt="Revolve campaign — from our streets to the world"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="shell relative flex min-h-[70vh] items-center">
            <div className="max-w-xl animate-fadeUp py-16">
              <p className="eyebrow">The campaign</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-white text-balance md:text-5xl">
                From our streets to the world.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-300">
                One brand. One culture. One Revolve. Every piece is designed to move with you — quality
                you can feel, style that lasts.
              </p>
              <Link href="/shop" className="btn-light mt-8">
                Explore the range <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="shell py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Editors’ picks</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-white md:text-4xl">Featured</h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-neutral-300 hover:text-gold">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-line bg-ink-2">
        <div className="shell grid grid-cols-2 gap-px md:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="px-2 py-10 md:px-4">
              <p className="font-display text-base font-bold text-gold">{v.t}</p>
              <p className="mt-1 text-sm text-neutral-400">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
