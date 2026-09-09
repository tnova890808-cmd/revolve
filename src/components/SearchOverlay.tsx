"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/services/catalogue";
import type { Product } from "@/lib/types";
import { categoryLabel, formatPrice } from "@/lib/format";
import { SearchIcon, CloseIcon } from "@/components/icons";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const all = useMemo(() => getAllProducts() as Product[], []);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return all.slice(0, 6);
    return all.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        (categoryLabel[p.category] ?? p.category).toLowerCase().includes(term)
    );
  }, [q, all]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative mx-auto mt-0 max-w-shell animate-fadeUp bg-ink-2 px-5 pb-8 pt-6 shadow-card sm:px-8">
        <div className="flex items-center gap-3 border-b border-line pb-4">
          <SearchIcon className="text-gold" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search clothing, shoes, accessories…"
            className="w-full bg-transparent text-lg text-white placeholder:text-neutral-500 focus:outline-none"
            aria-label="Search products"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="text-neutral-400 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <p className="mt-4 text-xs uppercase tracking-wide2 text-neutral-500">
          {q.trim() ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Popular now"}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <Link
              key={p.id}
              href={`/p/${p.id}`}
              onClick={onClose}
              className="group flex items-center gap-3 rounded-lg border border-line-soft bg-panel p-2.5 transition-colors hover:border-gold/50"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded bg-black">
                <Image src={p.image} alt={p.name} fill sizes="56px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{p.name}</p>
                <p className="text-xs text-neutral-500">
                  {categoryLabel[p.category] ?? p.category} · {formatPrice(p.price)}
                </p>
              </div>
            </Link>
          ))}
          {results.length === 0 && (
            <p className="text-sm text-neutral-500">No matches. Try “shoes” or “belt”.</p>
          )}
        </div>
      </div>
    </div>
  );
}
