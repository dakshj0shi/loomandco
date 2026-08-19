/* Single source of truth for copy, catalogue and navigation.
   Products are named material-first: "<Weave> <item> — <Colour>". */

export const site = {
  brand: "LOOM & CO.",
  tagline: "Woven well",
  established: "2026",
  description:
    "Handwoven bedsheets, comforters and cushions from artisan looms in India. Considered, unfussy, and made to be used rather than saved for guests.",
  announcement: "Complimentary delivery on orders over 200 EUR",
  currency: "EUR",
  email: "hello@loomandco.com",
  /** Placeholder — swap for the real production domain once one exists; every
   *  canonical URL, the sitemap and JSON-LD are built from this. */
  url: "https://loomandco.com",
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  /** Set when the product has size variants — renders a price range, like a real storefront. */
  priceMax?: number;
  /** Placeholder swatch, shown until you add an image at /public/products/<slug>.jpg */
  tone: string;
  badge?: string;
  sizes?: string[];
  blurb: string;
};

const BED_SIZES = ["Single", "Queen", "King"];

export const products: Product[] = [
  // ---- Bedsheets ----
  {
    slug: "percale-bedsheet-set-chalk",
    name: "Percale bedsheet set — Chalk",
    category: "Bedsheets",
    price: 120,
    priceMax: 180,
    tone: "#e9e6de",
    sizes: BED_SIZES,
    blurb:
      "A flat sheet, fitted sheet and pillowcase pair in crisp handloom percale, undyed chalk. Cool to the touch on the first night, softer by the tenth wash.",
  },
  {
    slug: "percale-bedsheet-set-indigo",
    name: "Percale bedsheet set — Indigo",
    category: "Bedsheets",
    price: 120,
    priceMax: 180,
    tone: "#4a5a6e",
    sizes: BED_SIZES,
    badge: "New",
    blurb:
      "The same percale set, dyed a deep indigo that settles a shade lighter over the first year. Yarn-dyed before weaving, so the colour runs through the cloth.",
  },
  {
    slug: "sateen-bedsheet-set-oat",
    name: "Sateen bedsheet set — Oat",
    category: "Bedsheets",
    price: 145,
    priceMax: 210,
    tone: "#ddd2bd",
    sizes: BED_SIZES,
    blurb:
      "A close sateen weave with a low sheen, warmer to sleep under than percale. Oat reads soft grey in morning light and honey by lamp.",
  },
  {
    slug: "handloom-bedsheet-set-ash",
    name: "Handloom bedsheet set — Ash",
    category: "Bedsheets",
    price: 110,
    priceMax: 165,
    tone: "#d5d2ca",
    sizes: BED_SIZES,
    blurb:
      "An everyday plain-weave set in ash, deep corners on the fitted sheet and a full elastic hem so it holds through a restless night.",
  },
  {
    slug: "percale-fitted-sheet-sage",
    name: "Percale fitted sheet — Sage",
    category: "Bedsheets",
    price: 65,
    priceMax: 95,
    tone: "#a8b09a",
    sizes: BED_SIZES,
    badge: "Few left",
    blurb: "Just the fitted sheet, for layering under a favourite duvet cover or topper.",
  },

  // ---- Comforters ----
  {
    slug: "handloom-comforter-madder",
    name: "Handloom comforter — Madder",
    category: "Comforters",
    price: 180,
    priceMax: 260,
    tone: "#9b5f4f",
    sizes: BED_SIZES,
    badge: "New",
    blurb:
      "A quilted handloom comforter filled with cotton batting, dyed with madder root. Warm without the weight of a duvet-and-insert stack.",
  },
  {
    slug: "quilted-comforter-chalk",
    name: "Quilted comforter — Chalk",
    category: "Comforters",
    price: 200,
    priceMax: 290,
    tone: "#e9e6de",
    sizes: BED_SIZES,
    blurb: "Channel-quilted in undyed chalk cotton, dense enough to use as the only top layer through winter.",
  },
  {
    slug: "reversible-comforter-indigo-oat",
    name: "Reversible comforter — Indigo / Oat",
    category: "Comforters",
    price: 210,
    priceMax: 300,
    tone: "#4a5a6e",
    sizes: BED_SIZES,
    blurb: "Indigo on one face, oat sateen on the other — one comforter that changes the whole room by flipping it.",
  },
  {
    slug: "lightweight-comforter-sage",
    name: "Lightweight comforter — Sage",
    category: "Comforters",
    price: 160,
    priceMax: 230,
    tone: "#a8b09a",
    sizes: BED_SIZES,
    blurb: "A thinner summer fill in sage, breathable enough for warm nights without kicking it off by 2am.",
  },

  // ---- Cushions ----
  {
    slug: "pillow-cushion-cover-indigo",
    name: "Pillow cushion cover — Indigo",
    category: "Cushions",
    price: 45,
    tone: "#47566a",
    blurb: "A concealed zip and a hand-finished seam, sized for a standard 50x50 pillow insert.",
  },
  {
    slug: "pillow-cushion-cover-madder",
    name: "Pillow cushion cover — Madder",
    category: "Cushions",
    price: 45,
    tone: "#a06552",
    badge: "New colour",
    blurb: "The same pillow cushion cover in madder, warm enough to carry a room on its own.",
  },
  {
    slug: "pillow-cushion-cover-sage",
    name: "Pillow cushion cover — Sage",
    category: "Cushions",
    price: 45,
    tone: "#a8b09a",
    blurb: "A quieter sage colourway for pairing with patterned bedsheets.",
  },
  {
    slug: "sofa-cushion-oat",
    name: "Sofa cushion — Oat",
    category: "Cushions",
    price: 85,
    tone: "#ddd2bd",
    badge: "New",
    blurb: "An oversized sofa cushion, feather-down filled, built to hold its shape under daily use.",
  },
  {
    slug: "sofa-cushion-ash",
    name: "Sofa cushion — Ash",
    category: "Cushions",
    price: 85,
    tone: "#d5d2ca",
    blurb: "The same oversized fill in a quiet ash handloom cotton.",
  },
];

/**
 * Spec table on every product page. Deliberately conservative: cold wash and
 * shade drying are safe for handloom cloth and natural dyes.
 * TODO before launch — confirm with the mill: actual certification (GOTS /
 * OEKO-TEX / none), per-weave care, and whether any dye needs separate advice.
 */
export const specs = [
  { label: "Material", value: "Handwoven cotton, yarn-dyed before weaving" },
  { label: "Care", value: "Machine wash cold, dry in shade, warm iron" },
  { label: "Delivery", value: "Complimentary over 200 EUR, worldwide" },
];

export const byCategory = (c: string) => products.filter((p) => p.category === c);
export const bySlug = (s: string) => products.find((p) => p.slug === s);
export const categories = [...new Set(products.map((p) => p.category))];

/**
 * Top-level nav. `href` is the real destination for the label itself;
 * `columns` (when present) render as a hover megamenu — sub-links there are
 * still a work in progress and point at the parent category, same honesty
 * convention as the rest of the site (nothing pretends to filter by colour
 * or size yet).
 */
export const nav = [
  { label: "Home", href: "/", columns: [] },
  {
    label: "Bedsheets",
    href: "/shop?c=Bedsheets",
    columns: [
      { title: "By size", links: ["Single", "Queen", "King"] },
      { title: "By colour", links: ["Chalk", "Indigo", "Oat", "Ash", "Sage"] },
    ],
  },
  {
    label: "Cushions",
    href: "/shop?c=Cushions",
    columns: [
      { title: "By type", links: ["Pillow cushions", "Sofa cushions"] },
      { title: "By colour", links: ["Indigo", "Madder", "Sage", "Oat", "Ash"] },
    ],
  },
  {
    label: "Comforters",
    href: "/shop?c=Comforters",
    columns: [
      { title: "By size", links: ["Single", "Queen", "King"] },
      { title: "By colour", links: ["Madder", "Chalk", "Indigo", "Sage"] },
    ],
  },
  { label: "About Us", href: "/about", columns: [] },
];

/** Quick Links (middle) and Support (right) footer columns — adapted from
 * Shyama Huja's footer structure to Loom & Co.'s own catalogue and pages. */
export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "Bedsheets", href: "/shop?c=Bedsheets" },
    { label: "Cushions", href: "/shop?c=Cushions" },
    { label: "Comforters", href: "/shop?c=Comforters" },
    { label: "Best Sellers", href: "/shop" },
    { label: "About Us", href: "/about" },
  ],
  support: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Return & Refund Policy", href: "/returns" },
    { label: "Shipping & Delivery Policy", href: "/shipping" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blogs", href: "/journal" },
    { label: "Contact Us", href: "/contact" },
    { label: "Store Locator", href: "/store-locator" },
  ],
};

/** Full-width editorial blocks used down the homepage. */
export const features = [
  {
    eyebrow: "The loom",
    title: "Woven by hand, not by the metre",
    body: "Every piece is woven on traditional handlooms by artisan weavers in India, at a pace a power loom cannot copy. A handloom edge is never perfectly straight and the slubs are not faults — they are how you tell handwoven cloth from a mill run.",
    cta: "Our story",
    href: "/about",
    tone: "#b08d72",
  },
  {
    eyebrow: "Bedsheets",
    title: "The layer that touches skin all night",
    body: "Percale, sateen and plain-weave handloom sets in Single, Queen and King, cut generously and hemmed by hand.",
    cta: "Shop bedsheets",
    href: "/shop?c=Bedsheets",
    tone: "#e9e6de",
  },
  {
    eyebrow: "Comforters",
    title: "Warm without the weight",
    body: "Quilted and reversible comforters, filled with cotton batting rather than synthetic fibre — heavy enough for winter, breathable enough that you'll actually use them.",
    cta: "Shop comforters",
    href: "/shop?c=Comforters",
    tone: "#9b5f4f",
  },
  {
    eyebrow: "Cushions",
    title: "The fastest way to change a room",
    body: "Pillow cushion covers for the bed, oversized sofa cushions for everywhere else — five colourways that mix across both.",
    cta: "Shop cushions",
    href: "/shop?c=Cushions",
    tone: "#a06552",
  },
];

export const usps = [
  {
    title: "Woven by hand",
    body: "Handloom cotton from artisan weavers in India, on looms that draw no power.",
  },
  {
    title: "Complimentary delivery",
    body: "Free shipping on orders over 200 EUR, wrapped in paper, never plastic.",
  },
  {
    title: "Thirty nights to decide",
    body: "Sleep on it. Return any bedsheet or comforter within thirty nights, laundered or not.",
  },
];

export const testimonials = [
  { quote: "Three years of weekly washing and the percale has only improved.", name: "Anna" },
  { quote: "The colours are exactly as photographed, which is rarer than it should be.", name: "Priya" },
  { quote: "I ordered one bedsheet set to try it and replaced the whole cupboard within a month.", name: "Marcus" },
  { quote: "It arrived wrapped in paper, in a box I could actually reuse.", name: "Lena" },
  { quote: "The comforter is the first one that's actually warm enough without feeling like a weight on top of you.", name: "Sara" },
];
