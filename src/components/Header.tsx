"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const cart = useCart();

  return (
    <>
      <div className="bg-ink text-center text-[11px] uppercase tracking-[0.16em] text-paper">
        <div className="mx-auto max-w-site px-5 py-2">{site.announcement}</div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex h-15 max-w-site items-center gap-6 px-5 md:px-8">
          <button
            aria-label="Open menu"
            className="-ml-1 p-1 lg:hidden"
            onClick={() => setMenu(true)}
          >
            <Bars />
          </button>

          {/* Type lockup standing in for the logo artwork — see README to swap in the file. */}
          <Link
            href="/"
            className="font-display text-[22px] font-bold leading-none tracking-[0.01em] uppercase"
          >
            {site.brand}
          </Link>

          {/* Desktop nav. The megamenu is pure CSS hover, no state to get stuck. */}
          <nav className="hidden lg:flex lg:items-stretch lg:self-stretch">
            {nav.map((group) => (
              <div key={group.label} className="group relative flex items-stretch">
                <Link
                  href="/shop"
                  className="flex items-center px-4 text-[13px] tracking-wide group-hover:underline"
                >
                  {group.label}
                </Link>

                {group.columns.length > 0 && (
                  <div className="invisible absolute left-0 top-full z-50 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[520px] border border-line bg-paper p-8 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                      <div className="flex gap-12">
                        {group.columns.map((col) => (
                          <div key={col.title}>
                            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-muted">
                              {col.title}
                            </p>
                            <ul className="space-y-2">
                              {col.links.map((l) => (
                                <li key={l}>
                                  <Link href="/shop" className="text-[13px] hover:underline">
                                    {l}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-5 text-[13px]">
            <Link href="/shop" className="hidden hover:underline sm:block">
              Search
            </Link>
            <Link href="/shop" className="hidden hover:underline sm:block">
              Login
            </Link>
            <button onClick={() => cart.setOpen(true)} className="hover:underline">
              Cart ({cart.count})
            </button>
          </div>
        </div>
      </header>

      <Panel open={menu} onClose={() => setMenu(false)} title="Menu" side="left">
        <ul className="space-y-5">
          {nav.map((g) => (
            <li key={g.label}>
              <Link
                href="/shop"
                onClick={() => setMenu(false)}
                className="font-display text-lg"
              >
                {g.label}
              </Link>
              {g.columns.length > 0 && (
                <ul className="mt-2 space-y-1.5 pl-1">
                  {g.columns.flatMap((c) => c.links).map((l) => (
                    <li key={l}>
                      <Link
                        href="/shop"
                        onClick={() => setMenu(false)}
                        className="text-[13px] text-muted"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel
        open={cart.open}
        onClose={() => cart.setOpen(false)}
        title={`Cart (${cart.count})`}
        side="right"
      >
        {cart.lines.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <div className="flex h-full flex-col">
            <ul className="flex-1 space-y-5 overflow-y-auto">
              {cart.lines.map((l, i) => (
                <li key={`${l.slug}-${l.size ?? ""}`} className="flex gap-4">
                  <div
                    className="h-20 w-16 shrink-0 bg-sand"
                    style={{ backgroundColor: l.tone }}
                  />
                  <div className="flex-1">
                    <p className="text-[13px]">{l.name}</p>
                    {l.size && <p className="text-[12px] text-muted">{l.size}</p>}
                    <p className="mt-1 text-[13px]">{l.price} EUR</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => cart.setQty(i, l.qty - 1)}
                        className="h-6 w-6 border border-line leading-none"
                      >
                        –
                      </button>
                      <span className="text-[13px]">{l.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => cart.setQty(i, l.qty + 1)}
                        className="h-6 w-6 border border-line leading-none"
                      >
                        +
                      </button>
                      <button
                        onClick={() => cart.setQty(i, 0)}
                        className="ml-auto text-[12px] text-muted underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-line pt-4">
              <div className="flex justify-between text-[13px]">
                <span>Subtotal</span>
                <span>{cart.subtotal} EUR</span>
              </div>
              <p className="mt-1 text-[12px] text-muted">
                Shipping is calculated at checkout.
              </p>
              <button className="mt-4 w-full bg-ink py-3 text-[12px] uppercase tracking-[0.16em] text-paper">
                Checkout
              </button>
            </div>
          </div>
        )}
      </Panel>
    </>
  );
}

function Panel({
  open,
  onClose,
  title,
  side,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  side: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-ink/30 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!open}
        className={`fixed ${side}-0 top-0 z-50 flex h-full w-[min(90vw,380px)] flex-col bg-paper transition-transform duration-300 ${
          open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="text-[12px] uppercase tracking-[0.16em]">{title}</span>
          <button aria-label="Close" onClick={onClose} className="text-lg leading-none">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </aside>
    </>
  );
}

function Bars() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      {[5, 10, 15].map((y) => (
        <line key={y} x1="1" y1={y} x2="19" y2={y} stroke="currentColor" strokeWidth="1.2" />
      ))}
    </svg>
  );
}
