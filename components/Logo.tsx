import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      {/* Icon mark */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="36" height="36" rx="4" fill="#0a1628" />
        {/* Tow hook shape */}
        <path d="M7 22 Q7 14 14 14 L22 14" stroke="#1e3a6e" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="24" cy="14" r="3" fill="#1e3a6e"/>
        {/* Road / car silhouette */}
        <rect x="8" y="24" width="20" height="5" rx="2" fill="#1e3a6e"/>
        <circle cx="12" cy="29" r="2" fill="#0a1628" stroke="#1e3a6e" strokeWidth="1.5"/>
        <circle cx="24" cy="29" r="2" fill="#0a1628" stroke="#1e3a6e" strokeWidth="1.5"/>
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-black tracking-wide uppercase" style={{ color: '#1e3a6e' }}>
          Hussnain
        </span>
        <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: '#0a1628' }}>
          Car Recovery
        </span>
      </div>
    </Link>
  )
}
