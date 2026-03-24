type Ruling = "permissible" | "recommended" | "obligatory" | "disliked" | "with-conditions" | "consensus";

interface MadhabRow {
  point: string;
  hanafi: string;
  maliki: string;
  shafii: string;
  hanbali: string;
  ruling?: Ruling;
}

interface MadhabComparisonProps {
  title: string;
  consensus?: string;
  rows: MadhabRow[];
}

const rulingColors: Record<Ruling, string> = {
  permissible: "var(--color-approval)",
  recommended: "var(--color-primary)",
  obligatory: "var(--color-primary)",
  disliked: "var(--color-correction)",
  "with-conditions": "var(--color-accent)",
  consensus: "var(--color-approval)",
};

export default function MadhabComparison({
  title,
  consensus,
  rows,
}: MadhabComparisonProps) {
  return (
    <div className="my-8 overflow-hidden rounded-lg" style={{ border: "1px solid var(--border-default)" }}>
      <div className="px-4 py-3" style={{ background: "var(--bg-surface)" }}>
        <h4
          className="text-sm font-semibold"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--text-primary)" }}
        >
          {title}
        </h4>
        {consensus && (
          <p className="text-xs mt-1" style={{ color: "var(--color-approval)" }}>
            Consensus/Majority: {consensus}
          </p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-default)" }}>
              <th className="px-4 py-2 text-left font-medium" style={{ color: "var(--text-muted)", background: "var(--bg-surface)" }}>Point</th>
              <th className="px-4 py-2 text-left font-medium" style={{ color: "var(--text-muted)", background: "var(--bg-surface)" }}>Hanafi</th>
              <th className="px-4 py-2 text-left font-medium" style={{ color: "var(--text-muted)", background: "var(--bg-surface)" }}>Maliki</th>
              <th className="px-4 py-2 text-left font-medium" style={{ color: "var(--text-muted)", background: "var(--bg-surface)" }}>Shafi'i</th>
              <th className="px-4 py-2 text-left font-medium" style={{ color: "var(--text-muted)", background: "var(--bg-surface)" }}>Hanbali</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border-default)" : undefined }}
              >
                <td className="px-4 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{row.point}</td>
                <td className="px-4 py-3" style={{ color: row.ruling ? rulingColors[row.ruling] : "var(--text-secondary)" }}>{row.hanafi}</td>
                <td className="px-4 py-3" style={{ color: row.ruling ? rulingColors[row.ruling] : "var(--text-secondary)" }}>{row.maliki}</td>
                <td className="px-4 py-3" style={{ color: row.ruling ? rulingColors[row.ruling] : "var(--text-secondary)" }}>{row.shafii}</td>
                <td className="px-4 py-3" style={{ color: row.ruling ? rulingColors[row.ruling] : "var(--text-secondary)" }}>{row.hanbali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
