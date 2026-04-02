import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import ScholarLineage from "@/components/content/ScholarLineage";

export const metadata: Metadata = {
  title: "The Scholarly Consensus on Innovation",
  description:
    "Scholars from all four schools of Islamic law — from the 2nd century AH to the 13th — who affirmed that bid'a admits of good and blameworthy categories. A visual survey of the classical majority position.",
  alternates: { canonical: "/scholars/lineage" },
};

export default function ScholarLineagePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-[70vh]">
        <GeometricPattern className="opacity-[0.04]" />

        {/* Hero */}
        <div
          className="relative"
          style={{
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--border-default)",
          }}
        >
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Scholarly consensus
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              The Scholarly Tradition
              <br />
              <span style={{ color: "var(--color-primary)" }}>
                on Innovation
              </span>
            </h1>
            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Across fourteen centuries and all four schools of Islamic law, the
              scholars who preserved and transmitted the hadith tradition held a
              consistent position: bid&apos;a admits of good and blameworthy
              categories. This is not a fringe view — it is the classical
              mainstream, documented in the foundational reference works of each
              school.
            </p>
            <p
              className="text-sm mt-4"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-muted)",
              }}
            >
              See the full argument on the{" "}
              <a
                href="/topics/bidah"
                style={{ color: "var(--color-primary)" }}
                className="hover:underline"
              >
                Bid&apos;a topic page
              </a>
              .
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12"
          data-pagefind-body
        >
          <ScholarLineage />
        </div>
      </main>
      <Footer />
    </>
  );
}
