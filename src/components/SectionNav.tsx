import { useEffect, useMemo, useState } from 'react'

/** Sticky in-page table of contents with an active-section highlight. */
export function SectionNav({ items, label }: { items: readonly (readonly [string, string])[]; label: string }) {
  const key = useMemo(() => items.map(([id]) => id).join('|'), [items])
  const [active, setActive] = useState(items[0]?.[0] ?? '')

  useEffect(() => {
    if (items.length === 0) return
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]?.target.id) setActive(visible[0].target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.4] })
    for (const [id] of items) {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [key, items])

  if (items.length < 2) return null
  return (
    <nav aria-label={label} className="sticky top-16 z-30 border-b border-gold/15 bg-night/90 backdrop-blur-xl print:hidden">
      <ol className="mx-auto max-w-6xl px-4 flex gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none]">
        {items.map(([id, text]) => (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`inline-flex items-center min-h-11 px-3 text-sm border-b-2 transition-colors ${
                active === id ? 'border-gold text-gold-bright' : 'border-transparent text-ivory/70 hover:text-ivory'
              }`}
            >{text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
