/** Khayyam's URLs, apart from the page prose so the library hall and sitemap can import them cheaply. */
export const KHAYYAM_PATH = '/library/khayyam'
export const RUBAIYAT_PATH = `${KHAYYAM_PATH}/rubaiyat`
export const ABOUT_PATH = `${KHAYYAM_PATH}/about`
export const FOROUGHI_PATH = `${KHAYYAM_PATH}/foroughi`
export const KHAYYAM_PAGES = [KHAYYAM_PATH, RUBAIYAT_PATH, ABOUT_PATH, FOROUGHI_PATH] as const

/** anchor of a quatrain on the rubaiyat page */
export const rubaiAnchor = (n: number) => `r-${n}`
