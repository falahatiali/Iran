import { BOOKS, type SaadiBook } from '../../../data/library/saadi'
import type { Chapter } from '../../../data/library/saadi/types'
import { BookLink, ChapterLink, Crumb, SectionLink, fa, shortTitle } from './parts'
import '../naskh.css'
import './saadi.css'

export function ChapterPage({ book, chapter, prev, next }: { book: SaadiBook; chapter: Chapter; prev?: Chapter; next?: Chapter }) {
  const c = BOOKS[book]
  return (
    <div className={`sd sdr is-${book}`}>
      <div className="sdr-page">
        <Crumb book={book} here={shortTitle(chapter.title)} />
        <header className="sdr-head">
          <p className="k">{c.title}</p>
          <h1>{chapter.title}</h1>
          <p className="sub">{fa(chapter.sections.length)} {c.unit}</p>
        </header>
        <ol className="sd-sections">
          {chapter.sections.map((s) => (
            <li key={s.n}>
              <SectionLink book={book} chapter={chapter.slug} n={s.n}>
                <span className="n">{fa(s.n)}</span>
                <span className="t">{s.title}</span>
                <small>{s.first}</small>
              </SectionLink>
            </li>
          ))}
        </ol>
        <nav className="sdg-nav" aria-label="باب‌های دیگر">
          {prev ? <ChapterLink book={book} chapter={prev.slug} className="sd-btn">→ {shortTitle(prev.title)}</ChapterLink> : <span />}
          <BookLink book={book} className="sd-btn">{c.title}</BookLink>
          {next ? <ChapterLink book={book} chapter={next.slug} className="sd-btn">{shortTitle(next.title)} ←</ChapterLink> : <span />}
        </nav>
      </div>
    </div>
  )
}
