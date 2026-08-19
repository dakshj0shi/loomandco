import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 text-4xl md:text-[52px]">This page came off the loom wrong.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist, or has moved. Try the shop, or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center bg-ink px-7 text-[11px] uppercase tracking-[0.18em] text-paper hover:bg-clay"
        >
          Back home
        </Link>
        <Link
          href="/shop"
          className="inline-flex min-h-11 items-center border border-ink px-7 text-[11px] uppercase tracking-[0.18em] hover:bg-ink hover:text-paper"
        >
          Shop the collection
        </Link>
      </div>
    </Container>
  );
}
