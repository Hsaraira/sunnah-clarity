import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import JsonLd, { articleJsonLd } from "@/components/seo/JsonLd";
import { getAllTopicSlugs, getTopicBySlug, getSidebarFAQs } from "@/lib/content";
import { slugToFaqKey } from "@/lib/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};

  return {
    title: topic.frontmatter.title,
    description: topic.frontmatter.description,
    alternates: {
      canonical: `/topics/${slug}`,
    },
    openGraph: {
      title: topic.frontmatter.title,
      description: topic.frontmatter.description,
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const { default: Content } = await import(`@content/topics/${slug}.mdx`);
  const faqKey = slugToFaqKey(slug);
  const relatedFAQs = faqKey ? getSidebarFAQs(faqKey) : [];

  return (
    <>
      <div id="reading-progress" />
      <JsonLd
        data={articleJsonLd({
          title: topic.frontmatter.title,
          description: topic.frontmatter.description,
          url: `https://sunnahclarity.com/topics/${slug}`,
        })}
      />
      <Header />
      <ThreeColumnLayout contentType="topic" currentTopicSlug={slug} relatedFAQs={relatedFAQs}>
        <article>
          <header className="mb-10">
            <p
              className="text-sm mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              {topic.frontmatter.subtitle}
            </p>
            <h1>{topic.frontmatter.title}</h1>
            <p
              className="mt-4 text-lg"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              {topic.frontmatter.description}
            </p>
            <div
              className="mt-4 flex items-center gap-4 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              <span>{topic.readingTime} min read</span>
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
