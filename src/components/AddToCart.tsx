"use client";

import { useState } from "react";
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

  const add = () =>
    cart.add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      tone: product.tone,
      size,
    });

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
        className="w-full bg-ink py-3 text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-clay"
      >
        Add to cart
      </button>
    </div>
  );
}
