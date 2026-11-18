import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { mantiq } from '../../data/library/mantiq'
import {
  MANTIQ_TOTAL_COUPLETS, baytAnchor, groupTitle, neighbours, noteKey, sectionsByGroup,
} from '../../data/library/mantiq/sections'
import type { MantiqNotes, MantiqSectionMeta, MantiqText } from '../../data/library/mantiq/types'
import { VerseExplanation } from '../verse/VerseExplanation'
import './naskh.css'
import './mantiq.css'
import './mantiq-read.css'

const fa = (n: number) => n.toLocaleString('fa-IR')
const GANJOOR = mantiq.sources.find((s) => s.id === 'ganjoor')!

/** The whole book's contents, grouped as the reading path runs; the current section is marked. */
export function MantiqToc({ current }: { current?: string }) {
  return (
    <ol className="mqr-toc">
      {sectionsByGroup().map((g) => (
        <li key={g.id}>
          <p className="mqr-toc-g">{g.title}</p>
          <ol>
            {g.sections.map((s) => (
              <li key={s.slug}>
                {s.slug === current ? (
                  <span className="is-current" aria-current="page">{s.title}</span>
                ) : (
                  <Link to="/library/mantiq-al-tayr/$section" params={{ section: s.slug }}>{s.title}</Link>
                )}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

function Pager({ slug }: { slug: string }) {
  const { prev, next } = neighbours(slug)
  return (
    <nav className="mqr-pager" aria-label="بخش قبلی و بعدی">
      {prev ? (
        <Link to="/library/mantiq-al-tayr/$section" params={{ section: prev.slug }} rel="prev"><small>بخش پیشین</small>{prev.title}</Link>
      ) : (
        <Link to="/library/mantiq-al-tayr"><small>آغاز</small>درآمد کتاب</Link>
      )}
      {next ? (
        <Link to="/library/mantiq-al-tayr/$section" params={{ section: next.slug }} rel="next" className="is-next"><small>بخش پسین</small>{next.title}</Link>
      ) : (
        <Link to="/library/mantiq-al-tayr" className="is-next"><small>پایان کتاب</small>بازگشت به درآمد</Link>
      )}
    </nav>
  )
}

export function MantiqSectionPage({ meta, text, notes }: { meta: MantiqSectionMeta; text: MantiqText; notes: MantiqNotes }) {
  const [open, setOpen] = useState(true)
  const annotated = notes.status !== 'none'
  useEffect(() => {
    // bayts use content-visibility, so the browser's own jump to #b-… lands on estimated heights; settle it on the real one
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id.startsWith('b-') && !id.startsWith('p-')) return
    let frames = 0
    const settle = () => {
      document.getElementById(id)?.scrollIntoView({ block: id.startsWith('b-') ? 'center' : 'start' })
      if (++frames < 3) requestAnimationFrame(settle)
    }
    requestAnimationFrame(settle)
  }, [meta.slug])
  return (
    <div className="mq mqr">
      <div className="mqr-folio">
        <aside className="mqr-rail mqr-rail-start" aria-label="فهرست منطق‌الطیر">
          <div className="mqr-sticky">
            <p className="mqr-kicker">فهرست کتاب</p>
            <MantiqToc current={meta.slug} />
          </div>
        </aside>

        <article className="mqr-reading">
          <nav className="mqr-crumb" aria-label="مسیر">
            <Link to="/library">کتابخانه</Link> ‹ <Link to="/library/mantiq-al-tayr">{mantiq.title}</Link> ‹ <b aria-current="page">{meta.title}</b>
          </nav>
          <header className="mqr-head">
            <p className="mqr-kicker">{mantiq.title} · {groupTitle(meta.group)}</p>
            <h1>{meta.title}</h1>
            <p className="mqr-sub">
              {fa(meta.coupletCount)} بیت{meta.parts.length > 1 ? ` در ${fa(meta.parts.length)} پاره` : ''}
              {annotated ? ' · زیر هر بیت: معنی، واژه‌های دشوار و نکتهٔ عرفانی' : ' · متن کامل؛ شرح بیت‌ها به‌زودی'}
            </p>
            {annotated && (
              <button type="button" className="mqr-toggle" onClick={() => setOpen((v) => !v)} aria-pressed={!open}>
                {open ? 'فقط متن' : 'نمایش معنی بیت‌ها'}
              </button>
            )}
          </header>

          <details className="mqr-toc-m">
            <summary>فهرست کتاب</summary>
            <MantiqToc current={meta.slug} />
          </details>

          {text.parts.map((p) => (
            <section key={p.id} id={`p-${p.id}`} className="mqr-part" aria-labelledby={`p-h-${p.id}`}>
              <h2 id={`p-h-${p.id}`}>{p.title}</h2>
              <ol className="mqr-bayts">
                {p.couplets.map((c) => {
                  const note = notes.notes[noteKey(p.id, c.n)]
                  const id = baytAnchor(p.id, c.n)
                  return (
                    <li key={id} id={id} className={note ? 'mqr-bayt has-note' : 'mqr-bayt'}>
                      <a href={`#${id}`} className="mqr-n" aria-label={`بیت ${fa(c.n)}`}>{fa(c.n)}</a>
                      <p className="mqr-lines"><span>{c.a}</span><span>{c.b}</span></p>
                      {note && <VerseExplanation note={note} open={open} tone="parchment" label="معنی و شرح" artLabel="نکتهٔ عرفانی." />}
                    </li>
                  )
                })}
              </ol>
            </section>
          ))}

          <Pager slug={meta.slug} />
          <p className="mqr-credit">
            متن بیت‌ها عیناً از <a href={GANJOOR.url} target="_blank" rel="noopener noreferrer">گنجور</a> است
            {annotated ? '؛ معنی و شرح بیت‌ها نوشتهٔ این سایت است، بر پایهٔ خوانش‌های رایج شارحان.' : '.'}
            {' '}کل کتاب: {fa(MANTIQ_TOTAL_COUPLETS)} بیت.
          </p>
        </article>

        <aside className="mqr-rail mqr-rail-end" aria-label="در این بخش">
          <div className="mqr-sticky">
            <p className="mqr-kicker">در این بخش</p>
            <ol className="mqr-parts">
              {meta.parts.map((p) => (
                <li key={p.id}><a href={`#p-${p.id}`}>{p.title}<small>{fa(p.count)} بیت</small></a></li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
