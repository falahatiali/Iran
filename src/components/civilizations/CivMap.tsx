import { Link } from '@tanstack/react-router'
import { BASEMAP, LAND_PATH } from '../../data/basemap'
import { CATALOG } from '../../data/civilizations/catalog'
import { ERA_LABELS, type CivSummary } from '../../data/civilizations/types'

const project = ([lon, lat]: [number, number]) => {
  const k = (BASEMAP.scale * Math.PI) / 180
  return [BASEMAP.width / 2 + (lon - BASEMAP.center[0]) * k, BASEMAP.height / 2 - (lat - BASEMAP.center[1]) * k] as const
}

/** The Iranian plateau window of the shared basemap (Natural Earth, public domain). */
const [X0, Y0] = project([43.2, 40.4])
const [X1, Y1] = project([63.8, 24.6])
const VIEW = `${X0.toFixed(1)} ${Y0.toFixed(1)} ${(X1 - X0).toFixed(1)} ${(Y1 - Y0).toFixed(1)}`
const SEAS: { name: string; at: [number, number] }[] = [
  { name: 'دریای کاسپین', at: [51.2, 39.2] },
  { name: 'خلیج فارس', at: [51.6, 27.4] },
  { name: 'دریای عمان', at: [59.4, 24.95] },
]

/** Sites on a map of Iran: every civilization as a dot in its era's colour; one may be highlighted. */
export function CivMap({ items, highlight, className, linked = true }: { items: readonly CivSummary[]; highlight?: string; className?: string; linked?: boolean }) {
  const pts = items.map((c) => ({ c, p: project(c.coord) }))
  const sides = placeLabels(pts.map(({ c, p }) => ({ x: p[0], y: p[1], w: c.name.length * (highlight === c.slug ? 4.6 : 3.7) + 2, on: highlight === c.slug, rank: CATALOG.findIndex((k) => k.slug === c.slug) })))
  return (
    <svg viewBox={VIEW} role="img" aria-label="نقشهٔ جای تمدن‌های کهن ایران" className={className} style={{ direction: 'rtl' }}>
      <defs>
        <radialGradient id="civ-sea" cx="50%" cy="45%" r="70%"><stop offset="0" stopColor="#123a6b" /><stop offset="1" stopColor="#081833" /></radialGradient>
        <linearGradient id="civ-land" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4a3d26" /><stop offset=".55" stopColor="#3a2e1b" /><stop offset="1" stopColor="#2a2114" /></linearGradient>
        <filter id="civ-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" /></filter>
      </defs>
      <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill="url(#civ-sea)" />
      <path d={LAND_PATH} fill="url(#civ-land)" stroke="#d9b45a" strokeOpacity=".5" strokeWidth=".6" />
      {SEAS.map((s) => { const [x, y] = project(s.at); return <text key={s.name} x={x} y={y} textAnchor="middle" fontSize="7" fill="#9be7df" fillOpacity=".55" fontStyle="italic">{s.name}</text> })}
      {pts.map(({ c, p: [x, y] }) => {
        const on = highlight === c.slug
        const dim = highlight && !on
        const color = ERA_LABELS[c.era].color
        const dot = (
          <g opacity={dim ? 0.45 : 1}>
            {on && <circle cx={x} cy={y} r="9" fill={color} opacity=".55" filter="url(#civ-glow)"><animate attributeName="r" values="6;11;6" dur="2.4s" repeatCount="indefinite" /></circle>}
            <circle cx={x} cy={y} r={on ? 4.2 : 3} fill={color} stroke="#070d1f" strokeWidth="1" />
            <title>{`${c.name} · ${c.spanLabel}`}</title>
          </g>
        )
        return linked && !on
          ? <Link key={c.slug} to="/civilizations/$slug" params={{ slug: c.slug }} aria-label={c.name} className="civ-map-dot">{dot}</Link>
          : <g key={c.slug}>{dot}</g>
      })}
      {/* labels after every dot so no dot covers a name */}
      <g pointerEvents="none">
        {pts.map(({ c, p: [x, y] }, i) => {
          if (sides[i] === 'none') return null
          const on = highlight === c.slug
          const w = sides[i] === 'west'
          return <text key={c.slug} x={w ? x - 5.5 : x + 5.5} y={y + 2.6} textAnchor={w ? 'start' : 'end'} fontSize={on ? 9 : 7.2} fontWeight={on ? 800 : 600} fill={on ? '#f2d68b' : '#f6efe1'} fillOpacity={highlight && !on ? 0.6 : 1} paintOrder="stroke" stroke="#070d1f" strokeWidth="2.4">{c.name}</text>
        })}
      </g>
    </svg>
  )
}

type Side = 'east' | 'west' | 'none'
/** Greedy label placement: the highlighted site first, then in catalog order (the best-known sites lead); each label goes east, else west, else is left off (the dot keeps its tooltip). */
function placeLabels(pts: { x: number; y: number; w: number; on: boolean; rank: number }[]): Side[] {
  const boxes: [number, number, number, number][] = []
  const out: Side[] = pts.map(() => 'none')
  const order = pts.map((_, i) => i).sort((a, b) => Number(pts[b].on) - Number(pts[a].on) || pts[a].rank - pts[b].rank)
  const free = (b: [number, number, number, number]) => b[0] >= X0 && b[2] <= X1 && boxes.every((o) => b[2] < o[0] || b[0] > o[2] || b[3] < o[1] || b[1] > o[3])
  for (const i of order) {
    const { x, y, w } = pts[i]
    const east: [number, number, number, number] = [x + 4, y - 5, x + 6 + w, y + 6]
    const west: [number, number, number, number] = [x - 6 - w, y - 5, x - 4, y + 6]
    if (free(east)) { boxes.push(east); out[i] = 'east' }
    else if (free(west)) { boxes.push(west); out[i] = 'west' }
  }
  return out
}
