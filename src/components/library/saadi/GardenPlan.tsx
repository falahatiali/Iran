import type { CSSProperties } from 'react'
import { ChapterLink, fa } from './parts'

/** The Bustan's one signature touch: a chahar-bagh, the Persian four-fold garden, seen from above. Its wall
 * draws itself, water fills the canal, and ten beds grow one after another — the book's ten chapters, each a
 * link; the pool at the centre is the opening. Pure SVG and CSS; with reduced motion the garden is simply there. */
export function GardenPlan({ chapters, opening }: { chapters: readonly { slug: string; label: string }[]; opening: string }) {
  const W = 128, G = 16, X0 = 28
  return (
    <figure className="sd-plan">
      <svg viewBox="0 0 760 400" role="group" aria-label="باب‌های بوستان، چون کرت‌های یک باغ">
        <rect className="wall" x="12" y="20" width="736" height="360" rx="14" pathLength={1} />
        {[40, 120, 200, 280, 360].map((y) => (
          <g key={y} className="tree-row" aria-hidden="true">
            <path d={`M4 ${y + 12} l6 -16 l6 16z`} fill="#1d4a30" />
            <path d={`M744 ${y + 12} l6 -16 l6 16z`} fill="#1d4a30" />
          </g>
        ))}
        <rect className="canal" x={X0} y="192" width="704" height="16" rx="3" />
        {chapters.slice(0, 10).map((c, i) => {
          const row = i < 5 ? 0 : 1
          const k = i % 5
          const x = 760 - X0 - (k + 1) * W - k * G
          const y = row ? 224 : 46
          return (
            <ChapterLink key={c.slug} book="bustan" chapter={c.slug} aria-label={`باب ${fa(i + 1)}: ${c.label}`} style={{ '--i': i } as CSSProperties}>
              <rect className="bed" x={x} y={y} width={W} height="130" rx="10" />
              {[[18, 18], [W - 18, 18], [18, 112], [W - 18, 112]].map(([dx, dy]) => (
                <circle key={`${dx}-${dy}`} className="tree" cx={x + dx} cy={y + dy} r="7" />
              ))}
              <text x={x + W / 2} y={y + 58} textAnchor="middle">{`باب ${fa(i + 1)}`}</text>
              <text x={x + W / 2} y={y + 86} textAnchor="middle">{c.label}</text>
            </ChapterLink>
          )
        })}
        <ChapterLink book="bustan" chapter={opening} aria-label="دیباچه: در نیایش خداوند">
          <polygon className="pool" points={octagon(380, 200, 22)} />
        </ChapterLink>
        <circle className="shimmer" cx="380" cy="200" r="14" aria-hidden="true" />
      </svg>
      <figcaption className="cap">ده باب بوستان، ده کرت یک باغ؛ حوض میانه دیباچهٔ کتاب است. روی هر کرت بزنید تا بابش باز شود.</figcaption>
    </figure>
  )
}

function octagon(cx: number, cy: number, r: number) {
  return Array.from({ length: 8 }, (_, i) => {
    const a = Math.PI / 8 + (i * Math.PI) / 4
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}
