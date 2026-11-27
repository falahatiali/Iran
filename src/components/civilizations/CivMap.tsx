import { Link } from '@tanstack/react-router'
import { BASEMAP, LAND_PATH } from '../../data/basemap'
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
  // put a label on the west side when a neighbour sits close to the east
  const west = (i: number) => pts[i].p[0] > X1 - 70 || pts.some((o, j) => j !== i && Math.abs(o.p[1] - pts[i].p[1]) < 9 && o.p[0] > pts[i].p[0] && o.p[0] - pts[i].p[0] < 60)
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
      {pts.map(({ c, p: [x, y] }, i) => {
        const on = highlight === c.slug
        const dim = highlight && !on
        const color = ERA_LABELS[c.era].color
        const w = west(i)
        const dot = (
          <g opacity={dim ? 0.45 : 1}>
            {on && <circle cx={x} cy={y} r="9" fill={color} opacity=".55" filter="url(#civ-glow)"><animate attributeName="r" values="6;11;6" dur="2.4s" repeatCount="indefinite" /></circle>}
            <circle cx={x} cy={y} r={on ? 4.2 : 3} fill={color} stroke="#070d1f" strokeWidth="1" />
            <text x={w ? x - 5.5 : x + 5.5} y={y + 2.6} textAnchor={w ? 'start' : 'end'} fontSize={on ? 9 : 7.2} fontWeight={on ? 800 : 600} fill={on ? '#f2d68b' : '#f6efe1'} paintOrder="stroke" stroke="#070d1f" strokeWidth="2.4">{c.name}</text>
          </g>
        )
        return linked && !on
          ? <Link key={c.slug} to="/civilizations/$slug" params={{ slug: c.slug }} aria-label={c.name} className="civ-map-dot">{dot}</Link>
          : <g key={c.slug}>{dot}</g>
      })}
    </svg>
  )
}
