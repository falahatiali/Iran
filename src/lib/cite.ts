import type { BibliographyEntry } from '../data/research/types'
import type { Locale } from './i18n'

function chicagoDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (!y || !m || !d) return iso
  return `${months[m - 1]} ${d}, ${y}`
}

function persianDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}

/** Chicago notes-and-bibliography (website/encyclopedia/book), plus a Persian scholarly counterpart. */
export function formatChicago(b: BibliographyEntry): string {
  const author = b.author ?? 'n.a.'
  const year = b.year ?? 'n.d.'
  const quoted = b.kind === 'encyclopedia' || b.kind === 'article' || b.kind === 'webpage' || b.kind === 'video'
  const title = quoted ? `"${b.title}."` : `${b.title}.`
  const pub = b.publisher ? ` ${b.publisher}.` : ''
  const access = b.url ? ` Accessed ${chicagoDate(b.accessedOn)}.` : ''
  const url = b.url ? ` ${b.url}.` : ''
  return `${author}. ${year}. ${title}${pub}${access}${url}`.replace(/\s+/g, ' ').trim()
}

export function formatPersianCite(b: BibliographyEntry): string {
  const author = b.author ?? 'بی‌نام'
  const year = b.year ?? 'بی‌تا'
  const title = `«${b.title}»`
  const pub = b.publisher ? ` ${b.publisher}.` : ''
  const access = b.url ? ` بازبینی ${persianDate(b.accessedOn)}.` : ''
  const url = b.url ? ` ${b.url}.` : ''
  return `${author}. ${year}. ${title}.${pub}${access}${url}`.replace(/\s+/g, ' ').trim()
}

export function formatBoth(b: BibliographyEntry): string {
  return `${formatPersianCite(b)}\n\n${formatChicago(b)}`
}

export function pageCitation(opts: {
  locale: Locale
  titleFa: string
  titleEn: string
  path: string
  site?: string
  extra?: string
}): string {
  const site = opts.site ?? 'https://history.verzav.ir'
  const url = `${site}${opts.path}`
  const fa = `تاریخ ایران. ۲۰۲۶. «${opts.titleFa}». ${url}`
  const chicago = `Iran History. 2026. "${opts.titleEn}." ${url}.`
  const extra = opts.extra ? `\n\n${opts.extra}` : ''
  return opts.locale === 'fa' ? `${fa}\n\n${chicago}${extra}` : `${chicago}\n\n${fa}${extra}`
}
