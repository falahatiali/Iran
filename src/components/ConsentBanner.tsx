import { useEffect, useRef } from 'react'
import { CONSENT_OPEN_EVENT, applyConsent, askForConsent, saveConsent, type Choice } from '../lib/consent'
import type { Locale } from '../lib/i18n'

const text = {
  fa: { h: 'کوکی‌ها', body: 'ما از Google Analytics فقط برای این استفاده می‌کنیم که بدانیم کدام صفحه‌ها خوانده می‌شوند. هیچ تبلیغی در کار نیست. انتخاب با شماست.', yes: 'قبول', no: 'نه، ممنون', more: 'بیشتر بخوانید' },
  en: { h: 'Cookies', body: 'We use Google Analytics only to understand which pages are read. No ads. The choice is yours.', yes: 'Accept', no: 'No, thanks', more: 'Read more' },
}

/**
 * Server-rendered (only when GA is enabled) and shown purely by CSS while `<html data-consent-ask>` is set:
 * CONSENT_BOOT_SCRIPT sets it before first paint when no choice is stored, so the banner never waits for hydration.
 */
export function ConsentBanner({ locale }: { locale: Locale }) {
  const first = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const reopen = () => { askForConsent(true); requestAnimationFrame(() => first.current?.focus()) }
    window.addEventListener(CONSENT_OPEN_EVENT, reopen)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen)
  }, [])
  const t = text[locale]
  const choose = (c: Choice) => { try { saveConsent(localStorage, c) } catch { /* ignore */ } applyConsent(c); askForConsent(false) }
  const btn = 'min-h-11 flex-1 rounded-full border border-gold/60 px-5 py-2 font-bold text-ivory hover:bg-gold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold'
  return (
    <div role="dialog" aria-modal="false" aria-labelledby="consent-h" aria-describedby="consent-b" dir={locale === 'fa' ? 'rtl' : 'ltr'}
      onKeyDown={(e) => { if (e.key === 'Escape') askForConsent(false) }}
      className="consent-banner no-justify fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-gold/40 bg-[#0b1638]/95 p-5 shadow-2xl backdrop-blur md:bottom-6">
      <div aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <p id="consent-h" className="font-black text-gold-bright">{t.h}</p>
      <p id="consent-b" className="mt-2 text-sm leading-7 text-ivory/90">{t.body} <a href={locale === 'fa' ? '/about#privacy' : '/en/about#privacy'} className="text-turquoise-soft underline">{t.more}</a></p>
      <div className="mt-4 flex gap-3">
        <button ref={first} type="button" className={btn} onClick={() => choose('granted')}>{t.yes}</button>
        <button type="button" className={btn} onClick={() => choose('denied')}>{t.no}</button>
      </div>
    </div>
  )
}

export const openConsent = () => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))
