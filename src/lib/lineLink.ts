/** Pure helpers for deep links to Cyrus Cylinder reader lines (no window access). */
export function lineLinkUrl(siteUrl: string, path: string, anchor: string): string {
  const origin = siteUrl.replace(/\/+$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${origin}${p}#${anchor}`
}

/** Returns the anchor id when a hash points at a reader line (e.g. "#line-07"), else null. */
export function parseLineHash(hash: string): string | null {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  return /^line-\d{2,3}$/.test(id) ? id : null
}
