"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "loomandco.cookie-consent";
export const CONSENT_EVENT = "loomandco:cookie-consent-changed";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!localStorage.getItem(COOKIE_CONSENT_KEY)) setVisible(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-paper"
    >
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <p className="text-[13px] text-muted">
          This site uses cookies to remember your cart and wishlist. See our{" "}
          <Link href="/privacy" className="text-ink underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 bg-ink px-5 py-2 text-[11px] uppercase tracking-[0.16em] text-paper hover:bg-clay"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
