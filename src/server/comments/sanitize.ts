/* Input cleaning for everything a reader can send. Output is always rendered as plain text
 * (React escapes it), so cleaning here is about shape and abuse, not HTML. */

// C0/C1 controls except \n and \t, bidi overrides/isolates (text-spoofing), zero-width joiners kept (Persian needs ZWNJ U+200C).
// eslint-disable-next-line no-control-regex
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u202A-\u202E\u2066-\u2069\uFEFF]/g

export function cleanText(input: unknown, max: number): string {
  if (typeof input !== 'string') return ''
  return input
    .normalize('NFC')
    .replace(/\r\n?/g, '\n')
    .replace(CONTROL, '')
    .replace(/\t/g, ' ')
    .replace(/[ \u00A0]{3,}/g, '  ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max)
}

export function cleanLine(input: unknown, max: number): string {
  return cleanText(input, max * 2).replace(/\s+/g, ' ').trim().slice(0, max)
}

const EMAIL = /^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/

export function normalizeEmail(input: unknown): string | null {
  if (typeof input !== 'string') return null
  const e = input.normalize('NFKC').trim().toLowerCase()
  if (e.length > 254 || !EMAIL.test(e)) return null
  const tld = e.slice(e.lastIndexOf('.') + 1)
  return /^[a-z]{2,}$|^xn--/.test(tld) ? e : null
}

/** Persian and Arabic-Indic digits to ASCII; everything else dropped. */
export function normalizeCode(input: unknown): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/\D/g, '')
}

/** Site paths only: '/', '/king/darius-i', '/en/cylinder'. No query, no hash, no host. */
export function cleanPath(input: unknown): string | null {
  if (typeof input !== 'string') return null
  const p = input.length > 1 ? input.replace(/\/+$/, '') : input
  return /^\/(?:[a-z0-9][a-z0-9._-]*(?:\/[a-z0-9][a-z0-9._-]*)*)?$/.test(p) && p.length <= 200 ? p : null
}

/** Anchor ids made by the client: '' for the page, otherwise e.g. 'intro~k3x9a' or 'v-12'. */
export function cleanAnchor(input: unknown): string | null {
  if (input == null || input === '') return ''
  if (typeof input !== 'string') return null
  return /^[A-Za-z0-9_:.~-]{1,120}$/.test(input) ? input : null
}
