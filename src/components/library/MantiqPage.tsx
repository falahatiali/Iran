import { Link } from '@tanstack/react-router'
import { mantiq, type Verse } from '../../data/library/mantiq'
import { MANTIQ_SECTIONS, MANTIQ_TOTAL_COUPLETS, baytAnchor, hasNotes, sectionsByGroup } from '../../data/library/mantiq/sections'
import { Picture } from './Picture'
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
  const { sevenValleys: sv } = mantiq
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

      <section id="valleys" className="mq-valleys" aria-labelledby="mq-valleys-h">
        <h2 id="mq-valleys-h">هفت وادی</h2>
        <p className="sub">راهی که مرغان به رهبری هدهد تا درگاه سیمرغ می‌پیمایند</p>
        <Couplet verse={sv.intro} />
        <ol className="mq-path">
          {sv.valleys.map((v) => (
            <li key={v.n} className="mq-v">
              <Link to="/library/mantiq-al-tayr/$section" params={{ section: v.slug }} aria-label={`وادی ${v.name}: متن و شرح`}>
                <span className="m" aria-hidden="true">{fa(v.n)}</span>
                <b>{v.name}</b>
                <small>{v.line}</small>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mq-cite">نام وادی‌ها از زبان هدهد: <Link to="/library/mantiq-al-tayr/$section" params={{ section: sv.listSource.section }} hash={baytAnchor(sv.listSource.part, sv.listSource.n)}>{sv.listSource.where}، بیت‌های {fa(sv.listSource.n)} تا {fa(sv.listSource.n + 3)}</Link></p>
      </section>

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
        <p className="sub">{fa(MANTIQ_TOTAL_COUPLETS)} بیت در {fa(MANTIQ_SECTIONS.length)} بخش · بخش‌های نشان‌دار معنی بیت‌به‌بیت دارند</p>
        <div className="mq-contents-grid">
          {sectionsByGroup().map((g) => (
            <div key={g.id} className="mq-contents-g">
              <h3>{g.title}</h3>
              <ol>
                {g.sections.map((s) => (
                  <li key={s.slug}>
                    <Link to="/library/mantiq-al-tayr/$section" params={{ section: s.slug }}>
                      {s.title}
                      {hasNotes(s.slug) && <span className="mq-annotated" title="با معنی و شرح بیت‌ها">شرح‌دار</span>}
                      <small>{fa(s.coupletCount)} بیت</small>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="mq-ctas"><Link className="mq-btn is-primary" to="/library/mantiq-al-tayr/$section" params={{ section: MANTIQ_SECTIONS[0].slug }}>خواندن از آغاز</Link></p>
      </section>

      <section className="mq-sources" aria-labelledby="mq-src-h">
        <h2 id="mq-src-h">منابع</h2>
        <ol>
          {mantiq.sources.map((s) => <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
        </ol>
        <p>متن بیت‌ها عیناً از گنجور است و شمارهٔ هر بیت، شمارهٔ آن در پارهٔ خودش. تاریخ‌ها و دربارهٔ قاب داستان از مقالهٔ ایرانیکا است.</p>
        <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
      </section>
    </div>
  )
}
