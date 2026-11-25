import type { CSSProperties } from 'react'
import './emblems.css'

type Form = 'masnavi' | 'qasida'

/** A poem's rhyme drawn as a page: each row a bayt, a gold dot where each hemistich ends (on the left, as Persian
 * lines end). A masnavi rhymes within each bayt, so each row's two dots are joined by their own arc; a qasida
 * (or a ghazal) carries one rhyme from the opening bayt to the last, so one gold thread runs down through every
 * second hemistich. Drawn from the poem's real bayt count (up to `max` rows). */
export function RhymeMap({ form, count, caption, max = 8 }: { form: Form; count: number; caption: string; max?: number }) {
  const rows = Math.min(count, max)
  const H = 22
  const h = rows * H + 24
  const y = (i: number) => 16 + i * H
  return (
    <figure className="lb-emblem lb-rhyme">
      <svg viewBox={`0 0 720 ${h}`} aria-hidden="true">
        {Array.from({ length: rows }, (_, i) => (
          <g key={i} style={{ '--i': i } as CSSProperties}>
            <rect className="bar" x="392" y={y(i) - 4} width="300" height="8" rx="4" />
            <rect className="bar" x="56" y={y(i) - 4} width="300" height="8" rx="4" />
            <circle className="dot" cx="384" cy={y(i)} r="4.5" />
            <circle className="dot" cx="48" cy={y(i)} r="4.5" />
            {form === 'masnavi' && <path className="arc" d={`M384 ${y(i)} C330 ${y(i) - 14} 102 ${y(i) - 14} 48 ${y(i)}`} pathLength={1} />}
          </g>
        ))}
        {form === 'qasida' && (
          <path className="thread" d={`M384 ${y(0)} C330 ${y(0) - 14} 102 ${y(0) - 14} 48 ${y(0)} L48 ${y(rows - 1)}`} pathLength={1} />
        )}
        {count > rows && <text x="360" y={h - 2} textAnchor="middle" fontSize="12" fill="#8a6a3a">…</text>}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

/** A shamseh, the sun-medallion that opens an illuminated manuscript: sixteen rays and a ring draw themselves,
 * then the centre fills. For a book's preface and for the Nowruz-nama. */
export function Shamseh({ caption, label }: { caption: string; label?: string }) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8
    const r1 = 46, r2 = i % 2 ? 78 : 94
    const p = (r: number, d = 0) => `${(120 + r * Math.cos(a + d)).toFixed(1)} ${(120 + r * Math.sin(a + d)).toFixed(1)}`
    return `M${p(r1, -0.12)} L${p(r2)} L${p(r1, 0.12)}`
  })
  return (
    <figure className="lb-emblem lb-shamseh" style={{ maxWidth: 240 }}>
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <circle className="glow" cx="120" cy="120" r="100" />
        {rays.map((d, i) => <path key={i} className="ray" d={d} pathLength={1} style={{ '--i': i } as CSSProperties} />)}
        <circle className="ring" cx="120" cy="120" r="50" pathLength={1} />
        <circle className="core" cx="120" cy="120" r="40" />
        {label && <text x="120" y="127" textAnchor="middle" fontSize="20" fontWeight="700" fill="#f6dc96" style={{ fontFamily: 'var(--naskh)' }}>{label}</text>}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
