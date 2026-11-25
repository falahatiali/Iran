import { Link } from '@tanstack/react-router'
import { khayyam } from '../../../data/library/khayyam'
import type { HedayatEdition } from '../../../data/library/khayyam/types'
import { Picture } from '../Picture'
import { Crumb, Paras, Rubai, Sources, TEXT_CREDIT, fa } from './parts'
import { Sky } from './Sky'
import '../naskh.css'
import './khayyam.css'

/** What the landing shows of the edition: the opening quatrain, the eight headings with their first lines, and counts. */
export function summarise(edition: HedayatEdition) {
  const qs = edition.quatrains
  return {
    opening: qs.find((q) => q.n === khayyam.openingN)!,
    themes: edition.themes.map((t) => ({ ...t, firstLine: qs.find((q) => q.theme === t.id)!.lines[0] })),
    total: qs.length,
    starred: qs.filter((q) => q.doubtful).length,
    both: qs.filter((q) => q.fg).length,
  }
}

export function KhayyamPage({ summary }: { summary: ReturnType<typeof summarise> }) {
  const { opening, starred, both } = summary
  return (
    <div className="kh">
      <section className="kh-hero" data-book-arrival="khayyam">
        <Picture base="/media/library/khayyam-night" widths={[640, 960, 1280]} width={1280} height={720} sizes="100vw" alt="" priority className="kh-hero-img" />
        <Sky />
        <Crumb />
      </section>

      <header className="kh-panel">
        <p className="k">کتابخانهٔ ادب پارسی · {khayyam.kicker}</p>
        <h1>{khayyam.title}</h1>
        <p className="by">{khayyam.author}</p>
        <Rubai q={opening} className="is-opening" />
        <p className="kh-where"><Link to="/library/khayyam/rubaiyat" hash={`r-${opening.n}`}>ترانه‌های خیام، رباعی {fa(opening.n)}</Link></p>
        <ul className="kh-facts">
          {khayyam.facts.map((f) => <li key={f.label}><b>{f.label}</b> {f.value}</li>)}
        </ul>
        <div className="kh-ctas">
          <Link className="kh-btn is-primary" to="/library/khayyam/rubaiyat">خواندن رباعیات</Link>
          <Link className="kh-btn" to="/library/khayyam/about">خیام کیست؟</Link>
          <a className="kh-btn" href="#themes">هشت دفتر</a>
        </div>
      </header>

      <section className="kh-intro" aria-labelledby="kh-intro-h">
        <h2 id="kh-intro-h" className="sr-only">درآمد</h2>
        <Paras paras={khayyam.intro} />
      </section>

      <section id="themes" className="kh-themes" aria-labelledby="kh-themes-h">
        <h2 id="kh-themes-h">هشت دفتر هدایت</h2>
        <p className="sub">{fa(summary.total)} رباعی · {fa(starred)} رباعی با ستارهٔ تردید هدایت · {fa(both)} رباعی در گزینش فروغی و غنی هم آمده</p>
        <ol className="kh-theme-grid">
          {summary.themes.map((t, i) => {
            return (
              <li key={t.id}>
                <Link to="/library/khayyam/rubaiyat" search={{ theme: t.id }}>
                  <span className="m" aria-hidden="true">{fa(i + 1)}</span>
                  <b>{t.title}</b>
                  <small>{fa(t.count)} رباعی</small>
                  <em>{t.firstLine}</em>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="kh-two">
        <div className="kh-card">
          <h2>دانشمندی که شاعر شد</h2>
          <p className="read">در زمان خودش خیام را بیشتر به ریاضی و نجوم و حکمت می‌شناختند: حل هندسی معادله‌های درجهٔ سوم، نقد اصل توازی اقلیدس، و تقویم جلالی. شرح زندگی، سفرها، آثار علمی و آرامگاهش را با منبع در صفحهٔ «خیام کیست؟» آورده‌ایم.</p>
          <p><Link className="kh-btn" to="/library/khayyam/about">زندگی و آثار خیام</Link></p>
        </div>
        <div className="kh-card">
          <h2>گزینشی دیگر</h2>
          <p className="read">فروغی و غنی ۱۷۸ رباعی را برگزیدند (در متن گنجور). متن کامل این گزینش را هم آورده‌ایم تا بتوانید دو گزینش را کنار هم ببینید.</p>
          <p><Link className="kh-btn" to="/library/khayyam/foroughi">رباعیات به گزینش فروغی و غنی</Link></p>
          <p className="kh-more"><Link className="kh-btn" to="/library/khayyam/nowruzname">نوروزنامه (منسوب به خیام)</Link> <Link className="kh-btn" to="/library/khayyam/arabic">شعر عربی خیام</Link></p>
        </div>
      </section>

      <section className="kh-view" aria-labelledby="kh-view-h">
        <h2 id="kh-view-h">نگاه ما</h2>
        {khayyam.ourView.map((t, i) => <p key={i} className="read">{t}</p>)}
      </section>

      <Sources note={TEXT_CREDIT} />
    </div>
  )
}
