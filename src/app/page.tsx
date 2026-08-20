import Link from "next/link";
import ProductRow from "@/components/ProductRow";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Container, Eyebrow, Shot } from "@/components/ui";
import { features, products, site, usps } from "@/lib/products";

const TRENDING = [
  "percale-bedsheet-set-indigo",
  "sofa-cushion-oat",
  "handloom-comforter-madder",
  "pillow-cushion-cover-madder",
  "sateen-bedsheet-set-oat",
  "reversible-comforter-indigo-oat",
  "pillow-cushion-cover-sage",
];

const COLLECTIONS = [
  {
    title: "Bedsheets",
    note: "Percale, sateen and handloom sets in Single, Queen and King",
    href: "/shop?c=Bedsheets",
    tone: "#aab7b2",
    slug: "collection-bedsheets",
  },
  {
    title: "Cushions",
    note: "Pillow covers for the bed, oversized cushions for everywhere else",
    href: "/shop?c=Cushions",
    tone: "#b59478",
    slug: "collection-cushions",
  },
  {
    title: "Comforters",
    note: "Quilted and reversible fills for every season",
    href: "/shop?c=Comforters",
    tone: "#8e9996",
    slug: "collection-comforters",
  },
];

export default function Home() {
  const trending = TRENDING.map((slug) => products.find((product) => product.slug === slug)!).filter(Boolean);
  const newArrivals = products.filter((p) => p.badge === "New");

  return (
    <>
      <Hero />

      <section data-reveal="soft" className="border-b border-line py-14 md:py-20">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.5fr] md:items-start">
          <Eyebrow>Woven well · Estd {site.established}</Eyebrow>
          <div>
            <h2 className="max-w-3xl text-3xl leading-[1.15] md:text-[45px]">
              Everyday cloth, made slowly enough to last.
            </h2>
            <p className="mt-5 max-w-2xl text-muted md:text-base">
              {site.description} Every irregular edge and quiet change in colour is part of the
              handloom process—not something to hide.
            </p>
          </div>
        </Container>
      </section>

      <EditorialSplit feature={features[0]} tone="#b08d72" slug="the-loom" />

      <ProductRow
        title="Trending now"
        intro="What's moving across bedsheets, cushions and comforters this month."
        items={trending}
      />

      <CategoryGrid />

      <EditorialSplit feature={features[3]} tone="#a06552" slug="fastest-way-to-change-a-room" reverse />

      {newArrivals.length > 0 && (
        <ProductRow
          title="New arrivals"
          intro="Just woven, just dyed."
          items={newArrivals}
        />
      )}

      <TestimonialCarousel />

      <TrustRow />

      <PromoTiles />
    </>
  );
}

function Hero() {
  const panels = [
    { slug: "hero-weave", tone: "#9eaaa4", alt: "Folded Loom & Co. handloom bedsheets" },
    { slug: "hero-detail", tone: "#b98b70", alt: "Close view of the woven cotton texture" },
    { slug: "hero-room", tone: "#7d8987", alt: "Loom & Co. textiles in a quiet bedroom" },
  ];

  return (
    <section className="relative bg-ink">
      <div className="grid min-h-[720px] grid-cols-1 md:min-h-[calc(100vh-100px)] md:grid-cols-3">
        {panels.map((panel, index) => (
          <Shot
            key={panel.slug}
            {...panel}
            className={`${index === 0 ? "block" : "hidden md:block"} min-h-[720px] w-full md:min-h-0`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-transparent to-transparent">
        <Container className="pb-10 md:pb-14">
          <div className="max-w-xl bg-paper/90 px-6 py-7 text-ink shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-[2px] md:px-8 md:py-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink/70">
              The first collection · 2026
            </p>
            <h1 className="mt-4 text-5xl leading-[0.98] md:text-7xl">Woven for the everyday.</h1>
            <p className="mt-5 max-w-md text-ink/80">
              Handwoven bedsheets, comforters and cushions from artisan looms in India—considered,
              unfussy and meant to be used.
            </p>
            <Link
              href="/shop"
              className="mt-7 inline-flex min-h-11 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.18em] text-paper transition-transform hover:bg-clay active:scale-[0.98]"
            >
              Shop the collection
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

function EditorialSplit({
  feature,
  tone,
  slug,
  reverse = false,
}: {
  feature: (typeof features)[number];
  tone: string;
  slug: string;
  reverse?: boolean;
}) {
  return (
    <section data-reveal="soft" className="py-16 md:py-24">
      <Container>
        <div className={`grid items-center md:grid-cols-[1.25fr_0.9fr] ${reverse ? "md:grid-cols-[0.9fr_1.25fr]" : ""}`}>
          <Shot
            slug={slug}
            tone={tone}
            alt={feature.title}
            className={`aspect-[4/5] w-full md:aspect-[5/6] ${reverse ? "md:order-2" : ""}`}
          />
          <div
            className={`relative z-10 mx-4 -mt-10 bg-sand px-7 py-10 text-center md:mx-0 md:mt-0 md:px-12 md:py-16 ${
              reverse ? "md:-mr-16" : "md:-ml-16"
            }`}
          >
            <Eyebrow>{feature.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl leading-[1.1] md:text-[46px]">{feature.title}</h2>
            <p className="mx-auto mt-5 max-w-sm text-muted">{feature.body}</p>
            <Link
              href={feature.href}
              className="mt-7 inline-flex min-h-11 items-center border border-ink px-6 text-[11px] uppercase tracking-[0.18em] transition-transform hover:bg-ink hover:text-paper active:scale-[0.98]"
            >
              {feature.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Society of Wanderers-style category grid: large tiles, name + "View products". */
function CategoryGrid() {
  return (
    <section data-reveal="soft" className="bg-card py-16 md:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Shop by category</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-[38px]">A home, in cloth</h2>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.18em] underline underline-offset-4">
            View all
          </Link>
        </div>
      </Container>
      <div className="grid md:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <div key={collection.title} className="group relative block overflow-hidden">
            <Shot
              slug={collection.slug}
              tone={collection.tone}
              alt={`${collection.title} collection`}
              className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-7 pt-24 text-paper">
              <h3 className="text-3xl">{collection.title}</h3>
              <p className="mt-1 text-paper/75">{collection.note}</p>
              <Link
                href={collection.href}
                className="mt-4 inline-flex min-h-9 items-center bg-paper px-5 text-[11px] uppercase tracking-[0.16em] text-ink transition-transform hover:bg-sand active:scale-[0.98]"
              >
                View products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustRow() {
  return (
    <section data-reveal="soft" className="border-y border-line py-10 md:py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-line">
          {usps.map((usp, index) => (
            <div key={usp.title} className={index === 0 ? "" : "md:pl-8"}>
              <h3 className="font-display text-lg">{usp.title}</h3>
              <p className="mt-1.5 text-[13px] text-muted">{usp.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PromoTiles() {
  return (
    <section data-reveal="soft" className="py-16 md:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-[1.6fr_1fr]">
          <Link href="/about" className="group relative block overflow-hidden">
            <Shot
              slug="journal-stories"
              tone="#8f7868"
              alt="The story behind Loom & Co."
              className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.015] md:aspect-auto md:h-full"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 pt-20 font-display text-4xl text-paper">
              Our story
            </span>
          </Link>
          <div className="flex flex-col items-start justify-center bg-clay p-8 text-paper md:p-10">
            <Eyebrow>Useful before ordering</Eyebrow>
            <h2 className="mt-4 text-4xl">What size?</h2>
            <p className="mt-5 max-w-xs text-paper/75">
              Bedsheet and comforter sizes differ by country. Use our guide to find the right
              fit before you order.
            </p>
            <Link
              href="/faqs"
              className="mt-7 inline-flex min-h-11 items-center border border-paper px-6 text-[11px] uppercase tracking-[0.18em] transition-transform hover:bg-paper hover:text-ink active:scale-[0.98]"
            >
              View size guide
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
