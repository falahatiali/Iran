import { Link } from '@tanstack/react-router'
import { type Para, type SourceId, SOURCES, sourceById } from '../../../data/library/khayyam'
import type { HedayatQuatrain, Quatrain, VerseNote } from '../../../data/library/khayyam/types'
import { VerseExplanation } from '../../verse/VerseExplanation'

export const fa = (n: number) => n.toLocaleString('fa-IR')

/** A quatrain as two bayts, each hemistich on its own half of the line. */
export function Rubai({ q, className = '' }: { q: Pick<Quatrain, 'lines'>; className?: string }) {
  return (
    <blockquote className={`kh-rubai ${className}`}>
      <p><span>{q.lines[0]}</span><span>{q.lines[1]}</span></p>
      <p><span>{q.lines[2]}</span><span>{q.lines[3]}</span></p>
    </blockquote>
  )
}

/** Where a quatrain stands among the editions: Hedayat's star, and its number in Foroughi–Ghani. */
export function Status({ q }: { q: HedayatQuatrain }) {
  return (
    <p className="kh-status">
      {q.doubtful
        ? <span className="is-doubt" title="هدایت پیش از این رباعی ستاره گذاشته است: به نظرش مشکوک بود">✱ مشکوک به نظر هدایت</span>
        : <span className="is-core">بی‌ستاره در گزینش هدایت</span>}
      {q.fg
        ? <Link to="/library/khayyam/foroughi" hash={`r-${q.fg}`} className="is-fg">در گزینش فروغی و غنی هم آمده: رباعی {fa(q.fg)}</Link>
        : <span className="is-nofg">در گزینش فروغی و غنی نیامده</span>}
    </p>
  )
}

export function Note({ note, open }: { note: VerseNote; open: boolean }) {
  return <VerseExplanation note={note} open={open} tone="parchment" label="معنی و شرح" artLabel="نکته." />
}

/** Superscript links to the numbered sources at the foot of the page. */
export function Cite({ ids }: { ids: readonly SourceId[] }) {
  return (
    <sup className="kh-cite">
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
    <section className="kh-sources" aria-labelledby="kh-src-h">
      <h2 id="kh-src-h">منابع</h2>
      <ol>
        {SOURCES.map((s) => <li key={s.id} id={`src-${s.id}`}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
      </ol>
      {note && <p>{note}</p>}
      <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
    </section>
  )
}

export function Crumb({ here }: { here?: string }) {
  return (
    <nav className="kh-crumb" aria-label="مسیر">
      <Link to="/library">کتابخانه</Link> ‹ {here ? <><Link to="/library/khayyam">رباعیات خیام</Link> ‹ <b aria-current="page">{here}</b></> : <b aria-current="page">رباعیات خیام</b>}
    </nav>
  )
}

export const TEXT_CREDIT = 'متن رباعی‌ها عیناً از گنجور است، استخراج‌شده از دادهٔ باز گنجور (ganjoor-data).'
