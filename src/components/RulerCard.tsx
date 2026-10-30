import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { range, shRange } from '../lib/format'
import { nicknamesFor } from '../data/epithets'

export interface RulerLike { id: string; name: string; latin: string; start: number; end: number | null; description?: string }

export function RulerCard({ r, accent, index }: { r: RulerLike; accent: string; index?: number }) {
  const sh = shRange(r.start, r.end)
  return (
    <motion.article
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative glass rounded-2xl p-5 h-full overflow-hidden [transform-style:preserve-3d]"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[var(--accent)] via-gold to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute -left-16 -top-16 size-40 rounded-full bg-[var(--accent)] opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
      {index !== undefined && <span className="absolute left-4 top-4 text-3xl font-black text-gold/10 group-hover:text-gold/25 transition-colors">{(index + 1).toLocaleString('fa-IR')}</span>}
      <h3 className="text-xl font-bold leading-snug">
        <Link to="/king/$slug" params={{ slug: r.id }} className="after:absolute after:inset-0 focus-visible:outline-none group-focus-within:text-gold-bright hover:text-gold-bright transition-colors">
          {r.name}
        </Link>
      </h3>
      <p dir="ltr" className="text-xs tracking-wide text-turquoise-soft/80 text-right mt-1">{r.latin}</p>
      {nicknamesFor(r.id).length > 0 && (
        <p className="mt-2 flex flex-wrap gap-1.5 text-xs">
          {nicknamesFor(r.id).map((e) => <span key={e.fa} title={e.meaning?.fa} className="rounded-full border border-gold/30 px-2.5 py-0.5 text-gold-bright/90">لقب: {e.fa}</span>)}
        </p>
      )}
      <p className="mt-3 inline-flex flex-wrap gap-2 text-sm">
        <span className="rounded-full bg-gold/15 text-gold-bright px-3 py-0.5">{range(r.start, r.end)}</span>
        {sh && <span className="rounded-full bg-turquoise/15 text-turquoise-soft px-3 py-0.5">{sh}</span>}
      </p>
      {r.description && <p className="mt-3 text-[0.95rem] leading-8 text-ivory/80">{r.description}</p>}
      <span className="mt-4 inline-block text-sm text-gold/80 group-hover:translate-x-[-4px] transition-transform" aria-hidden="true">زندگی‌نامه و شجره‌نامه ←</span>
    </motion.article>
  )
}
