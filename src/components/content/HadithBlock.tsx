interface HadithBlockProps {
  arabic?: string;
  translation: string;
  source: string;
  sourceUrl?: string;
  narrator?: string;
}

export default function HadithBlock({
  arabic,
  translation,
  source,
  sourceUrl,
  narrator,
}: HadithBlockProps) {
  return (
    <blockquote
      className="my-8 rounded-r-lg border-l-4 p-6 not-italic"
      style={{
        background: "var(--bg-callout)",
        borderLeftColor: "var(--color-hadith-border)",
      }}
    >
      {arabic && (
        <p
          lang="ar"
          dir="rtl"
          className="text-center text-xl mb-4 leading-loose"
          style={{ fontFamily: "var(--font-amiri), 'Noto Naskh Arabic', serif" }}
        >
          {arabic}
        </p>
      )}
      <p
        className="text-base leading-relaxed italic"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        &ldquo;{translation}&rdquo;
      </p>
      <footer className="mt-3 flex flex-col gap-1">
        {narrator && (
          <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
            — {narrator}
          </span>
        )}
        <cite
          className="text-xs not-italic"
          style={{ color: "var(--text-muted)" }}
        >
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {source}
            </a>
          ) : (
            source
          )}
        </cite>
      </footer>
    </blockquote>
  );
}
