// SOFDIM components — icons, primitives

const ViberIcon = ({ size = 20, color = '#7360F2', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M19.3 3.5C17.8 2.4 15.1 2 12 2S6.2 2.4 4.7 3.5C3 4.7 2.2 7 2 9.5c-.2 2.3 0 4.4.3 5.6.3 1.4 1.3 2.7 2.8 3.1v2.9c0 .4.4.6.7.4l2.3-1.6c.3 0 .6.1.9.1h2.7c3.1 0 5.8-.4 7.3-1.5 1.7-1.2 2.5-3.5 2.7-6 .2-2.3 0-4.4-.3-5.6-.3-1.4-1.3-2.7-2.8-3.1l-.3-.3z" fill={color}/>
    <path d="M11.5 6.4c1.3 0 2.3.4 3 1.1.6.6 1 1.6 1 3h-.9c0-1.1-.3-1.9-.8-2.4-.5-.5-1.3-.8-2.3-.8v-.9zm.1 1.6c.9 0 1.5.2 2 .6.4.4.6 1 .6 1.9h-.9c0-.7-.1-1.1-.4-1.4-.3-.3-.7-.4-1.4-.4V8h.1zm.1 1.6c.5 0 .9.1 1.2.4.2.2.3.6.3 1.1h-.9c0-.3 0-.5-.1-.6-.1-.1-.3-.2-.6-.2v-.7zM8.3 7.4c.3-.1.5 0 .7.2l.7 1c.2.3.1.6-.1.8l-.5.4c-.2.2-.3.4-.1.7.4.7 1 1.3 1.7 1.7.2.1.5.1.7-.1l.4-.5c.2-.2.5-.3.8-.1l1 .7c.2.2.3.4.2.7-.2.9-.9 1.4-1.8 1.4-1 0-2-.5-3-1.5s-1.5-2-1.5-3c0-.8.5-1.5 1.4-1.7l-.6.3z" fill="#fff"/>
  </svg>
);

const TelegramIcon = ({ size = 20, color = '#26A5E4', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <circle cx="12" cy="12" r="10" fill={color}/>
    <path d="M16.8 8.1l-1.7 8.1c-.1.6-.5.7-1 .5l-2.7-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-2.8 5.1-4.6c.2-.2-.1-.3-.3-.1l-6.3 4-2.7-.9c-.6-.2-.6-.6.1-.9l10.5-4c.5-.2.9.1.7 1z" fill="#fff"/>
  </svg>
);

const PhoneIcon = ({ size = 16, color = '#FFFFFF' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = ({ size = 18, color = '#0B0B0D' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronIcon = ({ size = 18, color = '#B4B4B8', open = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transition: 'transform 220ms cubic-bezier(.4,0,.2,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Line-art feature icons — 1.5px stroke, orange accent
const FeatEngine = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="5" y="9" width="22" height="14" rx="2" stroke="#B4B4B8" strokeWidth="1.5"/>
    <path d="M10 9V6M22 9V6M10 26v-3M22 26v-3" stroke="#B4B4B8" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="3.5" stroke="#FF6B1A" strokeWidth="1.5"/>
    <path d="M16 12.5v-1.5M16 21v-1.5M19.5 16H21M11 16h1.5" stroke="#FF6B1A" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const FeatSteel = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M6 10l10-5 10 5v12l-10 5-10-5V10z" stroke="#B4B4B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 10l10 5 10-5M16 15v12" stroke="#B4B4B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 7.5l10 5" stroke="#FF6B1A" strokeWidth="1.5"/>
  </svg>
);

const FeatInsulation = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="6" y="6" width="20" height="20" rx="1.5" stroke="#B4B4B8" strokeWidth="1.5"/>
    <path d="M10 6v20M14 6v20M18 6v20M22 6v20" stroke="#B4B4B8" strokeWidth="1.5"/>
    <path d="M6 14h20M6 20h20" stroke="#FF6B1A" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

const FeatWarranty = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 4l10 4v8c0 6-4.5 10-10 12-5.5-2-10-6-10-12V8l10-4z" stroke="#B4B4B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11.5 16.5l3 3 6-6" stroke="#FF6B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatTruck = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M3 9h14v13H3V9zM17 13h6l4 4v5h-10v-9z" stroke="#B4B4B8" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="9" cy="23" r="2.5" stroke="#FF6B1A" strokeWidth="1.5"/>
    <circle cx="22" cy="23" r="2.5" stroke="#FF6B1A" strokeWidth="1.5"/>
  </svg>
);

// Component icons (8 small cards)
const CompPipe = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="13" y="5" width="10" height="26" stroke="#FF6B1A" strokeWidth="1.5"/>
    <ellipse cx="18" cy="5" rx="5" ry="1.8" stroke="#B4B4B8" strokeWidth="1.5"/>
    <ellipse cx="18" cy="31" rx="5" ry="1.8" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompTee = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M14 4h8v14h9v8H14V4z" stroke="#FF6B1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M22 18l9-8" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompElbow = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M8 4h8v12c0 6 4 10 10 10h4" stroke="#FF6B1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 4h4M26 30h4" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompCap = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M5 14l13-8 13 8" stroke="#FF6B1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="13" y="14" width="10" height="18" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompRevision = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="11" y="4" width="14" height="28" stroke="#B4B4B8" strokeWidth="1.5"/>
    <rect x="14" y="13" width="8" height="10" stroke="#FF6B1A" strokeWidth="1.5"/>
    <circle cx="20" cy="18" r="0.8" fill="#FF6B1A"/>
  </svg>
);
const CompCondensate = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M11 4h14v18l-7 10-7-10V4z" stroke="#FF6B1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M11 10h14" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompBracket = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 6v24M4 10h10l8 8M4 22h10l8-8" stroke="#FF6B1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="26" cy="18" r="4" stroke="#B4B4B8" strokeWidth="1.5"/>
  </svg>
);
const CompClamp = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="11" stroke="#FF6B1A" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="7" stroke="#B4B4B8" strokeWidth="1.5"/>
    <path d="M7 18h3M26 18h3M18 7v3M18 26v3" stroke="#B4B4B8" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Hero chimney visual — CSS/SVG rendered
const HeroChimney = () => (
  <svg viewBox="0 0 400 520" width="100%" height="100%" style={{ display: 'block' }}>
    <defs>
      <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2A2A2E"/>
        <stop offset="25%" stopColor="#8C8C92"/>
        <stop offset="50%" stopColor="#E4E4E8"/>
        <stop offset="75%" stopColor="#8C8C92"/>
        <stop offset="100%" stopColor="#2A2A2E"/>
      </linearGradient>
      <linearGradient id="rimLight" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0"/>
        <stop offset="50%" stopColor="#FF9A2E" stopOpacity="0.35"/>
        <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.5" cy="0.5">
        <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#FF6B1A" stopOpacity="0"/>
      </radialGradient>
      <filter id="blur1"><feGaussianBlur stdDeviation="2"/></filter>
    </defs>

    {/* ambient glow */}
    <ellipse cx="200" cy="280" rx="220" ry="220" fill="url(#glow)"/>

    {/* pipe body */}
    <rect x="130" y="60" width="140" height="380" fill="url(#steelGrad)"/>
    <rect x="130" y="60" width="140" height="380" fill="url(#rimLight)" opacity="0.7"/>

    {/* top cap flange */}
    <ellipse cx="200" cy="60" rx="70" ry="14" fill="#3A3A40"/>
    <ellipse cx="200" cy="60" rx="70" ry="14" fill="url(#steelGrad)" opacity="0.9"/>
    <ellipse cx="200" cy="56" rx="70" ry="10" fill="none" stroke="#1C1C1F" strokeWidth="1"/>
    <ellipse cx="200" cy="60" rx="58" ry="10" fill="#0B0B0D"/>
    <ellipse cx="200" cy="60" rx="58" ry="10" fill="none" stroke="#FF6B1A" strokeOpacity="0.4" strokeWidth="1"/>

    {/* connection ring mid */}
    <rect x="125" y="240" width="150" height="18" fill="#3A3A40"/>
    <rect x="125" y="240" width="150" height="18" fill="url(#steelGrad)" opacity="0.85"/>
    <line x1="125" y1="240" x2="275" y2="240" stroke="#0B0B0D" strokeWidth="1"/>
    <line x1="125" y1="258" x2="275" y2="258" stroke="#0B0B0D" strokeWidth="1"/>

    {/* bottom flange */}
    <ellipse cx="200" cy="440" rx="70" ry="14" fill="#3A3A40"/>
    <ellipse cx="200" cy="440" rx="70" ry="14" fill="url(#steelGrad)" opacity="0.9"/>
    <ellipse cx="200" cy="440" rx="58" ry="10" fill="#0B0B0D"/>

    {/* vertical surface highlight */}
    <rect x="195" y="66" width="2" height="368" fill="#FFFFFF" opacity="0.15"/>
    <rect x="160" y="66" width="1" height="368" fill="#FFFFFF" opacity="0.08"/>
    <rect x="235" y="66" width="1" height="368" fill="#FFFFFF" opacity="0.08"/>

    {/* diameter annotations */}
    <g stroke="#FF6B1A" strokeWidth="1" opacity="0.8">
      <line x1="130" y1="150" x2="90" y2="150"/>
      <line x1="90" y1="140" x2="90" y2="160"/>
    </g>
    <text x="70" y="154" fill="#FF6B1A" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="end" letterSpacing="1">Ø150</text>

    <g stroke="#B4B4B8" strokeWidth="1" opacity="0.5">
      <line x1="270" y1="340" x2="310" y2="340"/>
      <line x1="310" y1="330" x2="310" y2="350"/>
    </g>
    <text x="318" y="344" fill="#B4B4B8" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">h · 1000</text>

    <g stroke="#B4B4B8" strokeWidth="1" opacity="0.4" strokeDasharray="3 3">
      <line x1="60" y1="480" x2="340" y2="480"/>
    </g>
    <text x="60" y="498" fill="#6B6B70" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="2">AISI · 304 · 0,8mm</text>
  </svg>
);

Object.assign(window, {
  ViberIcon, TelegramIcon, PhoneIcon, ArrowIcon, ChevronIcon,
  FeatEngine, FeatSteel, FeatInsulation, FeatWarranty, FeatTruck,
  CompPipe, CompTee, CompElbow, CompCap, CompRevision, CompCondensate, CompBracket, CompClamp,
  HeroChimney
});
