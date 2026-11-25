import { Link } from '@tanstack/react-router'
import { type CSSProperties, useState } from 'react'
import type { NwIndex, NwSection } from '../../../data/library/khayyam/nowruz'
import { ARABIC_PARAS, NOWRUZ_INTRO } from '../../../data/library/khayyam/nowruz'
import { Shamseh } from '../Emblems'
import { Source } from '../hafez/parts'
import { Crumb, Paras, Sources, fa } from './parts'
import '../naskh.css'
import './khayyam.css'
import './nowruz.css'

const CREDIT = 'متن و معنی‌ها از گنجور است، از دادهٔ باز گنجور (ganjoor-data). معنی‌های نشان‌دار «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده است؛ «نوشتهٔ خوانندگان گنجور» را کاربران گنجور نوشته‌اند.'

/** The Nowruz-nama's contents: the sourced note on the book and its attribution, then its 42 sections. */
export function NowruzPage({ index }: { index: NwIndex }) {
  const st = index.stats
  return (
    <div className="kh khr nw">
      <div className="khr-page">
        <Crumb here="نوروزنامه" />
        <header className="khr-head">
          <p className="k">منسوب به خیام · نثر فارسی</p>
          <h1>نوروزنامه</h1>
          <p className="sub">{fa(st.sections)} بخش به روایت گنجور، با معنی هر بند ({fa(st.ai)} نوشتهٔ هوش مصنوعی، {fa(st.human)} نوشتهٔ خوانندگان گنجور) و خلاصهٔ هر بخش</p>
        </header>
        <Shamseh label="نوروز" caption="شمسه، خورشید آغاز نسخه‌های مذهّب؛ اینجا خورشید سال نو." />
        <section className="kha-sec" aria-labelledby="nw-about-h">
          <h2 id="nw-about-h">این کتاب</h2>
          <Paras paras={NOWRUZ_INTRO} />
        </section>
        <ol className="nw-list">
          {index.sections.map((s) => (
            <li key={s.n}>
              <Link to="/library/khayyam/nowruzname/$n" params={{ n: String(s.n) }}>
                <span className="n">{fa(s.n)}</span>
                <span className="t">{s.title}</span>
                <small>{s.first}…</small>
              </Link>
            </li>
          ))}
        </ol>
        <p className="khr-credit nw-credit">{CREDIT}</p>
      </div>
      <Sources />
    </div>
  )
}

/** One section of the Nowruz-nama: its summary, then each paragraph with its meaning. */
export function NowruzSectionPage({ s, total }: { s: NwSection; total: number }) {
  const [meanings, setMeanings] = useState(true)
  return (
    <div className="kh khr nw">
      <div className="khr-page">
        <nav className="kh-crumb" aria-label="مسیر">
          <Link to="/library">کتابخانه</Link> ‹ <Link to="/library/khayyam">رباعیات خیام</Link> ‹ <Link to="/library/khayyam/nowruzname">نوروزنامه</Link> ‹ <b aria-current="page">بخش {fa(s.n)}</b>
        </nav>
        <header className="khr-head">
          <p className="k">نوروزنامه · بخش {fa(s.n)} از {fa(total)}</p>
          <h1>{s.title}</h1>
          <button type="button" className="nw-toggle" aria-pressed={meanings} onClick={() => setMeanings((v) => !v)}>
            {meanings ? 'پنهان کردن معنی‌ها' : 'نمایش معنی‌ها'}
          </button>
        </header>
        {s.summary && meanings && (
          <section className="nw-summary" aria-labelledby="nw-sum-h">
            <h2 id="nw-sum-h">خلاصه <Source m={s.summary} /></h2>
            <p className="read">{s.summary.text}</p>
          </section>
        )}
        <ol className="nw-blocks">
          {s.blocks.map((b, i) => (
            <li key={i} id={`b-${i + 1}`}>
              {'p' in b ? <p className="nw-prose">{b.p}</p> : <p className="nw-bayt"><span>{b.l[0]}</span><span>{b.l[1]}</span></p>}
              {meanings && b.m && <p className="nw-m read">{b.m.text} <Source m={b.m} /></p>}
            </li>
          ))}
        </ol>
        <nav className="nw-nav" aria-label="بخش‌های دیگر">
          {s.n > 1 ? <Link to="/library/khayyam/nowruzname/$n" params={{ n: String(s.n - 1) }} className="kh-btn">→ بخش {fa(s.n - 1)}</Link> : <span />}
          <Link to="/library/khayyam/nowruzname" className="kh-btn">فهرست</Link>
          {s.n < total ? <Link to="/library/khayyam/nowruzname/$n" params={{ n: String(s.n + 1) }} className="kh-btn">بخش {fa(s.n + 1)} ←</Link> : <span />}
        </nav>
        <p className="khr-credit nw-credit">
          {CREDIT} این بخش را در <a href={`https://ganjoor.net${s.ganjoor}`} target="_blank" rel="noopener noreferrer">گنجور</a> هم می‌توانید ببینید.
        </p>
      </div>
    </div>
  )
}

/** Dates (CE) from Iranica, «Khayyam ii. Poetry», and the Khayyam page's own facts. */
const LIVES: readonly { name: string; from: number; to: number; note: string }[] = [
  { name: 'خیام', from: 1048, to: 1131, note: 'نیشابور' },
  { name: 'باره بغدادی', from: 1051, to: 1129, note: 'طرائف الطرف: هفت بیت' },
  { name: 'عماد کاتب اصفهانی', from: 1125, to: 1201, note: 'خریدة القصر: چهار بیت' },
  { name: 'ابن قفطی', from: 1172, to: 1248, note: 'تاریخ الحکماء' },
  { name: 'شهرزوری', from: 1277, to: 1277, note: 'نزهة الارواح (درگذشت ۱۲۷۷؛ زادروزش در منبع نیامده)' },
]

/** The Arabic verse: no text we could rely on, so a sourced account, with a timeline showing how close to his
 * lifetime the anthologies that quote him were made. The bars draw themselves; still under reduced motion. */
export function ArabicPage() {
  const x = (y: number) => 680 - ((y - 1040) / (1290 - 1040)) * 640
  return (
    <div className="kh khr nw">
      <div className="khr-page">
        <Crumb here="شعر عربی خیام" />
        <header className="khr-head">
          <p className="k">رباعیات خیام · شعر عربی</p>
          <h1>شعر عربی خیام</h1>
          <p className="sub">نزدیک چهل بیت عربی به نام خیام؛ آنچه منابع دربارهٔ آن‌ها می‌گویند، هر جمله با شمارهٔ منبعش</p>
        </header>
        <figure className="lb-emblem nw-time">
          <svg viewBox="0 0 720 250" role="img" aria-label="خط زمان: زندگی خیام و گزیده‌نویسانی که بیت‌های عربی او را آورده‌اند">
            {[1050, 1100, 1150, 1200, 1250].map((y) => (
              <g key={y}>
                <line x1={x(y)} x2={x(y)} y1="14" y2="222" className="grid" />
                <text x={x(y)} y="242" textAnchor="middle" className="yr">{fa(y)}</text>
              </g>
            ))}
            {LIVES.map((l, i) => {
              const top = 18 + i * 42
              const dot = l.from === l.to
              return (
                <g key={l.name} style={{ '--i': i } as CSSProperties}>
                  {dot
                    ? <circle className="life" cx={x(l.to)} cy={top + 22} r="7" />
                    : <rect className={`life${i === 0 ? ' is-kh' : ''}`} x={x(l.to)} y={top + 15} width={x(l.from) - x(l.to)} height="14" rx="7" />}
                  <text x={dot ? x(l.to) + 14 : x(l.from)} y={dot ? top + 27 : top + 9} textAnchor={dot ? 'end' : 'start'} className="who">{l.name}<tspan className="what"> · {l.note}</tspan></text>
                </g>
              )
            })}
          </svg>
          <figcaption>زمان از راست به چپ می‌رود. بیت‌های عربی خیام در زمان زندگی او یا اندکی پس از آن در گزیده‌ها آمده‌اند؛ رباعی‌های فارسی‌اش نزدیک یک سده پس از مرگش.</figcaption>
        </figure>
        <section className="kha-sec" aria-labelledby="nw-ar-h">
          <h2 id="nw-ar-h">آنچه منابع می‌گویند</h2>
          <Paras paras={ARABIC_PARAS} />
        </section>
        <p className="kh-ctas"><Link className="kh-btn" to="/library/khayyam/about">خیام کیست؟</Link> <Link className="kh-btn" to="/library/khayyam/nowruzname">نوروزنامه</Link></p>
      </div>
      <Sources />
    </div>
  )
}
