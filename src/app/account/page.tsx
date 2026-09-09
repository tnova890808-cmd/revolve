import type { Metadata } from "next";
import Link from "next/link";
import InfoLayout, { InfoBlock } from "@/components/InfoLayout";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Revolve account.",
};

export default function AccountPage() {
  return (
    <InfoLayout
      eyebrow="Members"
      title="Your account"
      intro="Accounts, order history and order tracking are on the way."
    >
      <InfoBlock heading="Coming soon">
        <p>
          Sign in, saved addresses, order history and tracking arrive alongside secure checkout in an
          upcoming release. Join the newsletter to be notified the moment accounts go live.
        </p>
        <p className="pt-2">
          <Link href="/shop" className="text-gold underline-offset-4 hover:underline">
            Continue shopping →
          </Link>
        </p>
      </InfoBlock>
    </InfoLayout>
  );
}
