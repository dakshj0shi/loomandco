import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Store Locator",
  description: "Loom & Co. sells online only — no physical stores yet.",
  alternates: { canonical: "/store-locator" },
};

export default function StoreLocatorPage() {
  return (
    <SimplePage eyebrow="Visit us" title="Store Locator">
      <p>
        Loom & Co. currently sells online only — no physical stores yet. This page is a
        placeholder for when that changes.
      </p>
    </SimplePage>
  );
}
