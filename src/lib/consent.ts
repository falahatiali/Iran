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
