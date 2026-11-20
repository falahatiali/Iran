import { Link } from '@tanstack/react-router'
import { useDeferredValue, useMemo, useState } from 'react'
import type { GhazalEntry } from '../../../data/library/hafez/types'
import { FalButton } from './Fal'
import { Crumb, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './hafez.css'

const EXACT = { exact: true, includeSearch: true } as const

/** Search ignores vowel marks, ZWNJ and Arabic letter forms, and accepts Persian or Latin digits. */
export const fold = (s: string) =>
  s
    .replace(/[\u064B-\u0652\u0670]/g, '')
    .replace(/[\u200c\s]+/g, ' ')
    .replace(/\u064A/g, 'ی')
    .replace(/\u0643/g, 'ک')
    .replace(/[أإآ]/g, 'ا')
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .trim()

export function GhazalsPage({ ghazals, letter }: { ghazals: readonly GhazalEntry[]; letter?: string }) {
  const [q, setQ] = useState('')
  const dq = fold(useDeferredValue(q))
  const letters = useMemo(() => [...new Set(ghazals.map((g) => g.letter))], [ghazals])
  const hay = useMemo(() => new Map(ghazals.map((g) => [g.n, fold(`${g.first[0]} ${g.first[1]} ${g.radif}`)])), [ghazals])
  const shown = ghazals.filter((g) => (!letter || g.letter === letter) && (!dq || String(g.n) === dq || hay.get(g.n)!.includes(dq)))
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here="غزلیات" />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · متن گنجور</p>
          <h1>غزلیات حافظ</h1>
          <p className="sub">{fa(ghazals.length)} غزل، هر کدام با معنی بیت به بیت و خلاصه</p>
          <p><FalButton className="hf-toggle" /></p>
        </header>
        <div className="hfr-filter" role="search">
          <label className="hfr-search">
            <span className="sr-only">جست‌وجو در مطلع و ردیف</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجو در مطلع، ردیف یا شمارهٔ غزل" />
          </label>
          <p>حرف:</p>
          <ul>
            <li><Link to="/library/hafez/ghazals" search={{}} activeOptions={EXACT} className={!letter ? 'is-on' : ''}>همه</Link></li>
            {letters.map((l) => (
              <li key={l}><Link to="/library/hafez/ghazals" search={{ letter: l }} activeOptions={EXACT} className={letter === l ? 'is-on' : ''}>{l}</Link></li>
            ))}
          </ul>
          <p className="hfr-count" aria-live="polite">{fa(shown.length)} غزل</p>
        </div>
        {shown.length === 0 && <p className="hfr-empty">غزلی با این جست‌وجو پیدا نشد.</p>}
        <ol className="hfr-index">
          {shown.map((g) => (
            <li key={g.n}>
              <Link to="/library/hafez/ghazal/$n" params={{ n: String(g.n) }}>
                <span className="n">{fa(g.n)}</span>
                <span className="t"><span>{g.first[0]}</span><span>{g.first[1]}</span></span>
                <small>{g.radif ? <>ردیف: {g.radif} · </> : null}{fa(g.count)} بیت</small>
              </Link>
            </li>
          ))}
        </ol>
        <p className="hfr-credit">{TEXT_CREDIT}</p>
      </div>
    </div>
  )
}
