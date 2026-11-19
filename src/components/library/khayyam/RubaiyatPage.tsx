import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { rubaiAnchor } from '../../../data/library/khayyam'
import type { HedayatEdition, HedayatQuatrain, QuatrainNotes } from '../../../data/library/khayyam/types'
import { Crumb, Note, Rubai, Status, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './khayyam.css'

export const STATUS_FILTERS = {
  all: { label: 'همه', test: () => true },
  core: { label: 'بی‌ستاره', test: (q: HedayatQuatrain) => !q.doubtful },
  doubtful: { label: 'ستاره‌دار (مشکوک)', test: (q: HedayatQuatrain) => q.doubtful },
  both: { label: 'در هر دو گزینش', test: (q: HedayatQuatrain) => q.fg !== null },
} as const

/** a chip is marked by our own state, not by the router's partial match on the search */
const EXACT = { exact: true, includeSearch: true } as const

export type StatusFilter = keyof typeof STATUS_FILTERS

export function RubaiyatPage({ edition, notes, theme, status }: { edition: HedayatEdition; notes: QuatrainNotes; theme?: string; status: StatusFilter }) {
  const [open, setOpen] = useState(false)
  const keep = STATUS_FILTERS[status].test
  const groups = edition.themes
    .filter((t) => !theme || t.id === theme)
    .map((t) => ({ ...t, items: edition.quatrains.filter((q) => q.theme === t.id && keep(q)) }))
  const shown = groups.reduce((n, g) => n + g.items.length, 0)
  const annotated = Object.keys(notes.notes).length
  return (
    <div className="kh khr">
      <div className="khr-page">
        <Crumb here="ترانه‌های خیام" />
        <header className="khr-head">
          <p className="k">رباعیات خیام · به گزینش صادق هدایت</p>
          <h1>ترانه‌های خیام</h1>
          <p className="sub">{fa(edition.quatrains.length)} رباعی در هشت دفتر؛ ستاره نشان تردید خود هدایت است.{annotated > 0 && ` ${fa(annotated)} رباعی معنی و شرح دارند.`}</p>
          {annotated > 0 && (
            <button type="button" className="kh-toggle" onClick={() => setOpen((v) => !v)} aria-pressed={open}>
              {open ? 'بستن همهٔ شرح‌ها' : 'گشودن همهٔ شرح‌ها'}
            </button>
          )}
        </header>

        <nav className="khr-filter" aria-label="گزینش رباعی‌ها">
          <p>دفتر:</p>
          <ul>
            <li><Link to="/library/khayyam/rubaiyat" search={{ status: status === 'all' ? undefined : status }} activeOptions={EXACT} className={!theme ? 'is-on' : undefined}>همه</Link></li>
            {edition.themes.map((t) => (
              <li key={t.id}><Link to="/library/khayyam/rubaiyat" search={{ theme: t.id, status: status === 'all' ? undefined : status }} activeOptions={EXACT} className={theme === t.id ? 'is-on' : undefined}>{t.title}</Link></li>
            ))}
          </ul>
          <p>اعتبار:</p>
          <ul>
            {(Object.keys(STATUS_FILTERS) as StatusFilter[]).map((s) => (
              <li key={s}><Link to="/library/khayyam/rubaiyat" search={{ theme, status: s === 'all' ? undefined : s }} activeOptions={EXACT} className={status === s ? 'is-on' : undefined}>{STATUS_FILTERS[s].label}</Link></li>
            ))}
          </ul>
          <p className="khr-count" aria-live="polite">{fa(shown)} رباعی</p>
        </nav>

        {groups.filter((g) => g.items.length > 0).map((g) => (
          <section key={g.id} className="khr-group" aria-labelledby={`h-${g.id}`}>
            <h2 id={`h-${g.id}`}>{g.title}</h2>
            <ol className="khr-list">
              {g.items.map((q) => {
                const note = notes.notes[String(q.n)]
                return (
                  <li key={q.n} id={rubaiAnchor(q.n)} className={q.doubtful ? 'khr-q is-doubtful' : 'khr-q'}>
                    <a href={`#${rubaiAnchor(q.n)}`} className="khr-n" aria-label={`رباعی ${fa(q.n)}`}>{fa(q.n)}</a>
                    <Rubai q={q} />
                    <Status q={q} />
                    {note && <Note note={note} open={open} />}
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
        {shown === 0 && <p className="khr-empty">در این دفتر رباعی‌ای با این نشان نیست.</p>}

        <p className="khr-credit">
          {TEXT_CREDIT} شمارهٔ هر رباعی شمارهٔ آن در «ترانه‌های خیام» است و ستاره‌ها از خود هدایت.
          {annotated > 0 && ' معنی‌ها نوشتهٔ این سایت است؛ در نوشتن آن‌ها از معنی‌های گنجور و پیش‌نویس‌های ماشینی دادهٔ گنجور (که با «هوش مصنوعی» نشان خورده‌اند) کمک گرفته‌ایم و هر یک را با متن سنجیده و بازنویسی کرده‌ایم.'}
          {' '}<Link to="/library/khayyam">بازگشت به درآمد کتاب</Link>
        </p>
      </div>
    </div>
  )
}
