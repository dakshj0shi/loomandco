import { Container, Eyebrow } from "./ui";

/** Shared shell for the short, mostly-static pages linked from the footer. */
export default function SimplePage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl py-16 md:py-20" data-reveal="soft">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-3 text-3xl md:text-[42px]">{title}</h1>
      <div className="prose-loom mt-8 space-y-5 text-muted [&_a]:text-ink [&_a]:underline [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:text-ink">
        {children}
      </div>
    </Container>
  );
}
