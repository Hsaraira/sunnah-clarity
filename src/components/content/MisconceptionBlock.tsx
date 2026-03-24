interface MisconceptionBlockProps {
  claim: string;
  response: string;
}

export default function MisconceptionBlock({
  claim,
  response,
}: MisconceptionBlockProps) {
  return (
    <div className="my-8 rounded-lg overflow-hidden" style={{ border: "1px solid var(--border-default)" }}>
      <div
        className="px-6 py-4 border-l-4"
        style={{
          borderLeftColor: "var(--color-correction)",
          background: "color-mix(in srgb, var(--color-correction) 5%, var(--bg-primary))",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-1"
          style={{ color: "var(--color-correction)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          Common Claim
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "var(--text-primary)" }}
        >
          {claim}
        </p>
      </div>
      <div
        className="px-6 py-4 border-l-4"
        style={{
          borderLeftColor: "var(--color-approval)",
          background: "color-mix(in srgb, var(--color-approval) 5%, var(--bg-primary))",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-1"
          style={{ color: "var(--color-approval)", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          What Scholars Actually Say
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "var(--text-primary)" }}
        >
          {response}
        </p>
      </div>
    </div>
  );
}
