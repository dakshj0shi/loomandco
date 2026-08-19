"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

/** Sizeless products add straight to the cart; sized ones pick a size first. */
export default function AddToCart({
  product,
  withSizes = false,
}: {
  product: Product;
  withSizes?: boolean;
}) {
  const cart = useCart();
  const sizes = withSizes ? product.sizes : undefined;
  const [size, setSize] = useState(sizes?.[0]);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;
    const t = window.setTimeout(() => setJustAdded(false), 1400);
    return () => window.clearTimeout(t);
  }, [justAdded]);

  const add = () => {
    cart.add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      tone: product.tone,
      size,
    });
    setJustAdded(true);
  };

  return (
    <div className="space-y-4">
      {sizes && sizes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`border px-3 py-1.5 text-[12px] ${
                s === size ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={add}
        className="flex w-full items-center justify-center gap-2 bg-ink py-3 text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-clay"
      >
        {justAdded ? (
          <>
            <Check size={14} strokeWidth={2} /> Added
          </>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
}
