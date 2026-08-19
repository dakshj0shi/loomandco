"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

/**
 * Enter-only route transition: `key={pathname}` forces a fresh mount on every
 * navigation, so the new page fades and rises into place instead of popping in.
 *
 * AnimatePresence's exit side was tried first and dropped — it needs to hold
 * the outgoing page mounted for its exit animation, but the App Router swaps
 * `children` immediately regardless (confirmed live: onAnimationStart fired
 * for the exit, onExitComplete never did, and the incoming page's own enter
 * never ran either — the exit gets torn out from under Motion mid-flight).
 * That's a known Framer/Motion-vs-App-Router incompatibility, not a config
 * issue, and native View Transitions aren't safely available on this stable
 * Next 16 / React 19 pairing without a canary React build. This trades the
 * old-page-fades-out half for something that reliably works every time.
 *
 * Eased to match the scroll-reveal curve in globals.css for one consistent feel.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
