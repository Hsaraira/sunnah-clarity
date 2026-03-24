import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import SectionDivider from "@/components/decorative/SectionDivider";
import { getAllFAQs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Common Questions",
  description:
    "Frequently asked questions about traditional Sunni Islam — bid'a, mawlid, dhikr, tasawwuf, madhabs, and more. Answered clearly with scholarly evidence.",
  alternates: {
    canonical: "/faq",
  },
};

const topicColors: Record<string, string> = {
  "Bid'a": "var(--color-accent)",
  Mawlid: "var(--color-primary)",
  Dhikr: "var(--color-secondary)",
  Tasawwuf: "var(--color-primary)",
  Madhabs: "var(--color-accent)",
};

export default function FAQIndexPage() {
  const faqs = getAllFAQs();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20">
          <GeometricPattern opacity={0.03} />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Frequently Asked Questions
            </p>
            <h1>Common Questions</h1>
            <p
              className="mt-4 text-lg max-w-xl mx-auto"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              The questions people ask most about traditional Sunni Islam —
              answered clearly with scholarly evidence.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Link
                  key={faq.frontmatter.slug}
                  href={`/faq/${faq.frontmatter.slug}`}
                  className="group block rounded-lg p-5 no-underline transition-shadow"
                  style={{
                    border: "1px solid var(--border-default)",
                    background: "var(--bg-primary)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-base font-semibold"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {faq.frontmatter.question}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span
                          className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            background: `color-mix(in srgb, ${topicColors[faq.frontmatter.topic] ?? "var(--color-primary)"} 10%, transparent)`,
                            color: topicColors[faq.frontmatter.topic] ?? "var(--color-primary)",
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                          }}
                        >
                          {faq.frontmatter.topic}
                        </span>
                        <span
                          className="text-xs"
                          style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                          }}
                        >
                          {faq.readingTime} min read
                        </span>
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
