import { ChevronDown } from "lucide-react";
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

export const metadata = {
  title: "FAQs",
  description: "Sizing, colour, care and shipping answers for Loom & Co. handloom bedsheets, comforters and cushions.",
  alternates: { canonical: "/faqs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqsPage() {
  return (
    <SimplePage eyebrow="Support" title="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="divide-y divide-line border-t border-line">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink marker:content-none">
              {item.q}
              <ChevronDown size={16} className="shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 pr-8">{item.a}</p>
          </details>
        ))}
      </div>
    </SimplePage>
  );
}
