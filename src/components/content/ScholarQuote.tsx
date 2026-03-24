import Link from "next/link";

interface ScholarQuoteProps {
  scholar: string;
  /** When set, the attribution links to `/scholars/[slug]`. */
  scholarSlug?: string;
  title?: string;
  dates?: string;
  source?: string;
  quote?: string;
  arabicText?: string;
  translation?: string;
}

export default function ScholarQuote({
  scholar,
  scholarSlug,
  title,
  dates,
  source,
  quote,
  arabicText,
  translation,
}: ScholarQuoteProps) {
  return (
    <blockquote
      className="my-8 border-l-4 pl-6 py-2"
      style={{ borderLeftColor: "var(--color-primary)" }}
    >
      {arabicText && (
        <p
          lang="ar"
          className="text-lg leading-relaxed mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          {arabicText}
        </p>
      )}
      {(quote || translation) && (
        <p
          className="text-lg leading-relaxed italic"
          style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            color: "var(--text-primary)",
            fontSize: "var(--step-1)",
          }}
        >
          &ldquo;{quote ?? translation}&rdquo;
        </p>
      )}
      <footer className="mt-3">
        <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
          —{" "}
          {scholarSlug ? (
            <Link
              href={`/scholars/${scholarSlug}`}
              className="no-underline hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              {scholar}
            </Link>
          ) : (
            scholar
          )}
        </span>
        {title && (
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            , {title}
          </span>
        )}
        {dates && (
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {" "}({dates})
          </span>
        )}
        {source && (
          <cite className="block text-xs mt-1 not-italic" style={{ color: "var(--text-muted)" }}>
            {source}
          </cite>
        )}
      </footer>
    </blockquote>
  );
}
