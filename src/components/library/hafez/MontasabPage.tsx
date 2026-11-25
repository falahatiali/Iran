import { Link } from '@tanstack/react-router'
import type { MontasabEntry } from '../../../data/library/hafez/types'
import { RhymeMap } from '../Emblems'
import { Crumb, fa } from './parts'
import '../naskh.css'
import './hafez.css'

/** The poems Ganjoor gathers as attributed to Hafez: one line each, linking to its page. */
export function MontasabPage({ poems }: { poems: readonly MontasabEntry[] }) {
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here="اشعار منتسب" />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · متن گنجور</p>
          <h1>اشعار منتسب به حافظ</h1>
          <p className="sub">{fa(poems.length)} شعر که گنجور منسوب به حافظ گرد آورده و در تصحیح قزوینی و غنی نیامده‌اند؛ هر کدام با معنی بیت به بیت</p>
        </header>
        <RhymeMap form="qasida" count={9} max={9} caption="بیشتر این شعرها غزل‌اند: یک قافیه که از بیت نخست تا بیت آخر می‌رود. انتساب آن‌ها به حافظ قطعی نیست." />
        <ol className="hfr-index">
          {poems.map((p) => (
            <li key={p.n}>
              <Link to="/library/hafez/montasab/$n" params={{ n: String(p.n) }}>
                <span className="n">{fa(p.n)}</span>
                <span className="t"><span>{p.first[0]}</span><span>{p.first[1]}</span></span>
                <small>{fa(p.count)} بیت</small>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
