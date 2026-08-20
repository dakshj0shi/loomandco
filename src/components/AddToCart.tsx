"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const reduceMotion = useReducedMotion();

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
              className={`border px-3 py-1.5 text-[12px] active:scale-[0.96] ${
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
        className="relative flex w-full items-center justify-center gap-2 overflow-hidden bg-ink py-3 text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-clay active:scale-[0.98]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={justAdded ? "added" : "idle"}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: EASE }}
            className="flex items-center justify-center gap-2"
          >
            {justAdded ? (
              <>
                <Check size={14} strokeWidth={2} /> Added
              </>
            ) : (
              "Add to cart"
            )}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
