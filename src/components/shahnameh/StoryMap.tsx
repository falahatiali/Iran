import { Link } from '@tanstack/react-router'
import { catalog, eras, isStory, photoById, storiesByEra, type CatalogEntry } from '../../data/shahnameh'
import { Miniature } from './Miniature'

function Node({ entry }: { entry: CatalogEntry }) {
  const photo = entry.heroId ? photoById[entry.heroId] : undefined
  const inner = (
    <>
      <span className={`block overflow-hidden rounded-full aspect-square shn-node-ring ${entry.status === 'soon' ? 'shn-soon' : ''}`}>
        {photo ? (
          <Miniature
            photo={photo}
            className="size-full object-cover"
            sizes="160px"
            decorative
          />
        ) : (
          <span className="size-full grid place-items-center bg-gradient-to-br from-[#1a3478] to-[#070d1f] text-gold text-2xl font-black">{entry.title[0]}</span>
        )}
      </span>
      <span className="mt-3 block text-center">
        <span className="block font-black text-gold-bright leading-7">{entry.title}</span>
        <span className="block text-xs text-ivory/60 mt-1">{entry.epithet}</span>
        {entry.status === 'soon' && (
          <span className="mt-2 inline-block rounded-full border border-gold/30 px-2.5 py-0.5 text-[0.65rem] text-gold">به‌زودی</span>
        )}
      </span>
    </>
  )
  const cls = 'w-[7.5rem] sm:w-36 shrink-0 flex flex-col items-center group focus-visible:outline-none'
  if (isStory(entry)) {
    return (
      <Link to="/shahnameh/$slug" params={{ slug: entry.slug }} className={`${cls} hover:-translate-y-1 transition-transform`}>
        {inner}
      </Link>
    )
  }
  return (
    <div className={`${cls} opacity-90`} aria-label={`${entry.title}، به‌زودی`}>
      {inner}
    </div>
  )
}

export function StoryMap() {
  return (
    <section id="map" aria-labelledby="map-h" className="mx-auto max-w-6xl px-4">
      <p className="text-center text-[0.7rem] font-bold tracking-[0.22em] text-gold">نقشهٔ داستان‌ها</p>
      <h2 id="map-h" className="text-center text-3xl md:text-5xl font-black text-gilded mt-2">از آغاز تا افق تاریخ</h2>
      <p className="read mx-auto mt-5 text-ivory/80 text-center max-w-2xl no-justify">
        شاهنامه سه دور بزرگ دارد. داستان‌های آماده را لمس کنید؛ کارت‌های کم‌نور به‌زودی می‌آیند.
      </p>
      <div className="mt-12 space-y-14">
        {eras.map((era) => {
          const items = storiesByEra(era.id)
          return (
            <div key={era.id} className="shn-frame rounded-[2rem] px-4 py-8 md:px-8">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] text-turquoise-soft">{era.kicker}</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-black text-gold-bright">{era.title}</h3>
                <p className="read mt-3 text-ivory/75 no-justify mx-auto">{era.blurb}</p>
              </div>
              <div className="relative mt-8">
                <div className="shn-path absolute top-16 inset-x-8 hidden md:block" aria-hidden="true" />
                <ol className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible">
                  {items.map((entry) => (
                    <li key={entry.slug} className="snap-center">
                      <Node entry={entry} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        })}
      </div>
      <p className="sr-only">{catalog.length} داستان در نقشه</p>
    </section>
  )
}
