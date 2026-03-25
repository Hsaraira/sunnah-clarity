import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import SectionDivider from "@/components/decorative/SectionDivider";
import { getFAQsGroupedByTopic } from "@/lib/content";
import { FAQ_TOPIC_TO_LABEL, FAQ_TOPIC_TO_SLUG } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Common Questions — Sunnah Clarity",
  description:
    "Frequently asked questions about traditional Sunni Islam — bid'a, mawlid, dhikr, tasawwuf, madhabs, and more. Answered clearly with scholarly evidence.",
  alternates: {
    canonical: "/faq",
  },
};

const TOPIC_ORDER = ["Bid'a", "Mawlid", "Dhikr", "Tasawwuf", "Madhabs", "Music"];

export default function FAQIndexPage() {
  const grouped = getFAQsGroupedByTopic();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-20">
          <GeometricPattern opacity={0.04} />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
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
            <div className="space-y-12">
              {TOPIC_ORDER.map((topicKey) => {
                const faqs = grouped[topicKey];
                if (!faqs || faqs.length === 0) return null;
                const topicLabel = FAQ_TOPIC_TO_LABEL[topicKey] ?? topicKey;
                const topicSlug = FAQ_TOPIC_TO_SLUG[topicKey];

                return (
                  <div key={topicKey}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2
                        className="text-lg font-bold"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {topicLabel}
                      </h2>
                      {topicSlug && (
                        <Link
                          href={`/topics/${topicSlug}`}
                          className="text-xs no-underline"
                          style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                          }}
                        >
                          Read topic →
                        </Link>
                      )}
                    </div>
                    <div className="space-y-3">
                      {faqs.map((faq) => (
                        <Link
                          key={faq.frontmatter.slug}
                          href={`/faq/${faq.frontmatter.slug}`}
                          className="block py-3 no-underline border-b"
                          style={{ borderColor: "var(--border-default)" }}
                        >
                          <p
                            className="text-base mb-1"
                            style={{
                              fontFamily: "var(--font-playfair), Georgia, serif",
                              color: "var(--color-primary)",
                            }}
                          >
                            {faq.frontmatter.question}
                          </p>
                          <span
                            className="text-xs"
                            style={{
                              color: "var(--text-muted)",
                              fontFamily: "var(--font-inter), system-ui, sans-serif",
                            }}
                          >
                            {faq.readingTime} min read
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
