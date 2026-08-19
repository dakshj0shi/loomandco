import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Container } from "@/components/ui";
import { categories, products } from "@/lib/products";

type ShopPageProps = {
  searchParams: Promise<{ c?: string | string[] }>;
};

/**
 * Canonical always points at the unfiltered /shop — category chips are a
 * client-side filter, not distinct content, so they shouldn't compete with
 * the base page for search ranking.
 */
export async function generateMetadata({ searchParams }: ShopPageProps) {
  const { c } = await searchParams;
  const active = typeof c === "string" && categories.includes(c) ? c : undefined;
  return {
    title: active ?? "Shop",
    description: active
      ? `Shop Loom & Co. ${active.toLowerCase()} — handwoven on traditional looms in India.`
      : "The full Loom & Co. collection: handwoven bedsheets, comforters and cushions.",
    alternates: { canonical: "/shop" },
  };
}

export default async function Shop({ searchParams }: ShopPageProps) {
  const { c } = await searchParams;
  const active = typeof c === "string" && categories.includes(c) ? c : undefined;
  const items = active ? products.filter((p) => p.category === active) : products;

  return (
    <Container className="py-14" data-reveal="soft">
      <h1 className="text-3xl md:text-[38px]">{active ?? "All products"}</h1>
      <p className="mt-2 text-muted">
        {items.length} {items.length === 1 ? "product" : "products"}
      </p>

      <nav className="mt-7 flex flex-wrap gap-2">
        <Chip href="/shop" label="All" on={!active} />
        {categories.map((cat) => (
          <Chip key={cat} href={`/shop?c=${cat}`} label={cat} on={cat === active} />
        ))}
      </nav>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </Container>
  );
}

function Chip({ href, label, on }: { href: string; label: string; on: boolean }) {
  return (
    <Link
      href={href}
      className={`border px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] ${
        on ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
      }`}
    >
      {label}
    </Link>
  );
}
