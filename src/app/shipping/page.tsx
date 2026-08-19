import SimplePage from "@/components/SimplePage";
import { site } from "@/lib/products";

export const metadata = { title: "Shipping & Delivery Policy" };

export default function ShippingPage() {
  return (
    <SimplePage eyebrow="Support" title="Shipping & Delivery Policy">
      <p>{site.announcement}. Below that threshold, a flat shipping rate applies at checkout.</p>
      <h2>Delivery times</h2>
      <p>
        Most orders ship within two business days and arrive within five to ten business days,
        depending on destination.
      </p>
      <h2>International orders</h2>
      <p>
        Import duties and taxes, where applicable, are the recipient&apos;s responsibility unless
        stated otherwise at checkout.
      </p>
      <p className="text-[13px]">
        This is placeholder copy pending confirmed carrier rates and timelines.
      </p>
    </SimplePage>
  );
}
