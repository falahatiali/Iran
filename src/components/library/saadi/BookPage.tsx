import { Link } from '@tanstack/react-router'
import { BOOKS, SAADI_PATH, type SaadiBook } from '../../../data/library/saadi'
import meta from '../../../data/library/saadi/text/meta.json'
import type { BookIndex } from '../../../data/library/saadi/types'
import { Picture } from '../Picture'
import { GardenPlan } from './GardenPlan'
import { BaytLines, ChapterLink, Crumb, Paras, SectionLink, Sources, TEXT_CREDIT, fa, subject } from './parts'
import { Rose } from './Rose'
import '../naskh.css'
import './saadi.css'

const HERO: Record<SaadiBook, string> = { bustan: '/media/library/bustan-garden', golestan: '/media/library/golestan-roses' }
const SHORT: Record<SaadiBook, readonly string[]> = {
  bustan: ['عدل', 'احسان', 'عشق', 'تواضع', 'رضا', 'قناعت', 'تربیت', 'شکر', 'توبه', 'مناجات'],
  golestan: ['پادشاهان', 'درویشان', 'قناعت', 'خاموشی', 'عشق', 'پیری', 'تربیت', 'صحبت'],
}

export interface BookSummary {
  book: SaadiBook
  opening: { l: readonly [string, string]; chapter: string; n: number; block: number; where: string }
  chapters: readonly { slug: string; title: string; count: number }[]
}

export function BookPage({ summary }: { summary: BookSummary }) {
  const { book, opening, chapters } = summary
  const c = BOOKS[book]
  const st = meta.books[book]
  const [first, ...babs] = chapters
  const marks = babs.map((b, i) => ({ slug: b.slug, label: SHORT[book][i] ?? subject(b.title) }))
  return (
    <div className={`sd is-${book}`}>
      <section className="sd-hero" data-book-arrival={book}>
        <Picture base={HERO[book]} widths={[640, 960, 1280]} width={1280} height={720} sizes="100vw" alt="" priority className="sd-hero-img" />
        <Crumb here={c.title} />
      </section>

      <header className="sd-panel">
        <p className="k">کتابخانهٔ ادب پارسی · {c.kicker}</p>
        <h1>{c.title}</h1>
        <p className="by">سعدی شیرازی</p>
        <BaytLines l={opening.l} className="is-opening" />
        <p className="sd-where"><SectionLink book={book} chapter={opening.chapter} n={opening.n} hash={`b-${opening.block}`}>{opening.where}</SectionLink></p>
        <ul className="sd-facts">
          {c.facts.map((f) => <li key={f.label}><b>{f.label}</b> {f.value}</li>)}
        </ul>
        <div className="sd-ctas">
          <SectionLink className="sd-btn is-primary" book={book} chapter={first.slug} n={1}>آغاز خواندن</SectionLink>
          <a className="sd-btn" href="#chapters">باب‌ها</a>
          <Link className="sd-btn" to={SAADI_PATH}>سعدی کیست؟</Link>
        </div>
      </header>

      {book === 'bustan' ? <GardenPlan chapters={marks} opening={first.slug} /> : <Rose chapters={marks} opening={first.slug} />}

      <section className="sd-intro" aria-labelledby="sd-intro-h">
        <h2 id="sd-intro-h" className="sr-only">درآمد</h2>
        <Paras paras={c.intro} />
      </section>

      <section id="chapters" className="sd-chapters" aria-labelledby="sd-ch-h">
        <h2 id="sd-ch-h">باب‌ها</h2>
        <p className="sub">{fa(st.sections)} {c.unit} · {fa(st.bayts)} بیت{st.paragraphs ? ` · ${fa(st.paragraphs)} بند نثر` : ''}</p>
        <ol className="sd-ch-list">
          {chapters.map((ch, i) => (
            <li key={ch.slug}>
              <ChapterLink book={book} chapter={ch.slug}>
                <span className="n" aria-hidden="true">{i === 0 ? '✦' : fa(i)}</span>
                <span><b>{ch.title}</b><small>{fa(ch.count)} {c.unit}</small></span>
              </ChapterLink>
            </li>
          ))}
        </ol>
      </section>

      <section className="sd-two">
        <div className="sd-card">
          <h2>معنی {book === 'golestan' ? 'بند به بند' : 'بیت به بیت'}</h2>
          <p className="read">
            زیر هر {book === 'golestan' ? 'بند و هر بیت' : 'بیت'} معنی‌اش آمده و بالای هر {c.unit} خلاصه‌اش. از معنی‌ها، {fa(st.ai)} را هوش مصنوعی نوشته، {fa(st.human)} را خوانندگان گنجور
            {st.fixed ? ` و ${fa(st.fixed)} را ما پس از بازخوانی ویراسته‌ایم` : ''}؛ نشان هر کدام کنار خودش است.
          </p>
        </div>
        <div className="sd-card">
          <h2>سعدی کیست؟</h2>
          <p className="read">زادروز و درس در بغداد، سفرهایی که گفته‌اند و آنچه منابع دربارهٔ آن‌ها تردید دارند، بازگشت به شیراز، سعدیه، و راه سعدی به اروپا؛ هر جمله با شمارهٔ منبعش.</p>
          <p><Link className="sd-btn" to={SAADI_PATH}>زندگی و روزگار سعدی</Link></p>
        </div>
      </section>

      <section className="sd-view" aria-labelledby="sd-view-h">
        <h2 id="sd-view-h">نگاه ما</h2>
        {c.ourView.map((t, i) => <p key={i} className="read">{t}</p>)}
      </section>

      <Sources note={TEXT_CREDIT} />
    </div>
  )
}

/** What the landing needs from the book's index and its opening section. */
export function summarise(index: BookIndex, opening: BookSummary['opening']): BookSummary {
  return { book: index.book, opening, chapters: index.chapters.map((c) => ({ slug: c.slug, title: c.title, count: c.sections.length })) }
}
