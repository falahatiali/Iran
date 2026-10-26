import { Link } from '@tanstack/react-router'
import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import type { EventRow, RulerRow } from '../server/db/repositories'
import { eventTypeNames, range, year } from '../lib/format'
import { EventIcon } from './EventIcon'

type Item = { kind: 'ruler'; at: number; r: RulerRow } | { kind: 'event'; at: number; e: EventRow }

/** Rulers and events interleaved chronologically along an animated vertical line. */
export function InterleavedTimeline({ rulers, events, accent }: { rulers: RulerRow[]; events: EventRow[]; accent: string }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const items: Item[] = [
    ...rulers.map((r): Item => ({ kind: 'ruler', at: r.start, r })),
    ...events.map((e): Item => ({ kind: 'event', at: e.year, e })),
  ].sort((a, b) => a.at - b.at || (a.kind === 'ruler' ? -1 : 1))

  return (
    <ol ref={ref} className="relative pr-8 md:pr-0" aria-label="گاه‌شمار پادشاهان و رویدادها">
      <span className="absolute top-0 bottom-0 right-3 md:right-1/2 w-px bg-gold/15" aria-hidden="true" />
      <motion.span style={{ scaleY, background: `linear-gradient(${accent}, #d9b45a)` }} className="absolute top-0 bottom-0 right-3 md:right-1/2 w-[3px] -mr-px origin-top rounded-full" aria-hidden="true" />
      {items.map((it, i) => {
        const side = i % 2 === 0 ? 'md:ml-[50%] md:pr-10' : 'md:mr-[50%] md:pl-10 md:text-left'
        return (
          <motion.li
            key={it.kind === 'ruler' ? it.r.id : it.e.id}
            initial={{ opacity: 0, x: i % 2 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className={`relative mb-6 ${side}`}
          >
            <span className={`absolute top-4 -right-[1.85rem] md:right-auto ${i % 2 === 0 ? 'md:-right-[0.45rem]' : 'md:-left-[0.45rem]'} size-3.5 rounded-full ring-4 ring-night`} style={{ background: it.kind === 'ruler' ? '#d9b45a' : accent }} aria-hidden="true" />
            {it.kind === 'ruler' ? (
              <Link to="/king/$slug" params={{ slug: it.r.id }} className="block glass rounded-xl p-4 hover:border-gold/60 hover:-translate-y-0.5 transition-all">
                <span className="text-xs text-gold/80">آغاز پادشاهی · {range(it.r.start, it.r.end)}</span>
                <span className="block text-lg font-bold mt-1">👑 {it.r.name}</span>
              </Link>
            ) : (
              <div className={`rounded-xl p-4 border ${it.e.importance === 'major' ? 'border-turquoise/30 bg-turquoise/5' : 'border-ivory/10 bg-ivory/[.02]'}`}>
                <span className="text-xs text-turquoise-soft/90 inline-flex items-center gap-1"><EventIcon type={it.e.type} /> {eventTypeNames[it.e.type]} · {year(it.e.year)}</span>
                <span className={`block mt-1 ${it.e.importance === 'major' ? 'font-bold' : 'text-ivory/80'}`}>{it.e.title}</span>
                {it.e.description && <span className="block text-sm text-ivory/65 mt-1 leading-7">{it.e.description}</span>}
              </div>
            )}
          </motion.li>
        )
      })}
    </ol>
  )
}
