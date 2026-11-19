import { Link } from '@tanstack/react-router'
import { rubaiAnchor } from '../../../data/library/khayyam'
import type { Edition, Quatrain } from '../../../data/library/khayyam/types'
import { Crumb, Rubai, TEXT_CREDIT, fa } from './parts'
import '../naskh.css'
import './khayyam.css'

export function ForoughiPage({ edition, inHedayat: pairs }: { edition: Edition<Quatrain>; inHedayat: readonly (readonly [number, number])[] }) {
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
              </li>
            )
          })}
        </ol>
        <p className="khr-credit">{TEXT_CREDIT} <Link to="/library/khayyam">بازگشت به درآمد کتاب</Link></p>
      </div>
    </div>
  )
}
