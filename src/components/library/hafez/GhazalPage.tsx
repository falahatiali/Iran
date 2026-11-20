import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { GHAZAL_COUNT } from '../../../data/library/hafez/paths'
import type { Ghazal } from '../../../data/library/hafez/types'
import { FalButton } from './Fal'
import { BaytLines, Crumb, Source, fa } from './parts'
import '../naskh.css'
import './hafez.css'

export function GhazalPage({ g, commit, fal }: { g: Ghazal; commit: string; fal: boolean }) {
  const [meanings, setMeanings] = useState(true)
  const prev = g.n > 1 ? g.n - 1 : null
  const next = g.n < GHAZAL_COUNT ? g.n + 1 : null
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here={`غزل ${fa(g.n)}`} mid />
        {fal && (
          <p className="hfg-fal" role="status">
            این غزل به تصادف برایتان آمد؛ به رسم فال حافظ، برای خواندن و اندیشیدن. <FalButton className="hfg-again" />
          </p>
        )}
        <header className="hfr-head">
          <p className="k">دیوان حافظ · غزلیات</p>
          <h1>غزل {fa(g.n)}</h1>
          {g.metre && <p className="sub">وزن: {g.metre}</p>}
          <button type="button" className="hf-toggle" aria-pressed={meanings} onClick={() => setMeanings((v) => !v)}>
            {meanings ? 'پنهان کردن معنی‌ها' : 'نمایش معنی‌ها'}
          </button>
        </header>

        {g.summary && meanings && (
          <section className="hfg-summary" aria-labelledby="hfg-sum-h">
            <h2 id="hfg-sum-h">خلاصهٔ غزل <Source m={g.summary} /></h2>
            <p className="read">{g.summary.text}</p>
          </section>
        )}

        <ol className={`hfg-bayts${meanings ? '' : ' is-bare'}`}>
          {g.bayts.map((b, i) => (
            <li key={i} id={`b-${i + 1}`}>
              <a className="hfg-n" href={`#b-${i + 1}`} aria-label={`بیت ${fa(i + 1)}`}>{fa(i + 1)}</a>
              <BaytLines b={b} />
              {meanings && b.m && (
                <p className="hfg-m">{b.m.text} <Source m={b.m} /></p>
              )}
            </li>
          ))}
        </ol>

        <nav className="hfg-nav" aria-label="غزل‌های دیگر">
          {prev ? <Link to="/library/hafez/ghazal/$n" params={{ n: String(prev) }} className="hf-btn">→ غزل {fa(prev)}</Link> : <span />}
          <Link to="/library/hafez/ghazals" className="hf-btn">فهرست غزل‌ها</Link>
          {next ? <Link to="/library/hafez/ghazal/$n" params={{ n: String(next) }} className="hf-btn">غزل {fa(next)} ←</Link> : <span />}
        </nav>

        <p className="hfr-credit">
          متن غزل و معنی‌ها از <a href={`https://ganjoor.net/hafez/ghazal/sh${g.n}`} target="_blank" rel="noopener noreferrer">گنجور</a> است،
          از دادهٔ باز <a href={`https://github.com/ganjoor/ganjoor-data/tree/${commit}`} target="_blank" rel="noopener noreferrer">ganjoor-data</a>.
          معنی‌های نشان‌دار «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده است؛
          «نوشتهٔ خوانندگان گنجور» را کاربران گنجور نوشته‌اند؛ «ویراستهٔ این سایت» را ما پس از بازخوانی بازنویسی کرده‌ایم.
        </p>
      </div>
    </div>
  )
}
