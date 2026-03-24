import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import JsonLd, { articleJsonLd } from "@/components/seo/JsonLd";
import { getAllFAQSlugs, getFAQBySlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllFAQSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);
  if (!faq) return {};

  return {
    title: faq.frontmatter.question,
    description: `${faq.frontmatter.question} — answered clearly with scholarly evidence from the traditional Sunni perspective.`,
    openGraph: {
      title: faq.frontmatter.question,
      description: `${faq.frontmatter.question} — answered clearly with scholarly evidence.`,
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = getFAQBySlug(slug);

  if (!faq) {
    notFound();
  }

  const { default: Content } = await import(`@content/faq/${slug}.mdx`);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: faq.frontmatter.question,
          description: `${faq.frontmatter.question} — answered clearly with scholarly evidence.`,
          url: `https://sunnahclarity.org/faq/${slug}`,
        })}
      />
      <Header />
      <ThreeColumnLayout>
        <article>
          <header className="mb-10">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Frequently Asked Question
            </p>
            <h1>{faq.frontmatter.question}</h1>
            <div
              className="mt-4 flex items-center gap-4 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              <span>{faq.readingTime} min read</span>
              <span>Topic: {faq.frontmatter.topic}</span>
            </div>
          </header>
          <div className="article-content article-body" data-pagefind-body>
            <Content />
          </div>
        </article>
      </ThreeColumnLayout>
      <Footer />
    </>
  );
}
