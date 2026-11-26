/** Search titles for library pages that share a generic name («حکایت»): the opening words make each one unique. */

type Block = { p: string } | { l: readonly string[] }

/** The first misra of a verse block, or the first `words` words of a prose block with an ellipsis. */
export function opening(b: Block, words = 7): string {
  if ('l' in b) return b.l[0]
  const w = b.p.replace(/\s+/g, ' ').trim().split(' ')
  return w.length > words ? `${w.slice(0, words).join(' ')}…` : w.join(' ')
}

/** «باب دوم در احسان» → «باب دوم»; a chapter without «در» stays whole. */
export const chapterShort = (title: string) => title.split(' در ')[0]

/** e.g. «یکی در بیابان سگی تشنه یافت · حکایت، باب دوم بوستان سعدی» */
export function saadiSectionTitle(book: string, section: string, chapter: string, first: Block): string {
  const ch = chapterShort(chapter)
  return `${opening(first)} · ${section}${section === ch ? '' : `، ${ch}`} ${book}`
}
