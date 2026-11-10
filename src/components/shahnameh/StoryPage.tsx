import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState, type ReactNode } from 'react'
import { eras, isStory, neighbors, photoById, sourcesFor, storyPhoto, type CatalogEntry, type Story } from '../../data/shahnameh'
import { Reveal } from '../Reveal'
import { FolioLightbox } from './FolioLightbox'
import { InteractiveChoice } from './InteractiveChoice'
import { Miniature, PhotoCredit } from './Miniature'
import { ShahnamehShell } from './ShahnamehShell'
import { TazhibFrame } from './ornament'

function ShahnamehTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

function crumb(entry: CatalogEntry) {
  return (
    <nav aria-label="مسیر صفحه" className="text-sm text-ivory/70 flex flex-wrap items-center gap-2">
      <Link to="/" className="hover:text-gold min-h-11 inline-flex items-center">خانه</Link>
      <span aria-hidden="true">/</span>
      <Link to="/shahnameh" className="hover:text-gold min-h-11 inline-flex items-center">شاهنامه</Link>
      <span aria-hidden="true">/</span>
      <span className="text-gold-bright">{entry.title}</span>
    </nav>
  )
}

export function ComingSoonPage({ entry }: { entry: CatalogEntry }) {
  const photo = storyPhoto(entry) ?? photoById['baysonghor-page']
  const { prev, next } = neighbors(entry.slug)
  return (
    <ShahnamehShell>
      <ShahnamehTransition>
        <article className="mx-auto max-w-3xl px-4 py-12">
          {crumb(entry)}
          <TazhibFrame className="mt-8 overflow-hidden">
            {photo && <Miniature photo={photo} className="w-full aspect-[4/5] object-cover shn-soon" sizes="720px" />}
            <div className="p-8 text-center">
              <p className="text-gold text-sm font-bold tracking-widest">به‌زودی</p>
              <h1 className="mt-3 text-4xl font-black text-gilded">{entry.title}</h1>
              <p className="read mt-5 mx-auto no-justify text-ivory/80">{entry.summary}</p>
              <p className="read mt-4 mx-auto text-ivory/70">این داستان را با همان دقت بیت و منبع می‌نویسیم. تا آن روز، داستان‌های آماده را از نقشه بخوانید.</p>
              <Link to="/shahnameh" className="mt-8 inline-flex min-h-11 items-center rounded-full border border-gold/50 px-6 py-2 text-gold-bright hover:bg-gold/10">بازگشت به شاهنامه</Link>
            </div>
          </TazhibFrame>
          <Neighbors prev={prev} next={next} />
        </article>
      </ShahnamehTransition>
    </ShahnamehShell>
  )
}

function Neighbors({ prev, next }: { prev?: CatalogEntry; next?: CatalogEntry }) {
  return (
    <nav aria-label="داستان پیش و بعد" className="mt-14 grid gap-4 sm:grid-cols-2">
      {prev ? (
        isStory(prev) ? (
          <Link to="/shahnameh/$slug" params={{ slug: prev.slug }} className="shn-frame rounded-3xl px-5 py-4 hover:border-gold/50 min-h-11">
            <span className="block text-xs text-ivory/50">داستان پیشین</span>
            <span className="block mt-1 font-black text-gold-bright">{prev.title}</span>
          </Link>
        ) : (
          <div className="shn-frame rounded-3xl px-5 py-4 opacity-80">
            <span className="block text-xs text-ivory/50">داستان پیشین · به‌زودی</span>
            <span className="block mt-1 font-black text-gold/80">{prev.title}</span>
          </div>
        )
      ) : <span />}
      {next ? (
        isStory(next) ? (
          <Link to="/shahnameh/$slug" params={{ slug: next.slug }} className="shn-frame rounded-3xl px-5 py-4 hover:border-gold/50 min-h-11 sm:text-left">
            <span className="block text-xs text-ivory/50">داستان بعد</span>
            <span className="block mt-1 font-black text-gold-bright">{next.title}</span>
          </Link>
        ) : (
          <div className="shn-frame rounded-3xl px-5 py-4 opacity-80 sm:text-left">
            <span className="block text-xs text-ivory/50">داستان بعد · به‌زودی</span>
            <span className="block mt-1 font-black text-gold/80">{next.title}</span>
          </div>
        )
      ) : <span />}
    </nav>
  )
}

export function StoryPage({ story }: { story: Story }) {
  const photo = storyPhoto(story)!
  const era = eras.find((e) => e.id === story.era)
  const { prev, next } = neighbors(story.slug)
  const sources = sourcesFor(story.sources)
  const [open, setOpen] = useState(false)
  return (
    <ShahnamehShell>
      <ShahnamehTransition>
        <article className="mx-auto max-w-4xl px-4 py-12">
          {crumb(story)}
          <header className="mt-8 lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-10 lg:items-start">
            <TazhibFrame className="overflow-hidden relative">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="block w-full text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`بزرگ کردن نگارهٔ ${photo.titleFa}`}
              >
                <Miniature
                  photo={photo}
                  priority
                  className="w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-[3/4] object-cover object-[center_28%]"
                  sizes="(max-width: 1024px) 92vw, 320px"
                />
              </button>
              <button type="button" onClick={() => setOpen(true)} className="shn-folio-btn rounded-full bg-night/75 border border-gold/40 px-3 py-1.5 text-xs text-gold-bright min-h-11">
                نگاه نزدیک
              </button>
            </TazhibFrame>
            <div className="mt-8 lg:mt-2">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-turquoise-soft">{era?.kicker} · {era?.title} · حدود {story.readingMinutes} دقیقه مطالعه</p>
              <h1 className="mt-3 text-4xl md:text-6xl font-black text-gilded leading-tight">{story.title}</h1>
              <p className="mt-2 text-lg text-gold">{story.epithet}</p>
              <p className="read read-lede mt-6 text-ivory/90">{story.lede}</p>
            </div>
          </header>
          <FolioLightbox photo={photo} open={open} onClose={() => setOpen(false)} />

          <div className="shn-codex mt-12">
            {story.sections.map((section) => (
              <Reveal key={section.id}>
                <section aria-labelledby={section.id} className="mt-10 first:mt-0">
                  <h2 id={section.id} className="text-2xl md:text-3xl font-black text-gold-bright">{section.title}</h2>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 28)} className="read mt-4 text-ivory/88">{p}</p>
                  ))}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <section aria-labelledby="verses-h" className="mt-14">
                <h2 id="verses-h" className="text-2xl font-black text-gold-bright text-center">از زبان فردوسی</h2>
                <p className="read mx-auto mt-3 text-center text-ivory/70 no-justify text-sm">بیت‌ها عیناً از متن گنجور، بر پایهٔ چاپ مسکو، نقل شده‌اند.</p>
                <div className="mt-6 space-y-5">
                  {story.verses.map((v) => (
                    <figure key={`${v.poemUrl}-${v.n}`} className="shn-verse rounded-3xl px-5 py-6 md:px-8">
                      <blockquote>
                        <p className="text-xl md:text-2xl font-black leading-relaxed">{v.lines[0]}</p>
                        <p className="text-xl md:text-2xl font-black leading-relaxed mt-1">{v.lines[1]}</p>
                      </blockquote>
                      <figcaption className="mt-4 text-sm leading-7 opacity-80">{v.meaning}</figcaption>
                      <p className="mt-3 text-xs opacity-65">
                        <a href={v.poemUrl} className="underline decoration-current/30 hover:opacity-100" target="_blank" rel="noopener noreferrer">
                          {v.poemTitle}
                        </a>
                        {' · '}بیت {v.n.toLocaleString('fa-IR')}
                      </p>
                    </figure>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="cast-h" className="mt-14">
                <h2 id="cast-h" className="text-2xl font-black text-gold-bright">شخصیت‌ها</h2>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {story.characters.map((c) => (
                    <li key={c.id} className="rounded-3xl border border-gold/20 bg-night/30 px-5 py-4">
                      <p className="font-black text-gold-bright">{c.name}</p>
                      <p className="text-xs text-turquoise-soft mt-1">{c.role}</p>
                      <p className="read mt-2 text-sm text-ivory/80">{c.blurb}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <div className="mt-14">
              <InteractiveChoice item={story.interactive} />
            </div>

            <Reveal>
              <section aria-labelledby="view-h" className="mt-14 rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/10 to-transparent p-6 md:p-8">
                <p className="text-[0.7rem] font-bold tracking-[0.22em] text-gold">این برداشت ماست</p>
                <h2 id="view-h" className="mt-2 text-2xl font-black text-gold-bright">نگاه ما</h2>
                {story.ourView.map((p) => (
                  <p key={p.slice(0, 28)} className="read mt-4 text-ivory/88">{p}</p>
                ))}
              </section>
            </Reveal>

            <section aria-labelledby="src-h" className="mt-14">
              <h2 id="src-h" className="text-xl font-black text-gold">منابع</h2>
              <ol className="mt-4 space-y-2 list-decimal pr-5 text-sm text-ivory/75">
                {sources.map((s) => (
                  <li key={s.id} className="leading-7">
                    {s.url ? (
                      <a href={s.url} className="underline decoration-gold/40 hover:text-gold" target="_blank" rel="noopener noreferrer">{s.title}</a>
                    ) : <cite className="not-italic">{s.title}</cite>}
                    {s.author ? <span className="text-ivory/50"> — {s.author}</span> : null}
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <PhotoCredit photo={photo} />
              </div>
            </section>
          </div>

          <Neighbors prev={prev} next={next} />
        </article>
      </ShahnamehTransition>
    </ShahnamehShell>
  )
}
