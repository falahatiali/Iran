export function Shamseh({ className = '', spin = false }: { className?: string; spin?: boolean }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5)
  return (
    <svg viewBox="-100 -100 200 200" className={`${className} ${spin ? 'animate-spin-slow' : ''}`} aria-hidden="true">
      <defs>
        <linearGradient id="sg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f2d68b" /><stop offset=".5" stopColor="#d9b45a" /><stop offset="1" stopColor="#8a6420" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#sg)" strokeWidth="1.2">
        {petals.map((a) => (
          <path key={a} transform={`rotate(${a})`} d="M0 -96 C 14 -70, 14 -48, 0 -30 C -14 -48, -14 -70, 0 -96 Z" />
        ))}
        {[0, 45].map((a) => <rect key={a} x="-42" y="-42" width="84" height="84" transform={`rotate(${a})`} />)}
        <circle r="30" /><circle r="58" strokeOpacity=".5" /><circle r="98" strokeOpacity=".35" />
        {petals.map((a) => <circle key={`d${a}`} transform={`rotate(${a}) translate(0 -58)`} r="3" fill="#2ec4b6" stroke="none" />)}
      </g>
    </svg>
  )
}

export function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-10 text-gold/70" aria-hidden="true">
      <span className="h-px w-24 bg-gradient-to-l from-gold/70 to-transparent" />
      <svg width="22" height="22" viewBox="-10 -10 20 20"><path d="M0-9 3-3 9 0 3 3 0 9-3 3-9 0-3-3Z" fill="currentColor" /></svg>
      <span className="h-px w-24 bg-gradient-to-r from-gold/70 to-transparent" />
    </div>
  )
}
