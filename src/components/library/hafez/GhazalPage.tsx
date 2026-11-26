import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { GHAZAL_COUNT } from '../../../data/library/hafez/paths'
import type { Ghazal, Sharh } from '../../../data/library/hafez/types'
import { FalButton } from './Fal'
import { BaytLines, Crumb, Source, fa } from './parts'
import '../naskh.css'
import './hafez.css'
import { track } from '../../../lib/engagement'

export interface RelatedList { theme?: string; items: readonly { n: number; first: string }[] }

export function GhazalPage({ g, commit, fal, sharh, related }: { g: Ghazal; commit: string; fal: boolean; sharh?: Sharh; related?: RelatedList }) {
  const [meanings, setMeanings] = useState(true)
  const prev = g.n > 1 ? g.n - 1 : null
  const next = g.n < GHAZAL_COUNT ? g.n + 1 : null
  return (
    <div className="hf hfr" data-book="hafez" data-section={`ghazal-${g.n}`}>
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
          {sharh && <p className="hfs-badge"><a href="#sharh" onClick={() => track('commentary_open', { book: 'hafez', section: `ghazal-${g.n}`, via: 'badge' })}>با «شرح این سایت»: {fa(sharh.points.length)} نکته از شارحان</a></p>}
          <button type="button" className="hf-toggle" aria-pressed={meanings} onClick={() => { track(meanings ? 'meaning_hide' : 'meaning_open', { book: 'hafez', section: `ghazal-${g.n}`, bayt: 'all' }); setMeanings((v) => !v) }}>
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
            <li key={i} id={`b-${i + 1}`} data-bayt={i + 1}>
              <a className="hfg-n" href={`#b-${i + 1}`} aria-label={`بیت ${fa(i + 1)}`}>{fa(i + 1)}</a>
              <BaytLines b={b} />
              {meanings && b.m && (
                <p className="hfg-m">{b.m.text} <Source m={b.m} /></p>
              )}
            </li>
          ))}
        </ol>

        {sharh && <SharhSection s={sharh} />}

        <p className="hfg-end" data-track-view="story_complete" data-book="hafez" data-section={`ghazal-${g.n}`} aria-hidden="true" />

        {related && related.items.length > 0 && (
          <section className="hfg-rel" aria-labelledby="hfg-rel-h">
            <h2 id="hfg-rel-h">غزل‌های هم‌مضمون</h2>
            <p className="sub">
              نزدیک‌ترین غزل‌ها به این غزل{related.theme ? <> (مضمون غالب: {related.theme})</> : null} بر پایهٔ{' '}
              <Link to="/library/hafez/themes">نقشهٔ مضمون‌ها</Link>، که شمارش ماشینی واژه‌ها و دسته‌بندی خود این سایت است.
            </p>
            <ul>
              {related.items.map((r) => (
                <li key={r.n}>
                  <Link to="/library/hafez/ghazal/$n" params={{ n: String(r.n) }}>
                    <span className="hfg-rel-n">غزل {fa(r.n)}</span> {r.first}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

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

/** «شرح این سایت»: what the commentators say about this ghazal, each point with its sources. */
function SharhSection({ s }: { s: Sharh }) {
  const wikiUrl = `https://fa.wikipedia.org/w/index.php?oldid=${s.wiki.oldid}`
  return (
    <section className="hfs" id="sharh" aria-labelledby="hfs-h">
      <span data-track-view="commentary_open" aria-hidden="true" />
      <h2 id="hfs-h">شرح این سایت</h2>
      <p className="hfs-lede">
        آنچه شارحان و پژوهشگران دربارهٔ این غزل گفته‌اند، کوتاه و به زبان ما؛ هر نکته با منبعش. جایی که شارحان هم‌رأی نیستند، هر دو سو آمده است.
      </p>
      <ol className="hfs-points">
        {s.points.map((p) => (
          <li key={p.h}>
            <h3>{p.h}</h3>
            <p className="read">{p.t}</p>
            <p className="hfs-refs"><span>منبع:</span> {p.refs.join(' · ')}</p>
          </li>
        ))}
      </ol>
      <details className="hfs-books">
        <summary>منابع و روش</summary>
        <ul>
          {s.books.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p>
          این نکته‌ها از مقالهٔ ویکی‌پدیای فارسی{' '}
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer">«{s.wiki.title}»</a> (نسخهٔ {s.wiki.date}) گردآوری و بازنویسی شده‌اند
          و شمارهٔ صفحه‌ها همان است که آن مقاله آورده؛ ما خود این کتاب‌ها را برگ‌به‌برگ ندیده‌ایم. چیزی از خود نیفزوده‌ایم.
        </p>
      </details>
    </section>
  )
}
