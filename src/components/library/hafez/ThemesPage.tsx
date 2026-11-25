import { Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import type { ThemeMap } from '../../../data/library/hafez/types'
import { Crumb, fa } from './parts'
import '../naskh.css'
import './hafez.css'
import './themes.css'

const COLS = 33 // 33 × 15 = 495

/** The site's own word-count map of the ghazals' themes: a constellation of how themes meet, and every ghazal as a tile. */
export function ThemesPage({ map }: { map: ThemeMap }) {
  const themes = map.method.themes
  const min = map.method.minHits
  const [sel, setSel] = useState<number | null>(null)
  const stats = useMemo(() => {
    const has = (r: readonly number[], i: number) => r[i + 1] >= min
    const count = themes.map((_, i) => map.ghazals.filter((r) => has(r, i)).length)
    const pair = themes.map((_, i) => themes.map((_, j) => (i < j ? map.ghazals.filter((r) => has(r, i) && has(r, j)).length : 0)))
    const none = map.ghazals.filter((r) => themes.every((_, i) => !has(r, i))).length
    const dominant = map.ghazals.map((r) => {
      let best = -1
      themes.forEach((_, i) => { if (has(r, i) && (best < 0 || r[i + 1] > r[best + 1])) best = i })
      return best
    })
    return { count, pair, none, dominant, has }
  }, [map, themes, min])

  const R = 150
  const pos = themes.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / themes.length
    return { x: 230 + R * Math.cos(a), y: 215 + R * Math.sin(a) }
  })
  const maxPair = Math.max(1, ...stats.pair.flat())
  const maxCount = Math.max(1, ...stats.count)
  const total = map.ghazals.length

  return (
    <div className="hf hfr hft">
      <div className="hfr-page">
        <Crumb here="نقشهٔ مضمون‌ها" mid={<Link to="/library/hafez/ghazals">غزلیات</Link>} />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · طبقه‌بندی این سایت</p>
          <h1>نقشهٔ مضمون‌های غزل</h1>
          <p className="sub">
            می، باغ، شب، هجران و زهد و ریا در {fa(total)} غزل، به شمارش واژه‌ها. این طبقه‌بندیِ ماشینیِ خود ماست، نه خوانش شارحان؛ روشش پایین صفحه آمده است.
          </p>
        </header>

        <div className="hft-chips" role="group" aria-label="برجسته کردن یک مضمون">
          <button type="button" aria-pressed={sel === null} onClick={() => setSel(null)}>همه</button>
          {themes.map((t, i) => (
            <button key={t.key} type="button" className={`t-${t.key}`} aria-pressed={sel === i} onClick={() => setSel(sel === i ? null : i)}>
              <i aria-hidden /> {t.label} <small>{fa(stats.count[i])}</small>
            </button>
          ))}
        </div>

        <section className="hft-sky" aria-labelledby="hft-sky-h">
          <h2 id="hft-sky-h">مضمون‌ها کجا به هم می‌رسند</h2>
          <svg viewBox="0 0 460 450" role="img" aria-label="پنج مضمون و شمار غزل‌هایی که هر دو را دارند">
            <defs>
              <radialGradient id="hft-glow"><stop offset="0" stopColor="#fff6d8" stopOpacity=".9" /><stop offset="1" stopColor="#fff6d8" stopOpacity="0" /></radialGradient>
            </defs>
            {[...Array(42)].map((_, k) => (
              <circle key={k} className="hft-star" cx={(k * 97) % 460} cy={(k * 53 + 17) % 430} r={k % 5 === 0 ? 1.4 : 0.8} style={{ animationDelay: `${(k % 7) * 0.6}s` }} />
            ))}
            {themes.map((_, i) => themes.map((_, j) => {
              const n = stats.pair[i][j]
              if (i >= j || !n) return null
              const on = sel === null || sel === i || sel === j
              const mx = (pos[i].x + pos[j].x) / 2, my = (pos[i].y + pos[j].y) / 2
              const cx = 230 + (mx - 230) * 0.35, cy = 215 + (my - 215) * 0.35
              return (
                <g key={`${i}-${j}`} className={`hft-edge${on ? '' : ' is-dim'}`}>
                  <path d={`M${pos[i].x},${pos[i].y} Q${cx},${cy} ${pos[j].x},${pos[j].y}`} strokeWidth={1 + (9 * n) / maxPair} />
                  {(sel === null ? n >= maxPair * 0.2 : on) && <text x={(mx + cx) / 2} y={(my + cy) / 2} textAnchor="middle">{fa(n)}</text>}
                </g>
              )
            }))}
            {themes.map((t, i) => {
              const r = 16 + (26 * stats.count[i]) / maxCount
              const on = sel === null || sel === i
              return (
                <g key={t.key} className={`hft-node t-${t.key}${on ? '' : ' is-dim'}`}>
                  <circle cx={pos[i].x} cy={pos[i].y} r={r + 14} fill="url(#hft-glow)" />
                  <circle className="dot" cx={pos[i].x} cy={pos[i].y} r={r} />
                  <text x={pos[i].x} y={pos[i].y + 4} textAnchor="middle" className="n">{fa(stats.count[i])}</text>
                  <text x={pos[i].x} y={pos[i].y + (pos[i].y > 215 ? r + 22 : -r - 10)} textAnchor="middle" className="l">{t.label}</text>
                </g>
              )
            })}
          </svg>
          <p className="hft-cap">
            اندازهٔ هر ستاره شمار غزل‌های آن مضمون است و ضخامت هر رشته شمار غزل‌هایی که هر دو مضمون را دارند. {fa(stats.none)} غزل به هیچ‌یک از این پنج نمی‌رسد.
          </p>
        </section>

        <section className="hft-tiles" aria-labelledby="hft-tiles-h">
          <h2 id="hft-tiles-h">همهٔ غزل‌ها، یک‌جا</h2>
          <p className="hft-cap">هر خانه یک غزل است، به ترتیب دیوان (حرف به حرف)؛ رنگ، پررنگ‌ترین مضمون آن است. روی هر خانه بروید تا غزل باز شود.</p>
          <svg viewBox={`0 0 ${COLS * 14} ${Math.ceil(total / COLS) * 14}`} className="hft-grid" role="list" aria-label="غزل‌ها و مضمونشان">
            {map.ghazals.map((r, k) => {
              const d = stats.dominant[k]
              const lit = sel === null ? d >= 0 : stats.has(r, sel)
              const col = COLS - 1 - (k % COLS)
              const row = Math.floor(k / COLS)
              const label = `غزل ${fa(r[0])}: ${themes.map((t, i) => (r[i + 1] ? `${t.label} ${fa(r[i + 1])}` : '')).filter(Boolean).join('، ') || 'بی‌نشان'}`
              return (
                <Link key={r[0]} to="/library/hafez/ghazal/$n" params={{ n: String(r[0]) }} role="listitem" aria-label={label}>
                  <rect x={col * 14 + 1} y={row * 14 + 1} width={12} height={12} rx={3}
                    className={`${d >= 0 ? `t-${themes[sel ?? d].key}` : 't-none'}${lit ? '' : ' is-dim'}`}>
                    <title>{label}</title>
                  </rect>
                </Link>
              )
            })}
          </svg>
        </section>

        <section className="hft-top" aria-labelledby="hft-top-h">
          <h2 id="hft-top-h">پرنشان‌ترین غزل‌های هر مضمون</h2>
          <div className="hft-cols">
            {themes.filter((_, i) => sel === null || sel === i).map((t) => (
              <div key={t.key} className={`hft-col t-${t.key}`}>
                <h3><i aria-hidden /> {t.label}</h3>
                <ol>
                  {map.top[t.key].map(([n, c, first]) => (
                    <li key={n}>
                      <Link to="/library/hafez/ghazal/$n" params={{ n: String(n) }}>{first}</Link>
                      <small>غزل {fa(n)} · {fa(c)} واژه</small>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <details className="hft-method" open>
          <summary>روش: این نقشه چگونه ساخته شده است</summary>
          <p>
            این طبقه‌بندیِ خود این سایت است و ماشینی: متن هر غزل (روایت گنجور) بی‌اعراب و واژه‌به‌واژه خوانده شده و هر واژه‌ای که در فهرست یک مضمون باشد،
            تنها یا با پسوندی رایج (ها، ان، ی، ای، ش، ت، م…) یا پس از «ال» عربی یا «بـ» چسبیده، یک نشان برای آن مضمون شمرده شده است.
            غزلی که دست‌کم {fa(min)} نشان از مضمونی داشته باشد، آن مضمون را دارد. این شمارش است، نه تفسیر: نمی‌گوید غزل «دربارهٔ» چیست.
          </p>
          <ul>
            {themes.map((t) => <li key={t.key}><b>{t.label}:</b> {t.words.join('، ')}</li>)}
          </ul>
          <p>
            کاستی‌های شناخته: واژهٔ «می» (شراب) کنار گذاشته شده چون از پیشوند فعل («می‌رود») جدا نمی‌شود؛ «سحر» گاه جادوست و «دوش» گاه شانه؛
            «شمع» و «پروانه» و «چراغ» را جزو شب گرفته‌ایم؛ و غزلی که ردیفش یکی از این واژه‌هاست (مانند «چو شمع» یا «فراق») در هر بیت نشان می‌گیرد.
            هجران بیشتر با جمله‌ها گفته می‌شود تا با واژه‌ها، پس کمتر از آنچه هست دیده می‌شود. کد این شمارش در مخزن سایت است (scripts/hafez-themes.py).
          </p>
        </details>
      </div>
    </div>
  )
}
