import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/decorative/SectionDivider";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import TopicCard from "@/components/content/TopicCard";
import FAQLink from "@/components/content/FAQLink";
import JsonLd, { websiteJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TOPIC_REGISTRY } from "@/lib/navigation";
import { getFeaturedFAQs } from "@/lib/content";

const topics = TOPIC_REGISTRY.map((t) => ({
  title: t.title,
  subtitle: t.subtitle,
  description: t.description,
  href: `/topics/${t.slug}`,
}));

const faqs = getFeaturedFAQs().map((faq) => ({
  question: faq.frontmatter.question,
  href: `/faq/${faq.frontmatter.slug}`,
}));

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Header />

      <main className="flex-1" data-pagefind-body>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          style={{ background: "var(--bg-primary)" }}
        >
          <GeometricPattern opacity={0.04} />
          <AnimatedSection className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-newsreader), Georgia, serif", fontStyle: "italic", letterSpacing: "0.02em" }}
            >
              Traditional Sunni Islam
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Islam, <span style={{ color: "var(--color-primary)" }}>clearly</span> explained.
            </h1>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Accessible explanations of the concepts that matter most —
              bid&rsquo;a, mawlid, dhikr, tasawwuf, music, and the scholarly tradition —
              grounded in fourteen centuries of scholarship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#topics"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline transition-opacity"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Explore Topics
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline transition-colors"
                style={{
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Our Methodology
              </Link>
            </div>
          </AnimatedSection>
        </section>

        <SectionDivider />

        {/* Topics Grid */}
        <section id="topics" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Core Topics
              </h2>
              <p
                className="text-base max-w-xl mx-auto"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-newsreader), Georgia, serif" }}
              >
                Each topic is explained with a plain-language summary,
                detailed scholarly evidence, and full source citations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <TopicCard key={topic.href} {...topic} />
              ))}
            </div>

            {/* Scholar Consensus callout */}
            <div className="mt-8">
              <Link
                href="/scholars/lineage"
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg px-6 py-5 no-underline transition-colors"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                }}
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className="flex-shrink-0 text-2xl leading-none"
                    aria-hidden
                    style={{ color: "var(--color-accent)" }}
                  >
                    ✦
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                      }}
                    >
                      Visual overview
                    </p>
                    <p
                      className="font-semibold text-sm sm:text-base group-hover:underline"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      The Scholarly Consensus on Innovation
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        fontFamily: "var(--font-newsreader), Georgia, serif",
                        color: "var(--text-secondary)",
                      }}
                    >
                      19 scholars · 4 schools · 12 centuries — in their own words
                    </p>
                  </div>
                </div>
                <span
                  className="flex-shrink-0 text-sm font-medium"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  Browse →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ Section */}
        <section className="py-16 sm:py-20" style={{ background: "var(--bg-surface)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Common Questions
              </h2>
              <p
                className="text-base"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-newsreader), Georgia, serif" }}
              >
                The questions people ask most — answered clearly with scholarly evidence.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQLink key={faq.href} {...faq} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Daily Dhikr CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Daily Dhikr Guide
            </h2>
            <p
              className="text-base leading-relaxed mb-6 max-w-lg mx-auto"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              The complete collection of prophetic morning and evening adhkar — with Arabic text,
              English translation, repetition counts, and hadith-sourced benefits.
            </p>
            <Link
              href="/dhikr/daily"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline transition-opacity"
              style={{
                background: "var(--color-secondary)",
                color: "#fff",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Start Your Daily Dhikr
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* Methodology Note */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Grounded in Scholarship
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Every explanation on this site is written by humans, sourced from the Quran,
              authentic hadith collections, and the works of classical scholars like
              Imam al-Nawawi, Ibn Hajar al-Asqalani, and al-Izz ibn Abd al-Salam.
              We present the traditional Sunni scholarly positions — the same positions
              held by the vast majority of Muslims for over a thousand years.{" "}
              <Link
                href="/scholars/lineage"
                className="underline"
                style={{ color: "var(--color-primary)" }}
              >
                See the full scholarly lineage →
              </Link>
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              For deeper study, we recommend the free courses and resources at{" "}
              <a
                href="https://seekersguidance.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--color-primary)" }}
              >
                SeekersGuidance.org
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
