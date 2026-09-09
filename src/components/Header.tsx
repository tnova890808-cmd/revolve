"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import SearchOverlay from "@/components/SearchOverlay";
import {
  SearchIcon,
  UserIcon,
  BagIcon,
  MenuIcon,
  CloseIcon,
  ArrowRight,
} from "@/components/icons";

const nav = [
  { href: "/shop", label: "Shop All" },
  { href: "/c/clothing", label: "Clothing" },
  { href: "/c/shoes", label: "Shoes" },
  { href: "/c/accessories", label: "Accessories" },
];

export default function Header() {
  const { count, open: openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b transition-colors duration-300 ${
          scrolled ? "border-line bg-ink/90 backdrop-blur-md" : "border-transparent bg-ink"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-4">
          {/* Left: mobile menu + desktop nav */}
          <div className="flex flex-1 items-center gap-6">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-neutral-200 hover:text-gold md:hidden"
            >
              <MenuIcon />
            </button>
            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="link-nav">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: logo */}
          <Link
            href="/"
            className="font-display text-xl font-black uppercase tracking-brand text-white md:text-2xl"
          >
            REVOLVE<span className="text-gold">.</span>
          </Link>

          {/* Right: icons */}
          <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-neutral-200 transition-colors hover:text-gold"
            >
              <SearchIcon />
            </button>
            <Link
              href="/account"
              aria-label="Account"
              className="hidden text-neutral-200 transition-colors hover:text-gold sm:block"
            >
              <UserIcon />
            </Link>
            <button
              onClick={openCart}
              aria-label={`Bag, ${count} item${count === 1 ? "" : "s"}`}
              className="relative text-neutral-200 transition-colors hover:text-gold"
            >
              <BagIcon />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-black tabular-nums">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[75] md:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink-2 shadow-card transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="font-display text-lg font-black uppercase tracking-brand text-white">
              REVOLVE<span className="text-gold">.</span>
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-neutral-300 hover:text-white">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line-soft py-4 font-display text-lg font-bold text-white hover:text-gold"
              >
                {item.label}
                <ArrowRight className="text-neutral-600" />
              </Link>
            ))}
            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-4 text-sm font-medium text-neutral-300 hover:text-gold"
            >
              <UserIcon /> Account
            </Link>
          </nav>
          <div className="border-t border-line px-5 py-5">
            <p className="eyebrow">Move different</p>
            <p className="mt-2 text-sm text-neutral-400">Born in Mzansi · Est. 2024</p>
          </div>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
