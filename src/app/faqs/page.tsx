import SimplePage from "@/components/SimplePage";

const FAQS = [
  {
    q: "How do I choose a bedsheet size?",
    a: "Single, Queen and King correspond to standard mattress widths — check your mattress dimensions against the size shown on each product page.",
  },
  {
    q: "Are the colours true to the photos?",
    a: "As close as screens allow. Handloom dye lots vary slightly batch to batch, which is part of the process rather than a defect.",
  },
  {
    q: "How do I care for handloom cotton?",
    a: "Machine wash cold and dry in shade — see the care panel on each product page for specifics.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — see the Shipping & Delivery Policy for timelines and rates by destination.",
  },
];

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <SimplePage eyebrow="Support" title="Frequently Asked Questions">
      <dl className="space-y-6">
        {FAQS.map((item) => (
          <div key={item.q}>
            <dt className="text-ink">{item.q}</dt>
            <dd className="mt-1">{item.a}</dd>
          </div>
        ))}
      </dl>
    </SimplePage>
  );
}
