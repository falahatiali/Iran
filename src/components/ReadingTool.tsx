import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  DEFAULT_PREFS, LEADING_STEPS, MEASURE_STEPS, SIZE_STEPS, WEIGHT_STEPS,
  applyPrefs, isDefault, loadPrefs, savePrefs, step, type ReadingPrefs,
} from '../lib/reading'

const T = {
  fa: {
    open: 'تنظیمات خواندن: اندازه و فاصلهٔ خطوط', title: 'تنظیمات خواندن', close: 'بستن',
    size: 'اندازهٔ قلم', leading: 'فاصلهٔ خطوط', measure: 'پهنای متن', weight: 'وزن قلم',
    smaller: 'کوچک‌تر', larger: 'بزرگ‌تر', tighter: 'فشرده‌تر', looser: 'بازتر',
    narrower: 'باریک‌تر', wider: 'پهن‌تر', lighter: 'نازک‌تر', bolder: 'پررنگ‌تر',
    reset: 'بازگشت به پیش‌فرض', of: 'از',
    sample: 'کوروش گفت: «من کوروش‌ام، شاه جهان». هر خواننده‌ای حق دارد متن را آن‌گونه بخواند که چشمش می‌پسندد.',
    glyph: 'آا',
  },
  en: {
    open: 'Reading settings: text size and line spacing', title: 'Reading settings', close: 'Close',
    size: 'Text size', leading: 'Line spacing', measure: 'Text width', weight: 'Font weight',
    smaller: 'Smaller', larger: 'Larger', tighter: 'Tighter', looser: 'Looser',
    narrower: 'Narrower', wider: 'Wider', lighter: 'Lighter', bolder: 'Bolder',
    reset: 'Reset to default', of: 'of',
    sample: '“I am Cyrus, king of the world.” Every reader should be free to read the page the way their eyes prefer.',
    glyph: 'Aa',
  },
} as const

type Key = keyof ReadingPrefs
const COUNTS: Record<Key, number> = { size: SIZE_STEPS.length, leading: LEADING_STEPS.length, measure: MEASURE_STEPS.length, weight: WEIGHT_STEPS.length }

export function ReadingTool({ locale }: { locale: 'fa' | 'en' }) {
  const t = T[locale]
  const isFa = locale === 'fa'
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState<ReadingPrefs>(DEFAULT_PREFS)
  const btn = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const num = (n: number) => (isFa ? n.toLocaleString('fa-IR') : String(n))

  useEffect(() => { setPrefs(loadPrefs(window.localStorage)) }, [])

  const update = useCallback((p: ReadingPrefs) => {
    setPrefs(p)
    applyPrefs(document.documentElement, p)
    savePrefs(window.localStorage, p)
  }, [])

  const close = useCallback(() => { setOpen(false); btn.current?.focus() }, [])

  useEffect(() => {
    if (!open) return
    panel.current?.querySelector<HTMLElement>('button:not([disabled])')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); return }
      if (e.key !== 'Tab' || !panel.current) return
      const f = [...panel.current.querySelectorAll<HTMLElement>('button:not([disabled])')]
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    const onDown = (e: PointerEvent) => {
      const n = e.target as Node
      if (!panel.current?.contains(n) && !btn.current?.contains(n)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown) }
  }, [open, close])

  const row = (key: Key, label: string, minus: string, plus: string, minusGlyph: string, plusGlyph: string) => {
    const v = prefs[key], max = COUNTS[key] - 1
    return (
      <div className="flex items-center justify-between gap-3 py-2" role="group" aria-label={label}>
        <span className="text-sm text-ivory/80 min-w-0">{label}</span>
        <div className="flex items-center gap-2">
          <StepButton label={minus} disabled={v <= 0} onClick={() => update(step(prefs, key, -1))}>{minusGlyph}</StepButton>
          <span className="flex gap-1" aria-live="polite" aria-label={`${label}: ${num(v + 1)} ${t.of} ${num(max + 1)}`} role="status">
            {Array.from({ length: max + 1 }, (_, i) => (
              <span key={i} aria-hidden className={`block size-1.5 rounded-full transition-colors ${i <= v ? 'bg-gold-bright' : 'bg-ivory/20'}`} />
            ))}
          </span>
          <StepButton label={plus} disabled={v >= max} onClick={() => update(step(prefs, key, 1))}>{plusGlyph}</StepButton>
        </div>
      </div>
    )
  }

  // RTL: bottom-left (inline-end). LTR: mirrored to bottom-right, lifted above the back-to-top button.
  const place = isFa ? 'bottom-4 sm:bottom-6 end-4 sm:end-6' : 'bottom-4 sm:bottom-[5.5rem] end-4 sm:end-6'

  return (
    <div className={`fixed z-40 ${place} print:hidden`} dir={isFa ? 'rtl' : 'ltr'} lang={locale}>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panel} id="reading-panel" role="dialog" aria-modal="true" aria-labelledby={titleId}
            initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ background: 'linear-gradient(160deg, rgb(15 31 75 / .97), rgb(7 13 31 / .98))' }}
            className={`glass absolute bottom-16 end-0 w-[min(21rem,calc(100vw-2rem))] rounded-2xl p-4 ${isFa ? 'origin-bottom-left' : 'origin-bottom-right'}`}
          >
            <div className="flex items-center justify-between">
              <h2 id={titleId} className="text-gilded font-black text-lg">{t.title}</h2>
              <button type="button" onClick={close} aria-label={t.close} className="grid place-items-center size-9 rounded-full text-ivory/70 hover:text-gold-bright hover:bg-ivory/5">✕</button>
            </div>
            <div aria-hidden className="my-2 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            {row('size', t.size, t.smaller, t.larger, isFa ? 'ا−' : 'A−', isFa ? 'آ+' : 'A+')}
            {row('leading', t.leading, t.tighter, t.looser, '≡', '☰')}
            {row('measure', t.measure, t.narrower, t.wider, '⇥⇤', '⇤⇥')}
            {row('weight', t.weight, t.lighter, t.bolder, isFa ? 'ب' : 'b', isFa ? 'ب' : 'B')}
            <p className="read mt-3 rounded-xl border border-gold/20 bg-lapis/40 px-3 py-2 text-ivory/90 !max-w-none">{t.sample}</p>
            <button
              type="button" onClick={() => update({ ...DEFAULT_PREFS })} disabled={isDefault(prefs)}
              className="mt-3 w-full min-h-11 rounded-full border border-gold/40 text-sm text-gold-bright hover:bg-gold/10 disabled:opacity-40 disabled:cursor-default"
            >{t.reset}</button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        ref={btn} type="button" aria-label={t.open} aria-expanded={open} aria-controls="reading-panel" aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
        className="relative grid place-items-center size-12 rounded-full bg-night/80 border border-gold/60 shadow-lg shadow-gold/20 backdrop-blur-md text-gilded"
      >
        <svg aria-hidden viewBox="0 0 48 48" className="absolute inset-0 size-full">
          <circle cx="24" cy="24" r="20.5" fill="none" stroke="#d9b45a" strokeOpacity=".45" strokeWidth=".8" strokeDasharray="1.6 2.4" />
          {[0, 90, 180, 270].map((a) => <path key={a} d="M24 1.6l1.4 2.4-1.4 2.4-1.4-2.4z" fill="#f2d68b" transform={`rotate(${a} 24 24)`} />)}
        </svg>
        <span aria-hidden className={`relative font-black leading-none ${isFa ? 'text-lg' : 'font-serif text-lg'}`} style={{ color: '#f2d68b' }}>{t.glyph}</span>
      </motion.button>
    </div>
  )
}

function StepButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      className="grid place-items-center min-w-11 h-11 rounded-full border border-gold/35 text-gold-bright text-sm font-bold hover:bg-gold/10 hover:border-gold disabled:opacity-30 disabled:cursor-default"
    >{children}</button>
  )
}
