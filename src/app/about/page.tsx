import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "About Us",
  description:
    "Loom & Co. weaves bedsheets, comforters and cushions on traditional handlooms with artisan weavers in India — no power looms, no shortcuts.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SimplePage eyebrow="Our story" title="Woven by hand, not by the metre">
      <p>
        Loom & Co. started with a simple complaint: most &ldquo;handloom&rdquo; cotton on the
        market is woven on power looms, dyed for speed rather than depth, and sold at a markup
        that pays for none of it. We wanted the opposite — cloth that actually comes off a hand
        loom, from weavers who are paid for the time it takes.
      </p>
      <p>
        Every bedsheet, comforter and cushion cover in the collection is woven on traditional
        handlooms by artisan weavers in India. A handloom edge is never perfectly straight,
        and the slubs in the yarn are not faults to hide — they&apos;re the proof the cloth was
        made slowly, by a person, rather than pulled off a roll.
      </p>
      <h2>What &ldquo;luxury but modern&rdquo; means to us</h2>
      <p>
        We&apos;re not chasing heirloom fussiness or disposable trend cycles. The goal is cloth
        considered enough to last, and unfussy enough that you actually use it — on the bed
        you sleep in, not the one you save for guests.
      </p>
    </SimplePage>
  );
}
