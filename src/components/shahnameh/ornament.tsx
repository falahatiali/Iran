import type { ReactNode } from 'react'

export function TazhibCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" fill="none">
      <path d="M8 72V28c0-11 9-20 20-20h44" stroke="#e4c36a" strokeOpacity=".85" strokeWidth="1.4" />
      <path d="M16 72V34c0-8 6-14 14-14h42" stroke="#e4c36a" strokeOpacity=".4" strokeWidth="1" />
      <circle cx="28" cy="28" r="3.2" fill="#c42a32" fillOpacity=".85" />
      <circle cx="28" cy="28" r="6" stroke="#e4c36a" strokeOpacity=".7" />
      <path d="M28 14v8M20 28h8M33 21l5-5M33 35l5 5" stroke="#f2d68b" strokeOpacity=".8" strokeWidth="1" />
    </svg>
  )
}

export function TazhibFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`shn-frame rounded-[2rem] ${className}`}>
      <TazhibCorner className="pointer-events-none absolute top-2 right-2 size-16 md:size-20" />
      <TazhibCorner className="pointer-events-none absolute top-2 left-2 size-16 md:size-20 -scale-x-100" />
      <TazhibCorner className="pointer-events-none absolute bottom-2 right-2 size-16 md:size-20 -scale-y-100" />
      <TazhibCorner className="pointer-events-none absolute bottom-2 left-2 size-16 md:size-20 -scale-100" />
      {children}
    </div>
  )
}
