import { Link } from '@tanstack/react-router'
import { rubaiAnchor } from '../../../data/library/khayyam'
import type { Edition, ForoughiMeanings, Quatrain } from '../../../data/library/khayyam/types'
import { Source } from '../hafez/parts'
import { Crumb, Rubai, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './khayyam.css'

export function ForoughiPage({ edition, inHedayat: pairs, meanings }: { edition: Edition<Quatrain>; inHedayat: readonly (readonly [number, number])[]; meanings: ForoughiMeanings['meanings'] }) {
  const inHedayat = new Map(pairs)
  return (
    <div className="kh khr">
      <div className="khr-page">
        <Crumb here="گزینش فروغی و غنی" />
        <header className="khr-head">
          <p className="k">رباعیات خیام · انتخاب و تصحیح محمدعلی فروغی و قاسم غنی</p>
          <h1>رباعیات به گزینش فروغی و غنی</h1>
          <p className="sub">{fa(edition.quatrains.length)} رباعی به ترتیب متن گنجور · {fa(inHedayat.size)} رباعی در «ترانه‌های خیام» هدایت هم آمده است</p>
        </header>
        <ol className="khr-list">
          {edition.quatrains.map((q) => {
            const h = inHedayat.get(q.n)
            return (
              <li key={q.n} id={rubaiAnchor(q.n)} className="khr-q">
                <a href={`#${rubaiAnchor(q.n)}`} className="khr-n" aria-label={`رباعی ${fa(q.n)}`}>{fa(q.n)}</a>
                <Rubai q={q} />
                <p className="kh-status">
                  {h
                    ? <Link to="/library/khayyam/rubaiyat" hash={rubaiAnchor(h)} className="is-fg">در گزینش هدایت هم آمده: رباعی {fa(h)} (با معنی و نشان اعتبار)</Link>
                    : <span className="is-nofg">در گزینش هدایت نیامده</span>}
                </p>
                {!h && meanings[q.n] && (
                  <details className="khf-m">
                    <summary>معنی از گنجور</summary>
                    {meanings[q.n].map((m, i) => <p key={i}>{m.text} <Source m={m} /></p>)}
                  </details>
                )}
              </li>
            )
          })}
        </ol>
        <p className="khr-credit">{TEXT_CREDIT} معنی رباعی‌هایی که در گزینش هدایت نیامده‌اند از گنجور است (ganjoor-data)؛ «هوش مصنوعی» را هوش مصنوعی نوشته و آرمان جعفرنژاد به ganjoor-data افزوده، و «نوشتهٔ خوانندگان گنجور» را کاربران گنجور. <Link to="/library/khayyam">بازگشت به درآمد کتاب</Link></p>
      </div>
    </div>
  )
}
