import { Link } from '@tanstack/react-router'
import { ABOUT_VIEW, about } from '../../../data/library/saadi'
import { Crumb, Paras, Sources } from './parts'
import '../naskh.css'
import './saadi.css'

export function AboutPage() {
  return (
    <div className="sd sdr is-bustan">
      <div className="sdr-page">
        <Crumb here="سعدی کیست؟" />
        <header className="sdr-head">
          <p className="k">سعدی شیرازی · زندگی و روزگار</p>
          <h1>سعدی کیست؟</h1>
          <p className="sub">زادروز، بغداد، سفرها، بوستان و گلستان، درگذشت، سعدیه و سعدی در غرب؛ هر جمله با شمارهٔ منبعش</p>
        </header>
        <nav className="sdr-toc" aria-label="در این صفحه">
          <ol>{about.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
        </nav>
        {about.map((s) => (
          <section key={s.id} id={s.id} className="sda-sec" aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>{s.title}</h2>
            <Paras paras={s.paras} />
          </section>
        ))}
        <section className="sd-view" aria-labelledby="sda-view-h">
          <h2 id="sda-view-h">نگاه ما</h2>
          {ABOUT_VIEW.map((t, i) => <p key={i} className="read">{t}</p>)}
        </section>
        <p className="sd-ctas">
          <Link className="sd-btn is-primary" to="/library/bustan">بوستان</Link>
          <Link className="sd-btn is-primary" to="/library/golestan">گلستان</Link>
        </p>
      </div>
      <Sources />
    </div>
  )
}
