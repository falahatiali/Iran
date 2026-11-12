/* Stable anchors for "comment on this part" — like a line comment on a pull request, but for prose.
 *
 * An anchor names one block (paragraph, verse, heading, list item) without editing any page:
 *   - data-comment-anchor="…" on the element, when a page wants to name a block itself;
 *   - else the element's own id (verses, sections):           "i:<id>";
 *   - else the nearest ancestor id plus a hash of the text:   "<sectionId>~<hash>" (or "p~<hash>"),
 *     with ".2", ".3" for identical text repeated in one section.
 * Each comment also keeps the quoted text, so if the block is later rewritten the comment can be
 * found again by its quote, or shown as "on an earlier version of this page". */

export const BLOCK_SELECTOR = 'p, li, h2, h3, h4, blockquote, figcaption, dd, dt, td, [data-comment-anchor]'
const SKIP_INSIDE = 'nav, header, footer, form, dialog, button, select, textarea, [data-no-comments], .ih-c-ui, [aria-hidden="true"]'
const ANCHOR_OK = /^[A-Za-z0-9_:.~-]{1,120}$/
const MIN_TEXT = 12

/** Text as a reader sees it, folded so cosmetic edits (spaces, ZWNJ, kashida, diacritics, digit script) keep the anchor. */
export function foldText(s: string): string {
  return s
    .normalize('NFKC')
    .replace(/[\u064B-\u065F\u0670\u0640\u200B-\u200F\u00AD]/g, '')
    .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[\u064A\u0649]/g, '\u06CC').replace(/\u0643/g, '\u06A9')
    .replace(/[\s«»"'“”‘’.,،؛;:!?؟()[\]{}<>–—-]+/g, ' ')
    .trim()
    .toLowerCase()
}

/** FNV-1a, 32-bit, base36 — short and deterministic on server and client. */
export function textHash(s: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(36).padStart(7, '0')
}

export function sectionKey(id: string | null | undefined): string {
  return id && ANCHOR_OK.test(id) ? id.slice(0, 80) : 'p'
}

export function hashAnchor(sectionId: string | null | undefined, text: string, dup = 1): string {
  return `${sectionKey(sectionId)}~${textHash(foldText(text).slice(0, 400))}${dup > 1 ? `.${dup}` : ''}`
}

export const isAnchor = (s: string) => s === '' || ANCHOR_OK.test(s)

/* ---------------- DOM side (browser only) ---------------- */

export function isBlock(el: Element): boolean {
  if (!el.matches(BLOCK_SELECTOR) || el.closest(SKIP_INSIDE)) return false
  if (el.hasAttribute('data-comment-anchor')) return true
  // innermost block only: an <li> wrapping a <p> defers to the <p>
  if (el.querySelector(BLOCK_SELECTOR)) return false
  return (el.textContent ?? '').trim().length >= MIN_TEXT
}

export function blockFrom(node: Node | null, root: Element): HTMLElement | null {
  let el: Element | null = node && (node.nodeType === 1 ? (node as Element) : node.parentElement)
  while (el && root.contains(el)) {
    const b = el.closest(BLOCK_SELECTOR)
    if (!b || !root.contains(b)) return null
    if (isBlock(b)) return b as HTMLElement
    el = b.parentElement
  }
  return null
}

function sectionOf(el: Element, root: Element): Element | null {
  let p = el.parentElement
  while (p && p !== root) {
    if (p.id && ANCHOR_OK.test(p.id)) return p
    p = p.parentElement
  }
  return null
}

export function anchorOf(el: Element, root: Element): string {
  const explicit = el.getAttribute('data-comment-anchor')
  if (explicit && ANCHOR_OK.test(explicit)) return explicit
  if (el.id && ANCHOR_OK.test(`i:${el.id}`)) return `i:${el.id}`
  const sec = sectionOf(el, root)
  const text = el.textContent ?? ''
  const base = hashAnchor(sec?.id, text)
  // identical text earlier in the same section gets .2, .3 …
  let dup = 1
  for (const other of (sec ?? root).querySelectorAll(BLOCK_SELECTOR)) {
    if (other === el) break
    if (isBlock(other) && sectionOf(other, root) === sec && !other.id && hashAnchor(sec?.id, other.textContent ?? '') === base) dup++
  }
  return dup > 1 ? `${base}.${dup}` : base
}

/** Find the block an anchor names; fall back to the quoted text when the block has changed. */
export function findAnchor(anchor: string, root: Element, quote?: string | null, blockText?: string | null): HTMLElement | null {
  if (!anchor) return null
  const byAttr = root.querySelector(`[data-comment-anchor="${CSS.escape(anchor)}"]`)
  if (byAttr) return byAttr as HTMLElement
  if (anchor.startsWith('i:')) {
    const el = document.getElementById(anchor.slice(2))
    if (el && root.contains(el)) return el
  } else {
    const secId = anchor.slice(0, anchor.indexOf('~'))
    const scope = secId && secId !== 'p' ? document.getElementById(secId) : root
    if (scope && root.contains(scope)) {
      for (const el of scope.querySelectorAll(BLOCK_SELECTOR)) if (isBlock(el) && anchorOf(el, root) === anchor) return el as HTMLElement
    }
  }
  for (const probe of [quote, blockText?.slice(0, 120)]) {
    const want = probe ? foldText(probe) : ''
    if (want.length < 8) continue
    for (const el of root.querySelectorAll(BLOCK_SELECTOR)) if (isBlock(el) && foldText(el.textContent ?? '').includes(want)) return el as HTMLElement
  }
  return null
}
