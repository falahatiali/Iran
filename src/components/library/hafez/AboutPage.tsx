import { Link } from '@tanstack/react-router'
import { hafez } from '../../../data/library/hafez'
import { Crumb, Paras, Sources } from './parts'
import '../naskh.css'
import './hafez.css'

export function AboutPage() {
  return (
    <div className="hf hfr">
      <div className="hfr-page">
        <Crumb here="حافظ کیست؟" />
        <header className="hfr-head">
          <p className="k">دیوان حافظ · زندگی و روزگار</p>
          <h1>حافظ کیست؟</h1>
          <p className="sub">شاعر شیراز، روزگار آل مظفر، دیوان و تصحیح‌هایش، فال حافظ، گوته و حافظیه؛ هر جمله با شمارهٔ منبعش</p>
        </header>
        <nav className="hfr-toc" aria-label="در این صفحه">
          <ol>{hafez.about.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
        </nav>
        {hafez.about.map((s) => (
          <section key={s.id} id={s.id} className={`hfa-sec${s.id === 'timur' ? ' is-legend' : ''}`} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>{s.title}</h2>
            <Paras paras={s.paras} />
          </section>
        ))}
        <section className="hf-view" aria-labelledby="hfa-view-h">
          <h2 id="hfa-view-h">نگاه ما</h2>
          {hafez.ourView.map((t, i) => <p key={i} className="read">{t}</p>)}
        </section>
        <p className="hf-ctas"><Link className="hf-btn is-primary" to="/library/hafez/ghazals">خواندن غزلیات</Link></p>
      </div>
      <Sources />
    </div>
  )
}
