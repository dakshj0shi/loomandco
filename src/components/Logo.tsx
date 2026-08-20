import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/lib/products";

/**
 * Renders the tightly cropped real wordmark at
 * /public/logo/loom-<variant>-wordmark.png,
 * otherwise an inline SVG wordmark — never a broken image icon. Server-only
 * (fs.existsSync), so Header/Footer receive this as a prop rather than importing it.
 */
export default function Logo({
  variant,
  className = "",
}: {
  variant: "black" | "white";
  className?: string;
}) {
  const rel = `/logo/loom-${variant}-wordmark.png`;
  const hasFile = existsSync(path.join(process.cwd(), "public", rel));

  if (hasFile) {
    return (
      <span className={`relative inline-block ${className}`}>
        <Image src={rel} alt={site.brand} fill sizes="240px" className="object-contain" priority />
      </span>
    );
  }

  const ink = variant === "black" ? "#171713" : "#f3f0e8";
  return (
    <svg viewBox="0 0 160 28" className={className} role="img" aria-label={site.brand}>
      <text
        x="0"
        y="21"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.5"
        fill={ink}
      >
        LOOM &amp; CO.
      </text>
    </svg>
  );
}
