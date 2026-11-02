import { useState } from 'react'

type Locale = 'fa' | 'en'
const S = 30 // px per metre
const W = 640
const GROUND = 400
const CX = W / 2
/** Tier heights and widths in metres: heights from Zournatzi (Iranica 1993); widths taper from 13.35 m, the setback is our sketch. */
const TIERS: [number, number][] = [[1.05, 13.35], [1.05, 12.2], [1.05, 11.05], [0.57, 9.9], [0.57, 8.75], [0.57, 7.6]]
const CELLA_W = 6.4
const WALL_H = 3.4
const TOTAL = 11.1

const T = {
  fa: { title: 'آرامگاه کوروش: نمای روبه‌رو به مقیاس', grove: 'نمایش بیشه و باغ (به روایت آریان)', bare: 'نمایش سازه به تنهایی', door: 'در ۱٫۳۹ × ۰٫۷۸ م', rosette: 'گل‌سرخ (روزت)', total: '۱۱٫۱ م', plinth: 'سکو ۱۳٫۳۵ م', tiers: 'سه پلهٔ ۱٫۰۵ م و سه پلهٔ ۰٫۵۷ م', chamber: 'اتاق ۳٫۱۷ × ۲٫۱۱ م، دیوار ۱٫۵ م', caption: 'بازسازی تصوری ما بر پایهٔ زورناتزی (ایرانیکا ۱۹۹۳)، استروناخ و گوپنیک (۲۰۰۹) و آریان ۶.۲۹. اندازه‌ها منتشرشده‌اند؛ عقب‌نشینی پله‌ها، رنگ‌ها و بیشه طرح‌وارند.' },
  en: { title: 'The tomb of Cyrus: front elevation to scale', grove: 'Show the grove and garden (after Arrian)', bare: 'Show the structure alone', door: 'door 1.39 × 0.78 m', rosette: 'rosette', total: '11.1 m', plinth: 'plinth 13.35 m', tiers: 'three tiers of 1.05 m and three of 0.57 m', chamber: 'chamber 3.17 × 2.11 m, walls 1.5 m', caption: 'Our imagined reconstruction, based on Zournatzi (Iranica 1993), Stronach & Gopnik (2009) and Arrian 6.29. The measurements are published; the setback of the tiers, the colours and the grove are sketches.' },
}

export function CyrusTombReconstruction({ locale }: { locale: Locale }) {
  const [grove, setGrove] = useState(false)
  const t = T[locale]
  let y = GROUND
  const tiers = TIERS.map(([h, w], i) => {
    y -= h * S
    return <rect key={i} x={CX - (w * S) / 2} y={y} width={w * S} height={h * S} fill={i % 2 ? '#d9c9a3' : '#cfbd94'} stroke="#7a6a48" strokeWidth={1} />
  })
  const top = y
  const wallTop = top - WALL_H * S
  const apex = GROUND - TOTAL * S
  const cw = (CELLA_W * S) / 2
  const doorH = 1.39 * S, doorW = 0.78 * S
  const trees = grove ? [-280, -240, -205, 200, 238, 278].map((dx, i) => (
    <g key={i} opacity={0.9}>
      <rect x={CX + dx - 3} y={GROUND - 70 - (i % 3) * 12} width={6} height={70 + (i % 3) * 12} fill="#5b4632" />
      <circle cx={CX + dx} cy={GROUND - 80 - (i % 3) * 12} r={24 + (i % 2) * 6} fill="#3f6b3a" />
    </g>
  )) : null
  return (
    <figure className="glass rounded-2xl p-4">
      <figcaption className="font-bold text-gold-bright mb-2">{t.title}</figcaption>
      <button type="button" onClick={() => setGrove(!grove)} aria-pressed={grove} className="glass rounded-full px-4 py-2 min-h-11 text-sm text-gold hover:border-gold mb-3">{grove ? t.bare : t.grove}</button>
      <svg viewBox={`0 0 ${W} 440`} className="w-full h-auto" role="img" aria-label={t.title} style={{ direction: 'ltr' }}>
        <rect x={0} y={0} width={W} height={GROUND} fill={grove ? '#1d2a22' : '#16131c'} />
        {grove && <rect x={0} y={GROUND - 6} width={W} height={6} fill="#4f7a3e" />}
        {trees}
        <rect x={0} y={GROUND} width={W} height={40} fill="#3a2f22" />
        {grove && <path d={`M0 ${GROUND + 20} H${W}`} stroke="#5aa7c7" strokeWidth={3} strokeDasharray="10 6" />}
        {tiers}
        <rect x={CX - cw} y={wallTop} width={cw * 2} height={WALL_H * S} fill="#e2d3ad" stroke="#7a6a48" />
        <polygon points={`${CX - cw - 6},${wallTop} ${CX + cw + 6},${wallTop} ${CX},${apex}`} fill="#d6c59c" stroke="#7a6a48" />
        <circle cx={CX} cy={wallTop - 4} r={12} fill="none" stroke="#9c7b3c" strokeWidth={2} />
        <rect x={CX - 18} y={wallTop - 4} width={36} height={18} fill="#d6c59c" />
        <rect x={CX - doorW / 2} y={top - doorH} width={doorW} height={doorH} fill="#2a2118" />
        <g fontSize={12} fill="#e9dcb8" fontFamily="sans-serif">
          <line x1={W - 40} y1={GROUND} x2={W - 40} y2={apex} stroke="#c9a85c" />
          <text x={W - 36} y={(GROUND + apex) / 2}>{t.total}</text>
          <line x1={CX - (13.35 * S) / 2} y1={GROUND + 14} x2={CX + (13.35 * S) / 2} y2={GROUND + 14} stroke="#c9a85c" />
          <text x={CX} y={GROUND + 32} textAnchor="middle">{t.plinth}</text>
          <text x={CX + doorW} y={top - doorH / 2}>{t.door}</text>
          <text x={CX + 18} y={wallTop - 16}>{t.rosette}</text>
          <text x={12} y={top + 30}>{t.tiers}</text>
          <text x={12} y={wallTop + 20}>{t.chamber}</text>
        </g>
      </svg>
      <p className="mt-3 text-sm text-ivory/70" lang={locale}>{t.caption}</p>
    </figure>
  )
}
