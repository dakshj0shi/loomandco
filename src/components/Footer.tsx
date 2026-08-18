import Link from "next/link";
import { Container } from "./ui";
import { nav, site } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-bold leading-none tracking-[0.01em] uppercase">
              {site.brand}
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted">
              {site.tagline}
            </p>
            <p className="mt-5 text-muted">{site.description}</p>
            <form className="mt-6 flex border-b border-ink">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full bg-transparent py-2 text-[13px] outline-none placeholder:text-muted"
              />
              <button className="shrink-0 py-2 text-[11px] uppercase tracking-[0.16em]">
                Sign up
              </button>
            </form>
          </div>

          {nav
            .filter((g) => g.columns.length > 0)
            .slice(0, 3)
            .map((g) => (
              <div key={g.label}>
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em]">{g.label}</p>
                <ul className="space-y-2">
                  {g.columns.flatMap((c) => c.links).slice(0, 6).map((l) => (
                    <li key={l}>
                      <Link href="/shop" className="text-[13px] text-muted hover:text-ink">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </Container>

      <div className="border-t border-line bg-ink text-paper">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-5 text-[12px]">
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <span className="text-paper/60 uppercase tracking-[0.2em]">
            Estd {site.established}
          </span>
          <span className="text-paper/60">{site.email}</span>
        </Container>
      </div>
    </footer>
  );
}
