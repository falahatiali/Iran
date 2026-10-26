import { motion, useReducedMotion } from 'motion/react'
import { BASEMAP, LAND_PATH } from '../data/basemap'

const project = ([lon, lat]: [number, number]) => {
  const k = (BASEMAP.scale * Math.PI) / 180
  return [BASEMAP.width / 2 + (lon - BASEMAP.center[0]) * k, BASEMAP.height / 2 - (lat - BASEMAP.center[1]) * k]
}

export function DynastyMap({ extent, accent, name }: { extent: [number, number][]; accent: string; name: string }) {
  const reduce = useReducedMotion()
  const d = 'M' + extent.map((p) => project(p).map((n) => n.toFixed(1)).join(' ')).join('L') + 'Z'
  const tehran = project([51.4, 35.7])
  return (
    <figure className="glass rounded-2xl p-3 overflow-hidden">
      <svg viewBox={`0 0 ${BASEMAP.width} ${BASEMAP.height}`} role="img" aria-label={`نقشه‌ی تقریبی گستره‌ی ${name}`} className="w-full h-auto">
        <rect width="100%" height="100%" fill="#0a1636" />
        <path d={LAND_PATH} fill="#1b2a52" stroke="#d9b45a" strokeOpacity=".25" strokeWidth=".6" />
        <motion.path
          d={d} fill={accent} fillOpacity={0.35} stroke={accent} strokeWidth={2} strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0, fillOpacity: 0 }}
          whileInView={{ pathLength: 1, fillOpacity: 0.35 }} viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
        <circle cx={tehran[0]} cy={tehran[1]} r="3" fill="#f2d68b" />
        <text x={tehran[0] + 6} y={tehran[1] - 6} fill="#f2d68b" fontSize="11">تهران امروز</text>
      </svg>
      <figcaption className="text-xs text-ivory/50 mt-2 px-1">
        گستره‌ی تقریبی و ساده‌شده در اوج قدرت (طرح ویراستاری). خطوط ساحلی: Natural Earth (مالکیت عمومی).
      </figcaption>
    </figure>
  )
}
