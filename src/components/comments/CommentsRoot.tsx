/* Comments anywhere on the site, like line comments on a pull request:
 *  - hover a paragraph or verse (desktop) and press the gold bubble, or select any text (all devices);
 *  - approved comments show as small count markers beside their block, opening a thread panel;
 *  - a discussion section closes every page.
 * The page markup is never edited: blocks are found and anchored at runtime (see lib/commentAnchors). */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter, useRouterState } from '@tanstack/react-router'
import { listPageComments } from '../../server/commentsApi'
import type { PublicComment } from '../../lib/commentTypes'
import { anchorOf, blockFrom, findAnchor } from '../../lib/commentAnchors'
import { AuthForm } from './AuthForm'
import { AccountBar, Composer, ThreadList, type Target } from './Thread'
import { drafts, pendingAuth, useSession, usePendingAuth } from './session'
import { num, strings, type Locale } from './strings'
import './comments.css'

interface PanelState extends Target { el: HTMLElement | null; highlightId?: number | null; autopost?: boolean }

/** Where a marker or bubble sits beside a block: in the margin past the block's inline end when there is room,
 * otherwise as a tab on the viewport edge (phones), so it never covers the words. */
function sidePlace(el: HTMLElement, rtl: boolean, width: number) {
  const r = el.getBoundingClientRect()
  const vw = document.documentElement.clientWidth
  const fits = rtl ? r.left - 6 - width >= 2 : r.right + 6 + width <= vw - 2
  const y = r.top + window.scrollY + 2
  if (fits) return { x: (rtl ? r.left - 6 - width : r.right + 6) + window.scrollX, y, edge: false }
  return { x: (rtl ? 0 : vw - width) + window.scrollX, y, edge: true }
}

const excerpt = (s: string, n = 600) => s.replace(/\s+/g, ' ').trim().slice(0, n)

export default function CommentsRoot() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const locale: Locale = path.startsWith('/en') ? 'en' : 'fa'
  const t = strings(locale)
  const { me } = useSession()
  const [comments, setComments] = useState<PublicComment[]>([])
  const [panel, setPanel] = useState<PanelState | null>(null)
  const [flash, setFlash] = useState('')
  const [layoutTick, setLayoutTick] = useState(0)
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null)

  useEffect(() => { setMainEl(document.getElementById('main')) }, [])

  const load = useCallback(async () => {
    try {
      const r = await listPageComments({ data: { path } })
      if (r.ok) setComments(r.comments)
    } catch { /* offline: keep what we have */ }
  }, [path])

  useEffect(() => { setComments([]); setPanel(null); void load() }, [load])
  useEffect(() => { void load() }, [me, load])

  // re-measure when the page grows, fonts load, or the window resizes
  useEffect(() => {
    if (!mainEl) return
    let raf = 0
    const bump = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setLayoutTick((n) => n + 1)) }
    const ro = new ResizeObserver(bump)
    ro.observe(mainEl)
    window.addEventListener('resize', bump)
    return () => { ro.disconnect(); window.removeEventListener('resize', bump); cancelAnimationFrame(raf) }
  }, [mainEl])

  const { roots, replies } = useMemo(() => {
    const roots = comments.filter((c) => c.parentId == null)
    const replies = new Map<number, PublicComment[]>()
    for (const c of comments) if (c.parentId != null) replies.set(c.parentId, [...(replies.get(c.parentId) ?? []), c])
    return { roots, replies }
  }, [comments])

  // where each anchored thread lives on the page now; threads whose block is gone are "orphans"
  const placed = useMemo(() => {
    const byAnchor = new Map<string, { el: HTMLElement; roots: PublicComment[] }>()
    const orphans: PublicComment[] = []
    if (!mainEl) return { byAnchor, orphans }
    for (const c of roots) {
      if (!c.anchor) continue
      const hit = byAnchor.get(c.anchor)
      if (hit) { hit.roots.push(c); continue }
      const el = findAnchor(c.anchor, mainEl, c.quote, c.blockText)
      if (el) byAnchor.set(c.anchor, { el, roots: [c] }); else orphans.push(c)
    }
    return { byAnchor, orphans }
    // layoutTick: lazily rendered sections may appear later
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roots, mainEl, layoutTick])

  // subtle mark on blocks that carry comments
  useEffect(() => {
    const els = [...placed.byAnchor.values()].map((v) => v.el)
    els.forEach((el) => el.setAttribute('data-ih-commented', ''))
    return () => els.forEach((el) => el.removeAttribute('data-ih-commented'))
  }, [placed])

  useEffect(() => {
    const el = panel?.el
    if (!el) return
    el.setAttribute('data-ih-active', '')
    return () => el.removeAttribute('data-ih-active')
  }, [panel])

  const openFor = useCallback((el: HTMLElement, quote: string | null, extra?: Partial<PanelState>) => {
    if (!mainEl) return
    setFlash('')
    setPanel({ el, anchor: anchorOf(el, mainEl), quote, blockText: excerpt(el.textContent ?? ''), parentId: null, ...extra })
  }, [mainEl])

  // after sign-in, a reload, or a link from the admin panel: reopen the right thread
  const resumed = useRef('')
  useEffect(() => {
    if (!mainEl || resumed.current === path + layoutTick) return
    const d = drafts.get()
    const deep = /^#comment-(\d+)$/.exec(window.location.hash)
    if (deep && comments.length) {
      const id = Number(deep[1])
      const c = comments.find((x) => x.id === id)
      const root = c && (c.parentId ? comments.find((x) => x.id === c.parentId) : c)
      if (root) {
        resumed.current = path + layoutTick
        if (root.anchor) {
          const el = placed.byAnchor.get(root.anchor)?.el ?? null
          setPanel({ el, anchor: root.anchor, quote: root.quote, blockText: root.blockText, parentId: null, highlightId: id })
          el?.scrollIntoView({ block: 'center' })
        } else document.getElementById('ih-discussion')?.scrollIntoView({ block: 'start' })
        return
      }
    }
    if (d && d.path === path && d.resume && d.parentId == null && d.anchor && (me || pendingAuth.get())) {
      resumed.current = path + layoutTick
      const el = findAnchor(d.anchor, mainEl, d.quote, d.blockText)
      setPanel({ el, anchor: d.anchor, quote: d.quote, blockText: d.blockText, parentId: null, autopost: !!me })
      el?.scrollIntoView({ block: 'center' })
    } else if (d && d.path === path && d.resume && !d.anchor) {
      resumed.current = path + layoutTick
      document.getElementById('ih-discussion')?.scrollIntoView({ block: 'start' })
    }
  }, [mainEl, path, comments, placed, me, layoutTick])

  if (!mainEl || path.startsWith('/admin')) return null

  const pageRoots = roots.filter((c) => !c.anchor)
  const inlineCount = roots.length - pageRoots.length

  return (
    <>
      <Affordances main={mainEl} locale={locale} onOpen={openFor} />
      {createPortal(
        <div className="ih-c-ui ih-c-markers" aria-hidden={false}>
          {[...placed.byAnchor.entries()].map(([anchor, v]) => (
            <Marker key={anchor} el={v.el} tick={layoutTick} locale={locale}
              count={v.roots.reduce((n, r) => n + 1 + (replies.get(r.id)?.length ?? 0), 0)}
              pending={v.roots.some((r) => r.status === 'pending')}
              onClick={() => setPanel({ el: v.el, anchor, quote: null, blockText: excerpt(v.el.textContent ?? ''), parentId: null })} />
          ))}
        </div>, document.body)}
      {panel && createPortal(
        <Panel
          locale={locale} path={path} panel={panel} onClose={() => setPanel(null)}
          roots={roots.filter((c) => c.anchor === panel.anchor)} replies={replies}
          onPosted={(status) => { setFlash(status === 'approved' ? t.postedAdmin : t.posted); void load() }} flash={flash}
        />, document.body)}
      <PageDiscussion
        locale={locale} path={path} roots={pageRoots} replies={replies} inlineCount={inlineCount} orphans={placed.orphans}
        onPosted={() => void load()}
        onJump={(c) => { const el = placed.byAnchor.get(c.anchor)?.el; if (el) { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); setPanel({ el, anchor: c.anchor, quote: null, blockText: excerpt(el.textContent ?? ''), parentId: null }) } }}
        placedRoots={roots.filter((c) => c.anchor && placed.byAnchor.has(c.anchor))}
      />
      <PendingAuthBanner locale={locale} hidden={!!panel} />
    </>
  )
}

/* ---------------- hover bubble + selection bubble ---------------- */

function Affordances({ main, locale, onOpen }: { main: HTMLElement; locale: Locale; onOpen: (el: HTMLElement, quote: string | null) => void }) {
  const t = strings(locale)
  const rtl = locale === 'fa'
  const [hover, setHover] = useState<{ el: HTMLElement; x: number; y: number } | null>(null)
  const [sel, setSel] = useState<{ el: HTMLElement; quote: string; x: number; y: number } | null>(null)
  const hideTimer = useRef(0)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const place = (el: HTMLElement) => { const p = sidePlace(el, rtl, 36); return { x: p.x, y: p.y } }
    const over = (e: PointerEvent) => {
      if (!canHover || e.pointerType !== 'mouse') return
      const b = blockFrom(e.target as Node, main)
      if (!b) return
      window.clearTimeout(hideTimer.current)
      setHover((h) => (h?.el === b ? h : { el: b, ...place(b) }))
    }
    const out = (e: PointerEvent) => {
      const to = e.relatedTarget as Element | null
      if (to?.closest?.('.ih-c-bubble')) return
      window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => setHover(null), 350)
    }
    let selTimer = 0
    const readSelection = () => {
      window.clearTimeout(selTimer)
      selTimer = window.setTimeout(() => {
        const s = window.getSelection()
        if (!s || s.isCollapsed || !s.rangeCount) { setSel(null); return }
        const quote = s.toString().replace(/\s+/g, ' ').trim()
        const b = blockFrom(s.anchorNode, main)
        if (!b || quote.length < 2 || !main.contains(s.focusNode)) { setSel(null); return }
        const r = s.getRangeAt(0).getBoundingClientRect()
        const touch = !canHover
        // on touch, sit below the selection so the system copy menu (above it) stays usable
        const y = (touch ? r.bottom + 14 : r.top - 46) + window.scrollY
        const x = Math.min(Math.max(8, r.left + r.width / 2 - 70), window.innerWidth - 150) + window.scrollX
        setSel({ el: b, quote: quote.slice(0, 500), x, y })
      }, 180)
    }
    main.addEventListener('pointerover', over)
    main.addEventListener('pointerout', out)
    document.addEventListener('selectionchange', readSelection)
    return () => {
      main.removeEventListener('pointerover', over)
      main.removeEventListener('pointerout', out)
      document.removeEventListener('selectionchange', readSelection)
      window.clearTimeout(selTimer)
    }
  }, [main, rtl])

  return createPortal(
    <div className="ih-c-ui">
      {hover && !sel && (
        <button
          type="button" className="ih-c-bubble ih-c-bubble-hover" style={{ left: hover.x, top: hover.y }}
          aria-label={t.commentHere} title={t.commentHere}
          onPointerLeave={() => { hideTimer.current = window.setTimeout(() => setHover(null), 250) }}
          onPointerEnter={() => window.clearTimeout(hideTimer.current)}
          onClick={() => { onOpen(hover.el, null); setHover(null) }}
        ><BubbleIcon /><span aria-hidden="true">+</span></button>
      )}
      {sel && (
        <button
          type="button" className="ih-c-bubble ih-c-bubble-sel" style={{ left: sel.x, top: sel.y }}
          onPointerDown={(e) => e.preventDefault()}
          onClick={() => { onOpen(sel.el, sel.quote); setSel(null); window.getSelection()?.removeAllRanges() }}
        ><BubbleIcon /> {t.commentHere}</button>
      )}
    </div>, document.body)
}

function BubbleIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z" /></svg>
}

function Marker({ el, count, pending, onClick, locale, tick }: { el: HTMLElement; count: number; pending: boolean; onClick: () => void; locale: Locale; tick: number }) {
  const [pos, setPos] = useState<{ x: number; y: number; edge: boolean } | null>(null)
  useLayoutEffect(() => {
    const r = el.getBoundingClientRect()
    if (!r.width && !r.height) { setPos(null); return }
    setPos(sidePlace(el, locale === 'fa', count > 9 ? 58 : 50))
  }, [el, tick, locale, count])
  if (!pos) return null
  const t = strings(locale)
  return (
    <button type="button" className={`ih-c-marker ${pending ? 'ih-c-marker-pending' : ''} ${pos.edge ? `ih-c-marker-edge ih-c-marker-edge-${locale === 'fa' ? 'l' : 'r'}` : ''}`} style={{ left: pos.x, top: pos.y, minWidth: pos.edge ? undefined : count > 9 ? 58 : 50 }} onClick={onClick}
      aria-label={`${num(count, locale)} ${t.comment} — ${t.onThisPart}`}>
      <BubbleIcon /><span>{num(count, locale)}</span>
    </button>
  )
}

/* ---------------- the thread panel ---------------- */

function Panel({ locale, path, panel, roots, replies, onClose, onPosted, flash }: {
  locale: Locale; path: string; panel: PanelState; roots: PublicComment[]; replies: Map<number, PublicComment[]>
  onClose: () => void; onPosted: (status: string) => void; flash: string
}) {
  const t = strings(locale)
  const ref = useRef<HTMLDivElement>(null)
  const opener = useRef<Element | null>(null)
  useEffect(() => {
    opener.current = document.activeElement
    ref.current?.focus({ preventScroll: true })
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); (opener.current as HTMLElement | null)?.focus?.({ preventScroll: true }) }
  }, [onClose])
  useEffect(() => {
    if (!panel.highlightId) return
    requestAnimationFrame(() => document.getElementById(`comment-${panel.highlightId}`)?.scrollIntoView({ block: 'nearest' }))
  }, [panel.highlightId])
  const target: Target = { anchor: panel.anchor, quote: panel.quote, blockText: panel.blockText, parentId: null }
  const shown = panel.quote ?? panel.blockText ?? ''
  return (
    <div ref={ref} className="ih-c-ui ih-c-panel" role="dialog" aria-modal="false" aria-labelledby="ih-c-panel-title" tabIndex={-1} dir={locale === 'fa' ? 'rtl' : 'ltr'} lang={locale}>
      <div className="ih-c-panel-head">
        <h2 id="ih-c-panel-title" className="ih-c-panel-title"><BubbleIcon /> {t.onThisPart}</h2>
        <button type="button" className="ih-c-close" onClick={onClose} aria-label={t.close}>×</button>
      </div>
      <div className="ih-c-panel-body">
        {shown && <blockquote className="ih-c-quote"><span className="ih-c-quote-label">{panel.quote ? t.quoted : ''}</span><bdi>{shown.length > 280 ? `${shown.slice(0, 280)}…` : shown}</bdi></blockquote>}
        {roots.length > 0 && <ThreadList roots={roots} replies={replies} locale={locale} path={path} highlightId={panel.highlightId} onPosted={() => onPosted('pending')} />}
        {flash && <p className="ih-c-ok" role="status">{flash}</p>}
        <Composer key={panel.anchor} locale={locale} path={path} target={target} autoFocus={!roots.length} autopost={panel.autopost} onPosted={onPosted} />
        <AccountBar locale={locale} />
      </div>
    </div>
  )
}

/* ---------------- the discussion at the foot of every page ---------------- */

function PageDiscussion({ locale, path, roots, replies, inlineCount, orphans, placedRoots, onPosted, onJump }: {
  locale: Locale; path: string; roots: PublicComment[]; replies: Map<number, PublicComment[]>; inlineCount: number
  orphans: PublicComment[]; placedRoots: PublicComment[]; onPosted: () => void; onJump: (c: PublicComment) => void
}) {
  const t = strings(locale)
  const [flash, setFlash] = useState('')
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(0)
  useEffect(() => { const d = drafts.get(); if (d && d.path === path && !d.anchor && d.resume) setOpen(true) }, [path])
  return (
    <section id="ih-discussion" className="ih-c-ui ih-c-discussion" aria-labelledby="ih-discussion-h" dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <div className="ih-c-discussion-inner">
        <h2 id="ih-discussion-h" className="ih-c-discussion-title"><BubbleIcon /> {t.pageDiscussion}
          {roots.length > 0 && <span className="ih-c-count">{num(roots.length + roots.reduce((n, r) => n + (replies.get(r.id)?.length ?? 0), 0), locale)}</span>}
        </h2>
        <p className="ih-c-muted ih-c-lede">{t.pageDiscussionLede}</p>
        {inlineCount > 0 && placedRoots.length > 0 && (
          <details className="ih-c-inline-list">
            <summary>{t.inlineCount(num(inlineCount, locale))}</summary>
            <ul>{placedRoots.map((c) => (
              <li key={c.id}><button type="button" className="ih-c-link" onClick={() => onJump(c)}>
                <bdi className="ih-c-inline-q">«{(c.quote ?? c.blockText ?? '').slice(0, 90)}»</bdi> — <bdi>{c.body.slice(0, 120)}</bdi>
              </button></li>))}</ul>
          </details>
        )}
        {roots.length > 0 ? <ThreadList roots={roots} replies={replies} locale={locale} path={path} onPosted={onPosted} /> : <p className="ih-c-muted">{t.noComments}</p>}
        {orphans.length > 0 && (
          <div className="ih-c-orphans">
            <h3 className="ih-c-small ih-c-muted">{t.changedPart}</h3>
            <ThreadList roots={orphans} replies={replies} locale={locale} path={path} onPosted={onPosted} />
          </div>
        )}
        {flash && <p className="ih-c-ok" role="status">{flash}</p>}
        {open ? (
          <Composer key={key} locale={locale} path={path} target={{ anchor: '', quote: null, blockText: null, parentId: null }} autoFocus
            onPosted={(s) => { setFlash(s === 'approved' ? t.postedAdmin : t.posted); setKey((k) => k + 1); onPosted() }} onCancel={() => setOpen(false)} />
        ) : (
          <button type="button" className="ih-c-btn ih-c-btn-primary ih-c-open" onClick={() => { setOpen(true); setFlash('') }}><BubbleIcon /> {t.addComment}</button>
        )}
        <AccountBar locale={locale} />
      </div>
    </section>
  )
}

/* ---------------- a code was sent and the reader wandered off: keep the code form one tap away ---------------- */

function PendingAuthBanner({ locale, hidden }: { locale: Locale; hidden: boolean }) {
  const t = strings(locale)
  const pending = usePendingAuth()
  const { me } = useSession()
  const router = useRouter()
  const dlg = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => { if (open) dlg.current?.showModal(); else dlg.current?.close() }, [open])
  if (me || !pending) return null
  return (
    <>
      {!hidden && !open && (
        <div className="ih-c-ui ih-c-banner" role="status">
          <span><BubbleIcon /> {t.pendingBanner(pending.email)}</span>
          <button type="button" className="ih-c-btn ih-c-btn-primary" onClick={() => setOpen(true)}>{t.enterCode}</button>
        </div>
      )}
      <dialog ref={dlg} className="ih-c-ui ih-c-dialog" onClose={() => setOpen(false)} dir={locale === 'fa' ? 'rtl' : 'ltr'} aria-label={t.codeTitle}>
        {open && <>
          <button type="button" className="ih-c-close ih-c-dialog-close" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
          <AuthForm locale={locale} onSignedIn={() => {
            setOpen(false)
            const d = drafts.get()
            if (d?.resume && d.path !== window.location.pathname) void router.navigate({ to: d.path })
          }} />
        </>}
      </dialog>
    </>
  )
}
