/** Hafez's URLs, apart from the page prose so the library hall and sitemap can import them cheaply. */
export const HAFEZ_PATH = '/library/hafez'
export const GHAZALS_PATH = `${HAFEZ_PATH}/ghazals`
export const ABOUT_PATH = `${HAFEZ_PATH}/about`
export const ROBAIYAT_PATH = `${HAFEZ_PATH}/robaiyat`
export const QETAAT_PATH = `${HAFEZ_PATH}/qetaat`
export const MASNAVI_PATH = `${HAFEZ_PATH}/masnavi`
export const QASAID_PATH = `${HAFEZ_PATH}/qasaid`
export const MOQADDAME_PATH = `${HAFEZ_PATH}/moqaddame`
export const MONTASAB_PATH = `${HAFEZ_PATH}/montasab`
export const THEMES_PATH = `${HAFEZ_PATH}/themes`
export const MONTASAB_COUNT = 118
export const montasabPath = (n: number) => `${MONTASAB_PATH}/${n}`
export const montasabPaths = () => Array.from({ length: MONTASAB_COUNT }, (_, i) => montasabPath(i + 1))
/** the letters the Divan's ghazals end on, in the Divan's order (text/letters.json; a test keeps the two equal) */
export const LETTER_SLUGS = ['alef',  'be',  'te',  'se',  'jim',  'he-jimi',  'khe',  'dal',  're',  'ze',  'sin',  'shin',  'ein',  'ghein',  'fe',  'ghaf',  'kaf',  'lam',  'mim',  'nun',  'vav',  'he',  'ye'] as const
export const letterPath = (slug: string) => `${GHAZALS_PATH}/${slug}`
export const letterPaths = () => LETTER_SLUGS.map(letterPath)
export const GHAZAL_COUNT = 495
export const ghazalPath = (n: number) => `${HAFEZ_PATH}/ghazal/${n}`
export const HAFEZ_PAGES = [HAFEZ_PATH, GHAZALS_PATH, ABOUT_PATH, ROBAIYAT_PATH, QETAAT_PATH, MASNAVI_PATH, QASAID_PATH, MOQADDAME_PATH, MONTASAB_PATH, THEMES_PATH] as const
export const ghazalPaths = () => Array.from({ length: GHAZAL_COUNT }, (_, i) => ghazalPath(i + 1))
