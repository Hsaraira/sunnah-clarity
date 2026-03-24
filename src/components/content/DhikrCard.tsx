"use client";

import { useState } from "react";

interface DhikrCardProps {
  title: string;
  arabic: string;
  translation: string;
  count?: string;
  benefit: string;
  source: string;
  time: "morning" | "evening" | "both" | "anytime" | "after-prayer";
}

const timeLabels = {
  morning: "Morning",
  evening: "Evening",
  both: "Morning & Evening",
  anytime: "Anytime",
  "after-prayer": "After Prayer",
};

export default function DhikrCard({
  title,
  arabic,
  translation,
  count,
  benefit,
  source,
  time,
}: DhikrCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border-b py-6 first:pt-0 last:border-b-0"
      style={{ borderColor: "var(--border-default)" }}
    >
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h3
          className="text-base font-semibold m-0"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h3>
        <span
          className="text-xs flex-shrink-0"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {count && `${count} · `}{timeLabels[time]}
        </span>
      </div>

      <div
        className="py-5 px-6 mb-4"
        style={{
          background: "var(--bg-surface)",
          borderLeft: "3px solid var(--color-accent)",
        }}
      >
        <p
          lang="ar"
          className="text-xl leading-loose m-0"
          style={{
            fontFamily: "var(--font-amiri), 'Noto Naskh Arabic', serif",
            direction: "rtl",
            color: "var(--text-primary)",
            lineHeight: 2.2,
          }}
        >
          {arabic}
        </p>
      </div>

      <p
        className="text-sm leading-relaxed m-0 mb-3"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-secondary)",
          fontStyle: "italic",
        }}
      >
        &ldquo;{translation}&rdquo;
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs transition-colors"
        style={{
          color: "var(--color-primary)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        {expanded ? "Hide benefit & source" : "View benefit & source"}
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border-default)" }}>
          <p
            className="text-sm leading-relaxed m-0 mb-2"
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              color: "var(--text-primary)",
            }}
          >
            {benefit}
          </p>
          <p
            className="text-xs m-0"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            — {source}
          </p>
        </div>
      )}
    </div>
  );
}
