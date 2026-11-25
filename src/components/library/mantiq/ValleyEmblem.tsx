import type { ReactNode } from 'react'
import { baytAnchor } from '../../../data/library/mantiq/sections'
import './valley-emblem.css'

interface Emblem {
  name: string
  part: number
  n: number
  a: string
  b: string
  art: ReactNode
}

const RAYS = Array.from({ length: 14 }, (_, i) => {
  const a = (i / 14) * Math.PI * 2
  return [Math.round(120 + Math.cos(a) * 92), Math.round(100 + Math.sin(a) * 82)] as const
})

// an Archimedean spiral, three turns out from the centre
const SPIRAL = Array.from({ length: 181 }, (_, i) => {
  const t = (i / 180) * Math.PI * 6
  const r = 3 + 4.3 * t
  return `${i ? 'L' : 'M'}${(120 + Math.cos(t) * r).toFixed(1)},${(100 + Math.sin(t) * r * 0.95).toFixed(1)}`
}).join(' ')

/** One picture per valley, each drawn from the bayt printed beside it (Ganjoor's text of that valley). */
const EMBLEMS: Record<string, Emblem> = {
  talab: {
    name: 'طلب', part: 12003, n: 2, a: 'صد بلا در هر نفس اینجا بود', b: 'طوطی گردون، مگس اینجا بود',
    art: (
      <g>
        <path className="ve-line" d="M30,180 C90,170 40,130 110,120 C180,110 120,70 170,60 C200,54 200,30 214,22" />
        {[[52, 168], [84, 146], [122, 118], [150, 92], [176, 60], [204, 34]].map(([x, y], i) => (
          <path key={i} className="ve-thorn" d={`M${x - 6},${y + 6} L${x},${y - 6} L${x + 6},${y + 6}`} style={{ ['--i' as string]: i }} />
        ))}
        <circle className="ve-gold" cx="214" cy="22" r="6" />
      </g>
    ),
  },
  eshgh: {
    name: 'عشق', part: 12011, n: 1, a: 'بعد ازین وادی عشق آید پدید', b: 'غرق آتش شد کسی کانجا رسید',
    art: (
      <g>
        <path className="ve-flame ve-f1" d="M120,186 C70,160 78,112 104,84 C100,112 120,118 124,96 C130,66 112,40 132,14 C150,52 182,86 172,132 C166,164 146,180 120,186 Z" />
        <path className="ve-flame ve-f2" d="M122,184 C96,170 96,140 112,122 C114,138 126,140 128,126 C132,108 126,94 136,80 C150,104 160,124 154,150 C150,168 138,180 122,184 Z" />
      </g>
    ),
  },
  marefat: {
    name: 'معرفت', part: 12018, n: 12, a: 'هر یکی بینا شود بر قدر خویش', b: 'بازیابد در حقیقت صدر خویش',
    art: (
      <g>
        {[86, 66, 46, 26].map((r, i) => (
          <path key={r} className="ve-eye" d={`M${120 - r * 1.3},100 Q120,${100 - r} ${120 + r * 1.3},100 Q120,${100 + r} ${120 - r * 1.3},100 Z`} style={{ ['--i' as string]: i }} />
        ))}
        <circle className="ve-gold" cx="120" cy="100" r="10" />
      </g>
    ),
  },
  esteghna: {
    name: 'استغنا', part: 12024, n: 2, a: 'می‌جهد از بی‌نیازی صرصری', b: 'می‌زند بر هم به یک دم کشوری',
    art: (
      <g>
        {[40, 72, 104, 136, 168].map((y, i) => (
          <path key={y} className="ve-wind" d={`M${16 + i * 6},${y} C70,${y - 22} 130,${y + 22} 224,${y - 6}`} style={{ ['--i' as string]: i }} />
        ))}
        {[[60, 60], [150, 120], [196, 80], [92, 150]].map(([x, y], i) => (
          <rect key={i} className="ve-leaf" x={x} y={y} width="9" height="9" rx="2" style={{ ['--i' as string]: i }} />
        ))}
      </g>
    ),
  },
  towhid: {
    name: 'توحید', part: 12032, n: 2, a: 'رویها چون زین بیابان درکنند', b: 'جمله سر از یک گریبان برکنند',
    art: (
      <g>
        {RAYS.map(([x, y], i) => (
          <g key={i}>
            <line className="ve-ray" x1={x} y1={y} x2="120" y2="100" style={{ ['--i' as string]: i }} />
            <circle className="ve-dot" cx={x} cy={y} r="4" />
          </g>
        ))}
        <circle className="ve-gold" cx="120" cy="100" r="11" />
      </g>
    ),
  },
  heyrat: {
    name: 'حیرت', part: 12038, n: 6, a: 'مرد حیران چون رسد این جایگاه', b: 'در تحیر مانده و گم کرده راه',
    art: (
      <path className="ve-line ve-spin" d={SPIRAL} />
    ),
  },
  faghr: {
    name: 'فقر و فنا', part: 12044, n: 3, a: 'صد هزاران سایهٔ جاوید تو', b: 'گم شده بینی ز یک خورشید تو',
    art: (
      <g>
        <circle className="ve-gold ve-sun" cx="120" cy="100" r="34" />
        {[[44, 50], [196, 54], [40, 152], [198, 150], [120, 18], [120, 182]].map(([x, y], i) => (
          <circle key={i} className="ve-shade" cx={x} cy={y} r="13" style={{ ['--i' as string]: i }} />
        ))}
      </g>
    ),
  },
}

/** The valley's emblem and the bayt it is drawn from; nothing on other pages. */
export function ValleyEmblem({ slug }: { slug: string }) {
  const e = EMBLEMS[slug]
  if (!e) return null
  return (
    <figure className="ve" aria-labelledby={`ve-${slug}`}>
      <svg viewBox="0 0 240 200" className="ve-svg" role="img" aria-label={`نقش وادی ${e.name}`}>{e.art}</svg>
      <figcaption id={`ve-${slug}`}>
        <span className="ve-name">وادی {e.name}</span>
        <a className="ve-bayt" href={`#${baytAnchor(e.part, e.n)}`}>
          <span>{e.a}</span>
          <span>{e.b}</span>
        </a>
        <small>نقش، از همین بیت گرفته شده است.</small>
      </figcaption>
    </figure>
  )
}
