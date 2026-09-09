"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/icons";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true); // Preview only — no data is sent or stored.
  }

  if (done) {
    return (
      <p className="rounded-lg border border-gold/40 bg-panel px-4 py-3 text-sm text-gold">
        You’re on the list. Watch this space for the next drop.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="w-full rounded-full border border-line bg-panel px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-black transition-colors hover:bg-gold-soft"
      >
        <ArrowRight />
      </button>
    </form>
  );
}
