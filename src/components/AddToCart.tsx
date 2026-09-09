"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import type { Product } from "@/lib/types";
import { PlusIcon, MinusIcon, BagIcon } from "@/components/icons";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function onAdd() {
    add(
      {
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="mt-8">
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full border border-line">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid h-11 w-11 place-items-center text-neutral-300 hover:text-gold"
            aria-label="Decrease quantity"
          >
            <MinusIcon />
          </button>
          <span className="w-8 text-center text-sm tabular-nums text-white">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="grid h-11 w-11 place-items-center text-neutral-300 hover:text-gold"
            aria-label="Increase quantity"
          >
            <PlusIcon />
          </button>
        </div>

        <button onClick={onAdd} className="btn-gold flex-1">
          <BagIcon className="h-4 w-4" />
          {added ? "Added to bag" : "Add to bag"}
        </button>
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        Secure checkout &amp; delivery arrive in an upcoming release. Final price confirmed at launch.
      </p>
    </div>
  );
}
