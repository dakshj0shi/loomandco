"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/lib/wishlist";
import { useToast } from "@/lib/toast";
import type { Product } from "@/lib/products";

/** Text-style wishlist toggle for the product detail page, next to Add to cart. */
export default function SaveToWishlist({ product }: { product: Product }) {
  const wishlist = useWishlist();
  const toast = useToast();
  const saved = wishlist.has(product.slug);

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={() => {
        wishlist.toggle({ slug: product.slug, name: product.name, price: product.price, tone: product.tone });
        toast.show(saved ? "Removed from wishlist" : "Added to wishlist");
      }}
      className="flex w-full items-center justify-center gap-2 border border-ink py-3 text-[12px] uppercase tracking-[0.16em] hover:bg-ink hover:text-paper"
    >
      <Heart size={14} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} />
      {saved ? "Saved" : "Save to wishlist"}
    </button>
  );
}
