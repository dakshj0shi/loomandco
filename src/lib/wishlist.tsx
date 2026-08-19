"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toggleItem, type WishlistItem } from "./wishlistLogic";

const KEY = "loomandco.wishlist";

type WishlistApi = {
  items: WishlistItem[];
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  has: (slug: string) => boolean;
  toggle: (item: WishlistItem) => void;
};

const Ctx = createContext<WishlistApi | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hydrate = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) setItems(JSON.parse(raw));
      } catch {
        /* corrupt or unavailable storage: start empty */
      }
      setLoaded(true);
    }, 0);

    return () => window.clearTimeout(hydrate);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, loaded]);

  const api: WishlistApi = {
    items,
    count: items.length,
    open,
    setOpen,
    has: (slug) => items.some((i) => i.slug === slug),
    toggle: (item) => setItems((prev) => toggleItem(prev, item)),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useWishlist() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useWishlist must be used inside <WishlistProvider>");
  return c;
}
