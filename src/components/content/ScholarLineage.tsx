"use client";

import { useState } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  SCHOLAR_LINEAGE,
  SCHOLARS_BY_MADHAB,
  DISSENTING_SCHOLARS,
  MADHAB_ORDER,
  MADHAB_META,
  SEEKERS_GUIDANCE_LINKS,
  centuryLabel,
  type Madhab,
  type ScholarEntry,
} from "@/lib/scholar-lineage-data";

const ALL_CENTURIES = [
  ...new Set(SCHOLAR_LINEAGE.map((s) => s.centuryAH)),
].sort((a, b) => a - b);

// ── Scholar Card ──────────────────────────────────────────────────────────────

function ScholarCard({
  scholar,
  index,
}: {
  scholar: ScholarEntry;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const meta = MADHAB_META[scholar.madhab];
  const isDissenting = scholar.position === "dissenting";
  const dotColor = isDissenting ? "var(--color-correction)" : meta.light;

  return (
    <m.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left rounded-lg transition-colors duration-150"
        style={{
          background: open ? "var(--bg-surface)" : "var(--bg-base)",
          border: "1px solid var(--border-default)",
          padding: "12px 14px",
          cursor: "pointer",
        }}
      >
        <div className="flex items-start gap-2.5">
          <span
            aria-hidden
            style={{
              marginTop: 5,
              flexShrink: 0,
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: dotColor,
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span
                className="font-semibold text-sm leading-snug"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--text-primary)",
                }}
              >
                {scholar.slug ? (
                  <Link
                    href={`/scholars/${scholar.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="hover:underline"
                    style={{ color: "inherit" }}
                  >
                    {scholar.name}
                  </Link>
                ) : (
                  scholar.name
                )}
              </span>
              <span
                className="text-xs"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                {scholar.dates}
              </span>
              {isDissenting && (
                <span
                  className="text-xs font-medium"
                  style={{
                    color: "var(--color-correction)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  · dissenting
                </span>
              )}
            </div>
            <p
              className="text-xs mt-0.5"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {scholar.city}
            </p>
            <p
              className="text-xs mt-1 leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
              }}
            >
              {scholar.role}
            </p>

            {open && (
              <div
                className="mt-3 pt-3 text-sm leading-relaxed"
                style={{
                  borderTop: "1px solid var(--border-default)",
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                }}
              >
                <blockquote
                  className="mb-2 italic"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{scholar.bidaStatement}&rdquo;
                </blockquote>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {scholar.source}
                </p>
                {scholar.verifyUrl && (
                  <a
                    href={scholar.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block text-xs mt-2 hover:underline"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    Verify on SeekersGuidance →
                  </a>
                )}
              </div>
            )}
          </div>
          <span
            className="flex-shrink-0 text-xs transition-transform duration-200"
            style={{
              color: "var(--text-muted)",
              marginTop: 3,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
            aria-hidden
          >
            ▾
          </span>
        </div>
      </button>
    </m.div>
  );
}

// ── Madhab Column Header ──────────────────────────────────────────────────────

function MadhabHeader({ madhab, count }: { madhab: Madhab; count: number }) {
  const meta = MADHAB_META[madhab];
  return (
    <div
      className="mb-4 pb-3"
      style={{ borderBottom: `2px solid ${meta.light}` }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-bold text-base"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: meta.light,
          }}
        >
          {meta.label}
        </span>
        <span
          className="text-xs"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          {count} scholar{count !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

// ── Century Band ──────────────────────────────────────────────────────────────

function CenturyBand({ century }: { century: number }) {
  return (
    <div className="flex items-center gap-3 py-3 mt-2 mb-1">
      <span
        className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
        style={{
          color: "var(--color-accent)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {centuryLabel(century)}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "var(--border-default)" }}
        aria-hidden
      />
    </div>
  );
}

// ── By Century View ───────────────────────────────────────────────────────────

function ByCenturyView() {
  return (
    <div>
      {ALL_CENTURIES.map((century) => {
        const affirmedInCentury = SCHOLAR_LINEAGE.filter(
          (s) => s.centuryAH === century && s.position === "affirmed"
        );
        const dissentersInCentury = DISSENTING_SCHOLARS.filter(
          (s) => s.centuryAH === century
        );
        if (affirmedInCentury.length === 0 && dissentersInCentury.length === 0)
          return null;
        return (
          <div key={century} className="mb-8">
            <CenturyBand century={century} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {MADHAB_ORDER.map((madhab) => {
                const all = [
                  ...affirmedInCentury.filter((s) => s.madhab === madhab),
                  ...dissentersInCentury.filter((s) => s.madhab === madhab),
                ];
                if (all.length === 0) return <div key={madhab} />;
                return (
                  <div key={madhab} className="flex flex-col gap-2">
                    {all.map((s, i) => (
                      <ScholarCard key={s.name} scholar={s} index={i} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── By Madhab View ────────────────────────────────────────────────────────────

function ByMadhabView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {MADHAB_ORDER.map((madhab) => {
        const affirmed = SCHOLARS_BY_MADHAB[madhab].sort(
          (a, b) => a.centuryAH - b.centuryAH
        );
        const dissenters = DISSENTING_SCHOLARS.filter(
          (s) => s.madhab === madhab
        );
        const all = [...affirmed, ...dissenters];
        return (
          <div key={madhab}>
            <MadhabHeader madhab={madhab} count={all.length} />
            <div className="flex flex-col gap-2">
              {all.map((s, i) => (
                <ScholarCard key={s.name} scholar={s} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Toggle ────────────────────────────────────────────────────────────────────

type ViewMode = "century" | "madhab";

function ViewToggle({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (m: ViewMode) => void;
}) {
  const options: { value: ViewMode; label: string }[] = [
    { value: "madhab", label: "By School" },
    { value: "century", label: "By Century" },
  ];
  return (
    <div
      className="inline-flex rounded-lg p-1"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
      }}
      role="group"
      aria-label="View mode"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          aria-pressed={mode === opt.value}
          className="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            background:
              mode === opt.value ? "var(--color-primary)" : "transparent",
            color: mode === opt.value ? "#fff" : "var(--text-secondary)",
            border: "none",
            cursor: "pointer",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────

function StatsBar() {
  const affirmedCount = SCHOLAR_LINEAGE.filter(
    (s) => s.position === "affirmed"
  ).length;
  const dissenterCount = DISSENTING_SCHOLARS.length;
  const centuries = [...new Set(SCHOLAR_LINEAGE.map((s) => s.centuryAH))];
  const centurySpan = Math.max(...centuries) - Math.min(...centuries) + 1;
  const schoolCount = new Set(SCHOLAR_LINEAGE.map((s) => s.madhab)).size;
  const stats = [
    { value: `${affirmedCount}`, label: "scholars affirming" },
    { value: `${schoolCount}`, label: "schools of law" },
    { value: `${centurySpan}`, label: "centuries spanned" },
    { value: `${dissenterCount}`, label: "noted dissenters" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-lg px-4 py-4 text-center"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-default)",
          }}
        >
          <div
            className="text-3xl font-bold"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--color-primary)",
            }}
          >
            {s.value}
          </div>
          <div
            className="text-xs mt-1 uppercase tracking-wide"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Dissenting Note ───────────────────────────────────────────────────────────

function DissentingNote() {
  const affirmedCount = SCHOLAR_LINEAGE.filter(
    (s) => s.position === "affirmed"
  ).length;
  return (
    <div
      className="mt-10 rounded-lg p-5"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
      }}
    >
      <h3
        className="text-sm font-semibold mb-2"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        On the dissenting scholars
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-secondary)",
        }}
      >
        Imam al-Shatibi and Ibn Taymiyya are included because intellectual
        honesty requires acknowledging the strongest contrary voices. Their
        positions are represented accurately — including Ibn Taymiyya&apos;s own
        acknowledgment that practitioners of the mawlid receive reward for their
        intention and veneration. The existence of {DISSENTING_SCHOLARS.length}{" "}
        dissenters within a tradition of {affirmedCount} affirming scholars
        across all four schools confirms rather than undermines the mainstream
        position.
      </p>
    </div>
  );
}

// ── Methodology Note ──────────────────────────────────────────────────────────

function MethodologyNote() {
  const cities = [...new Set(SCHOLAR_LINEAGE.map((s) => s.city.split(" / ")[0].split(", ")[0]))];
  const verifiedCount = SCHOLAR_LINEAGE.filter((s) => s.verifyUrl).length;

  return (
    <div
      className="mt-6 rounded-lg p-5"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
      }}
    >
      <h3
        className="text-sm font-semibold mb-2"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        How these scholars were selected
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: "var(--text-secondary)",
        }}
      >
        Inclusion criteria: each scholar must be a recognized major authority
        within their school of law, and their position on bid&apos;a
        classification must be traceable to a named primary source (book title
        and section). Where a founder&apos;s direct statement does not survive,
        this is stated explicitly — their inclusion reflects their school&apos;s
        established methodology as codified by later authorities. {verifiedCount}{" "}
        of {SCHOLAR_LINEAGE.length} entries link to a SeekersGuidance article
        that references the scholar or their position; the remainder are verified
        against well-known classical texts that are independently checkable.
        This page does not claim to be exhaustive — scholars are included where
        a verifiable position statement exists. Absence from a particular century
        reflects gaps in our current sourcing, not absence of scholarly opinion.
      </p>
      <p
        className="text-xs mt-3"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        Geographic span: {cities.slice(0, 8).join(", ")}
        {cities.length > 8 ? `, and ${cities.length - 8} more` : ""}.
      </p>
    </div>
  );
}

// ── Explore Further ───────────────────────────────────────────────────────────

function ExploreFurther() {
  return (
    <div className="mt-6">
      <h3
        className="text-sm font-semibold mb-4"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          color: "var(--text-primary)",
        }}
      >
        Explore further on SeekersGuidance
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SEEKERS_GUIDANCE_LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-4 no-underline transition-colors"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
            }}
          >
            <p
              className="text-sm font-semibold group-hover:underline mb-1"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--text-primary)",
              }}
            >
              {link.title}
            </p>
            <p
              className="text-xs mb-2"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              {link.author}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-newsreader), Georgia, serif",
              }}
            >
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

export default function ScholarLineage() {
  const [view, setView] = useState<ViewMode>("madhab");

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <StatsBar />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              color: "var(--text-muted)",
            }}
          >
            Click any card to read the scholar&rsquo;s position, cited to
            source.
          </p>
          <ViewToggle mode={view} onChange={setView} />
        </div>

        {view === "century" && (
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 mb-1">
            {MADHAB_ORDER.map((m) => (
              <div
                key={m}
                className="text-center text-xs font-semibold uppercase tracking-widest py-2"
                style={{
                  color: MADHAB_META[m].light,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  borderBottom: `2px solid ${MADHAB_META[m].light}`,
                }}
              >
                {MADHAB_META[m].label}
              </div>
            ))}
          </div>
        )}

        <m.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {view === "century" ? <ByCenturyView /> : <ByMadhabView />}
        </m.div>

        <DissentingNote />
        <MethodologyNote />
        <ExploreFurther />
      </div>
    </LazyMotion>
  );
}
