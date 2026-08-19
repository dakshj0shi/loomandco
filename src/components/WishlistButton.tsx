"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/lib/wishlist";
import type { Product } from "@/lib/products";

export default function WishlistButton({ product }: { product: Product }) {
  const wishlist = useWishlist();
  const saved = wishlist.has(product.slug);

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={saved}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        wishlist.toggle({ slug: product.slug, name: product.name, price: product.price, tone: product.tone });
      }}
      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink"
    >
      <Heart size={15} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}
