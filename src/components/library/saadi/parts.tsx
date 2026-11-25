import { Link } from '@tanstack/react-router'
import type { CSSProperties, ReactNode } from 'react'
import { BOOKS, type Para, type SaadiBook, type SourceId, SOURCES, sourceById } from '../../../data/library/saadi'
import type { Meaning } from '../../../data/library/saadi/types'

export const fa = (n: number) => n.toLocaleString('fa-IR')

/** A bayt, each hemistich on its own half of the line. */
export function BaytLines({ l, className = '' }: { l: readonly [string, string]; className?: string }) {
  return (
    <p className={`sd-bayt ${className}`}>
      <span>{l[0]}</span>
      <span>{l[1]}</span>
    </p>
  )
}

/** Who wrote a meaning, as Ganjoor's data marks it. */
export function Source({ m }: { m: Meaning }) {
  if (m.fixed) return <span className="sd-src is-fixed" title="معنی گنجور را پس از بازخوانی بازنویسی کرده‌ایم">ویراستهٔ این سایت</span>
  if (m.ai) return <span className="sd-src is-ai" title="در گنجور با نشان «هوش مصنوعی» آمده است">هوش مصنوعی</span>
  return <span className="sd-src is-human" title="نوشتهٔ یکی از خوانندگان گنجور">نوشتهٔ خوانندگان گنجور</span>
}

/** Superscript links to the numbered sources at the foot of the page. */
export function Cite({ ids }: { ids: readonly SourceId[] }) {
  return (
    <sup className="sd-cite">
      {ids.map((id) => {
        const n = SOURCES.findIndex((s) => s.id === id) + 1
        return <a key={id} href={`#src-${id}`} title={sourceById(id).title}>[{fa(n)}]</a>
      })}
    </sup>
  )
}

export function Paras({ paras }: { paras: readonly Para[] }) {
  return <>{paras.map((p, i) => <p key={i} className="read">{p.text}<Cite ids={p.cite} /></p>)}</>
}

export function Sources({ note }: { note?: string }) {
  return (
    <section className="sd-sources" aria-labelledby="sd-src-h">
      <h2 id="sd-src-h">منابع</h2>
      <ol>
        {SOURCES.map((s) => <li key={s.id} id={`src-${s.id}`}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
      </ol>
      {note && <p>{note}</p>}
      <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
    </section>
  )
}

/** Breadcrumb: library ‹ book ‹ chapter ‹ here. */
export function Crumb({ book, chapter, here }: { book?: SaadiBook; chapter?: { slug: string; title: string }; here: string }) {
  return (
    <nav className="sd-crumb" aria-label="مسیر">
      <Link to="/library">کتابخانه</Link> ‹{' '}
      {book && <><BookLink book={book}>{BOOKS[book].title}</BookLink> ‹ </>}
      {book && chapter && <><ChapterLink book={book} chapter={chapter.slug}>{shortTitle(chapter.title)}</ChapterLink> ‹ </>}
      <b aria-current="page">{here}</b>
    </nav>
  )
}

/** «باب اول در عدل و تدبیر و رای» → «باب اول»; other titles stay whole. */
export const shortTitle = (t: string) => t.match(/^باب \S+/)?.[0] ?? t

/** «باب اول در عدل و تدبیر و رای» → «عدل و تدبیر و رای». */
export const subject = (t: string) => t.replace(/^باب \S+ در /, '')

export const TEXT_CREDIT = 'متن و معنی‌ها از گنجور است، استخراج‌شده از دادهٔ باز گنجور (ganjoor-data). معنی‌های نشان‌دار «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده است؛ «نوشتهٔ خوانندگان گنجور» را کاربران گنجور نوشته‌اند؛ «ویراستهٔ این سایت» را ما پس از بازخوانی بازنویسی کرده‌ایم.'

interface LinkBits {
  className?: string
  children: ReactNode
  'aria-label'?: string
  style?: CSSProperties
}

/** Typed links into either book (the router knows each book's routes by name). */
export function BookLink({ book, ...rest }: LinkBits & { book: SaadiBook }) {
  return <Link to={book === 'bustan' ? '/library/bustan' : '/library/golestan'} {...rest} />
}

export function ChapterLink({ book, chapter, ...rest }: LinkBits & { book: SaadiBook; chapter: string }) {
  return book === 'bustan'
    ? <Link to="/library/bustan/$chapter" params={{ chapter }} {...rest} />
    : <Link to="/library/golestan/$chapter" params={{ chapter }} {...rest} />
}

export function SectionLink({ book, chapter, n, hash, ...rest }: LinkBits & { book: SaadiBook; chapter: string; n: number; hash?: string }) {
  const params = { chapter, n: String(n) }
  return book === 'bustan'
    ? <Link to="/library/bustan/$chapter/$n" params={params} hash={hash} {...rest} />
    : <Link to="/library/golestan/$chapter/$n" params={params} hash={hash} {...rest} />
}
