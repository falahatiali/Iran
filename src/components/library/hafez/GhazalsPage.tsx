import { Link } from '@tanstack/react-router'
import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { divan } from '../../../data/library/hafez/repository'
import type { GhazalEntry, LetterEntry, SharhEntry } from '../../../data/library/hafez/types'
import { FalButton } from './Fal'
import { Crumb, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './hafez.css'

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

/** Matches a query against an index: by number, or anywhere in the opening bayt and the radif. */
export function search(all: readonly GhazalEntry[], q: string) {
  const f = fold(q)
  if (!f) return []
  return all.filter((g) => String(g.n) === f || fold(`${g.first[0]} ${g.first[1]} ${g.radif}`).includes(f))
}

function Rows({ ghazals }: { ghazals: readonly GhazalEntry[] }) {
  return (
    <ol className="hfr-index">
      {ghazals.map((g) => (
        <li key={g.n}>
          <Link to="/library/hafez/ghazal/$n" params={{ n: String(g.n) }}>
            <span className="n">{fa(g.n)}</span>
            <span className="t"><span>{g.first[0]}</span><span>{g.first[1]}</span></span>
            <small>{g.radif ? <>ردیف: {g.radif} · </> : null}{fa(g.count)} بیت</small>
          </Link>
        </li>
      ))}
    </ol>
  )
}

/** The ghazal index. Each letter is its own page with only its own ghazals; the whole index (for search across
 * the Divan) is fetched only when the reader starts typing. */
export function GhazalsPage({ letters, current, sharh }: { letters: readonly LetterEntry[]; current?: { entry: LetterEntry; ghazals: readonly GhazalEntry[] }; sharh?: readonly SharhEntry[] }) {
  const [q, setQ] = useState('')
  const dq = useDeferredValue(q)
  const [all, setAll] = useState<readonly GhazalEntry[] | null>(null)
  useEffect(() => {
    if (dq && !all) void divan.index().then((i) => setAll(i.ghazals))
  }, [dq, all])
  const found = useMemo(() => (all && dq ? search(all, dq) : null), [all, dq])
  const total = letters.reduce((n, l) => n + l.count, 0)
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here={current ? `غزل‌های حرف ${current.entry.letter}` : 'غزلیات'} mid={current ? <Link to="/library/hafez/ghazals">غزلیات</Link> : undefined} />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · متن گنجور</p>
          <h1>{current ? `غزل‌های حرف «${current.entry.letter}»` : 'غزلیات حافظ'}</h1>
          <p className="sub">
            {current
              ? `${fa(current.entry.count)} غزل که مصراع نخستشان به «${current.entry.letter}» ختم می‌شود، هر کدام با معنی بیت به بیت`
              : `${fa(total)} غزل، به ترتیب حرف پایان مصراع نخست، هر کدام با معنی بیت به بیت و خلاصه`}
          </p>
          <p><FalButton className="hf-toggle" /></p>
        </header>
        <div className="hfr-filter" role="search">
          <label className="hfr-search">
            <span className="sr-only">جست‌وجو در همهٔ غزل‌ها</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجو در مطلع، ردیف یا شمارهٔ غزل، در همهٔ دیوان" />
          </label>
          <p>حرف:</p>
          <ul>
            <li><Link to="/library/hafez/ghazals" className={!current ? 'is-on' : ''}>همه</Link></li>
            {letters.map((l) => (
              <li key={l.slug}>
                <Link to="/library/hafez/ghazals/$harf" params={{ harf: l.slug }} className={current?.entry.slug === l.slug ? 'is-on' : ''} aria-label={`حرف ${l.letter}، ${fa(l.count)} غزل`}>{l.letter}</Link>
              </li>
            ))}
          </ul>
          {dq && <p className="hfr-count" aria-live="polite">{found ? `${fa(found.length)} غزل` : 'در حال آوردن فهرست…'}</p>}
        </div>
        {dq ? (
          found && (found.length ? <Rows ghazals={found} /> : <p className="hfr-empty">غزلی با این جست‌وجو پیدا نشد.</p>)
        ) : current ? (
          <Rows ghazals={current.ghazals} />
        ) : (
          <>
          {sharh && sharh.length > 0 && (
            <section className="hfs-list" aria-labelledby="hfs-list-h">
              <h2 id="hfs-list-h">غزل‌های با «شرح این سایت»</h2>
              <p>{fa(sharh.length)} غزل نامدار با نکته‌های مستند از حافظ‌نامهٔ خرمشاهی، شرح سودی، شرح جلالی و پژوهش‌های دیگر.</p>
              <ul>
                {sharh.map((e) => (
                  <li key={e.n}>
                    <Link to="/library/hafez/ghazal/$n" params={{ n: String(e.n) }} hash="sharh">
                      <span className="n">{fa(e.n)}</span> {e.first[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <ol className="hfr-letters">
            {letters.map((l) => (
              <li key={l.slug}>
                <Link to="/library/hafez/ghazals/$harf" params={{ harf: l.slug }}>
                  <b>{l.letter}</b>
                  <span className="c">{fa(l.count)} غزل</span>
                  <span className="m">{l.mutla[0]}</span>
                </Link>
              </li>
            ))}
          </ol>
          </>
        )}
        <p className="hfr-credit">{TEXT_CREDIT}</p>
      </div>
    </div>
  )
}
