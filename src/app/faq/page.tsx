import type { Metadata } from "next";
import InfoLayout from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Revolve.",
};

const faqs = [
  {
    q: "Can I buy online right now?",
    a: "This is a preview of the Revolve store. You can browse the full range and add pieces to your bag. Pricing, sizes, colours and secure checkout are being finalised and arrive in an upcoming release.",
  },
  {
    q: "Why do some products show “Price on request”?",
    a: "Final pricing is still being confirmed. Rather than show placeholder amounts, we mark them clearly until they’re locked in.",
  },
  {
    q: "Where do you ship?",
    a: "Nationwide across South Africa. Delivery options and fees will appear at checkout when ordering goes live.",
  },
  {
    q: "How do I hear about new drops?",
    a: "Join the newsletter at the bottom of any page, or follow us on Instagram, TikTok and X.",
  },
];

export default function FaqPage() {
  return (
    <InfoLayout eyebrow="Help" title="FAQ" intro="Answers to the questions we hear most.">
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-white">
              {f.q}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">{f.a}</p>
          </details>
        ))}
      </div>
    </InfoLayout>
  );
}
