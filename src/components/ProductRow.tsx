import Link from "next/link";
import ProductCard from "./ProductCard";
import { Container } from "./ui";
import type { Product } from "@/lib/products";

/**
 * Horizontal rail. Native scroll-snap does the carousel job, so there is no
 * slider library, no autoplay timer and nothing to break on resize.
 */
export default function ProductRow({
  title,
  intro,
  items,
  href = "/shop",
}: {
  title: string;
  intro?: string;
  items: Product[];
  href?: string;
}) {
  return (
    <section data-reveal="soft" className="py-16 md:py-20">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-[34px]">{title}</h2>
            {intro && <p className="mt-2 max-w-md text-muted">{intro}</p>}
          </div>
          <Link href={href} className="text-[12px] uppercase tracking-[0.16em] underline">
            View all
          </Link>
        </div>
      </Container>

      <div className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth">
        <div className="mx-auto flex w-max max-w-none gap-5 px-5 md:px-8">
          {items.map((p) => (
            <div key={p.slug} className="w-[62vw] shrink-0 snap-start sm:w-[38vw] lg:w-[262px]">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
