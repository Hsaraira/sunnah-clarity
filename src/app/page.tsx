import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/decorative/SectionDivider";
import GeometricPattern from "@/components/decorative/GeometricPattern";
import TopicCard from "@/components/content/TopicCard";
import FAQLink from "@/components/content/FAQLink";
import JsonLd, { websiteJsonLd } from "@/components/seo/JsonLd";
import AnimatedSection from "@/components/ui/AnimatedSection";

const topics = [
  {
    title: "Bid'a",
    subtitle: "Innovation in Islam",
    description:
      "What bid'a actually means, the distinction between praiseworthy and blameworthy innovation, and why the blanket \"everything is bid'a\" narrative misrepresents the scholarly tradition.",
    href: "/topics/bidah",
    icon: "📖",
  },
  {
    title: "Mawlid",
    subtitle: "Celebrating the Prophet \uFDFA",
    description:
      "The permissibility of celebrating the Prophet's birth, with evidence from all four schools of thought and the classical scholarly consensus.",
    href: "/topics/mawlid",
    icon: "🌙",
  },
  {
    title: "Dhikr",
    subtitle: "Remembrance of Allah",
    description:
      "The permissibility and virtue of individual and collective remembrance of Allah, including the evidence for group dhikr gatherings.",
    href: "/topics/dhikr",
    icon: "📿",
  },
  {
    title: "Tasawwuf",
    subtitle: "The Science of Spiritual Purification",
    description:
      "What Sufism actually is within orthodox Sunni Islam — the science of ihsan, purification of the heart, and drawing closer to Allah.",
    href: "/topics/tasawwuf",
    icon: "💎",
  },
  {
    title: "Madhabs",
    subtitle: "Schools of Islamic Law",
    description:
      "Why following a madhab is the traditional and scholarly approach, what each school represents, and why direct interpretation without methodology is problematic.",
    href: "/topics/madhabs",
    icon: "⚖️",
  },
  {
    title: "Chains of Narration",
    subtitle: "Isnad & Silsila",
    description:
      "How Islamic knowledge is transmitted through unbroken chains back to the Prophet \uFDFA, the concept of ijaza, and spiritual lineages.",
    href: "/topics/isnad",
    icon: "🔗",
  },
  {
    title: "The Scholarly Tradition",
    subtitle: "Why Scholars Matter",
    description:
      "Profiles of major scholars, their contributions to Islamic sciences, and why the scholarly tradition is the backbone of authentic Islam.",
    href: "/topics/scholarly-tradition",
    icon: "🏛️",
  },
];

const faqs = [
  {
    question: "Is celebrating the Mawlid haram?",
    href: "/faq/is-mawlid-haram",
  },
  {
    question: "Is Sufism allowed in Islam?",
    href: "/faq/is-sufism-allowed",
  },
  {
    question: "Do I need to follow a madhab?",
    href: "/faq/do-i-need-a-madhab",
  },
  {
    question: "Is group dhikr permissible?",
    href: "/faq/is-group-dhikr-permissible",
  },
  {
    question: "What is bid'a in Islam?",
    href: "/faq/what-is-bidah",
  },
];

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
              className="text-sm font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
              bid&rsquo;a, mawlid, dhikr, tasawwuf, and the scholarly tradition —
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
                Each topic is explained at three levels — a plain-language summary,
                detailed scholarly evidence, and full source citations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <TopicCard key={topic.href} {...topic} />
              ))}
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
              held by the vast majority of Muslims for over a thousand years.
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
