import SimplePage from "@/components/SimplePage";

export const metadata = {
  title: "Journal",
  description: "Notes on the looms, the weavers and the cloth behind Loom & Co.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <SimplePage eyebrow="Blogs" title="Journal">
      <p>
        Notes on the looms, the weavers and the cloth — first posts are on their way. Check
        back soon.
      </p>
    </SimplePage>
  );
}
