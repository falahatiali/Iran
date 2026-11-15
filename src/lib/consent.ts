/** Analytics consent (Google Consent Mode v2). Only analytics_storage is ever granted; ad signals stay denied. */
export const CONSENT_KEY = 'iiraan-consent'
export const CONSENT_OPEN_EVENT = 'iiraan-consent-open'
export type Choice = 'granted' | 'denied'
export interface StoredConsent { choice: Choice; date: string }

type Store = Pick<Storage, 'getItem' | 'setItem'>

export function parseConsent(raw: string | null): StoredConsent | null {
  if (!raw) return null
  try {
    const v = JSON.parse(raw) as Partial<StoredConsent>
    return (v.choice === 'granted' || v.choice === 'denied') && typeof v.date === 'string' ? { choice: v.choice, date: v.date } : null
  } catch {
    return null
  }
}

export const readConsent = (s: Store) => parseConsent(s.getItem(CONSENT_KEY))

/** `<html data-consent-ask>` shows the server-rendered consent banner (see `.consent-banner` in app.css). */
export const CONSENT_ASK_ATTR = 'data-consent-ask'
export const askForConsent = (ask: boolean) => document.documentElement.toggleAttribute(CONSENT_ASK_ATTR, ask)

/**
 * Inline in <head>, before first paint: ask only when no valid choice is stored. The banner is then part of the
 * first paint instead of popping in after hydration (where it used to become the page's late LCP element).
 */
export const CONSENT_BOOT_SCRIPT = `(function(){var a=true;try{var v=JSON.parse(localStorage.getItem(${JSON.stringify(CONSENT_KEY)})||'null');a=!(v&&(v.choice==='granted'||v.choice==='denied')&&typeof v.date==='string')}catch(e){}if(a)document.documentElement.setAttribute(${JSON.stringify(CONSENT_ASK_ATTR)},'')})()`

export function saveConsent(s: Store, choice: Choice, now = new Date()): StoredConsent {
  const v = { choice, date: now.toISOString() }
  s.setItem(CONSENT_KEY, JSON.stringify(v))
  return v
}

/** Tell gtag about a choice; never touches ad_* signals. */
export function applyConsent(choice: Choice) {
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  gtag?.('consent', 'update', { analytics_storage: choice })
}
