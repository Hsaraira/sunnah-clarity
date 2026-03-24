interface QuranVerseProps {
  arabic: string;
  translation: string;
  reference: string;
}

export default function QuranVerse({
  arabic,
  translation,
  reference,
}: QuranVerseProps) {
  return (
    <figure
      className="my-8 rounded-lg p-6 text-center"
      style={{ background: "var(--color-quran-bg)" }}
    >
      <p
        lang="ar"
        dir="rtl"
        className="text-2xl leading-loose mb-4"
        style={{ fontFamily: "var(--font-amiri), 'Noto Naskh Arabic', serif" }}
      >
        {arabic}
      </p>
      <blockquote
        className="text-base leading-relaxed italic max-w-prose mx-auto"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        &ldquo;{translation}&rdquo;
      </blockquote>
      <figcaption
        className="mt-3 text-sm font-medium"
        style={{ color: "var(--text-muted)" }}
      >
        — {reference}
      </figcaption>
    </figure>
  );
}
