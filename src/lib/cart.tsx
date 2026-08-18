"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { addLine, setQty as setQtyIn, totals, type Line } from "./cartLogic";

const KEY = "atelier.cart";

type CartApi = {
  lines: Line[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<Line, "qty">, qty?: number) => void;
  setQty: (index: number, qty: number) => void;
};

const Ctx = createContext<CartApi | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  // Hydrate from storage on mount, then persist. `loaded` stops the first
  // render from writing an empty cart over a saved one.
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hydrate = window.setTimeout(() => {
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) setLines(JSON.parse(raw));
      } catch {
        /* corrupt or unavailable storage: start empty */
      }
      setLoaded(true);
    }, 0);

    return () => window.clearTimeout(hydrate);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(lines));
  }, [lines, loaded]);

  const api: CartApi = {
    lines,
    ...totals(lines),
    open,
    setOpen,
    add: (item, qty = 1) => {
      setLines((prev) => addLine(prev, item, qty));
      setOpen(true);
    },
    setQty: (index, qty) => setLines((prev) => setQtyIn(prev, index, qty)),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside <CartProvider>");
  return c;
}
