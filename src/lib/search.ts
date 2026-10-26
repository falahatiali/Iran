/** Persian-aware normalization: Arabic ي/ك/ة/أإآ, ZWNJ, tatweel, diacritics, digits */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/\u0640/g, '')
    // eslint-disable-next-line no-misleading-character-class -- ZWNJ/ZWJ/bidi marks are stripped intentionally
    .replace(/[\u200C\u200D\u200E\u200F]/g, ' ')
    .replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').replace(/ة/g, 'ه').replace(/[أإآ]/g, 'ا').replace(/ؤ/g, 'و')
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .replace(/\s+/g, ' ')
    .trim()
}
export const matches = (haystack: string, q: string) => normalize(haystack).includes(normalize(q))
