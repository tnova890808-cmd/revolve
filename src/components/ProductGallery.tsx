"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : [];

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      {list.length > 1 && (
        <div className="flex gap-3 overflow-x-auto no-scrollbar sm:flex-col">
          {list.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-square h-16 w-16 shrink-0 overflow-hidden rounded border bg-black transition-colors sm:h-20 sm:w-20 ${
                i === active ? "border-gold" : "border-line hover:border-neutral-500"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-black">
        <Image
          key={active}
          src={list[active]}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="animate-fadeIn object-cover"
        />
      </div>
    </div>
  );
}
