interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`} aria-hidden="true">
      <svg
        width="200"
        height="24"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "var(--border-strong)" }}
      >
        <line x1="0" y1="12" x2="75" y2="12" stroke="currentColor" strokeWidth="1" />
        {/* Small 8-point star in center */}
        <polygon
          points="100,2 104,9 112,9 106,14 108,22 100,18 92,22 94,14 88,9 96,9"
          fill="currentColor"
          stroke="none"
        />
        <line x1="125" y1="12" x2="200" y2="12" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
