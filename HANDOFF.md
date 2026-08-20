# Handoff — Loom & Co.

Context for anyone (human or AI) picking this project up cold. Written 2026-08-20, after the most recent commit (`445e71d`).

## What this is

**Loom & Co.** — a semi-luxury handloom home-textiles brand (bedsheets, comforters, cushions), positioned around Indian artisan weaving. Real Next.js storefront with working cart/wishlist/toasts/cookie-consent, all client-side (no backend, no database). Not a demo or a template — it's meant to become a real, live store.

Repo: `https://github.com/dakshj0shi/loomandco` (currently public — the owner plans to make it private later, on their own timeline). Local path: `G:\loomandco`.

## Origin story (why the code looks the way it does)

This repo was generated from `JCodesMore/ai-website-cloner-template` — a Next.js/Tailwind scaffold with a `/clone-website` skill that scrapes a target site's design and assets. It was pointed at **midnatthome.com** (a Swedish home-textiles brand) to produce a structural clone, which was then rebranded into Loom & Co. content.

**Important**: the photography under `public/sites/midnatthome-com-53b88b12/` is real Midnatt product photography, mapped by slug in `src/components/ui.tsx`'s `Shot` component. This is **not** stolen or scraped-without-permission content — the site owner confirmed midnatthome.com is their own other brand, and gave explicit permission to reuse the assets. Don't second-guess or strip this out on copyright grounds; it's already been cleared with the owner.

As of `445e71d`, the repo has been stripped of the template's multi-agent scaffolding (instruction files for 13 other AI tools, the template's own README/CHANGELOG/LICENSE, unused shadcn/Base UI deps). See that commit message for the full list of what was removed and why. `.claude/` is the only agent-tooling folder kept, since Claude Code is the only tool used on this project.

## Stack

- **Next.js 16** (App Router, Turbopack dev), **React 19**, TypeScript strict
- **Tailwind CSS v4** — tokens in `src/app/globals.css` (`@theme` block): `paper`/`card`/`ink`/`muted`/`line`/`sand`/`clay` (the one real accent) plus a few idle secondary tones (`sage`/`sky`/`butter`, only `blush` is actually used, on the testimonial section)
- **Motion for React** (`motion/react`, the current name for what used to be Framer Motion) — the only animation library. No GSAP, no CSS keyframe animations beyond the scroll-reveal system.
- **Lucide** icons
- No CMS, no database, no auth. `src/lib/products.ts` is the single source of truth for catalogue, nav, footer links and most copy.

Run it:
```bash
npm install
npm run dev      # localhost:3000 by default
npm run check    # lint + typecheck + test + build — same as CI
```

## Content model

Everything catalog/nav/copy-related lives in **`src/lib/products.ts`**:
- `site` — brand name, tagline, description, announcement bar text, currency, `url` (see gap below)
- `products[]` — 14 SKUs across **Bedsheets**, **Cushions**, **Comforters** (these three are the only real categories — an earlier version had Tabletop/Bath/Kitchen/Bags too, deliberately dropped when the owner specified this narrower range)
- `nav` — top-level header items with `href` and optional `columns` (megamenu sub-links)
- `footerLinks` — `quick` and `support` columns, modeled on shyamahuja.com's footer structure per the owner's request
- `features` — the four homepage editorial-split blocks
- `usps`, `testimonials`, `specs` — see gaps below, testimonials are fabricated

Product photography: `Shot` component in `src/components/ui.tsx` maps a `slug` to a real Midnatt photo filename. Any slug without a mapping renders a tinted placeholder (`tone` color) instead of breaking — this is deliberate, so adding a new product never requires a photo up front.

## Feature-by-feature

**Cart & wishlist** (`src/lib/cart.tsx` + `cartLogic.ts`, `src/lib/wishlist.tsx` + `wishlistLogic.ts`) — React Context + localStorage, pure-function logic layers with `node --test` coverage (`npm run test`, 8 tests). Both render through a shared slide-out `Panel` component in `Header.tsx`.

**Toasts** (`src/lib/toast.tsx`) — simple context, auto-dismiss after 4s, used for wishlist add/remove and the newsletter form. Cart add uses an in-button "Added" state instead (the drawer opening is already a strong signal).

**Page transitions** (`src/components/PageTransition.tsx`) — enter-only fade+rise on every route change, keyed on `pathname`. **Do not** try to add an exit animation via `AnimatePresence` here — this was tried and reverted. The App Router swaps `children` before Motion's exit animation can finish (confirmed live: the exit's `onAnimationStart` fired, `onExitComplete` never did, and the incoming page's own enter never ran). It's a known Framer/Motion-vs-App-Router incompatibility, not a config mistake. Native View Transitions would be the "real" fix but aren't safely available on stable Next 16 / React 19 without a React canary build.

**Megamenu** (`src/components/Header.tsx`) — hover/focus-driven `AnimatePresence` panel (this one's fine — it's plain client state, nothing forcibly swapping the DOM underneath it, unlike the page-transition case above). Staggered column reveal, ~45ms apart.

**Scroll reveal** (`src/components/ScrollReveal.tsx` + `[data-reveal]` attribute + CSS in `globals.css`) — IntersectionObserver-driven fade/rise, re-runs its query on `pathname` change. Respects `prefers-reduced-motion`.

**SEO** — per-page metadata (title/description/canonical) on every route, `sitemap.ts`, `robots.ts`, `public/llms.txt`, Organization/Product/FAQPage JSON-LD. `metadataBase` is built from `site.url`.

**Other utility components**: `CookieBanner.tsx`, `BackToTop.tsx` (tracks the cookie banner's dismissal state so the two don't overlap on mobile — a real bug that got caught and fixed), `ScrollProgress.tsx`, `UtmCapture.tsx` (first-touch UTM params to localStorage, inert until real analytics exists), `SimplePage.tsx` (shared wrapper for the nine short static pages — about/terms/privacy/returns/shipping/faqs/journal/contact/store-locator).

**Logo** (`src/components/Logo.tsx`) — server component, checks `existsSync` for `public/logo/loom-<variant>.png` and falls back to an inline SVG wordmark if absent. The real files (1600×1600 PNGs, a padded square canvas with the wordmark centered — not a tight crop) landed on 2026-08-20. Rendered via `fill` + `object-contain` rather than a fixed aspect ratio, because a fixed ratio didn't match the real file and threw a Next.js image-distortion warning. **Not visually verified in a browser** — the on-screen size is a reasonable guess. If it looks too small, a tighter wordmark-only crop (removing the empty margin) would render larger and cleaner than any CSS fix.

## Known gaps — what's left

Roughly in order of how much it matters before this could be a real, live store:

1. **Testimonials are fabricated.** `products.ts`'s `testimonials` array (Anna/Priya/Marcus/Lena/Sara) was invented as placeholder content early in the build, before there were real customers. Presenting fake customer quotes as genuine is a real problem if this goes live as-is (FTC-style testimonial rules, basic honesty) — needs either real customer quotes or the section reworked to not imply real attribution.
2. **Legal pages are explicit placeholders.** Terms, Privacy, Returns, Shipping all carry a visible "this is placeholder copy pending a full legal review" line. Needs an actual legal pass before launch.
3. **No payment processor.** The cart's Checkout button is inert by design — no Stripe/Razorpay/etc. wired up.
4. **`site.url` is a placeholder** (`https://loomandco.com`) — feeds canonical URLs, sitemap, Open Graph, and JSON-LD. Needs the real domain once one exists.
5. **Not deployed anywhere.** Only ever run via `npm run dev` / local production build. No Vercel project, no hosting set up.
6. **Google Analytics / Google Search Console** — intentionally not wired up; both need real account credentials from the owner. Faking IDs would be worse than omitting them.
7. **Social links have no UI yet.** There's no icon row or footer links for Instagram/etc. anywhere in the codebase — this isn't a "paste in a URL" task, it needs a small component built first (footer brand column is the natural place, next to the newsletter form).
8. **Prices are invented figures**, set during the initial catalogue build, never confirmed as real business decisions.
9. **Logo sizing unverified** (see above).
10. **No fresh mobile pass since the redesign/animation work landed.** One real overlap bug (back-to-top vs. cookie banner) was caught and fixed; nothing's been re-checked across all pages since the megamenu animation, redesign (TrustRow/PromoTiles restructure), and cleanup commits stacked on top.
11. **Dockerfile / Dockerfile.dev / docker-compose.yml** still exist at the root, untouched since the original template scaffold — never verified against this project's actual needs. Left alone during cleanup since removing deployment infra wasn't explicitly asked for, but worth a look if Docker isn't actually the deployment plan.

## Working notes for whoever picks this up

- **`npm run check`** is the ground truth — lint + typecheck + test + build, same as CI (`.github/workflows/ci.yml`). Always green before committing.
- **Two logic layers have real tests**: `cartLogic.test.ts`, `wishlistLogic.test.ts` (`npm run test`, `node --test`). If you add a third stateful feature with non-trivial merge/toggle logic, follow the same pattern — pure functions in a `*.ts` file, React context wrapping them in a `.tsx` file, tests on the pure functions only.
- **Tailwind v4 gotcha that already bit this project once**: never build a class name via string interpolation like `` `${side}-0` `` — Tailwind's scanner can't see it, the utility never gets generated, and the failure is silent (no build error, the style just doesn't apply). This exact bug caused the originally-reported "cart won't close" issue. Always emit complete literal class names, e.g. `side === "left" ? "left-0" : "right-0"`.
- **Redesign audit already done once** (`7ddb176`) against a standard "generic AI design" checklist — most of the checklist didn't apply (palette, typography, component patterns were already deliberate, not template-default). The two real findings fixed were repeated 3-equal-column symmetry on the homepage and missing hover/press states on a few buttons. Don't re-run a full redesign pass without a specific new complaint — the obvious wins are already taken.
