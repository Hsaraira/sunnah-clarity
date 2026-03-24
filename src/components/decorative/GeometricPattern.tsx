interface GeometricPatternProps {
  className?: string;
  opacity?: number;
}

export default function GeometricPattern({
  className = "",
  opacity = 0.05,
}: GeometricPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="islamic-star" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          {/* 8-point star (khatam/octagram) */}
          <polygon
            points="25,2 31,19 50,19 35,30 40,48 25,38 10,48 15,30 0,19 19,19"
            fill="currentColor"
            stroke="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-star)" />
    </svg>
  );
}
