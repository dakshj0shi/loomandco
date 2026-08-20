<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Loom & Co.

Handwoven bedsheets, comforters and cushions from artisan looms in India. Real storefront, not a demo — cart, wishlist, toasts, cookie consent and SEO metadata are all functional.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4, tokens defined in `src/app/globals.css`
- **Animation:** Motion for React (`motion/react`) — page transitions, the megamenu, scroll reveals
- **Icons:** Lucide React
- **State:** Cart and wishlist are React Context + localStorage (`src/lib/cart.tsx`, `src/lib/wishlist.tsx`), no backend

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run test` — Run the cart/wishlist logic tests (`node --test`)
- `npm run check` — lint + typecheck + test + build, in that order

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Project Structure
```
src/
  app/              # Next.js routes — one folder per page, plus sitemap.ts, robots.ts, not-found.tsx
  components/       # React components (Header, Footer, ProductCard, cart/wishlist UI, etc.)
  lib/
    products.ts      # Single source of truth: catalogue, nav, footer links, copy
    cart.tsx / cartLogic.ts       # Cart context + its pure, tested logic
    wishlist.tsx / wishlistLogic.ts
    toast.tsx        # Toast notification system
public/
  logo/             # Real logo files (loom-black.png / loom-white.png) — Logo.tsx falls back to an inline SVG wordmark until these exist
  sites/            # Real photography, licensed from the founder's other site (see note below)
```

## Content and data
`src/lib/products.ts` is the single source of truth for the catalogue, navigation, footer links and most site copy. Product photography is mapped by slug in `src/components/ui.tsx`'s `Shot` component — it falls back to a tinted placeholder for any slug without a mapped image, so new products never break the build for lack of a photo.

## Notes
- The product photography under `public/sites/midnatthome-com-53b88b12/` belongs to the founder's other brand (Midnatt) and is used here with their own permission — not scraped from a third party.
- Google Analytics and Search Console are intentionally not wired up — they need real account credentials that don't exist yet.
