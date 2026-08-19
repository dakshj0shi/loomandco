"use client";

import { useEffect } from "react";

const KEY = "loomandco.utm_first_touch";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/**
 * Captures first-touch UTM params to localStorage so a real analytics/CRM
 * integration has attribution data the moment one exists — harmless no-op
 * until then. Never overwrites an existing first touch.
 */
export default function UtmCapture() {
  useEffect(() => {
    if (localStorage.getItem(KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const captured = Object.fromEntries(
      UTM_PARAMS.map((k) => [k, params.get(k)]).filter(([, v]) => v),
    );

    if (Object.keys(captured).length > 0) {
      localStorage.setItem(KEY, JSON.stringify({ ...captured, landingPage: window.location.pathname, capturedAt: Date.now() }));
    }
  }, []);

  return null;
}
