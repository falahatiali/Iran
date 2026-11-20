import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import type { Ghazal } from '../../../data/library/hafez/types'
import { BaytLines, Crumb, Source, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './hafez.css'

/** Hafez's rubaiyat or qet'as on one page, each poem with its summary and the meaning of each bayt. */
export function PoemsPage({ poems, title, one, ganjoorCat, sub }: { poems: readonly Ghazal[]; title: string; one: string; ganjoorCat: string; sub: string }) {
  const [meanings, setMeanings] = useState(true)
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here={title} />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · متن گنجور</p>
          <h1>{title}</h1>
          <p className="sub">{sub}</p>
          <button type="button" className="hf-toggle" aria-pressed={meanings} onClick={() => setMeanings((v) => !v)}>
            {meanings ? 'پنهان کردن معنی‌ها' : 'نمایش معنی‌ها'}
          </button>
        </header>
        {poems.map((p) => (
          <section key={p.n} id={`p-${p.n}`} className="hfp-poem" aria-labelledby={`p-${p.n}-h`}>
            <h2 id={`p-${p.n}-h`}><a href={`#p-${p.n}`}>{one} {fa(p.n)}</a></h2>
            {meanings && p.summary && p.bayts.length > 2 && <p className="hfp-sum">{p.summary.text} <Source m={p.summary} /></p>}
            <ol className={`hfg-bayts${meanings ? '' : ' is-bare'}`}>
              {p.bayts.map((b, i) => (
                <li key={i}>
                  <span className="hfg-n" aria-hidden="true">{fa(i + 1)}</span>
                  <BaytLines b={b} />
                  {meanings && b.m && <p className="hfg-m">{b.m.text} <Source m={b.m} /></p>}
                </li>
              ))}
            </ol>
          </section>
        ))}
        <p className="hfr-credit">
          {TEXT_CREDIT} متن هر {one} را در <a href={`https://ganjoor.net/hafez/${ganjoorCat}`} target="_blank" rel="noopener noreferrer">گنجور</a> هم می‌توانید ببینید.{' '}
          <Link to="/library/hafez">بازگشت به درآمد کتاب</Link>
        </p>
      </div>
    </div>
  )
}
