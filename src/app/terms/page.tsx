import type { Metadata } from "next";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Revolve terms of service.",
};

export default function TermsPage() {
  return (
    <InfoLayout
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms cover use of the Revolve website. Full commercial terms will accompany the launch of online ordering."
    >
      <InfoBlock heading="Using this site">
        <p>This is a preview of the Revolve store. Product information, pricing, sizes and availability are indicative and subject to change before online ordering launches.</p>
      </InfoBlock>
      <InfoBlock heading="Intellectual property">
        <p>The Revolve name, logo, imagery and content are the property of Revolve and may not be used without permission.</p>
      </InfoBlock>
      <InfoBlock heading="Changes">
        <p>We may update these terms as the store evolves. The current version will always be available here.</p>
      </InfoBlock>
    </InfoLayout>
  );
}
