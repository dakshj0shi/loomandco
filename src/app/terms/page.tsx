import SimplePage from "@/components/SimplePage";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <SimplePage eyebrow="Legal" title="Terms & Conditions">
      <p>
        These terms govern your use of the Loom & Co. website and any order placed through it.
        By browsing or buying from us, you agree to the terms below.
      </p>
      <h2>Orders</h2>
      <p>
        Placing an order is an offer to buy, not a confirmed sale — we confirm by email once
        payment has cleared and stock is checked.
      </p>
      <h2>Pricing</h2>
      <p>
        Prices are shown in EUR and include applicable taxes unless stated otherwise at
        checkout. We reserve the right to correct pricing errors before an order ships.
      </p>
      <h2>Content</h2>
      <p>
        Product photography, copy and the Loom & Co. name and logo belong to Loom & Co. and
        may not be reused without permission.
      </p>
      <p className="text-[13px]">
        This is placeholder copy pending a full legal review — do not treat it as final terms.
      </p>
    </SimplePage>
  );
}
