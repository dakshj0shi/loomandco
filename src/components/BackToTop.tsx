"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, COOKIE_CONSENT_KEY } from "./CookieBanner";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bannerShowing, setBannerShowing] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => setBannerShowing(!localStorage.getItem(COOKIE_CONSENT_KEY));
    const t = window.setTimeout(check, 0);
    window.addEventListener(CONSENT_EVENT, check);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener(CONSENT_EVENT, check);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed right-5 z-40 flex h-11 w-11 items-center justify-center border border-ink bg-paper text-ink transition-[bottom] duration-200 hover:bg-ink hover:text-paper md:right-8 ${
        bannerShowing ? "bottom-32 md:bottom-24" : "bottom-6"
      }`}
    >
      <ArrowUp size={18} strokeWidth={1.5} />
    </button>
  );
}
