import type { CSSProperties } from 'react'
import { ChapterLink, fa } from './parts'

const PETAL = 'M250 236C206 196 196 104 250 46C304 104 294 196 250 236Z'
const INNER = 'M250 240C226 214 222 162 250 128C278 162 274 214 250 240Z'

/** The Golestan's one signature touch: an eight-petalled rose opens petal by petal — the eight chapters, which
 * the Iranica likens to the eight gates of paradise. Each petal is a link; the heart is the preface.
 * Pure SVG and CSS; with reduced motion the rose is already open. */
export function Rose({ chapters, opening }: { chapters: readonly { slug: string; label: string }[]; opening: string }) {
  return (
    <figure className="sd-rose">
      <svg viewBox="0 0 500 500" role="group" aria-label="باب‌های گلستان، چون گلبرگ‌های یک گل">
        <defs>
          <radialGradient id="sd-petal" cx="250" cy="250" r="210" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5a0d22" />
            <stop offset=".55" stopColor="#a8233f" />
            <stop offset="1" stopColor="#d9506e" />
          </radialGradient>
        </defs>
        {chapters.slice(0, 8).map((c, i) => (
          <ChapterLink key={c.slug} book="golestan" chapter={c.slug} aria-label={`باب ${fa(i + 1)}: ${c.label}`} style={{ '--i': i, '--r': `${i * 45}deg` } as CSSProperties}>
            <path className="petal" d={PETAL} />
          </ChapterLink>
        ))}
        <g className="inner" aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => <path key={i} d={INNER} fill="#8a1a34" opacity=".55" transform={`rotate(${i * 45 + 22.5} 250 250)`} />)}
        </g>
        <g className="labels" aria-hidden="true">
          {chapters.slice(0, 8).map((c, i) => {
            const a = ((i * 45 - 90) * Math.PI) / 180
            const tx = (250 + 148 * Math.cos(a)).toFixed(1)
            const ty = 250 + 148 * Math.sin(a)
            return (
              <g key={c.slug} style={{ '--i': i } as CSSProperties}>
                <text className="num" x={tx} y={(ty - 6).toFixed(1)} textAnchor="middle">{`باب ${fa(i + 1)}`}</text>
                <text x={tx} y={(ty + 16).toFixed(1)} textAnchor="middle">{c.label}</text>
              </g>
            )
          })}
        </g>
        <ChapterLink book="golestan" chapter={opening} className="heart-link" aria-label="دیباچهٔ گلستان">
          <circle className="heart" cx="250" cy="250" r="44" />
          <text x="250" y="256" textAnchor="middle">دیباچه</text>
        </ChapterLink>
      </svg>
      <figcaption className="cap">هشت باب گلستان، هشت گلبرگ یک گل؛ دل گل دیباچهٔ کتاب است.</figcaption>
    </figure>
  )
}
