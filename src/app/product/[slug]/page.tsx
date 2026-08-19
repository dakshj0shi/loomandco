import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import SaveToWishlist from "@/components/SaveToWishlist";
import { Container, Eyebrow, Shot, imageUrlFor, price } from "@/components/ui";
import { bySlug, products, site, specs } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const p = bySlug((await params).slug);
  if (!p) return { title: "Product" };
  return {
    title: p.name,
    description: p.blurb,
    alternates: { canonical: `/product/${p.slug}` },
    openGraph: { title: p.name, description: p.blurb, images: imageUrlFor(p.slug) ? [imageUrlFor(p.slug)!] : undefined },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const p = bySlug((await params).slug);
  if (!p) notFound();

  const related = products.filter((r) => r.category === p.category && r.slug !== p.slug).slice(0, 4);
  const image = imageUrlFor(p.slug);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.blurb,
    category: p.category,
    ...(image ? { image: `${site.url}${image}` } : {}),
    brand: { "@type": "Brand", name: site.brand },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: site.currency,
      lowPrice: p.price,
      highPrice: p.priceMax ?? p.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Container data-reveal="soft" className="py-10">
        <nav className="text-[12px] text-muted">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?c=${p.category}`} className="hover:text-ink">
            {p.category}
          </Link>
        </nav>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
          <Shot
            slug={p.slug}
            tone={p.tone}
            alt={p.name}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] w-full"
          />

          <div className="md:pt-6">
            <Eyebrow>{p.category}</Eyebrow>
            <h1 className="mt-3 text-3xl md:text-[38px]">{p.name}</h1>
            <p className="mt-3 text-lg">{price(p)}</p>
            <p className="mt-5 max-w-md text-muted">{p.blurb}</p>

            <div className="mt-8 max-w-xs space-y-3">
              <AddToCart product={p} withSizes />
              <SaveToWishlist product={p} />
            </div>

            <dl className="mt-10 space-y-3 border-t border-line pt-6 text-[13px]">
              {specs.map((s) => (
                <div key={s.label} className="flex gap-3">
                  <dt className="w-28 shrink-0 text-muted">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <Container data-reveal="soft" className="border-t border-line py-14">
          <h2 className="text-2xl md:text-[28px]">More in {p.category}</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.slug} p={r} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
