import type { VerseNote } from '../../data/shahnameh/commentary/types'

/** Class sets for the two reading surfaces: the night-sky Shahnameh and the parchment library pages. */
const TONES = {
  night: {
    summary: 'text-gold', rule: 'border-gold/15', meaning: 'text-ivory/88', word: 'text-gold-bright', gloss: 'text-ivory/75',
    art: 'text-ivory/75', artLabel: 'text-turquoise-soft',
  },
  parchment: {
    summary: 'text-[#0e6b6b]', rule: 'border-[#b8862f]/30', meaning: 'text-[#2a1a0a]', word: 'text-[#7a4a10]', gloss: 'text-[#3a2a14]/85',
    art: 'text-[#3a2a14]/85', artLabel: 'text-[#0e6b6b]',
  },
} as const

export type VerseTone = keyof typeof TONES

/** One bayt's note: its meaning, the hard words, and (when there is one) a note on its art or inner sense. */
export function VerseExplanation({
  note,
  open,
  tone = 'night',
  label = 'توضیح ما',
  artLabel = 'هنر بیت.',
}: {
  note: VerseNote
  open: boolean
  tone?: VerseTone
  label?: string
  artLabel?: string
}) {
  const t = TONES[tone]
  return (
    <details className="mt-3" open={open || undefined}>
      <summary className={`cursor-pointer text-sm ${t.summary} min-h-11 inline-flex items-center`}>{label}</summary>
      <div className={`mt-3 border-t ${t.rule} pt-3`}>
        <p className={`read ${t.meaning}`}>{note.meaning}</p>
        {note.glossary && note.glossary.length > 0 && (
          <dl className="mt-3 space-y-1.5 text-sm">
            {note.glossary.map((g) => (
              <div key={g.word} className="flex gap-2">
                <dt className={`font-bold ${t.word} shrink-0`}>{g.word}:</dt>
                <dd className={`read ${t.gloss}`}>{g.meaning}</dd>
              </div>
            ))}
          </dl>
        )}
        {note.artistry && (
          <p className={`read mt-3 text-sm ${t.art}`}><span className={`${t.artLabel} font-bold`}>{artLabel} </span>{note.artistry}</p>
        )}
      </div>
    </details>
  )
}
