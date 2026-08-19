import SimplePage from "@/components/SimplePage";
import { site } from "@/lib/products";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <SimplePage eyebrow="Support" title="Contact Us">
      <p>
        Questions about an order, a colour, or a size — write to us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll reply within one business
        day.
      </p>
    </SimplePage>
  );
}
