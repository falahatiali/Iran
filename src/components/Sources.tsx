import type { Source } from '../server/db/repositories'

const kindLabel = { primary: 'منبع دست‌اول', reference: 'مرجع', monograph: 'پژوهش' } as const

export function Sources({ sources }: { sources: Source[] }) {
  if (!sources.length) return null
  return (
    <section aria-labelledby="sources-h" className="glass rounded-2xl p-6 mt-16">
      <h2 id="sources-h" className="text-xl font-bold text-gold mb-4">منابع و کتاب‌شناسی</h2>
      <ol className="space-y-3 text-sm text-ivory/80 list-decimal pr-5">
        {sources.map((s) => (
          <li key={s.id} id={`src-${s.id}`} className="py-1">
            <span className="text-turquoise-soft text-xs ml-2">[{kindLabel[s.kind]}]</span>
            {s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/40 hover:text-gold inline-block py-2 min-h-11">{s.title}</a> : <cite className="not-italic">{s.title}</cite>}
            {s.author && <span className="text-ivory/55"> — {s.author}</span>}
          </li>
        ))}
      </ol>
      <p className="text-xs text-ivory/45 mt-4">تاریخ‌ها بر پایه‌ی اجماع پژوهشی (ایرانیکا، تاریخ کمبریج) است؛ «ح.» نشانه‌ی تاریخ تقریبی یا مورد اختلاف است.</p>
    </section>
  )
}
