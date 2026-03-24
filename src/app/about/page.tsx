import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/decorative/SectionDivider";

export const metadata: Metadata = {
  title: "About & Methodology",
  description:
    "How Sunnah Clarity works: our editorial methodology, content sources, and commitment to traditional Sunni scholarship.",
};

const principles = [
  {
    title: "Primary Source Citations",
    description:
      "Every claim is traced to the Quran, authenticated hadith collections, or classical scholarly works. We cite Sahih al-Bukhari, Sahih Muslim, the Muwatta of Imam Malik, and the works of scholars like Imam al-Nawawi, Ibn Hajar al-Asqalani, and al-Izz ibn Abd al-Salam.",
  },
  {
    title: "Human-Written Content",
    description:
      "All religious content on this site is written by human authors with knowledge of traditional Islamic sciences. No AI generates, paraphrases, or modifies theological text. AI tools are used only for code, design, and non-content tasks.",
  },
  {
    title: "Traditional Scholarly Consensus",
    description:
      "We present the positions held by the vast majority of Sunni scholars across all four madhabs for over a thousand years. These are not fringe opinions — they are the mainstream scholarly tradition.",
  },
  {
    title: "Editorial Review",
    description:
      "Content changes go through a review process. Every edit is tracked in version control, creating a complete audit trail. No content reaches the site without review.",
  },
  {
    title: "Transparency",
    description:
      "We are upfront about what this site is and is not. We are not a fatwa-issuing body. For detailed legal rulings, we direct readers to qualified scholars and recommend SeekersGuidance.org for deeper study.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1" data-pagefind-body>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              About This Project
            </p>
            <h1>Our Methodology</h1>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              Sunnah Clarity exists to make traditional Sunni Islamic scholarship
              accessible to English-speaking Muslims. Too often, concepts like
              bid&rsquo;a, mawlid, dhikr, and tasawwuf are misrepresented in
              online spaces — stripped of their scholarly context and reduced to
              slogans. This site provides clear, sourced explanations grounded in
              fourteen centuries of scholarship.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 sm:py-20" style={{ background: "var(--bg-surface)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10">How We Work</h2>
            <div className="space-y-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="border-l-2 pl-6"
                  style={{ borderLeftColor: "var(--color-primary)" }}
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-newsreader), Georgia, serif",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6">What This Site Is Not</h2>
            <div
              className="article-content"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              <ul
                className="space-y-4 list-none p-0"
                style={{ color: "var(--text-secondary)" }}
              >
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1" style={{ color: "var(--color-correction)" }}>
                    &times;
                  </span>
                  <span>
                    <strong>Not a fatwa service.</strong> We explain scholarly positions but
                    do not issue personal rulings. For specific questions about your
                    situation, consult a qualified scholar.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1" style={{ color: "var(--color-correction)" }}>
                    &times;
                  </span>
                  <span>
                    <strong>Not a sectarian project.</strong> We present mainstream Sunni
                    scholarship from all four madhabs. We do not attack other Muslims
                    — we clarify what the scholarly tradition actually says.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1" style={{ color: "var(--color-correction)" }}>
                    &times;
                  </span>
                  <span>
                    <strong>Not a commercial project.</strong> No ads, no sponsors, no
                    monetization. This is a public benefit project.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section className="py-16 sm:py-20" style={{ background: "var(--bg-surface)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6">For Deeper Study</h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              We recommend{" "}
              <a
                href="https://seekersguidance.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--color-primary)" }}
              >
                SeekersGuidance.org
              </a>{" "}
              for comprehensive, free courses taught by traditionally-trained
              scholars. They offer hundreds of courses on Islamic sciences, from
              basic to advanced level, all without charge.
            </p>
            <a
              href="https://seekersguidance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium no-underline transition-opacity"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Visit SeekersGuidance
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
