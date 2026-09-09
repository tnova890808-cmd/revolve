"use client";

import { useEffect, useState } from "react";

const messages = [
  "MOVE DIFFERENT — from our streets to the world",
  "New drops landing soon · Born in Mzansi",
  "One brand. One culture. One Revolve.",
];

export default function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % messages.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-black text-neutral-300">
      <div className="shell flex h-9 items-center justify-center overflow-hidden">
        <p
          key={i}
          className="animate-fadeIn text-center text-[11px] font-medium uppercase tracking-wide2 text-neutral-400"
        >
          <span className="text-gold">✦</span>{" "}
          <span className="align-middle">{messages[i]}</span>
        </p>
      </div>
    </div>
  );
}
