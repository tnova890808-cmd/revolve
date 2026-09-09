import type { Metadata } from "next";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Revolve handles your information.",
};

export default function PrivacyPage() {
  return (
    <InfoLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your privacy matters to us. This summary explains our approach. A full policy will be published before online ordering and accounts go live."
    >
      <InfoBlock heading="What we collect">
        <p>This preview store does not process payments or create accounts. Anything you type into the newsletter or contact forms is handled in your browser for this preview and is not transmitted to a server.</p>
      </InfoBlock>
      <InfoBlock heading="How we’ll use your data">
        <p>When ordering launches, we’ll collect only what’s needed to process and deliver your order and, with your consent, to send you updates. We won’t sell your personal information.</p>
      </InfoBlock>
      <InfoBlock heading="Contact">
        <p>Questions about privacy? Reach us through the contact page and we’ll respond once support channels are live.</p>
      </InfoBlock>
    </InfoLayout>
  );
}
