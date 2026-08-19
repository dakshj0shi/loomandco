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
  "hero-room": "hemma-hos-frida-thofeldt-midnatt-6.jpg",
  "the-loom": "hemma-hos-tessan-rado-stocksunds-vintage-midnatt-1.jpg",
  "fastest-way-to-change-a-room": "sommarnojen-ruth-3.jpg",
  "collection-bedsheets": "midnatt-bedding-ellie-blue-seersucker-1.jpg",
  "collection-cushions": "seat-cushion-irene-midnatt-9.jpg",
  "collection-comforters": "midnatt-seat-cushions-bedspread-recycled-cotton-6.jpg",
  "journal-stories": "malin-persson-mjaumjau4.jpg",
  "archive-fabrics": "midnatt-bedding-brie-yellos-seersucker-7.jpg",

  // Bedsheets
  "percale-bedsheet-set-chalk": "ellie-duvet-sheet-and-pillow-case97.jpg",
  "percale-bedsheet-set-indigo": "midnatt-bedding-ellie-blue-seersucker-11.jpg",
  "sateen-bedsheet-set-oat": "brie-duvet-and-pillow65-1.jpg",
  "handloom-bedsheet-set-ash": "sangklader-ekologisk-bomull-olivgron.2jpg.jpg",
  "percale-fitted-sheet-sage": "paslakan-lake-midnatt-lr-g.jpg",

  // Comforters
  "handloom-comforter-madder": "sangklader-barn-baby-ekologisk-bomull-vinrott.jpg",
  "quilted-comforter-chalk": "checked-black-white-bedspread-midnatt.jpg",
  "reversible-comforter-indigo-oat": "midnatt-bedding-brie-yellos-seersucker-6.jpg",
  "lightweight-comforter-sage": "midnatt-ekologisk-bomull-lake-5.jpg",

  // Cushions
  "pillow-cushion-cover-indigo": "midnatt_seat-cushion_blue_1000px.jpg",
  "pillow-cushion-cover-madder": "midnatt_seat-cushion_brown_1000px.jpg",
  "pillow-cushion-cover-sage": "midantt__seat-cushion-striped-simona.jpg",
  "sofa-cushion-oat": "seat-cushions-midnatt-1.jpg",
  "sofa-cushion-ash": "seat-cushion-bertel-midnatt-2.jpg",
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
