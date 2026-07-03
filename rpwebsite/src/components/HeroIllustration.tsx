export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-auto w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>

      <rect x="150" y="40" width="100" height="200" rx="16" fill="url(#g)" />
      <rect x="158" y="56" width="84" height="150" rx="6" fill="#ffffff" opacity="0.95" />
      <rect x="170" y="70" width="60" height="8" rx="4" fill="#0f766e" opacity="0.3" />
      <rect x="170" y="86" width="40" height="6" rx="3" fill="#94a3b8" />
      <rect x="170" y="104" width="60" height="26" rx="6" fill="#ccfbf1" />
      <rect x="170" y="138" width="60" height="26" rx="6" fill="#e0f2fe" />
      <rect x="170" y="172" width="60" height="22" rx="6" fill="#f0fdfa" />

      <g>
        <rect x="40" y="70" width="90" height="54" rx="10" fill="#ffffff" stroke="#e2e8f0" />
        <circle cx="58" cy="90" r="8" fill="#14b8a6" />
        <rect x="74" y="84" width="44" height="6" rx="3" fill="#cbd5e1" />
        <rect x="74" y="96" width="30" height="6" rx="3" fill="#e2e8f0" />
        <rect x="52" y="108" width="66" height="8" rx="4" fill="#0f766e" opacity="0.15" />
      </g>
      <g>
        <rect x="270" y="150" width="90" height="54" rx="10" fill="#ffffff" stroke="#e2e8f0" />
        <circle cx="288" cy="170" r="8" fill="#0891b2" />
        <rect x="304" y="164" width="44" height="6" rx="3" fill="#cbd5e1" />
        <rect x="304" y="176" width="30" height="6" rx="3" fill="#e2e8f0" />
        <rect x="282" y="188" width="66" height="8" rx="4" fill="#0891b2" opacity="0.15" />
      </g>

      <g>
        <rect x="60" y="200" width="10" height="30" rx="2" fill="#14b8a6" />
        <rect x="76" y="188" width="10" height="42" rx="2" fill="#0d9488" />
        <rect x="92" y="176" width="10" height="54" rx="2" fill="#0f766e" />
        <rect x="108" y="196" width="10" height="34" rx="2" fill="#2dd4bf" />
      </g>
    </svg>
  );
}