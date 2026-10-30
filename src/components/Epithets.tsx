import { EPITHET_KIND_LABEL, epithetsFor } from '../data/epithets'

/** Epithets and official titles of a ruler, with the source of each. Renders nothing when none is sourced. */
export function Epithets({ id, locale }: { id: string; locale: 'fa' | 'en' }) {
  const list = epithetsFor(id)
  if (list.length === 0) return null
  const en = locale === 'en'
  return (
    <section aria-label={en ? 'Epithets and titles' : 'لقب‌ها و عنوان‌ها'} className="mt-6 glass rounded-2xl p-4">
      <h2 className="text-sm text-ivory/60">{en ? 'Epithets and titles' : 'لقب‌ها و عنوان‌ها'}</h2>
      <ul className="mt-2 space-y-2">
        {list.map((e) => (
          <li key={`${e.kind}-${e.fa}`} className="text-sm leading-7">
            <span className="font-bold text-gold-bright">{en ? e.en : e.fa}</span>
            {e.original && <span dir="ltr" className="mx-2 text-turquoise-soft/90" title={e.lang}>{e.original}</span>}
            <span className="rounded-full bg-gold/10 px-2 py-0.5 text-xs text-ivory/70">{EPITHET_KIND_LABEL[e.kind][locale]}</span>
            {e.meaning && <span className="block text-ivory/75">{e.meaning[locale]}</span>}
            <span className="block text-xs text-ivory/50">
              {en ? 'Source: ' : 'منبع: '}
              {e.source.url ? <a href={e.source.url} rel="noopener" className="underline hover:text-gold" dir="ltr">{e.source.label}</a> : <span dir="ltr">{e.source.label}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
