"use client";

import { useState } from "react";

interface ProgressiveDisclosureProps {
  summary: string;
  detailed: string;
  sources?: string;
}

const tiers = [
  { key: "summary", label: "Summary", icon: "1" },
  { key: "detailed", label: "Detailed", icon: "2" },
  { key: "sources", label: "Sources", icon: "3" },
] as const;

type Tier = (typeof tiers)[number]["key"];

export default function ProgressiveDisclosure({
  summary,
  detailed,
  sources,
}: ProgressiveDisclosureProps) {
  const [activeTier, setActiveTier] = useState<Tier>("summary");

  const availableTiers = sources
    ? tiers
    : tiers.filter((t) => t.key !== "sources");

  const content = {
    summary,
    detailed,
    sources: sources ?? "",
  };

  return (
    <div
      className="my-8 rounded-lg overflow-hidden"
      style={{ border: "1px solid var(--border-default)" }}
    >
      <div
        className="flex border-b"
        style={{
          borderColor: "var(--border-default)",
          background: "var(--bg-surface)",
        }}
      >
        {availableTiers.map((tier) => (
          <button
            key={tier.key}
            onClick={() => setActiveTier(tier.key)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color:
                activeTier === tier.key
                  ? "var(--color-primary)"
                  : "var(--text-muted)",
              background:
                activeTier === tier.key ? "var(--bg-primary)" : "transparent",
            }}
          >
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
              style={{
                background:
                  activeTier === tier.key
                    ? "var(--color-primary)"
                    : "var(--border-default)",
                color:
                  activeTier === tier.key
                    ? "#fff"
                    : "var(--text-muted)",
              }}
            >
              {tier.icon}
            </span>
            {tier.label}
          </button>
        ))}
      </div>

      <div
        className="px-6 py-5"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-primary)",
          lineHeight: 1.7,
        }}
      >
        <p className="text-base leading-relaxed whitespace-pre-line">
          {content[activeTier]}
        </p>
      </div>
    </div>
  );
}
