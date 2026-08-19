import SimplePage from "@/components/SimplePage";
import { site } from "@/lib/products";

export const metadata = {
  title: "Privacy Policy",
  description: "How Loom & Co. collects, stores and uses customer data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SimplePage eyebrow="Legal" title="Privacy Policy">
      <p>
        We collect the information needed to take an order and ship it: name, address,
        contact details and payment confirmation. We don&apos;t sell customer data to third
        parties.
      </p>
      <h2>What we store</h2>
      <p>
        Order history, saved addresses if you create an account, and the contents of your
        cart or wishlist — the latter two are kept in your browser, not our servers.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about your data can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p className="text-[13px]">
        This is placeholder copy pending a full legal review — do not treat it as a final
        policy.
      </p>
    </SimplePage>
  );
}
