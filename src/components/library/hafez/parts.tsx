import { Link } from '@tanstack/react-router'
import { type Para, type SourceId, SOURCES, sourceById } from '../../../data/library/hafez'
import type { Bayt, Meaning } from '../../../data/library/hafez/types'

export const fa = (n: number) => n.toLocaleString('fa-IR')

/** A bayt, each hemistich on its own half of the line. */
export function BaytLines({ b, className = '' }: { b: Pick<Bayt, 'l'>; className?: string }) {
  return (
    <p className={`hf-bayt ${className}`}>
      <span>{b.l[0]}</span>
      <span>{b.l[1]}</span>
    </p>
  )
}

/** Who wrote a meaning, as Ganjoor's data marks it. */
export function Source({ m }: { m: Meaning }) {
  if (m.fixed) return <span className="hf-src is-fixed" title="معنی گنجور را پس از بازخوانی بازنویسی کرده‌ایم">ویراستهٔ این سایت</span>
  if (m.ai) return <span className="hf-src is-ai" title="در گنجور با نشان «هوش مصنوعی» آمده است">هوش مصنوعی</span>
  return <span className="hf-src is-human" title="نوشتهٔ یکی از خوانندگان گنجور">نوشتهٔ خوانندگان گنجور</span>
}

/** Superscript links to the numbered sources at the foot of the page. */
export function Cite({ ids }: { ids: readonly SourceId[] }) {
  return (
    <sup className="hf-cite">
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
    <section className="hf-sources" aria-labelledby="hf-src-h">
      <h2 id="hf-src-h">منابع</h2>
      <ol>
        {SOURCES.map((s) => <li key={s.id} id={`src-${s.id}`}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
      </ol>
      {note && <p>{note}</p>}
      <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
    </section>
  )
}

export function Crumb({ here, mid }: { here?: string; mid?: boolean }) {
  return (
    <nav className="hf-crumb" aria-label="مسیر">
      <Link to="/library">کتابخانه</Link> ‹{' '}
      {here ? (
        <>
          <Link to="/library/hafez">دیوان حافظ</Link> ‹ {mid && <><Link to="/library/hafez/ghazals">غزلیات</Link> ‹ </>}
          <b aria-current="page">{here}</b>
        </>
      ) : <b aria-current="page">دیوان حافظ</b>}
    </nav>
  )
}

export const TEXT_CREDIT = 'متن غزل‌ها و معنی‌ها از گنجور است، استخراج‌شده از دادهٔ باز گنجور (ganjoor-data). معنی‌های نشان‌دار «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده است؛ «نوشتهٔ خوانندگان گنجور» را کاربران گنجور نوشته‌اند؛ «ویراستهٔ این سایت» را ما پس از بازخوانی بازنویسی کرده‌ایم.'
