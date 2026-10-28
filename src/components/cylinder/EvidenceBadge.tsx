import type { EvidenceLayer } from '../../data/research/types'
import type { Locale } from '../../lib/i18n'

const LABEL: Record<Locale, Record<EvidenceLayer, string>> = {
  fa: { historical: 'شواهد تاریخی', philosophical: 'تفسیر فلسفی', modern: 'معنای فرهنگی امروز' },
  en: { historical: 'Historical evidence', philosophical: 'Philosophical interpretation', modern: 'Modern cultural meaning' },
}

const TONE: Record<EvidenceLayer, string> = {
  historical: 'border-turquoise/40 bg-turquoise/10 text-turquoise-soft',
  philosophical: 'border-gold/40 bg-gold/10 text-gold-bright',
  modern: 'border-crimson/40 bg-crimson/10 text-ivory/90',
}

export function EvidenceBadge({ layer, locale }: { layer: EvidenceLayer; locale: Locale }) {
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${TONE[layer]}`}>
      {LABEL[locale][layer]}
    </span>
  )
}
