"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { categoryLabel } from "@/lib/format";
import { CloseIcon, PlusIcon, MinusIcon, BagIcon } from "@/components/icons";

export default function CartDrawer() {
  const { lines, count, isOpen, close, remove, setQty } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <div className={isOpen ? "fixed inset-0 z-[80]" : "pointer-events-none fixed inset-0 z-[80]"}>
      {/* Scrim */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ink-2 shadow-card transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-2">
            <BagIcon className="text-gold" />
            <h2 className="font-display text-sm font-bold uppercase tracking-brand text-white">
              Your bag ({count})
            </h2>
          </div>
          <button onClick={close} aria-label="Close bag" className="text-neutral-400 hover:text-white">
            <CloseIcon />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <BagIcon className="h-8 w-8 text-neutral-600" />
            <p className="mt-4 font-display text-lg font-bold text-white">Your bag is empty</p>
            <p className="mt-2 text-sm text-neutral-400">Add pieces from the collection to get started.</p>
            <button onClick={close} className="btn-gold mt-6">Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {lines.map((l) => (
                  <li key={l.id} className="flex gap-3">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded border border-line bg-black">
                      <Image src={l.image} alt={l.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">{l.name}</p>
                          <p className="text-xs uppercase tracking-wider text-neutral-500">
                            {categoryLabel[l.category] ?? l.category}
                          </p>
                        </div>
                        <button
                          onClick={() => remove(l.id)}
                          className="text-xs text-neutral-500 hover:text-gold"
                          aria-label={`Remove ${l.name}`}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-full border border-line">
                          <button
                            onClick={() => setQty(l.id, l.qty - 1)}
                            className="grid h-8 w-8 place-items-center text-neutral-300 hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon />
                          </button>
                          <span className="w-6 text-center text-sm tabular-nums text-white">{l.qty}</span>
                          <button
                            onClick={() => setQty(l.id, l.qty + 1)}
                            className="grid h-8 w-8 place-items-center text-neutral-300 hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                        <span className="text-xs font-medium text-gold">Price TBC</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-line px-5 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">Subtotal</span>
                <span className="font-semibold text-white">Confirmed at checkout</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                Pricing, delivery and secure checkout arrive in an upcoming release.
              </p>
              <button
                disabled
                className="btn mt-4 w-full cursor-not-allowed bg-panel-2 text-neutral-500"
              >
                Checkout — coming soon
              </button>
              <Link
                href="/shop"
                onClick={close}
                className="mt-2 block text-center text-xs text-neutral-400 underline-offset-4 hover:text-gold hover:underline"
              >
                Continue shopping
              </Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
