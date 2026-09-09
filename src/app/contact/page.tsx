import type { Metadata } from "next";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Revolve team.",
};

export default function ContactPage() {
  return (
    <InfoLayout
      eyebrow="We’re listening"
      title="Contact us"
      intro="Questions about the brand, a drop or an order? Send us a message. Dedicated customer-care channels are being set up — in the meantime, follow us on socials for the latest."
    >
      <InfoBlock heading="Send a message">
        <ContactForm />
      </InfoBlock>
      <InfoBlock heading="Follow the movement">
        <p>Find us on Instagram, TikTok and X for new drops, campaigns and behind the scenes.</p>
      </InfoBlock>
    </InfoLayout>
  );
}
