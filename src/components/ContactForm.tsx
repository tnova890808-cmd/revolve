"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="rounded-lg border border-gold/40 bg-panel px-4 py-3 text-sm text-gold">
        Thanks for reaching out. Our team will be in touch once support channels go live.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true); // Preview only — no message is sent or stored.
      }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          aria-label="Your name"
          className="rounded-lg border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          className="rounded-lg border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold focus:outline-none"
        />
      </div>
      <textarea
        required
        rows={5}
        placeholder="How can we help?"
        aria-label="Message"
        className="rounded-lg border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold focus:outline-none"
      />
      <button type="submit" className="btn-gold w-full sm:w-auto sm:justify-self-start">
        Send message
      </button>
      <p className="text-xs text-neutral-500">Preview form — messaging goes live with our customer-care launch.</p>
    </form>
  );
}
