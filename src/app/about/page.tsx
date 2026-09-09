import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "About",
  description: "Revolve — born in Mzansi, built for everyday. Our story.",
};

export default function AboutPage() {
  return (
    <InfoLayout
      eyebrow="Our story"
      title="Born in Mzansi"
      intro="Revolve is a South African clothing, footwear and lifestyle brand for people who move different — premium quality at township prices, from our streets to the world."
    >
      <InfoBlock heading="One brand. One culture.">
        <p>
          Revolve started with a simple idea: build a homegrown streetwear label that carries our
          culture with pride and holds its own anywhere in the world. Every piece is designed to move
          with you — from the daily grind to the moments that matter.
        </p>
      </InfoBlock>
      <InfoBlock heading="Quality you can feel">
        <p>
          Premium prints, considered finishing and materials built to last. We sweat the details so the
          pieces you wear every day keep looking and feeling their best.
        </p>
      </InfoBlock>
      <InfoBlock heading="Move different">
        <p>
          This is more than clothing — it’s a movement. Real people, real culture, future focused.
          Welcome to Revolve.
        </p>
        <p className="pt-2">
          <Link href="/shop" className="text-gold underline-offset-4 hover:underline">
            Explore the collection →
          </Link>
        </p>
      </InfoBlock>
    </InfoLayout>
  );
}
