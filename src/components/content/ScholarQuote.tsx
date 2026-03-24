interface ScholarQuoteProps {
  quote: string;
  scholar: string;
  title?: string;
  dates?: string;
  source?: string;
}

export default function ScholarQuote({
  quote,
  scholar,
  title,
  dates,
  source,
}: ScholarQuoteProps) {
  return (
    <blockquote
      className="my-8 border-l-4 pl-6 py-2"
      style={{ borderLeftColor: "var(--color-primary)" }}
    >
      <p
        className="text-lg leading-relaxed italic"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-primary)",
          fontSize: "var(--step-1)",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-3">
        <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
          — {scholar}
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
