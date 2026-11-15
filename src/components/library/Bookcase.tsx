import type { MouseEvent } from 'react'
import { isReady, shelfBooks, type LibraryBook, type ReadyBook } from '../../data/library'
import { SHELF_DECOR, type DecorItem } from './shelfDecor'

export interface BookHandlers {
  /** warm up: load the opening code, the cover and the destination route */
  onIntent: (book: ReadyBook) => void
  onOpen: (book: ReadyBook, spine: HTMLElement, e: MouseEvent<HTMLAnchorElement>) => void
}

const SHELF_NAMES = { 1: 'قفسهٔ نخست', 2: 'قفسهٔ دوم' } as const

function Astrolabe() {
  return (
    <svg className="lib-obj" width="78" height="110" viewBox="0 0 78 110" aria-hidden="true">
      <g fill="none" stroke="#d9b45a" strokeWidth="2"><circle cx="39" cy="44" r="32" /><circle cx="39" cy="44" r="24" strokeOpacity=".6" /><path d="M39 12v64M7 44h64M16 21l46 46M62 21L16 67" strokeOpacity=".5" /><circle cx="39" cy="8" r="5" /></g>
      <circle cx="39" cy="44" r="4" fill="#f2d68b" /><path d="M25 110l14-34 14 34z" fill="#8a6420" />
    </svg>
  )
}

function Vase() {
  return (
    <svg className="lib-obj" width="60" height="120" viewBox="0 0 60 120" aria-hidden="true">
      <path d="M30 6c6 0 8 6 8 12s8 8 10 22c3 22-6 40-18 50h0c-12-10-21-28-18-50 2-14 10-16 10-22s2-12 8-12z" fill="#1b5f63" stroke="#d9b45a" strokeWidth="2" />
      <path d="M14 52h32M12 66h36" stroke="#d9b45a" strokeWidth="1.5" /><rect x="20" y="96" width="20" height="8" fill="#8a6420" /><rect x="14" y="104" width="32" height="10" rx="2" fill="#b8862f" />
    </svg>
  )
}

function spineStyle(b: LibraryBook) {
  return { '--c': b.spine.leather, '--w': `${b.spine.width}px`, '--h': `${b.spine.height}px`, ...(b.spine.titleSize ? { '--ts': `${b.spine.titleSize}px` } : {}) } as React.CSSProperties
}

function SpineFace({ b }: { b: LibraryBook }) {
  return (
    <>
      <span className="lib-tt" aria-hidden="true"><span className="lib-t">{b.title}</span>{isReady(b) && <span className="lib-a">{b.author}</span>}</span>
      <span className="lib-med" aria-hidden="true" />
    </>
  )
}

function ReadySpine({ b, handlers, cardOnRight }: { b: ReadyBook; handlers: BookHandlers; cardOnRight: boolean }) {
  const warm = () => handlers.onIntent(b)
  return (
    <a
      href={b.href}
      className={`lib-sp is-ready${b.spine.width < 45 ? ' is-narrow' : ''}`}
      style={spineStyle(b)}
      data-book={b.slug}
      aria-label={`${b.title}، ${b.authorFull}: گشودن کتاب`}
      onPointerEnter={warm}
      onFocus={warm}
      onClick={(e) => handlers.onOpen(b, e.currentTarget, e)}
    >
      <SpineFace b={b} />
      <span className="lib-glow" aria-hidden="true" />
      <span className={`lib-card${cardOnRight ? ' on-right' : ''}`} aria-hidden="true">
        <span className="k">{b.genre}</span>
        <span className="h">{b.title}</span>
        <span className="au">{b.authorFull}</span>
        <span className="cen">{b.era}</span>
        <span className="p">{b.blurb}</span>
        <span className="go"><span>گشودن کتاب ←</span><kbd>Enter</kbd></span>
      </span>
    </a>
  )
}

function SoonSpine({ b }: { b: LibraryBook }) {
  return (
    <span className="lib-sp is-soon" style={spineStyle(b)} role="img" aria-label={`${b.title}، ${b.author}: به‌زودی`}>
      <SpineFace b={b} />
      <span className="lib-soon-tip" aria-hidden="true">{b.title} · به‌زودی</span>
    </span>
  )
}

function BookSlot({ shelf, handlers }: { shelf: 1 | 2; handlers: BookHandlers }) {
  const books = shelfBooks(shelf)
  const out: React.ReactNode[] = []
  books.forEach((b, i) => {
    if (i > 0 && isReady(b) !== isReady(books[i - 1])) out.push(<li key={`gap-${b.slug}`} className="lib-gap lib-x-wide" aria-hidden="true" />)
    // the last ready book of a run shows its card on the open side
    const last = i === books.length - 1 || !isReady(books[i + 1])
    out.push(<li key={b.slug}>{isReady(b) ? <ReadySpine b={b} handlers={handlers} cardOnRight={!last} /> : <SoonSpine b={b} />}</li>)
  })
  return <>{out}</>
}

function Decor({ item, i }: { item: Exclude<DecorItem, { kind: 'books' }>; i: number }) {
  switch (item.kind) {
    case 'deco':
      return <li className={item.wide ? 'lib-x-wide' : undefined} aria-hidden="true"><span className="lib-sp is-deco" style={{ '--c': item.c, '--w': `${item.w}px`, '--h': `${item.h}px` } as React.CSSProperties} /></li>
    case 'stack':
      return <li className="lib-x-wide" aria-hidden="true"><span className="lib-stack">{item.items.map((s, j) => <i key={j} style={{ '--c': s.c, width: s.w } as React.CSSProperties} />)}</span></li>
    case 'obj':
      return <li className="lib-x-wide" aria-hidden="true">{item.name === 'astrolabe' ? <Astrolabe /> : <Vase />}</li>
    case 'gap':
      return <li key={i} className="lib-gap lib-x-wide" aria-hidden="true" />
  }
}

export function Bookcase({ handlers }: { handlers: BookHandlers }) {
  return (
    <div className="lib-case">
      <div className="lib-crown" aria-hidden="true">
        <div className="lib-tiles" />
        <div className="lib-arch">
          <svg viewBox="0 0 360 120">
            <defs><linearGradient id="lib-ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a2e16" /><stop offset="1" stopColor="#22140a" /></linearGradient></defs>
            <path d="M10 120 L10 70 Q10 40 60 30 Q150 16 180 0 Q210 16 300 30 Q350 40 350 70 L350 120Z" fill="url(#lib-ag)" stroke="#d9b45a" strokeWidth="2" />
            <path d="M40 120 L40 76 Q40 54 80 46 Q160 34 180 18 Q200 34 280 46 Q320 54 320 76 L320 120Z" fill="#0f2a5c" stroke="#b8862f" strokeWidth="1.5" />
            <g fill="#2ec4b6" opacity=".35"><circle cx="70" cy="70" r="3" /><circle cx="290" cy="70" r="3" /><circle cx="180" cy="38" r="3" /></g>
          </svg>
          <span>گنجینه</span>
        </div>
        <div className="lib-lights"><span className="lib-lamp" /><span className="lib-lamp" /><span className="lib-lamp" /></div>
      </div>
      <div className="lib-frame">
        <div className="lib-pil" aria-hidden="true" />
        <div className="lib-shelves">
          {([1, 2] as const).map((shelf) => (
            <section key={shelf} className="lib-shelf" aria-label={SHELF_NAMES[shelf]}>
              <ul className="lib-row">
                {SHELF_DECOR[shelf].map((item, i) => (item.kind === 'books' ? <BookSlot key="books" shelf={shelf} handlers={handlers} /> : <Decor key={i} item={item} i={i} />))}
              </ul>
              <div className="lib-board" aria-hidden="true" />
              <span className="lib-plaque" aria-hidden="true">{SHELF_NAMES[shelf]}</span>
            </section>
          ))}
        </div>
        <div className="lib-pil" aria-hidden="true" />
      </div>
    </div>
  )
}
