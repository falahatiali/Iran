/** Engagement events for GA4, behind a small interface so the pages never talk to gtag directly.
 * Off (a no-op) when GA is not configured, when the browser sends Do Not Track / Global Privacy Control,
 * or when the reader declined analytics in the consent banner. See docs/analytics.md for the event list. */
import { readConsent } from './consent'

export type EventParams = Record<string, string | number | boolean | undefined>
export interface Analytics { track(name: string, params?: EventParams): void }

type Gtag = (...args: unknown[]) => void

export function trackingAllowed(nav: { doNotTrack?: string | null; globalPrivacyControl?: boolean } | undefined, consent: 'granted' | 'denied' | undefined): boolean {
  if (!nav) return false
  if (nav.doNotTrack === '1' || nav.doNotTrack === 'yes' || nav.globalPrivacyControl === true) return false
  return consent !== 'denied'
}

const gtagAnalytics: Analytics = {
  track(name, params) {
    if (typeof window === 'undefined') return
    const gtag = (window as unknown as { gtag?: Gtag }).gtag
    if (!gtag) return
    let consent: 'granted' | 'denied' | undefined
    try { consent = readConsent(localStorage)?.choice } catch { /* no storage */ }
    if (!trackingAllowed(navigator as Navigator & { globalPrivacyControl?: boolean }, consent)) return
    gtag('event', name, params ?? {})
  },
}

/** gtag is only present when GA is on, so this is a no-op everywhere else (dev, tests, SSR). */
export const analytics: Analytics = gtagAnalytics
export const track = (name: string, params?: EventParams) => analytics.track(name, params)

/** book / section / bayt from the nearest data-* attributes up the tree */
function scope(el: Element | null): EventParams {
  const p: EventParams = {}
  for (const key of ['book', 'section', 'bayt'] as const) {
    const v = el?.closest(`[data-${key}]`)?.getAttribute(`data-${key}`)
    if (v) p[key] = v
  }
  return p
}

let searchTimer: ReturnType<typeof setTimeout> | undefined
/** a search box: counted once the reader pauses typing, not per keystroke */
export function trackSearch(term: string, where: string) {
  clearTimeout(searchTimer)
  const t = term.trim()
  if (t.length < 2) return
  searchTimer = setTimeout(() => track('search', { search_term: t.slice(0, 100), where }), 1200)
}

/** Page-wide listeners, installed once from the root layout:
 * internal_nav / outbound_click (links), copy_text, scroll_depth 25–100, commentary_open (<details data-ev>),
 * and view events for [data-track-view] markers (story_complete at the end of a ghazal, story or section). */
export function installEngagement(): () => void {
  const sent = new Set<string>()
  const once = (key: string, name: string, params: EventParams) => {
    if (sent.has(key)) return
    sent.add(key)
    track(name, params)
  }

  const onClick = (e: MouseEvent) => {
    const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
    if (!a) return
    let url: URL
    try { url = new URL(a.href, location.href) } catch { return }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return
    if (url.origin !== location.origin) track('outbound_click', { link_domain: url.hostname, link_url: url.href.slice(0, 200), from: location.pathname })
    else if (url.pathname !== location.pathname) track('internal_nav', { from: location.pathname, to: url.pathname })
  }

  const onCopy = () => {
    const sel = document.getSelection()
    const text = sel?.toString().trim() ?? ''
    if (!text) return
    track('copy_text', { chars: text.length, ...scope(sel?.anchorNode?.parentElement ?? null), page: location.pathname })
  }

  const onToggle = (e: Event) => {
    const d = e.target as HTMLDetailsElement
    if (d.tagName !== 'DETAILS' || !d.open) return
    const ev = d.getAttribute('data-ev')
    if (ev) track(ev, { ...scope(d), page: location.pathname })
  }

  let page = location.pathname
  let ticking = false
  let settled = 0
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      // a new page: the router's (smooth) scroll back to the top is not reading, so wait a second before counting
      if (location.pathname !== page) { page = location.pathname; settled = performance.now() + 1000; return }
      if (performance.now() < settled) return
      const max = document.documentElement.scrollHeight - innerHeight
      if (max < 200) return
      const pct = (scrollY / max) * 100
      for (const t of [25, 50, 75, 100]) if (pct >= t - 1) once(`sd:${page}:${t}`, 'scroll_depth', { percent: t, page })
    })
  }

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue
          const el = en.target
          io?.unobserve(el)
          const name = el.getAttribute('data-track-view')!
          once(`v:${location.pathname}:${name}:${el.getAttribute('data-section') ?? ''}`, name, { ...scope(el), page: location.pathname })
        }
      })
    : undefined
  const seen = new WeakSet<Element>()
  const scan = () => document.querySelectorAll('[data-track-view]').forEach((el) => { if (!seen.has(el)) { seen.add(el); io?.observe(el) } })
  let scanTimer: ReturnType<typeof setTimeout> | undefined
  const mo = new MutationObserver(() => { clearTimeout(scanTimer); scanTimer = setTimeout(scan, 250) })
  mo.observe(document.body, { childList: true, subtree: true })
  scan()

  document.addEventListener('click', onClick, { capture: true })
  document.addEventListener('copy', onCopy)
  document.addEventListener('toggle', onToggle, { capture: true })
  addEventListener('scroll', onScroll, { passive: true })
  return () => {
    document.removeEventListener('click', onClick, { capture: true })
    document.removeEventListener('copy', onCopy)
    document.removeEventListener('toggle', onToggle, { capture: true })
    removeEventListener('scroll', onScroll)
    mo.disconnect()
    io?.disconnect()
  }
}
