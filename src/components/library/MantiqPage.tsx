import { Link } from '@tanstack/react-router'
import { mantiq, type Verse } from '../../data/library/mantiq'
import { Picture } from './Picture'
import './naskh.css'
import './mantiq.css'

const fa = (n: number) => n.toLocaleString('fa-IR')

function Couplet({ verse, className = '' }: { verse: Verse; className?: string }) {
  return (
    <figure className={`mq-couplet ${className}`}>
      <blockquote><span>{verse.lines[0]}</span><span>{verse.lines[1]}</span></blockquote>
      <figcaption><a href={verse.url} target="_blank" rel="noopener noreferrer">{verse.where} · گنجور</a></figcaption>
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
              <a href={v.url} target="_blank" rel="noopener noreferrer" aria-label={`وادی ${v.name}، در گنجور`}>
                <span className="m" aria-hidden="true">{fa(v.n)}</span>
                <b>{v.name}</b>
                <small>{v.line}</small>
              </a>
            </li>
          ))}
        </ol>
        <p className="mq-cite">نام وادی‌ها از زبان هدهد: <a href={sv.listSource.url} target="_blank" rel="noopener noreferrer">{sv.listSource.where} · گنجور</a></p>
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
          <p className="read">مرغان گروهی بی‌نام نیستند: هر یک جداگانه پیش می‌آید، بهانه‌ای برای نرفتن می‌آورد و هدهد پاسخش را می‌دهد. نام‌ها به ترتیب بخش‌های کتاب در گنجور است.</p>
          <ul className="mq-birds">
            {mantiq.birds.map((b) => (
              <li key={b.name}><a href={b.url} target="_blank" rel="noopener noreferrer" className={b.guide ? 'is-guide' : undefined}>{b.name}{b.guide ? ' · راهنما' : ''}</a></li>
            ))}
          </ul>
          <p className="mq-next">این صفحه درآمدی بر کتاب است؛ متن کامل منطق‌الطیر، بخش به بخش، به همین کتابخانه افزوده می‌شود. تا آن روز می‌توانید کتاب را در <a href={mantiq.sources[0].url} target="_blank" rel="noopener noreferrer">گنجور</a> بخوانید.</p>
        </div>
      </section>

      <section className="mq-sources" aria-labelledby="mq-src-h">
        <h2 id="mq-src-h">منابع</h2>
        <ol>
          {mantiq.sources.map((s) => <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}
        </ol>
        <p>بیت‌ها عیناً از متن گنجور آورده شده و شمارهٔ بیت در همان بخش گنجور است. تاریخ‌ها و دربارهٔ قاب داستان از مقالهٔ ایرانیکا است.</p>
        <p><Link to="/library">← بازگشت به کتابخانه</Link></p>
      </section>
    </div>
  )
}
