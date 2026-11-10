import { Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { SHAHNAMEH_OPENING, SHAHNAMEH_WISDOM, catalog, isStory, landing, photoById, readyStories, storyPhoto } from '../../data/shahnameh'
import { PageTransition, Reveal } from '../Reveal'
import { Miniature, PhotoCredit } from './Miniature'
import { ShahnamehShell } from './ShahnamehShell'
import { StoryMap } from './StoryMap'
import { TazhibCorner, TazhibFrame } from './ornament'

function HeroPainting({ photo }: { photo: (typeof photoById)[string] }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const img = root.querySelector('img')
    if (!img) return
    const onScroll = () => {
      img.style.setProperty('--shn-shift', `${Math.min(window.scrollY * 0.18, 80)}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div ref={ref} className="absolute inset-0">
      <Miniature photo={photo} priority decorative sizes="100vw" className="shn-hero-img" />
    </div>
  )
}

export function LandingPage() {
  const hero = photoById['gayumars-court']
  return (
    <ShahnamehShell>
      <PageTransition>
        <section className="shn-hero">
          {hero && <HeroPainting photo={hero} />}
          <div className="shn-hero-veil" />
          <TazhibCorner className="absolute top-6 right-6 size-20 md:size-28 z-10 hidden sm:block" />
          <TazhibCorner className="absolute top-6 left-6 size-20 md:size-28 z-10 hidden sm:block -scale-x-100" />
          <div className="relative z-10 mx-auto max-w-5xl px-4 pt-28 pb-24 text-center">
            <p className="shn-hero-kicker text-[0.75rem] font-bold tracking-[0.28em]">{landing.kicker}</p>
            <h1 className="shn-title text-gilded mt-4">{landing.title}</h1>
            <p className="shn-hero-sub mt-6 text-xl md:text-2xl font-medium">از کیومرث تا افق تاریخ، برای خانواده و کودک</p>
            <blockquote className="shn-verse mx-auto mt-10 max-w-xl rounded-3xl px-6 py-6">
              <p className="text-xl md:text-2xl font-black leading-relaxed">{SHAHNAMEH_OPENING[0]}</p>
              <p className="text-xl md:text-2xl font-black leading-relaxed mt-1">{SHAHNAMEH_OPENING[1]}</p>
              <p className="text-xs mt-4 opacity-70">فردوسی، آغاز کتاب · گنجور، بر پایهٔ چاپ مسکو</p>
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#map" className="rounded-full bg-gradient-to-l from-gold to-[#9c6f1f] text-night font-black px-7 py-3 min-h-11 inline-flex items-center">نقشهٔ داستان‌ها</a>
              <Link to="/shahnameh/$slug" params={{ slug: 'keyumars' }} className="rounded-full border border-gold/50 px-7 py-3 min-h-11 inline-flex items-center text-gold-bright hover:bg-gold/10">
                از کیومرث آغاز کنید
              </Link>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="mx-auto max-w-3xl px-4 mt-20">
            {landing.intro.map((p) => (
              <p key={p.slice(0, 24)} className="read text-ivory/85">{p}</p>
            ))}
            <blockquote className="shn-verse rounded-3xl px-6 py-6 mt-8">
              <p className="text-xl font-black">{SHAHNAMEH_WISDOM[0]}</p>
              <p className="text-xl font-black mt-1">{SHAHNAMEH_WISDOM[1]}</p>
              <p className="text-xs mt-3 opacity-70">آغاز کتاب، بیت ۱۴ · گنجور</p>
            </blockquote>
          </section>
        </Reveal>

        <div className="mt-24">
          <StoryMap />
        </div>

        <Reveal>
          <section aria-labelledby="cards-h" className="mx-auto max-w-6xl px-4 mt-24">
            <h2 id="cards-h" className="text-center text-3xl font-black text-gilded">دفتر داستان‌ها</h2>
            <p className="read mx-auto mt-4 text-center text-ivory/75 no-justify">{readyStories.length} داستان آماده است{catalog.some((e) => e.status === 'soon') ? '؛ بقیه با همان دقت، یکی‌یکی می‌آیند.' : '.'}</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catalog.map((entry) => {
                const photo = storyPhoto(entry)
                const body = (
                  <>
                    {photo ? (
                      <Miniature photo={photo} className={`aspect-[4/5] w-full object-cover ${entry.status === 'soon' ? 'shn-soon' : ''}`} sizes="(max-width: 640px) 100vw, 360px" />
                    ) : (
                      <span className="aspect-[4/5] w-full grid place-items-center bg-gradient-to-br from-[#1a3478] via-[#0a1733] to-[#070d1f] text-gold text-5xl font-black">{entry.title[0]}</span>
                    )}
                    <span className="block p-5">
                      <span className="text-[0.7rem] font-bold tracking-wide text-turquoise-soft">{entry.epithet}</span>
                      <span className="mt-1 block text-xl font-black text-gold-bright">{entry.title}</span>
                      <span className="mt-2 block text-sm text-ivory/70 leading-7">{entry.summary}</span>
                      {entry.status === 'soon' && <span className="mt-3 inline-block text-xs text-gold">به‌زودی</span>}
                    </span>
                  </>
                )
                return (
                  <li key={entry.slug}>
                    {isStory(entry) ? (
                      <Link to="/shahnameh/$slug" params={{ slug: entry.slug }} className="shn-frame block overflow-hidden rounded-[1.6rem] hover:border-gold/60 transition-colors h-full">
                        {body}
                      </Link>
                    ) : (
                      <div className="shn-frame overflow-hidden rounded-[1.6rem] h-full">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mx-auto max-w-3xl px-4 mt-24">
            <TazhibFrame className="p-8 md:p-10">
              <h2 className="text-2xl font-black text-gold-bright text-center">چگونه بخوانیم</h2>
              <ul className="mt-6 space-y-3">
                {landing.how.map((line) => (
                  <li key={line} className="read text-ivory/80">{line}</li>
                ))}
              </ul>
            </TazhibFrame>
          </section>
        </Reveal>

        {hero && (
          <section className="mx-auto max-w-3xl px-4 mt-16 pb-8">
            <PhotoCredit photo={hero} />
          </section>
        )}
      </PageTransition>
    </ShahnamehShell>
  )
}
