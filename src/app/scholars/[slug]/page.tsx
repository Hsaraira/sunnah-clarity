import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import JsonLd, { articleJsonLd } from "@/components/seo/JsonLd";
import { getAllScholarSlugs, getScholarBySlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllScholarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scholar = getScholarBySlug(slug);
  if (!scholar) return {};

  return {
    title: scholar.frontmatter.title,
    description: scholar.frontmatter.description,
    alternates: {
      canonical: `/scholars/${slug}`,
    },
    openGraph: {
      title: scholar.frontmatter.title,
      description: scholar.frontmatter.description,
    },
  };
}

export default async function ScholarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scholar = getScholarBySlug(slug);

  if (!scholar) {
    notFound();
  }

  const { default: Content } = await import(`@content/scholars/${slug}.mdx`);

  return (
    <>
      <div id="reading-progress" />
      <JsonLd
        data={articleJsonLd({
          title: scholar.frontmatter.title,
          description: scholar.frontmatter.description,
          url: `https://sunnahclarity.org/scholars/${slug}`,
        })}
      />
      <Header />
      <ThreeColumnLayout>
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
              Scholar profile
            </p>
            <h1>{scholar.frontmatter.title}</h1>
            <p
              className="mt-2 text-lg"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-secondary)",
              }}
            >
              {scholar.frontmatter.subtitle}
            </p>
            <div
              className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {scholar.frontmatter.dates && (
                <span>{scholar.frontmatter.dates}</span>
              )}
              {scholar.frontmatter.madhhab && (
                <span>{scholar.frontmatter.madhhab}</span>
              )}
              <span>{scholar.readingTime} min read</span>
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
