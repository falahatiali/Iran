import { Link } from '@tanstack/react-router'
import { type ReactNode, useState } from 'react'
import type { Poem } from '../../../data/library/hafez/types'
import { BaytLines, Crumb, Source, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './hafez.css'

/** A set of Hafez's poems on one page (rubaiyat, qet'as, masnavis, qasidas, the preface, an attributed poem),
 * each with its summary and the meaning of each bayt or paragraph. `emblem` is the page's figure, `nav` its foot. */
export function PoemsPage({ poems, title, one, ganjoorCat, sub, kicker = 'دیوان حافظ · متن گنجور', emblem, nav, numbered = true, crumbMid }: {
  poems: readonly Poem[]
  title: string
  one: string
  ganjoorCat: string
  sub: string
  kicker?: string
  emblem?: ReactNode
  nav?: ReactNode
  numbered?: boolean
  crumbMid?: ReactNode
}) {
  const [meanings, setMeanings] = useState(true)
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here={title} mid={crumbMid} />
        <header className="hfr-head">
          <p className="k">{kicker}</p>
          <h1>{title}</h1>
          <p className="sub">{sub}</p>
          <button type="button" className="hf-toggle" aria-pressed={meanings} onClick={() => setMeanings((v) => !v)}>
            {meanings ? 'پنهان کردن معنی‌ها' : 'نمایش معنی‌ها'}
          </button>
        </header>
        {emblem}
        {poems.map((p) => (
          <section key={p.n} id={`p-${p.n}`} className="hfp-poem" aria-labelledby={`p-${p.n}-h`}>
            <h2 id={`p-${p.n}-h`}><a href={`#p-${p.n}`}>{p.title || `${one} ${fa(p.n)}`}</a></h2>
            {numbered && p.title && <p className="hfp-sub">{one} {fa(p.n)}{p.metre ? ` · ${p.metre}` : ''}</p>}
            {meanings && p.summary && p.bayts.length > 2 && <p className="hfp-sum">{p.summary.text} <Source m={p.summary} /></p>}
            <ol className={`hfg-bayts${meanings ? '' : ' is-bare'}`}>
              {p.bayts.map((b, i) => (
                <li key={i} className={'p' in b ? 'is-prose' : 'c' in b ? 'is-band' : undefined}>
                  <span className="hfg-n" aria-hidden="true">{fa(i + 1)}</span>
                  {'p' in b ? <p className="hf-prose">{b.p}</p> : <BaytLines b={b} />}
                  {meanings && b.m && <p className="hfg-m read">{b.m.text} <Source m={b.m} /></p>}
                </li>
              ))}
            </ol>
          </section>
        ))}
        {nav}
        <p className="hfr-credit">
          {TEXT_CREDIT} متن هر {one} را در <a href={`https://ganjoor.net/hafez/${ganjoorCat}`} target="_blank" rel="noopener noreferrer">گنجور</a> هم می‌توانید ببینید.{' '}
          <Link to="/library/hafez">بازگشت به درآمد کتاب</Link>
        </p>
      </div>
    </div>
  )
}
