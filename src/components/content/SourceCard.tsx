interface SourceCardProps {
  title: string;
  url: string;
  source?: string;
  description?: string;
}

export default function SourceCard({ title, url, source, description }: SourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-interactive block p-4 no-underline"
      style={{ borderLeft: "3px solid var(--color-secondary)" }}
    >
      <p
        className="text-sm font-medium"
        style={{ color: "var(--color-primary)" }}
      >
        {title}
      </p>
      {source && (
        <p
          className="text-xs mt-0.5"
          style={{ color: "var(--text-secondary)" }}
        >
          {source}
        </p>
      )}
      {description && (
        <p
          className="text-xs mt-1"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-newsreader), Georgia, serif",
          }}
        >
          {description}
        </p>
      )}
    </a>
  );
}

interface SourceCardGroupProps {
  children: React.ReactNode;
}

export function SourceCardGroup({ children }: SourceCardGroupProps) {
  return (
    <div className="my-8">
      <p
        className="text-xs mb-3"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontStyle: "italic",
        }}
      >
        Learn more from qualified scholars
      </p>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </div>
  );
}
