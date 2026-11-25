/** Khayyam's URLs, apart from the page prose so the library hall and sitemap can import them cheaply. */
export const KHAYYAM_PATH = '/library/khayyam'
export const RUBAIYAT_PATH = `${KHAYYAM_PATH}/rubaiyat`
export const ABOUT_PATH = `${KHAYYAM_PATH}/about`
export const FOROUGHI_PATH = `${KHAYYAM_PATH}/foroughi`
export const NOWRUZ_PATH = `${KHAYYAM_PATH}/nowruzname`
export const ARABIC_PATH = `${KHAYYAM_PATH}/arabic`
export const NOWRUZ_COUNT = 42
export const nowruzPath = (n: number) => `${NOWRUZ_PATH}/${n}`
export const nowruzPaths = () => Array.from({ length: NOWRUZ_COUNT }, (_, i) => nowruzPath(i + 1))
export const KHAYYAM_PAGES = [KHAYYAM_PATH, RUBAIYAT_PATH, ABOUT_PATH, FOROUGHI_PATH, NOWRUZ_PATH, ARABIC_PATH] as const

/** anchor of a quatrain on the rubaiyat page */
export const rubaiAnchor = (n: number) => `r-${n}`
