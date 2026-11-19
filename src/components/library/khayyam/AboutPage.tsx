import { Link } from '@tanstack/react-router'
import { khayyam } from '../../../data/library/khayyam'
import { Crumb, Paras, Sources } from './parts'
import '../naskh.css'
import './khayyam.css'

export function AboutPage() {
  return (
    <div className="kh khr">
      <div className="khr-page">
        <Crumb here="خیام کیست؟" />
        <header className="khr-head">
          <p className="k">رباعیات خیام · زندگی و آثار</p>
          <h1>خیام کیست؟</h1>
          <p className="sub">ریاضی‌دان، منجم، حکیم و شاعر نیشابوری؛ هر جمله با شمارهٔ منبعش</p>
        </header>
        <nav className="khr-toc" aria-label="در این صفحه">
          <ol>{khayyam.about.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol>
        </nav>
        {khayyam.about.map((s) => (
          <section key={s.id} id={s.id} className="kha-sec" aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>{s.title}</h2>
            <Paras paras={s.paras} />
          </section>
        ))}
        <section className="kh-view" aria-labelledby="kha-view-h">
          <h2 id="kha-view-h">نگاه ما</h2>
          {khayyam.ourView.map((t, i) => <p key={i} className="read">{t}</p>)}
        </section>
        <p className="kh-ctas"><Link className="kh-btn is-primary" to="/library/khayyam/rubaiyat">خواندن رباعیات</Link></p>
      </div>
      <Sources />
    </div>
  )
}
