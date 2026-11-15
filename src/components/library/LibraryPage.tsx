import { useRouter } from '@tanstack/react-router'
import { useCallback, useRef, type MouseEvent } from 'react'
import { catalogue, isReady, type ReadyBook } from '../../data/library'
import { Bookcase } from './Bookcase'
import { Picture } from './Picture'
import { prefersReducedMotion } from './motion'
import './naskh.css'
import './library.css'

/** The opening animation is its own chunk (with its CSS), fetched on the first hover, focus or tap. */
let opener: Promise<typeof import('./openBook')> | undefined
const loadOpener = () => (opener ??= import('./openBook'))

export function LibraryPage() {
  const router = useRouter()
  const busy = useRef(false)
  const warmed = useRef(new Set<string>())

  const onIntent = useCallback((book: ReadyBook) => {
    if (warmed.current.has(book.slug)) return
    warmed.current.add(book.slug)
    if (!prefersReducedMotion()) void loadOpener().then((m) => m.prefetchBook(book))
    void router.preloadRoute({ href: book.href } as never).catch(() => {})
  }, [router])

  const onOpen = useCallback((book: ReadyBook, spine: HTMLElement, e: MouseEvent<HTMLAnchorElement>) => {
    // new tab, new window, download: leave it to the browser
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    if (busy.current) return
    busy.current = true
    const go = () => router.navigate({ href: book.href })
    const done = () => { busy.current = false }
    if (prefersReducedMotion()) { void go().finally(done); return }
    loadOpener()
      .then((m) => m.openBook({ book, spine, navigate: go }))
      .catch(() => go())
      .finally(done)
  }, [router])

  const books = catalogue()
  return (
    <div className="lib">
      <section className="lib-hall" aria-labelledby="lib-title" data-no-comments>
        <Picture
          base="/media/library/hall"
          widths={[640, 1280]}
          width={1280}
          height={720}
          sizes="100vw"
          alt=""
          priority
          className="lib-bg"
        />
        <div className="lib-dust" aria-hidden="true" />
        <div className="lib-intro">
          <span className="lib-kicker"><i aria-hidden="true" />کتابخانهٔ ادب پارسی</span>
          <h1 id="lib-title"><span className="lib-gilt">گنجینهٔ ادبیات</span></h1>
          <p>شاهکارهای شعر و نثر فارسی، قفسه به قفسه. کتابی را برگزینید تا گشوده شود.</p>
          <div className="lib-legend" aria-hidden="true">
            <span><i style={{ background: '#0d4a4a', boxShadow: '0 0 8px #f2d68b' }} />آمادهٔ خواندن</span>
            <span><i style={{ background: '#555', opacity: 0.6 }} />به‌زودی</span>
          </div>
        </div>
        <Bookcase handlers={{ onIntent, onOpen }} />
      </section>
      <p className="lib-tapnote"><i aria-hidden="true" />روی یک کتاب بزنید تا گشوده شود</p>

      <section className="lib-below" aria-labelledby="lib-list">
        <h2 id="lib-list">کتاب‌های کتابخانه</h2>
        <p className="sub">هر کتاب صفحه و طراحی ویژهٔ خود را دارد؛ کتاب‌های تازه یکی‌یکی به قفسه‌ها افزوده می‌شوند.</p>
        <ul className="lib-cards" data-no-comments>
          {books.map((b) => {
            const body = (
              <>
                <span className="sw" style={{ '--c': b.spine.leather } as React.CSSProperties} aria-hidden="true" />
                <h3>{b.title}</h3>
                <p className="m">{isReady(b) ? `${b.authorFull} · ${b.era}` : b.author}</p>
                <span className="st">{isReady(b) ? 'گشودن کتاب' : 'به‌زودی'}</span>
              </>
            )
            return (
              <li key={b.slug}>
                {isReady(b)
                  ? <a href={b.href} className="lib-cat" onPointerEnter={() => onIntent(b)} onClick={(e) => { if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) { e.preventDefault(); void router.navigate({ href: b.href }) } }}>{body}</a>
                  : <div className="lib-cat is-soon">{body}</div>}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
