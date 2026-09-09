import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-shell px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="wordmark text-xl text-white">
              REVOLVE<span className="text-gold">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
              Move different. Born in Mzansi, built for everyday — from our streets to the world.
            </p>
            <p className="eyebrow mt-5">Est. 2024 · South Africa</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Shop
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link href="/shop" className="hover:text-gold">All products</Link></li>
              <li><Link href="/c/clothing" className="hover:text-gold">Clothing</Link></li>
              <li><Link href="/c/shoes" className="hover:text-gold">Shoes</Link></li>
              <li><Link href="/c/accessories" className="hover:text-gold">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Brand
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>One brand. One culture.</li>
              <li>One Revolve.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Revolve. All rights reserved.</span>
          <span>Preview store · Phase 1</span>
        </div>
      </div>
    </footer>
  );
}
