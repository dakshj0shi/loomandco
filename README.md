# Loom & Co.

Handwoven bedsheets, comforters and cushions from artisan looms in India — considered, unfussy, and made to be used rather than saved for guests.

A real Next.js storefront: working cart and wishlist (localStorage-backed), toast notifications, cookie consent, SEO metadata and structured data, a custom 404, and a Motion-driven megamenu and page transitions.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion for React](https://motion.dev) for animation
- [Lucide](https://lucide.dev) icons

No backend — cart, wishlist and cookie consent all live in the browser's `localStorage`. No CMS — the catalogue, navigation and most copy live in one file, [`src/lib/products.ts`](src/lib/products.ts).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Cart/wishlist logic tests |
| `npm run check` | All four, in order — what CI runs |

## Adding the real logo

The header and footer render an inline SVG wordmark until real files exist at:

```
public/logo/loom-black.png   # header, light background
public/logo/loom-white.png   # footer, dark background
```

Drop them in and `Logo.tsx` picks them up automatically — no code change needed.

## Project structure

```
src/
  app/          Routes — one folder per page
  components/   Header, Footer, ProductCard, cart/wishlist UI, etc.
  lib/
    products.ts       Catalogue, navigation, footer links, most copy
    cart.tsx          Cart context (localStorage)
    wishlist.tsx      Wishlist context (localStorage)
    toast.tsx         Toast notification system
public/
  logo/         Real logo files go here (see above)
  sites/        Product photography — see note below
```

## A note on the photography

The product photography under `public/sites/midnatthome-com-53b88b12/` belongs to the founder's other brand (Midnatt) and is used here with permission — it isn't stock or scraped imagery.
