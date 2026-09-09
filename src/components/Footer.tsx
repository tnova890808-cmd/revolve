import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { InstagramIcon, TiktokIcon, XIcon } from "@/components/icons";

const cols = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/c/clothing", label: "Clothing" },
      { href: "/c/shoes", label: "Shoes" },
      { href: "/c/accessories", label: "Accessories" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { href: "/shipping-returns", label: "Shipping & Returns" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact us" },
      { href: "/account", label: "My account" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Revolve" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink-2">
      {/* Newsletter band */}
      <div className="border-b border-line">
        <div className="shell grid gap-6 py-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Join the movement</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white md:text-3xl">
              Be first to the next drop.
            </h2>
            <p className="mt-2 max-w-md text-sm text-neutral-400">
              Sign up for early access to new arrivals, campaigns and members-only releases.
            </p>
          </div>
          <div className="md:justify-self-end md:w-full md:max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="shell grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-black uppercase tracking-brand text-white">
            REVOLVE<span className="text-gold">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
            Clothing, footwear and lifestyle. Born in Mzansi, built for everyday — from our streets to the world.
          </p>
          <p className="eyebrow mt-5">Move different · Est. 2024</p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: TiktokIcon, label: "TikTok" },
              { Icon: XIcon, label: "X" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-neutral-300 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide2 text-neutral-500">
              {col.title}
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Revolve. All rights reserved. Proudly South African.</span>
          <span>Preview store · pricing & checkout coming soon</span>
        </div>
      </div>
    </footer>
  );
}
