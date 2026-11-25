import { Link } from '@tanstack/react-router'
import { mantiq, type Verse } from '../../data/library/mantiq'
import { MANTIQ_MEANINGS, MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS, baytAnchor, hasNotes, sectionsByGroup } from '../../data/library/mantiq/sections'
import { Picture } from './Picture'
import { JourneyMap } from './mantiq/JourneyMap'
import './naskh.css'
import './mantiq.css'

const fa = (n: number) => n.toLocaleString('fa-IR')

function Couplet({ verse, className = '' }: { verse: Verse; className?: string }) {
  return (
    <figure className={`mq-couplet ${className}`}>
      <blockquote><span>{verse.lines[0]}</span><span>{verse.lines[1]}</span></blockquote>
      <figcaption><Link to="/library/mantiq-al-tayr/$section" params={{ section: verse.section }} hash={baytAnchor(verse.part, verse.n)}>{verse.where}، بیت {fa(verse.n)}</Link></figcaption>
    </figure>
  )
}

export function MantiqPage() {
  return (
    <div className="mq">
      <section className="mq-hero" data-book-arrival="mantiq-al-tayr">
        <Picture
          base="/media/library/simorgh"
          widths={[640, 960, 1280]}
          width={1280}
          height={720}
          sizes="100vw"
          alt=""
          priority
          className="mq-hero-img"
        />
        <nav className="mq-crumb" aria-label="مسیر">
          <Link to="/library">کتابخانه</Link> ‹ <b aria-current="page">{mantiq.title}</b>
        </nav>
      </section>

      <header className="mq-panel">
        <p className="k">کتابخانهٔ ادب پارسی · {mantiq.kicker}</p>
        <h1>{mantiq.title}</h1>
        <p className="by">{mantiq.author}</p>
        <Couplet verse={mantiq.opening} className="is-opening" />
        <ul className="mq-facts">
          {mantiq.facts.map((f) => <li key={f.label}><b>{f.label}</b> {f.value}</li>)}
        </ul>
        <div className="mq-ctas">
          <a className="mq-btn is-primary" href="#story">داستان در یک نگاه</a>
          <a className="mq-btn" href="#valleys">نقشهٔ هفت وادی</a>
          <a className="mq-btn" href="#contents">متن کامل</a>
        </div>
      </header>

      <section className="mq-intro" aria-labelledby="mq-intro-h">
        <h2 id="mq-intro-h" className="sr-only">درآمد</h2>
        {mantiq.intro.map((p, i) => <p key={i} className="read">{p}</p>)}
      </section>

      <JourneyMap />

      <section className="mq-story">
        <div id="story" className="mq-card">
          <h2>داستان در یک نگاه</h2>
          <ol className="mq-steps">
            {mantiq.story.map((s, i) => (
              <li key={s.title}>
                <h3><span aria-hidden="true">{fa(i + 1)}</span>{s.title}</h3>
                <p className="read">{s.text}</p>
                <Couplet verse={s.verse} className="is-small" />
              </li>
            ))}
          </ol>
        </div>
        <div className="mq-card">
          <h2>مرغان داستان</h2>
          <p className="read">مرغان گروهی بی‌نام نیستند: هر یک جداگانه پیش می‌آید، بهانه‌ای برای نرفتن می‌آورد و هدهد پاسخش را می‌دهد. نام‌ها به ترتیب بخش‌های کتاب است.</p>
          <ul className="mq-birds">
            {mantiq.birds.map((b) => (
              <li key={b.name}><Link to="/library/mantiq-al-tayr/$section" params={{ section: b.slug }} className={b.guide ? 'is-guide' : undefined}>{b.name}{b.guide ? ' · راهنما' : ''}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contents" className="mq-contents" aria-labelledby="mq-contents-h">
        <h2 id="mq-contents-h">متن کامل کتاب</h2>
        <p className="sub">
          {fa(MANTIQ_TOTAL_COUPLETS)} بیت در {fa(MANTIQ_SECTIONS.length)} بخش، به ترتیب گنجور · زیر همهٔ بیت‌ها معنی آمده است
        </p>
        <ol className="mq-stages">
          {sectionsByGroup().map((g, gi) => (
            <li key={g.id} className={`mq-stage is-${g.id}`}>
              <header>
                <span className="mq-stage-n" aria-hidden="true">{fa(gi + 1)}</span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.sub} · {fa(g.sections.reduce((n, s) => n + s.coupletCount, 0))} بیت</p>
                </div>
              </header>
              <ol className={g.id === 'questions' ? 'mq-stage-list is-chips' : 'mq-stage-list'}>
                {g.sections.map((s) => (
                  <li key={s.slug}>
                    <Link to="/library/mantiq-al-tayr/$section" params={{ section: s.slug }}>
                      <span className="t">{g.id === 'questions' ? s.title.replace(/^پرسش [۰-۹]+: /, '') : s.title}</span>
                      {g.id === 'questions' && <span className="q" aria-hidden="true">{s.title.match(/[۰-۹]+/)?.[0]}</span>}
                      {hasNotes(s.slug) && <span className="mq-annotated" title="با شرح این سایت">شرح ما</span>}
                      <small>{fa(s.coupletCount)} بیت</small>
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        <p className="mq-ctas"><Link className="mq-btn is-primary" to="/library/mantiq-al-tayr/$section" params={{ section: MANTIQ_SECTIONS[0].slug }}>خواندن از آغاز</Link></p>
      </section>

      <section className="mq-sources" aria-labelledby="mq-src-h">
        <h2 id="mq-src-h">منابع</h2>
        <ol>
          {mantiq.sources.map((s) => <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
        </ol>
        <p>
          متن بیت‌ها عیناً از گنجور است، به همان ترتیب ۲۹ فصل و {fa(MANTIQ_SECTIONS.reduce((n, s) => n + s.parts.length, 0) - 22)} پارهٔ گنجور، و شمارهٔ هر بیت شمارهٔ آن در پارهٔ خودش.
          گنجور پرسش‌های مرغان را جدا نکرده و هر پرسش از میانهٔ حکایت پیش از آن آغاز می‌شود؛ ما آن فصل را از بیتِ آغاز هر پرسش بریده‌ایم تا هر پرسش صفحهٔ خودش را داشته باشد.
          معنی همهٔ {fa(MANTIQ_MEANINGS.bayts)} بیت از دادهٔ باز گنجور است: {fa(MANTIQ_MEANINGS.ai)} معنی با نشان «هوش مصنوعی» و {fa(MANTIQ_MEANINGS.human)} معنی «نوشتهٔ خوانندگان گنجور».
          تاریخ‌ها و دربارهٔ قاب داستان از مقالهٔ ایرانیکا است.
        </p>
        <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
      </section>
    </div>
  )
}
