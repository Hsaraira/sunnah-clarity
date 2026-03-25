import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import SectionDivider from "@/components/decorative/SectionDivider";
import { getAllTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Topics — Sunnah Clarity",
  description:
    "Explore the core topics of traditional Sunni Islam: bid'a, mawlid, dhikr, tasawwuf, madhabs, music, chains of narration, and the scholarly tradition.",
  alternates: {
    canonical: "/topics",
  },
};

export default function TopicsHubPage() {
  const topics = getAllTopics();

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
              Traditional Sunni Islam
            </p>
            <h1>Topics</h1>
            <p
              className="mt-4 text-lg max-w-xl mx-auto"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Foundational concepts explained with evidence from the Quran,
              hadith, and classical scholars.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {topics.map((topic) => (
                <Link
                  key={topic.frontmatter.slug}
                  href={`/topics/${topic.frontmatter.slug}`}
                  className="card-interactive block p-6 rounded-md no-underline border-l-4"
                  style={{
                    borderLeftColor: "var(--color-primary)",
                    border: "1px solid var(--border-default)",
                    borderLeftWidth: "4px",
                    borderLeftStyle: "solid",
                  }}
                >
                  <h2
                    className="text-lg font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {topic.frontmatter.title}
                  </h2>
                  <p
                    className="text-xs mb-2"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {topic.readingTime} min read
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                    }}
                  >
                    {topic.frontmatter.description}
                  </p>
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
