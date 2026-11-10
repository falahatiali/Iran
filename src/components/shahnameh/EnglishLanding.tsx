import { Link } from '@tanstack/react-router'
import { catalog, isStory, landing, photoById } from '../../data/shahnameh'
import { PageTransition } from '../Reveal'
import { Miniature } from './Miniature'
import { ShahnamehShell } from './ShahnamehShell'
import { TazhibFrame } from './ornament'

export function EnglishLanding() {
  const hero = photoById['gayumars-court']
  return (
    <ShahnamehShell>
      <PageTransition>
        <article className="mx-auto max-w-3xl px-4 py-16" lang="en">
          <p className="text-[0.75rem] font-bold tracking-[0.28em] text-gold text-center">{landing.kickerEn}</p>
          <h1 className="shn-title text-gilded text-center mt-4">{landing.titleEn}</h1>
          <p className="mt-5 text-center text-ivory/80 text-lg">{landing.descriptionEn}</p>
          {hero && (
            <TazhibFrame className="overflow-hidden mt-10">
              <Miniature photo={hero} priority className="w-full aspect-[4/5] object-cover object-top" sizes="768px" />
            </TazhibFrame>
          )}
          <div className="mt-10 space-y-5">
            {landing.introEn.map((p) => (
              <p key={p.slice(0, 20)} className="read font-serif text-ivory/85">{p}</p>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to="/shahnameh" className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-l from-gold to-[#9c6f1f] text-night font-black px-7 py-3">Enter the Persian Shahnameh</Link>
          </p>
          <h2 className="mt-16 text-2xl font-black text-gold-bright">Stories in order</h2>
          <ol className="mt-6 space-y-4">
            {catalog.map((entry) => (
              <li key={entry.slug} className="shn-frame rounded-3xl px-5 py-4">
                <p className="text-xs text-turquoise-soft">{entry.epithet}{entry.status === 'soon' ? ' · coming soon' : ''}</p>
                <p className="mt-1 font-black text-gold-bright text-lg">
                  {entry.titleEn}
                  <span className="text-ivory/50 font-medium mr-2" dir="rtl"> {entry.title}</span>
                </p>
                <p className="read mt-2 font-serif text-ivory/75">{entry.summaryEn}</p>
                {isStory(entry) && (
                  <Link to="/shahnameh/$slug" params={{ slug: entry.slug }} className="inline-flex mt-3 text-sm text-gold hover:text-gold-bright min-h-11 items-center">
                    Read the Persian page
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </article>
      </PageTransition>
    </ShahnamehShell>
  )
}
