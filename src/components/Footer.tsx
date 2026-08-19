import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui";
import { footerLinks, site } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-8 bg-ink text-paper">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            {/* Falls back to a blank slot until /public/logo/loom-white.png is added. */}
            <Image
              src="/logo/loom-white.png"
              alt={site.brand}
              width={160}
              height={32}
              className="h-7 w-auto"
            />
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-paper/60">
              {site.tagline}
            </p>
            <p className="mt-5 text-paper/70">{site.description}</p>
            <form className="mt-6 flex border-b border-paper/40">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full bg-transparent py-2 text-[13px] text-paper outline-none placeholder:text-paper/50"
              />
              <button className="shrink-0 py-2 text-[11px] uppercase tracking-[0.16em]">
                Sign up
              </button>
            </form>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-paper/60">
              Quick Links
            </p>
            <ul className="space-y-2">
              {footerLinks.quick.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-paper/80 hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-paper/60">Support</p>
            <ul className="space-y-2">
              {footerLinks.support.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-paper/80 hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-paper/15">
        <Container className="py-5 text-center text-[12px] text-paper/70">
          © {new Date().getFullYear()} — {site.brand}
        </Container>
      </div>
    </footer>
  );
}
