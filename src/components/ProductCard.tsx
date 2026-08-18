import Link from "next/link";
import { Shot, price } from "./ui";
import AddToCart from "./AddToCart";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  const hasVariants = Boolean(p.priceMax);

  return (
    <article className="group">
      <Link href={`/product/${p.slug}`} className="block">
        <div className="relative">
          <Shot
            slug={p.slug}
            tone={p.tone}
            alt={p.name}
            sizes="(min-width: 1024px) 25vw, 60vw"
            className="aspect-[4/5] w-full"
          />
          {p.badge && (
            <span className="absolute left-3 top-3 bg-paper px-2 py-1 text-[10px] uppercase tracking-[0.14em]">
              {p.badge}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-sans text-[13px] group-hover:underline">{p.name}</h3>
        <p className="mt-0.5 text-[13px] text-muted">{price(p)}</p>
      </Link>

      <div className="mt-3">
        {hasVariants ? (
          <Link
            href={`/product/${p.slug}`}
            className="block border border-ink py-2.5 text-center text-[11px] uppercase tracking-[0.16em] hover:bg-ink hover:text-paper"
          >
            Select options
          </Link>
        ) : (
          <AddToCart product={p} />
        )}
      </div>
    </article>
  );
}
