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

const timeConfig = {
  morning: { label: "Morning", color: "var(--color-accent)" },
  evening: { label: "Evening", color: "var(--color-primary)" },
  both: { label: "Morning & Evening", color: "var(--color-secondary)" },
  anytime: { label: "Anytime", color: "var(--text-secondary)" },
  "after-prayer": { label: "After Prayer", color: "var(--color-primary)" },
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
  const config = timeConfig[time];

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3
              className="text-base font-semibold m-0"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--text-primary)",
                fontSize: "var(--step-0)",
              }}
            >
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {count && (
              <span
                className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {count}
              </span>
            )}
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: `color-mix(in srgb, ${config.color} 10%, transparent)`,
                color: config.color,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {config.label}
            </span>
          </div>
        </div>

        <div
          className="rounded-lg px-5 py-4 mb-4 text-center"
          style={{ background: "var(--bg-surface)" }}
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
          className="flex items-center gap-1.5 text-xs font-medium transition-colors"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {expanded ? "Hide details" : "Benefit & source"}
        </button>
      </div>

      {expanded && (
        <div
          className="px-5 pb-5 pt-3 border-t"
          style={{ borderColor: "var(--border-default)" }}
        >
          <div className="mb-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{
                color: "var(--color-secondary)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Benefit
            </p>
            <p
              className="text-sm leading-relaxed m-0"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              {benefit}
            </p>
          </div>
          <p
            className="text-xs mt-2 m-0"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Source: {source}
          </p>
        </div>
      )}
    </div>
  );
}
