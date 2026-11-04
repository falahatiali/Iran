/** Google Analytics 4. The measurement ID is public (it ships in every page), not a secret. */
export const GA_ID: string = import.meta.env?.VITE_GA_ID ?? 'G-8VDDV8ZLFD'

/** Production builds only; an empty VITE_GA_ID turns analytics off. */
export const gaEnabled = (prod: boolean = import.meta.env?.PROD ?? false, id: string = GA_ID) => prod && /^G-[A-Z0-9]+$/.test(id)

type Gtag = (...args: unknown[]) => void

/** Client-side navigations; the first page_view comes from the config call in /ga-init.js. */
export function trackPageView(href: string) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!gtag) return
  gtag('event', 'page_view', { page_path: href, page_location: window.location.href, page_title: document.title })
}
