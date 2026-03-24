"use client";

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
      className="block rounded-lg p-4 no-underline transition-shadow"
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-surface)",
        boxShadow: "var(--shadow-sm)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium truncate"
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
              className="text-xs mt-1 line-clamp-2"
              style={{ color: "var(--text-muted)" }}
            >
              {description}
            </p>
          )}
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="flex-shrink-0 mt-0.5"
          style={{ color: "var(--text-muted)" }}
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      </div>
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
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        Learn More from Qualified Scholars
      </p>
      <div className="grid gap-3 sm:grid-cols-2">{children}</div>
    </div>
  );
}
