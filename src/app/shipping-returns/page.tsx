import type { Metadata } from "next";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Revolve shipping and returns information.",
};

export default function ShippingReturnsPage() {
  return (
    <InfoLayout
      eyebrow="Customer care"
      title="Shipping & Returns"
      intro="Here’s how delivery and returns will work. Exact options, timelines and fees are being finalised and will appear at checkout when online ordering goes live."
    >
      <InfoBlock heading="Delivery">
        <p>Nationwide delivery across South Africa. Courier options, delivery windows and fees are being confirmed and will be shown at checkout.</p>
      </InfoBlock>
      <InfoBlock heading="Returns">
        <p>We’ll offer straightforward returns on unworn items in their original condition. The full returns window and process will be published before checkout launches.</p>
      </InfoBlock>
      <InfoBlock heading="Order tracking">
        <p>Once online ordering is live, you’ll be able to track your order status and delivery from your account.</p>
      </InfoBlock>
      <p className="text-xs text-neutral-500">
        This is a preview store. Pricing, delivery and checkout are part of an upcoming release.
      </p>
    </InfoLayout>
  );
}
