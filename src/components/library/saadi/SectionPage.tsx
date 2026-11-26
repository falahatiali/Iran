import { useState } from 'react'
import { BOOKS, type SaadiBook } from '../../../data/library/saadi'
import type { Section } from '../../../data/library/saadi/types'
import { BaytLines, ChapterLink, Crumb, SectionLink, Source, fa, shortTitle } from './parts'
import '../naskh.css'
import './saadi.css'
import { track } from '../../../lib/engagement'

export interface Neighbour {
  chapter: string
  n: number
}

export function SectionPage({ s, chapterTitle, commit, prev, next }: { s: Section; chapterTitle: string; commit: string; prev?: Neighbour; next?: Neighbour }) {
  const [meanings, setMeanings] = useState(true)
  const book: SaadiBook = s.book
  const c = BOOKS[book]
  return (
    <div className={`sd sdr is-${book}`} data-book={book} data-section={`${s.chapter}-${s.n}`}>
      <div className="sdr-page">
        <Crumb book={book} chapter={{ slug: s.chapter, title: chapterTitle }} here={`${c.unit} ${fa(s.n)}`} />
        <header className="sdr-head">
          <p className="k">{c.title} · {chapterTitle}</p>
          <h1>{s.title}</h1>
          <button type="button" className="sd-toggle" aria-pressed={meanings} onClick={() => { track(meanings ? 'meaning_hide' : 'meaning_open', { book, section: `${s.chapter}-${s.n}`, bayt: 'all' }); setMeanings((v) => !v) }}>
            {meanings ? 'پنهان کردن معنی‌ها' : 'نمایش معنی‌ها'}
          </button>
        </header>

        {s.summary && meanings && (
          <section className="sdg-summary" aria-labelledby="sdg-sum-h">
            <h2 id="sdg-sum-h">خلاصه <Source m={s.summary} /></h2>
            <p className="read">{s.summary.text}</p>
          </section>
        )}

        <ol className={`sdg-bayts${meanings ? '' : ' is-bare'}`}>
          {s.blocks.map((b, i) => (
            <li key={i} id={`b-${i + 1}`} className={'p' in b ? 'is-prose' : undefined}>
              <a className="sdg-n" href={`#b-${i + 1}`} aria-label={`${'p' in b ? 'بند' : 'بیت'} ${fa(i + 1)}`}>{fa(i + 1)}</a>
              {'p' in b ? <p className="sd-prose">{b.p}</p> : <BaytLines l={b.l} />}
              {meanings && b.m && <p className="sdg-m read">{b.m.text} <Source m={b.m} /></p>}
            </li>
          ))}
        </ol>

        <p className="sdg-end" data-track-view="story_complete" aria-hidden="true" />
        <nav className="sdg-nav" aria-label={`${c.unit}های دیگر`}>
          {prev ? <SectionLink book={book} chapter={prev.chapter} n={prev.n} className="sd-btn">→ {c.unit} پیشین</SectionLink> : <span />}
          <ChapterLink book={book} chapter={s.chapter} className="sd-btn">{shortTitle(chapterTitle)}</ChapterLink>
          {next ? <SectionLink book={book} chapter={next.chapter} n={next.n} className="sd-btn">{c.unit} پسین ←</SectionLink> : <span />}
        </nav>

        <p className="sdr-credit">
          متن و معنی‌ها از <a href={`https://ganjoor.net${s.ganjoor}`} target="_blank" rel="noopener noreferrer">گنجور</a> است،
          از دادهٔ باز <a href={`https://github.com/ganjoor/ganjoor-data/tree/${commit}`} target="_blank" rel="noopener noreferrer">ganjoor-data</a>.
          معنی‌های نشان‌دار «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده است؛
          «نوشتهٔ خوانندگان گنجور» را کاربران گنجور نوشته‌اند؛ «ویراستهٔ این سایت» را ما پس از بازخوانی بازنویسی کرده‌ایم.
        </p>
      </div>
    </div>
  )
}
