import { Link } from '@tanstack/react-router'
import { hafez } from '../../../data/library/hafez'
import type { Bayt, GhazalIndex } from '../../../data/library/hafez/types'
import { Picture } from '../Picture'
import { FalButton } from './Fal'
import { BaytLines, Crumb, Paras, Sources, TEXT_CREDIT, fa } from './parts'
import { Petals } from './Petals'
import '../naskh.css'
import './hafez.css'

/** What the landing shows of the Divan: the opening bayt, the letters with their counts, and the totals. */
export function summarise(index: GhazalIndex, opening: Bayt) {
  const letters = new Map<string, { letter: string; count: number; first: number }>()
  for (const g of index.ghazals) {
    const l = letters.get(g.letter)
    if (l) l.count++
    else letters.set(g.letter, { letter: g.letter, count: 1, first: g.n })
  }
  const st = index.stats
  return {
    opening,
    letters: [...letters.values()],
    total: index.ghazals.length,
    bayts: st.bayts,
    ai: st.ai,
    human: st.human,
  }
}

export function HafezPage({ summary }: { summary: ReturnType<typeof summarise> }) {
  const { opening } = summary
  return (
    <div className="hf">
      <section className="hf-hero" data-book-arrival="hafez">
        <Picture base="/media/library/hafez-garden" widths={[640, 960, 1280]} width={1280} height={720} sizes="100vw" alt="" priority className="hf-hero-img" />
        <Petals />
        <Crumb />
      </section>

      <header className="hf-panel">
        <p className="k">کتابخانهٔ ادب پارسی · {hafez.kicker}</p>
        <h1>{hafez.title}</h1>
        <p className="by">{hafez.author}</p>
        <BaytLines b={opening} className="is-opening" />
        <p className="hf-where"><Link to="/library/hafez/ghazal/$n" params={{ n: String(hafez.openingN) }}>غزل {fa(hafez.openingN)}، نخستین غزل دیوان</Link></p>
        <ul className="hf-facts">
          {hafez.facts.map((f) => <li key={f.label}><b>{f.label}</b> {f.value}</li>)}
        </ul>
        <div className="hf-ctas">
          <Link className="hf-btn is-primary" to="/library/hafez/ghazals">خواندن غزلیات</Link>
          <FalButton />
          <Link className="hf-btn" to="/library/hafez/about">حافظ کیست؟</Link>
        </div>
      </header>

      <section className="hf-intro" aria-labelledby="hf-intro-h">
        <h2 id="hf-intro-h" className="sr-only">درآمد</h2>
        <Paras paras={hafez.intro} />
      </section>

      <section id="letters" className="hf-letters" aria-labelledby="hf-letters-h">
        <h2 id="hf-letters-h">غزل‌ها، حرف به حرف</h2>
        <p className="sub">دیوان به ترتیب حرف پایان مصراع نخست چیده شده است · {fa(summary.total)} غزل · {fa(summary.bayts)} بیت</p>
        <ol className="hf-letter-grid">
          {summary.letters.map((l) => (
            <li key={l.letter}>
              <Link to="/library/hafez/ghazals" search={{ letter: l.letter }}>
                <b>{l.letter}</b>
                <small>{fa(l.count)}</small>
              </Link>
            </li>
          ))}
        </ol>
        <p className="hf-more">و جز غزل: <Link to="/library/hafez/robaiyat">رباعیات</Link> · <Link to="/library/hafez/qetaat">قطعات</Link></p>
      </section>

      <section className="hf-two">
        <div className="hf-card">
          <h2>فال حافظ</h2>
          <p className="read">رسم است که دیوان حافظ را به نیت باز کنند و غزل همان صفحه را بخوانند؛ در نوروز و شب یلدا بیش از همه. اینجا هم یک غزل به تصادف می‌آید، با معنی بیت‌هایش. دربارهٔ پیشینهٔ این رسم در صفحهٔ «حافظ کیست؟» نوشته‌ایم.</p>
          <p><FalButton className="hf-btn is-primary" /></p>
        </div>
        <div className="hf-card">
          <h2>معنی بیت به بیت</h2>
          <p className="read">زیر هر بیت معنی‌اش آمده و بالای هر غزل خلاصه‌اش. از {fa(summary.bayts)} معنی، {fa(summary.ai)} را هوش مصنوعی نوشته و {fa(summary.human)} را خوانندگان گنجور؛ نشان هر کدام کنار خودش است.</p>
          <p><Link className="hf-btn" to="/library/hafez/about">زندگی و روزگار حافظ</Link></p>
        </div>
      </section>

      <section className="hf-view" aria-labelledby="hf-view-h">
        <h2 id="hf-view-h">نگاه ما</h2>
        {hafez.ourView.map((t, i) => <p key={i} className="read">{t}</p>)}
      </section>

      <Sources note={TEXT_CREDIT} />
    </div>
  )
}
