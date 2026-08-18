import Link from "next/link";
import ProductRow from "@/components/ProductRow";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Container, Eyebrow, Shot } from "@/components/ui";
import { byCategory, features, products, site, usps } from "@/lib/products";

const PICKS = [
  "percale-duvet-cover-indigo",
  "hemstitched-napkins-oat",
  "handloom-tablecloth-sage",
  "handloom-throw-madder",
  "waffle-bath-sheet-ash",
  "canvas-tote-bone",
  "cotton-apron-ink",
];

const COLLECTIONS = [
  {
    title: "Sleep",
    note: "Percale, sateen and handloom layers",
    href: "/shop?c=Bedding",
    tone: "#aab7b2",
    slug: "collection-sleep",
  },
  {
    title: "Gather",
    note: "Cloths and napkins cut for long tables",
    href: "/shop?c=Tabletop",
    tone: "#b59478",
    slug: "collection-gather",
  },
  {
    title: "Bathe",
    note: "Waffle and terry that earn their rail space",
    href: "/shop?c=Bath",
    tone: "#8e9996",
    slug: "collection-bathe",
  },
];

export default function Home() {
  const picks = PICKS.map((slug) => products.find((product) => product.slug === slug)!).filter(Boolean);

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

      <ProductRow
        title="For the table"
        intro="Hemstitched napkins, long-drop cloths and runners for ordinary suppers and crowded weekends."
        items={byCategory("Tabletop")}
        href="/shop?c=Tabletop"
      />

      <EditorialSplit feature={features[1]} tone="#c4a58c" slug="the-loom" />

      <CollectionMosaic />

      <ProductRow
        title="The Loom & Co. edit"
        intro="A short selection from across the collection, chosen for how naturally the pieces live together."
        items={picks}
      />

      <TableStory />

      <EditorialSplit feature={features[3]} tone="#c8c5bb" slug="layered-bed" reverse />

      <TestimonialCarousel />

      <TrustRow />

      <PromoTiles />
    </>
  );
}

function Hero() {
  const panels = [
    { slug: "hero-weave", tone: "#9eaaa4", alt: "Folded Loom & Co. handloom bedding" },
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
          <div className="max-w-xl text-paper">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-paper/75">
              The first collection · 2026
            </p>
            <h1 className="mt-4 text-5xl leading-[0.98] md:text-7xl">Woven for the everyday.</h1>
            <p className="mt-5 max-w-md text-paper/80">
              Handwoven bed, bath and table linen from artisan looms in India—considered,
              unfussy and meant to be used.
            </p>
            <Link
              href="/shop"
              className="mt-7 inline-flex min-h-11 items-center bg-paper px-7 text-[11px] uppercase tracking-[0.18em] text-ink hover:bg-sand"
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
              className="mt-7 inline-flex min-h-11 items-center border border-ink px-6 text-[11px] uppercase tracking-[0.18em] hover:bg-ink hover:text-paper"
            >
              {feature.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CollectionMosaic() {
  return (
    <section data-reveal="soft" className="bg-card py-16 md:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Shop by room</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-[38px]">A home, in cloth</h2>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.18em] underline underline-offset-4">
            View all
          </Link>
        </div>
      </Container>
      <div className="grid md:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <Link key={collection.title} href={collection.href} className="group relative block overflow-hidden">
            <Shot
              slug={collection.slug}
              tone={collection.tone}
              alt={`${collection.title} collection`}
              className="aspect-[4/5] w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-7 pt-20 text-paper">
              <h3 className="text-4xl">{collection.title}</h3>
              <p className="mt-1 text-paper/75">{collection.note}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TableStory() {
  const top = ["table-cloth", "table-napkins", "table-runner"];
  const bottom = ["table-setting", "table-detail", "table-evening"];
  const tones = ["#9ca88d", "#c8bba4", "#876c5a", "#b17e6b", "#a8b6b7", "#81766a"];

  return (
    <section data-reveal="soft" className="border-y border-line py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          {top.map((slug, index) => (
            <Shot key={slug} slug={slug} tone={tones[index]} alt="Loom & Co. tabletop editorial" className="aspect-[4/5]" />
          ))}
        </div>
        <div className="mx-auto max-w-2xl py-16 text-center md:py-20">
          <Eyebrow>The table</Eyebrow>
          <blockquote className="mt-5 font-display text-3xl leading-[1.25] md:text-[42px]">
            “A table is worth setting properly, even on a Tuesday.”
          </blockquote>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            Cloths, runners and hemstitched napkins in organic cotton, cut generously for the
            tables people actually gather around.
          </p>
          <Link href="/shop?c=Tabletop" className="mt-7 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-[0.18em]">
            Shop tabletop
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          {bottom.map((slug, index) => (
            <Shot key={slug} slug={slug} tone={tones[index + 3]} alt="Loom & Co. table linen in use" className="aspect-[4/5]" />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TrustRow() {
  return (
    <section data-reveal="soft" className="border-b border-line py-16 md:py-20">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-3">
          {usps.map((usp, index) => (
            <div key={usp.title} className="mx-auto max-w-xs">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line font-display text-lg">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-2xl">{usp.title}</h3>
              <p className="mt-2 text-muted">{usp.body}</p>
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
        <div className="grid gap-5 md:grid-cols-3">
          <Link href="/shop" className="group relative block overflow-hidden">
            <Shot slug="journal-stories" tone="#8f7868" alt="Stories from homes lived in" className="aspect-[4/5]" />
            <span className="absolute inset-0 flex items-center justify-center p-8 text-center font-display text-4xl text-paper">
              Read the journal
            </span>
          </Link>
          <Link href="/shop" className="group relative block overflow-hidden">
            <Shot slug="archive-fabrics" tone="#77847b" alt="Archive cloth and final colourways" className="aspect-[4/5]" />
            <span className="absolute inset-0 flex items-center justify-center p-8 text-center font-display text-4xl text-paper">
              Explore the archive
            </span>
          </Link>
          <div className="flex aspect-[4/5] flex-col items-center justify-center bg-clay p-8 text-center text-paper">
            <Eyebrow>Useful before ordering</Eyebrow>
            <h2 className="mt-4 text-4xl">What size?</h2>
            <p className="mt-5 max-w-xs text-paper/75">
              Bedding sizes differ by country. Use our guide to find the right fit before you
              add a layer.
            </p>
            <Link href="/shop" className="mt-7 inline-flex min-h-11 items-center border border-paper px-6 text-[11px] uppercase tracking-[0.18em] hover:bg-paper hover:text-ink">
              View size guide
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
