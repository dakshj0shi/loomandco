import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Return & Refund Policy",
  description: "Thirty nights to decide on bedsheets and comforters, fourteen days on cushions — how returns and refunds work at Loom & Co.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <SimplePage eyebrow="Support" title="Return & Refund Policy">
      <p>
        Bedsheets and comforters can be returned within thirty nights of delivery, laundered
        or not — see the trial period on the product page. Cushions and cushion covers can be
        returned unused within fourteen days.
      </p>
      <h2>How refunds work</h2>
      <p>
        Once a return is received, refunds are issued to the original payment method within
        seven business days.
      </p>
      <h2>What doesn&apos;t qualify</h2>
      <p>Items marked &ldquo;few left&rdquo; or from the archive are final sale.</p>
      <p className="text-[13px]">
        This is placeholder copy pending a final policy — do not treat it as binding yet.
      </p>
    </SimplePage>
  );
}
