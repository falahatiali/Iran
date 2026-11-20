/** Hafez's URLs, apart from the page prose so the library hall and sitemap can import them cheaply. */
export const HAFEZ_PATH = '/library/hafez'
export const GHAZALS_PATH = `${HAFEZ_PATH}/ghazals`
export const ABOUT_PATH = `${HAFEZ_PATH}/about`
export const GHAZAL_COUNT = 495
export const ghazalPath = (n: number) => `${HAFEZ_PATH}/ghazal/${n}`
export const HAFEZ_PAGES = [HAFEZ_PATH, GHAZALS_PATH, ABOUT_PATH] as const
export const ghazalPaths = () => Array.from({ length: GHAZAL_COUNT }, (_, i) => ghazalPath(i + 1))
