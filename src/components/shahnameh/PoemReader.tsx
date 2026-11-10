import { useEffect, useMemo, useState } from 'react'
import type { StoryPoemCommentary, VerseNote } from '../../data/shahnameh/commentary'
import { noteKey, verseAnchor } from '../../data/shahnameh/poems/load'
import type { StoryPoemText } from '../../data/shahnameh/poems/types'
import { lineLinkUrl } from '../../lib/lineLink'
import { SITE_URL } from '../../lib/seo'

function sceneTitle(title: string) {
  return title.replace(/^بخش\s+\d+\s*[-–]\s*/, '').replace(/^بخش\s+\d+\s*/, '')
}

export function PoemReader({
  slug,
  poem,
  commentary,
  onVisibleKeys,
}: {
  slug: string
  poem: StoryPoemText
  commentary: StoryPoemCommentary
  onVisibleKeys?: (keys: string[]) => void
}) {
  const [q, setQ] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const complete = commentary.status === 'complete'
  const query = q.trim()

  const scenes = useMemo(() => {
    return poem.poems.map((section) => {
      const couplets = query
        ? section.couplets.filter((c) => {
            const hay = `${c.a} ${c.b} ${commentary.notes[noteKey(section.ganjoorId, c.n)]?.meaning ?? ''}`
            return hay.includes(query)
          })
        : section.couplets
      return { section, couplets, title: sceneTitle(section.title) }
    }).filter((s) => s.couplets.length > 0)
  }, [poem, query, commentary.notes])

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
    if (!id.startsWith('v-')) return
    const el = document.getElementById(id)
    el?.scrollIntoView({ block: 'center' })
  }, [poem.slug, scenes.length])

  useEffect(() => {
    if (!onVisibleKeys) return
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-note-key]'))
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).map((e) => (e.target as HTMLElement).dataset.noteKey).filter((k): k is string => Boolean(k))
      if (visible.length) onVisibleKeys(visible)
    }, { rootMargin: '-20% 0px -45% 0px', threshold: 0.2 })
    for (const n of nodes) io.observe(n)
    return () => io.disconnect()
  }, [onVisibleKeys, scenes])

  const share = async (ganjoorId: number, n: number) => {
    const id = verseAnchor(ganjoorId, n)
    const url = lineLinkUrl(SITE_URL, `/shahnameh/${slug}`, id)
    try {
      await navigator.clipboard.writeText(url)
      setCopied(id)
      window.setTimeout(() => setCopied((c) => (c === id ? null : c)), 1600)
    } catch {
      window.location.hash = id
    }
  }

  return (
    <div>
      <header className="rounded-[1.6rem] border border-gold/25 bg-night/30 px-5 py-5 md:px-7">
        <p className="text-[0.7rem] font-bold tracking-[0.2em] text-gold">شعر کامل فردوسی</p>
        <p className="read mt-3 text-ivory/80">
          متن عیناً از گنجور آمده است، بر پایهٔ چاپ مسکو: {poem.coupletCount.toLocaleString('fa-IR')} بیت در {poem.poemCount.toLocaleString('fa-IR')} بخش.
          {!complete ? ' توضیح بیت‌به‌بیت این داستان هنوز در کار است؛ شعر را می‌توانید همین حالا بخوانید.' : ' توضیح هر بیت برداشت این سایت است، نه سخن فردوسی.'}
        </p>
        <p className="mt-2 text-xs text-ivory/55">منبع: {poem.edition} · {poem.source}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex-1">
            <span className="sr-only">جست‌وجو در شعر</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="جست‌وجو در بیت‌ها…"
              className="w-full rounded-full border border-gold/25 bg-night/40 px-4 py-2.5 outline-none focus:border-gold min-h-11"
            />
          </label>
          <button type="button" className="glass rounded-full px-5 py-2.5 text-sm min-h-11" onClick={() => setShowAll((v) => !v)} aria-pressed={showAll}>
            {showAll ? 'بستن توضیح‌ها' : 'نمایش همهٔ توضیح‌ها'}
          </button>
        </div>
      </header>

      {scenes.length === 0 && (
        <p className="read mt-8 text-ivory/70">در این داستان بیتی با این جست‌وجو پیدا نشد.</p>
      )}

      <div className="mt-8 space-y-12">
        {scenes.map(({ section, couplets, title }) => (
          <section key={section.ganjoorId} id={`scene-${section.ganjoorId}`} className="shn-scene" aria-labelledby={`scene-h-${section.ganjoorId}`}>
            <h3 id={`scene-h-${section.ganjoorId}`} className="text-2xl font-black text-gold-bright">{title}</h3>
            <p className="mt-2 text-xs text-ivory/55">
              <a href={section.url} className="underline decoration-gold/30 hover:text-gold" target="_blank" rel="noopener noreferrer">{section.title}</a>
              {' · '}بیت {section.range.from.toLocaleString('fa-IR')} تا {section.range.to.toLocaleString('fa-IR')}
            </p>
            <ol className="mt-5 space-y-3">
              {couplets.map((c) => {
                const key = noteKey(section.ganjoorId, c.n)
                const note = commentary.notes[key]
                const id = verseAnchor(section.ganjoorId, c.n)
                return (
                  <li key={id} id={id} data-note-key={key} className="shn-beyt">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs text-gold/80 font-bold">بیت {c.n.toLocaleString('fa-IR')}</p>
                      <button type="button" onClick={() => void share(section.ganjoorId, c.n)} className="text-xs text-ivory/50 hover:text-gold min-h-11 px-2">
                        {copied === id ? 'پیوند کپی شد' : 'رونوشت پیوند'}
                      </button>
                    </div>
                    <blockquote className="shn-beyt-lines mt-2">
                      <p>{c.a}</p>
                      <p>{c.b}</p>
                    </blockquote>
                    {note ? (
                      <VerseExplanation note={note} open={showAll} />
                    ) : (
                      <p className="mt-3 text-sm text-ivory/50">توضیح این بیت به‌زودی می‌آید.</p>
                    )}
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}

function VerseExplanation({ note, open }: { note: VerseNote; open: boolean }) {
  return (
    <details className="mt-3" open={open || undefined}>
      <summary className="cursor-pointer text-sm text-gold min-h-11 inline-flex items-center">توضیح ما</summary>
      <div className="mt-3 border-t border-gold/15 pt-3">
        <p className="read text-ivory/88">{note.meaning}</p>
        {note.glossary && note.glossary.length > 0 && (
          <dl className="mt-3 space-y-1.5 text-sm">
            {note.glossary.map((g) => (
              <div key={g.word} className="flex gap-2">
                <dt className="font-bold text-gold-bright shrink-0">{g.word}:</dt>
                <dd className="read text-ivory/75">{g.meaning}</dd>
              </div>
            ))}
          </dl>
        )}
        {note.artistry && (
          <p className="read mt-3 text-sm text-ivory/75"><span className="text-turquoise-soft font-bold">هنر بیت. </span>{note.artistry}</p>
        )}
      </div>
    </details>
  )
}
