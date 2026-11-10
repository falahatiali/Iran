import { useState } from 'react'
import type { Interactive } from '../../data/shahnameh/types'

export function InteractiveChoice({ item }: { item: Interactive }) {
  const [picked, setPicked] = useState<string | null>(null)
  const selected = item.options.find((o) => o.id === picked)
  return (
    <section aria-labelledby="ask-h" className="shn-frame rounded-[2rem] p-6 md:p-8">
      <p className="text-[0.7rem] font-bold tracking-[0.2em] text-gold">
        {item.type === 'quiz' ? 'پرسش کوچک' : 'اگر تو بودی'}
      </p>
      <h2 id="ask-h" className="mt-2 text-2xl font-black text-gold-bright">{item.question}</h2>
      <div role="group" aria-label={item.question} className="mt-6 grid gap-3">
        {item.options.map((o) => {
          const on = picked === o.id
          const showMark = picked && item.type === 'quiz'
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setPicked(o.id)}
              aria-pressed={on}
              className={`text-start rounded-2xl border px-5 py-4 min-h-11 transition-colors ${
                on ? 'border-gold bg-gold/15 text-gold-bright' : 'border-gold/20 hover:border-gold/50 bg-night/30'
              }`}
            >
              <span className="font-bold leading-8">{o.text}</span>
              {showMark && o.correct && <span className="mr-2 text-turquoise-soft text-sm">پاسخ درست</span>}
            </button>
          )
        })}
      </div>
      {selected && (
        <p className="read mt-6 text-ivory/85 bg-night/40 rounded-2xl px-5 py-4">{selected.feedback}</p>
      )}
    </section>
  )
}
