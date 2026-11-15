/** The book-opening sequence, loaded on demand: the spine slides off the shelf, turns to face the reader,
 * the cover swings open and the first page grows until its headpiece becomes the destination's hero.
 * The hand-off is a View Transition where supported, otherwise a cross-fade.
 * Only transform and opacity animate (Web Animations, compositor-friendly); the DOM is measured once
 * before anything is written, and once more at the hand-off. Click anywhere or press Esc to skip. */
import type { ReadyBook } from '../../data/library'
import './openBook.css'

const W = 340
const H = 480
/** where the first page's headpiece sits inside the closed book (px from the book's centre, its width) */
const HEADPIECE = { cy: -155.5, width: 291 }
const EASE = 'cubic-bezier(.65,0,.35,1)'

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

function picture(sources: { type?: string; srcSet: string }[], src: string, sizes: string): HTMLPictureElement {
  const pic = document.createElement('picture')
  for (const s of sources) {
    const el = document.createElement('source')
    if (s.type) el.type = s.type
    el.srcset = s.srcSet
    el.sizes = sizes
    pic.append(el)
  }
  const img = document.createElement('img')
  pic.append(img)
  img.alt = ''
  img.decoding = 'async'
  img.sizes = sizes
  img.src = src
  return pic
}

/** Built once per book and reused, so a hover has already fetched what the animation shows. */
const cache = new Map<string, { cover: HTMLPictureElement; headpiece: HTMLPictureElement }>()

export function prefetchBook(book: ReadyBook) {
  let hit = cache.get(book.slug)
  if (!hit) {
    const cover = picture([{ type: 'image/avif', srcSet: `${book.cover}.avif` }], `${book.cover}.webp`, '400px')
    const hp = book.headpiece
    const headpiece = picture(
      [...(hp.avifSrcSet ? [{ type: 'image/avif', srcSet: hp.avifSrcSet }] : []), ...(hp.srcSet ? [{ srcSet: hp.srcSet }] : [])],
      hp.src,
      '100vw',
    )
    hit = { cover, headpiece }
    cache.set(book.slug, hit)
  }
  return hit
}

const T = (x: number, y: number, z: number, rx: number, ry: number, s: number) =>
  `translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`

function waitFor(selector: string, timeout = 2500): Promise<void> {
  return new Promise((resolve) => {
    const t0 = performance.now()
    const tick = () => (document.querySelector(selector) || performance.now() - t0 > timeout ? resolve() : setTimeout(tick, 16))
    tick()
  })
}

export async function openBook({ book, spine, navigate }: { book: ReadyBook; spine: HTMLElement; navigate: () => Promise<void> }) {
  const { cover, headpiece } = prefetchBook(book)

  // --- read: everything the timeline needs, in one pass
  const header = document.querySelector('header')
  const top = Math.max(0, header ? header.getBoundingClientRect().bottom : 0)
  const vw = window.innerWidth
  const stageH = window.innerHeight - top
  const r = spine.getBoundingClientRect()
  const cx = vw / 2
  const cy = top + stageH * 0.48
  const g = { x: r.left + r.width / 2 - cx, y: r.top + r.height / 2 - cy, s: r.height / H }
  const k = Math.min(1.16, (stageH * 0.78) / H, (vw * 0.95) / (1.5 * W))
  const ko = k * 0.95
  const zoom = vw / HEADPIECE.width
  const heroH = vw <= 600 ? 300 : 450
  const zy = heroH / 2 - stageH * 0.48 - HEADPIECE.cy * zoom

  // --- write: build the stage
  const stage = document.createElement('div')
  stage.className = 'ob-stage'
  stage.style.top = `${top}px`
  stage.setAttribute('role', 'dialog')
  stage.setAttribute('aria-label', `گشودن «${book.title}»`)
  stage.tabIndex = -1
  stage.style.setProperty('--leather', book.spine.leather)
  stage.innerHTML = `
    <div class="ob-veil"></div><div class="ob-halo"></div><div class="ob-sparks"></div>
    <div class="ob-book">
      <div class="ob-back"></div><div class="ob-pages-l"></div><div class="ob-pages-t"></div>
      <div class="ob-spine"><span>${esc(book.title)}</span></div>
      <div class="ob-first"><div class="ob-pg"><div class="ob-unwan"></div>
        <div class="ob-text"><h3>${esc(book.title)}</h3><div class="ob-by">${esc(book.authorFull)}</div>
        <div class="ob-bayt"><span>${esc(book.incipit[0])}</span><span>${esc(book.incipit[1])}</span></div>
        <div class="ob-sv"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div></div>
      <div class="ob-cover"><div class="ob-out"><div class="ob-cart"><h2>${esc(book.title)}</h2><div>${esc(book.author)}</div></div></div><div class="ob-in"></div></div>
    </div>
    <button type="button" class="ob-skip">رد شدن <kbd>Esc</kbd></button>`
  const q = <E extends Element>(s: string) => stage.querySelector(s) as E
  q('.ob-out').prepend(cover)
  q('.ob-unwan').append(headpiece)
  const bookEl = q<HTMLElement>('.ob-book')
  const coverEl = q<HTMLElement>('.ob-cover')
  bookEl.style.transform = T(g.x, g.y, 0, 0, -90, g.s)
  document.body.append(stage)
  spine.style.visibility = 'hidden'
  stage.focus({ preventScroll: true })

  // --- the timeline (offsets of one 2.8 s run)
  const D = 2800
  const opts: KeyframeAnimationOptions = { duration: D, fill: 'forwards' }
  const anims = [
    bookEl.animate([
      { offset: 0, transform: T(g.x, g.y, 0, 0, -90, g.s), easing: EASE },
      { offset: 0.125, transform: T(g.x, g.y - 30, 110, 6, -74, g.s * 1.04), easing: EASE },
      { offset: 0.36, transform: T(g.x * 0.35, -6, 140, 8, -42, k * 0.67), easing: EASE },
      { offset: 0.52, transform: T(0, 0, 0, 3, -10, k), easing: EASE },
      { offset: 0.59, transform: T(0, 0, 0, 3, -10, k), easing: EASE },
      { offset: 0.8, transform: T((-W / 2) * ko * 0.55, 10, 0, 10, 0, ko), easing: 'cubic-bezier(.5,0,.2,1)' },
      { offset: 1, transform: T(0, zy, 0, 0, 0, zoom) },
    ], opts),
    coverEl.animate([
      { offset: 0, transform: 'translateZ(43px) rotateY(0deg)' },
      { offset: 0.59, transform: 'translateZ(43px) rotateY(0deg)', easing: 'cubic-bezier(.6,0,.3,1)' },
      { offset: 0.8, transform: 'translateZ(43px) rotateY(120deg)', easing: EASE },
      { offset: 1, transform: 'translateZ(43px) rotateY(178deg)' },
    ], opts),
    q<HTMLElement>('.ob-veil').animate([{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1 }], opts),
    q<HTMLElement>('.ob-halo').animate([
      { opacity: 0, transform: 'translate(-50%,-50%) scale(.6)' },
      { opacity: 0, transform: 'translate(-50%,-50%) scale(.6)', offset: 0.36 },
      { opacity: 1, transform: 'translate(-50%,-50%) scale(1) rotate(12deg)', offset: 0.52 },
      { opacity: 1, transform: 'translate(-50%,-50%) scale(1) rotate(18deg)', offset: 0.7 },
      { opacity: 0, transform: 'translate(-50%,-50%) scale(1.1) rotate(24deg)', offset: 0.85 },
      { opacity: 0, transform: 'translate(-50%,-50%) scale(1.1) rotate(24deg)' },
    ], opts),
    q<HTMLElement>('.ob-sparks').animate([{ opacity: 0 }, { opacity: 0, offset: 0.4 }, { opacity: 1, offset: 0.52 }, { opacity: 1, offset: 0.72 }, { opacity: 0, offset: 0.85 }, { opacity: 0 }], opts),
    q<HTMLElement>('.ob-text').animate([{ opacity: 1 }, { opacity: 1, offset: 0.82 }, { opacity: 0, offset: 0.95 }, { opacity: 0 }], opts),
  ]

  const skip = () => anims.forEach((a) => a.finish())
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); skip() } }
  const onWheel = (e: Event) => e.preventDefault()
  stage.addEventListener('click', skip)
  stage.addEventListener('wheel', onWheel, { passive: false })
  stage.addEventListener('touchmove', onWheel, { passive: false })
  window.addEventListener('keydown', onKey)

  let hand: HTMLElement | undefined
  const cleanup = () => {
    window.removeEventListener('keydown', onKey)
    stage.remove()
    hand?.remove()
    if (spine.isConnected) spine.style.visibility = ''
  }

  try {
    await Promise.all(anims.map((a) => a.finished))
    // --- hand-off: lift the headpiece out of the 3D scene into a flat, named element
    const box = q<HTMLElement>('.ob-unwan').getBoundingClientRect()
    hand = document.createElement('div')
    hand.className = 'ob-handoff'
    hand.style.cssText = `left:${box.left}px;top:${box.top}px;width:${box.width}px;height:${box.height}px`
    hand.append(headpiece)
    document.body.append(hand)
    stage.classList.add('is-handoff')
    const arrived = async () => {
      await navigate()
      await waitFor(`[data-book-arrival="${book.arrivalMarker}"]`)
      // the arriving page's own fade-in (`.page-in`) would be caught half-transparent in the transition's snapshot
      document.querySelectorAll('.page-in').forEach((el) => el.getAnimations().forEach((a) => a.finish()))
    }

    if (typeof document.startViewTransition === 'function') {
      const vt = document.startViewTransition(async () => { await arrived(); cleanup() })
      await vt.finished.catch(() => {})
    } else {
      await arrived()
      const fade = [{ opacity: 1 }, { opacity: 0 }]
      await Promise.all([stage, hand].map((el) => el.animate(fade, { duration: 420, easing: 'ease-out', fill: 'forwards' }).finished))
    }
  } finally {
    cleanup()
  }
}
