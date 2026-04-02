import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import { getAllScholars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Scholar Profiles",
  description:
    "Brief profiles of major Sunni scholars cited on Sunnah Clarity â€” who they were, what they are known for, and why they matter in the tradition.",
  alternates: { canonical: "/scholars" },
};

export default function ScholarsIndexPage() {
  const scholars = getAllScholars();

  return (
    <>
      <Header />
      <main className="relative min-h-[70vh]">
        <GeometricPattern className="opacity-[0.04]" />
        <div
          className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16"
          data-pagefind-body
        >
          <header className="mb-12">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Reference
            </p>
            <h1
              className="text-4xl font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              Scholar profiles
            </h1>
            <p
              className="mt-4 text-lg max-w-2xl"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Figures cited across this site â€” from the founders of the schools of law to
              masters of hadith and spirituality. Each page summarizes their place in Sunni
              scholarship and links to further study on SeekersGuidance where available.
            </p>
          </header>

          {/* Featured callout */}
          <Link
            href="/scholars/lineage"
            className="group flex items-start justify-between gap-4 rounded-lg p-5 no-underline mb-10 transition-colors"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
            }}
          >
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Visual overview
              </p>
              <h2
                className="text-lg font-bold mb-1 group-hover:underline"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--text-primary)",
                }}
              >
                The Scholarly Consensus on Innovation
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  color: "var(--text-secondary)",
                }}
              >
                Browse 19 scholars across all four schools of law and twelve
                centuries — who affirmed that bid&apos;a admits of good and
                blameworthy categories. Their own words, cited to source.
              </p>
            </div>
            <span
              className="flex-shrink-0 text-lg mt-1"
              style={{ color: "var(--color-primary)" }}
              aria-hidden
            >
              →
            </span>
          </Link>

          <ul className="space-y-0 list-none m-0 p-0 border-t" style={{ borderColor: "var(--border-default)" }}>
            {scholars.map(({ frontmatter }) => (
              <li
                key={frontmatter.slug}
                className="border-b py-5"
                style={{ borderColor: "var(--border-default)" }}
              >
                <Link
                  href={`/scholars/${frontmatter.slug}`}
                  className="group block no-underline"
                >
                  <span
                    className="text-lg font-semibold group-hover:underline"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {frontmatter.title}
                  </span>
                  <span
                    className="block mt-1 text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                    }}
                  >
                    {frontmatter.subtitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
