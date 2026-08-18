/* Single source of truth for copy, catalogue and navigation.
   Products are named material-first: "<Weave> <item> — <Colour>". */

export const site = {
  brand: "LOOM & CO.",
  tagline: "Woven well",
  established: "2026",
  description:
    "Handwoven bed, bath and table linen from artisan looms in India. Considered, unfussy, and made to be used rather than saved for guests.",
  announcement: "Complimentary delivery on orders over 200 EUR",
  currency: "EUR",
  email: "hello@loomandco.com",
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

export const products: Product[] = [
  // ---- Bedding ----
  {
    slug: "percale-duvet-cover-chalk",
    name: "Percale duvet cover — Chalk",
    category: "Bedding",
    price: 145,
    priceMax: 195,
    tone: "#e9e6de",
    sizes: ["150x210", "220x220", "240x220"],
    blurb:
      "A crisp handloom percale in undyed chalk, with a hidden button placket along the foot. Cool to the touch on the first night and softer by the tenth wash.",
  },
  {
    slug: "percale-duvet-cover-indigo",
    name: "Percale duvet cover — Indigo",
    category: "Bedding",
    price: 145,
    priceMax: 195,
    tone: "#4a5a6e",
    sizes: ["150x210", "220x220"],
    badge: "New",
    blurb:
      "The same percale, dyed a deep indigo that settles a shade lighter over the first year. Yarn-dyed before weaving, so the colour runs through the cloth.",
  },
  {
    slug: "sateen-duvet-cover-oat",
    name: "Sateen duvet cover — Oat",
    category: "Bedding",
    price: 170,
    priceMax: 225,
    tone: "#ddd2bd",
    sizes: ["150x210", "220x220", "240x220"],
    blurb:
      "A close sateen weave with a low sheen, warmer to sleep under than percale. Oat reads soft grey in morning light and honey by lamp.",
  },
  {
    slug: "percale-pillowcases-chalk",
    name: "Percale pillowcases, pair — Chalk",
    category: "Bedding",
    price: 55,
    priceMax: 70,
    tone: "#eae7e0",
    sizes: ["50x60", "50x70", "65x65"],
    blurb: "Two cases with a narrow six-millimetre flange and an envelope closure.",
  },
  {
    slug: "percale-fitted-sheet-ash",
    name: "Percale fitted sheet — Ash",
    category: "Bedding",
    price: 95,
    priceMax: 135,
    tone: "#d5d2ca",
    sizes: ["90x200", "140x200", "180x200"],
    blurb:
      "Deep corners and a full elastic hem, so it holds through a restless night. Ash sits between chalk and ink and hides a great deal.",
  },
  {
    slug: "handloom-throw-madder",
    name: "Handloom throw — Madder",
    category: "Bedding",
    price: 175,
    tone: "#9b5f4f",
    badge: "Few left",
    blurb:
      "A loosely woven throw with hand-knotted fringe, dyed with madder root. For the foot of the bed, the arm of a sofa, or a cold evening outside.",
  },

  // ---- Tabletop ----
  {
    slug: "handloom-tablecloth-sage",
    name: "Handloom tablecloth — Sage",
    category: "Tabletop",
    price: 120,
    priceMax: 170,
    tone: "#a8b09a",
    sizes: ["145x250", "145x350"],
    blurb:
      "Mitred corners and a generous drop, cut long enough to fall properly on a table that seats eight.",
  },
  {
    slug: "hemstitched-napkins-oat",
    name: "Hemstitched napkins, set of four — Oat",
    category: "Tabletop",
    price: 55,
    tone: "#d9cfb8",
    blurb: "Four napkins, hemstitched by hand, pressed once and never quite flat again.",
  },
  {
    slug: "table-runner-ink",
    name: "Table runner — Ink",
    category: "Tabletop",
    price: 65,
    tone: "#2c2b28",
    blurb: "A narrow runner for a table too good to cover completely.",
  },
  {
    slug: "quilted-placemats-clay",
    name: "Quilted placemats, set of four — Clay",
    category: "Tabletop",
    price: 70,
    tone: "#b08d72",
    blurb: "Hand-quilted cotton mats that wash flat and stack thin.",
  },

  // ---- Bath ----
  {
    slug: "waffle-bath-sheet-ash",
    name: "Waffle bath sheet — Ash",
    category: "Bath",
    price: 75,
    priceMax: 95,
    tone: "#cfcdc4",
    sizes: ["70x140", "100x150"],
    badge: "New",
    blurb:
      "An open waffle cell that dries fast and takes almost no room on the rail. Heavier than last season without losing its structure.",
  },
  {
    slug: "waffle-hand-towel-ash",
    name: "Waffle hand towel — Ash",
    category: "Bath",
    price: 40,
    tone: "#d8d6cd",
    blurb: "The 50x70 companion to the bath sheet, in the same waffle weave.",
  },
  {
    slug: "terry-bath-sheet-chalk",
    name: "Terry bath sheet — Chalk",
    category: "Bath",
    price: 85,
    tone: "#ece9e2",
    blurb:
      "A long-loop terry for anyone who wants weight and absorbency over quick drying. Oversized at 100x150.",
  },
  {
    slug: "waffle-bath-mat-ink",
    name: "Waffle bath mat — Ink",
    category: "Bath",
    price: 60,
    tone: "#35342f",
    blurb: "A flat woven mat that dries out properly between showers, unlike a pile one.",
  },

  // ---- Cushions ----
  {
    slug: "handloom-cushion-cover-indigo",
    name: "Handloom cushion cover — Indigo",
    category: "Cushions",
    price: 70,
    tone: "#47566a",
    blurb: "A concealed zip and a hand-finished seam, sized for a 50x50 insert.",
  },
  {
    slug: "handloom-cushion-cover-madder",
    name: "Handloom cushion cover — Madder",
    category: "Cushions",
    price: 70,
    tone: "#a06552",
    badge: "New colour",
    blurb: "The same cover in madder, warm enough to carry a room on its own.",
  },
  {
    slug: "seat-pad-oat",
    name: "Seat pad — Oat",
    category: "Cushions",
    price: 55,
    tone: "#d5c8ac",
    blurb: "A flat tie-on pad cut for wooden chairs and window benches.",
  },

  // ---- Kitchen ----
  {
    slug: "waffle-tea-towels-sage",
    name: "Waffle tea towels, pair — Sage",
    category: "Kitchen",
    price: 45,
    tone: "#aeb79c",
    blurb: "Two thirsty towels with a hanging loop worked into the corner.",
  },
  {
    slug: "cotton-apron-ink",
    name: "Cotton apron — Ink",
    category: "Kitchen",
    price: 85,
    tone: "#33322e",
    blurb: "Full length, in a heavy cotton twill, with wrap ties long enough to knot in front.",
  },

  // ---- Bags ----
  {
    slug: "canvas-tote-bone",
    name: "Canvas tote — Bone",
    category: "Bags",
    price: 65,
    tone: "#ded7c5",
    blurb: "A wide, flat-bottomed tote in handwoven canvas that swallows a market run.",
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

/** Header megamenu: one column per group. Empty `columns` renders a plain link. */
export const nav = [
  {
    label: "Shop",
    columns: [
      { title: "Bedding", links: ["Duvet covers", "Pillowcases", "Sheets", "Throws"] },
      { title: "Tabletop", links: ["Tablecloths", "Napkins", "Runners", "Placemats"] },
      { title: "Bath", links: ["Bath sheets", "Hand towels", "Bath mats"] },
      { title: "Living", links: ["Cushion covers", "Seat pads", "Tea towels", "Aprons"] },
    ],
  },
  {
    label: "Colours",
    columns: [
      { title: "Undyed", links: ["Chalk", "Oat", "Bone", "Ash"] },
      { title: "Dyed", links: ["Indigo", "Madder", "Sage", "Ink"] },
    ],
  },
  {
    label: "Archive",
    columns: [
      { title: "Archive", links: ["Discontinued colours", "Single sizes", "Loom ends"] },
      { title: "Last of line", links: ["Bedding", "Tabletop"] },
    ],
  },
  { label: "Journal", columns: [] },
  {
    label: "Help",
    columns: [
      { title: "Orders", links: ["Shipping & returns", "Track order", "Contact"] },
      { title: "Care", links: ["Size guide", "Care instructions", "FAQ"] },
    ],
  },
];

/** Full-width editorial blocks. The homepage alternates the image side. */
export const features = [
  {
    eyebrow: "New this season",
    title: "Waffle, rewoven",
    body: "Our waffle weave returns in a heavier cotton: an open cell that dries fast and softens without losing its structure. Two sizes, four colourways.",
    cta: "Shop bath",
    href: "/shop?c=Bath",
    tone: "#cfcdc4",
  },
  {
    eyebrow: "The loom",
    title: "Woven by hand, not by the metre",
    body: "Every piece is woven on traditional handlooms by artisan weavers in India, at a pace a power loom cannot copy. A handloom edge is never perfectly straight and the slubs are not faults — they are how you tell handwoven cloth from a mill run.",
    cta: "Our making",
    href: "/shop",
    tone: "#b08d72",
  },
  {
    eyebrow: "The table",
    title: "Set for eight, and for staying late",
    body: "Handloom cloths and hemstitched napkins in chalk, oat and sage. Cut long, so the drop falls properly on a table that seats eight.",
    cta: "Shop tabletop",
    href: "/shop?c=Tabletop",
    tone: "#a8b09a",
  },
  {
    eyebrow: "Bedding",
    title: "Build the bed in layers",
    body: "Percale beneath, sateen above, a handloom throw at the foot. Designed to be combined and added to over years, not bought once as a set.",
    cta: "Shop bedding",
    href: "/shop?c=Bedding",
    tone: "#e9e6de",
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
    body: "Sleep on it. Return any bedding within thirty nights, laundered or not.",
  },
];

export const testimonials = [
  { quote: "Three years of weekly washing and the percale has only improved.", name: "Anna" },
  { quote: "The colours are exactly as photographed, which is rarer than it should be.", name: "Priya" },
  { quote: "I ordered one set to try it and replaced the whole cupboard within a month.", name: "Marcus" },
  { quote: "It arrived wrapped in paper, in a box I could actually reuse.", name: "Lena" },
  { quote: "The waffle towels dry overnight in a flat with no airing cupboard.", name: "Sara" },
];
