import Image from "next/image";

export function Container({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`mx-auto w-full max-w-site px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
      {children}
    </span>
  );
}

const IMAGE_BASE = "/sites/midnatthome-com-53b88b12/root-8a5edab2/images";

/** Supplied Midnatt photography mapped to the closest Loom & Co use. */
const images: Record<string, string> = {
  // Homepage hero and editorial stories
  "hero-weave": "midnatt-bedding-ellie-blue-seersucker-11.jpg",
  "hero-detail": "paslakan-lake-midnatt-lr-g.jpg",
  "hero-room": "sangklader-ekologisk-bomull-olivgron.2jpg.jpg",
  "the-loom": "seat-cushions-midnatt-1.jpg",
  "layered-bed": "midnatt-ekologisk-bomull-lake-5.jpg",
  "collection-sleep": "checked-black-white-bedspread-midnatt.jpg",
  "collection-gather": "sommarnojen-ruth-3.jpg",
  "collection-bathe": "doxie-towel92.jpg",
  "journal-stories": "hemma-hos-frida-thofeldt-midnatt-6.jpg",
  "archive-fabrics": "midnatt-outlet.jpg",

  // Tabletop editorial gallery
  "table-cloth": "midnatt-bell-table-cloth-napkins-1.jpg",
  "table-napkins": "midnatt-tablecloth-irene-striped-9.jpg",
  "table-runner": "midnatt-lemon-tablecloth-.jpg",
  "table-setting": "midnatt-pink-hearts-tablecloth-napkin-set-1.jpg",
  "table-detail": "tessan-rado-midnatt-josefin.jpg",
  "table-evening": "sommarnojen-ruth2.jpg",

  // Bedding
  "percale-duvet-cover-chalk": "ellie-duvet-sheet-and-pillow-case97.jpg",
  "percale-duvet-cover-indigo": "midnatt-bedding-ellie-blue-seersucker-11.jpg",
  "sateen-duvet-cover-oat": "brie-duvet-and-pillow65-1.jpg",
  "percale-pillowcases-chalk": "frill-pillow-case-sorbetto-midnatt-4.jpg",
  "percale-fitted-sheet-ash": "paslakan-lake-midnatt-lr-g.jpg",
  "handloom-throw-madder": "sangklader-barn-baby-ekologisk-bomull-vinrott.jpg",

  // Tabletop
  "handloom-tablecloth-sage": "seat-cushions-table-cloth-simona-midnatt.jpg",
  "hemstitched-napkins-oat": "midnatt_servetter_josefin-la-mer.jpg",
  "table-runner-ink": "midnatt-franka-duk-bla-randig-3.jpg",
  "quilted-placemats-clay": "midnatt-lina-huring-apertivo5.jpg",

  // Bath
  "waffle-bath-sheet-ash": "midnatt-waffle-towel-7-perlino-doxie-cielo.jpg",
  "waffle-hand-towel-ash": "waffle-hand-towel-doxie-brown-midnatt.jpg",
  "terry-bath-sheet-chalk": "doxie-towel92.jpg",
  "waffle-bath-mat-ink": "waffle-hand-towel-doxie-brown-midnatt.jpg",

  // Cushions, kitchen, and bags
  "handloom-cushion-cover-indigo": "midnatt_seat-cushion_blue_1000px.jpg",
  "handloom-cushion-cover-madder": "midnatt_seat-cushion_brown_1000px.jpg",
  "seat-pad-oat": "midantt_seat-cushion-striped-simona.jpg",
  "waffle-tea-towels-sage": "bluey-tablecloth-and-tuttifrutti-napkin88-1.jpg",
  "canvas-tote-bone": "tote-bag-sam-midnatt.jpg",
};

/**
 * Uses the closest supplied textile photograph and falls back to an art-directed
 * placeholder only when no honest visual match exists. The slug is also the
 * future local filename contract for brand-owned replacement photography.
 */
export function Shot({
  slug,
  tone,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  slug: string;
  tone: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const source = images[slug];

  return (
    <div
      className={`placeholder-shot relative isolate overflow-hidden ${className}`}
      style={{ "--shot-tone": tone } as React.CSSProperties}
      data-image-path={source ? `${IMAGE_BASE}/${source}` : `/products/${slug}.jpg`}
    >
      {source ? (
        <Image
          src={`${IMAGE_BASE}/${source}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_48%,rgba(255,255,255,.22)_48%_50%,transparent_50%_100%)]" />
          <div className="absolute left-4 top-4 h-8 w-8 rounded-full border border-white/50" />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 border-t border-white/50 pt-3 text-[9px] uppercase tracking-[0.2em] text-white/90">
            <span className="max-w-[70%] leading-relaxed">{alt}</span>
            <span className="shrink-0">Image placeholder</span>
          </div>
        </>
      )}
    </div>
  );
}

export function price(p: { price: number; priceMax?: number }) {
  return p.priceMax ? `${p.price} – ${p.priceMax} EUR` : `${p.price} EUR`;
}
