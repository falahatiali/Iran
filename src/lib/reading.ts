/** Reader-adjustable typography for long-form text (the `.read` class in app.css). */

export const SIZE_STEPS = [0.9, 1, 1.1, 1.22, 1.36] as const
export const LEADING_STEPS = [
  { fa: 1.8, lat: 1.55 },
  { fa: 2.0, lat: 1.7 },
  { fa: 2.25, lat: 1.85 },
  { fa: 2.5, lat: 2.0 },
] as const
export const MEASURE_STEPS = ['60ch', '70ch', '84ch'] as const
export const WEIGHT_STEPS = [300, 400, 500] as const

export interface ReadingPrefs { size: number; leading: number; measure: number; weight: number }

export const DEFAULT_PREFS: ReadingPrefs = { size: 1, leading: 1, measure: 1, weight: 1 }
export const STORAGE_KEY = 'iiraan.reading.v1'

const LIMITS: Record<keyof ReadingPrefs, number> = {
  size: SIZE_STEPS.length - 1,
  leading: LEADING_STEPS.length - 1,
  measure: MEASURE_STEPS.length - 1,
  weight: WEIGHT_STEPS.length - 1,
}

export function clampStep(key: keyof ReadingPrefs, value: unknown): number {
  const n = typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : DEFAULT_PREFS[key]
  return Math.min(LIMITS[key], Math.max(0, n))
}

export function normalize(raw: unknown): ReadingPrefs {
  const o = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {}
  return {
    size: clampStep('size', o.size),
    leading: clampStep('leading', o.leading),
    measure: clampStep('measure', o.measure),
    weight: clampStep('weight', o.weight),
  }
}

export function parsePrefs(stored: string | null | undefined): ReadingPrefs {
  if (!stored) return { ...DEFAULT_PREFS }
  try { return normalize(JSON.parse(stored)) } catch { return { ...DEFAULT_PREFS } }
}

export const serializePrefs = (p: ReadingPrefs) => JSON.stringify(normalize(p))

export const step = (p: ReadingPrefs, key: keyof ReadingPrefs, delta: number): ReadingPrefs =>
  ({ ...p, [key]: clampStep(key, p[key] + delta) })

export const isDefault = (p: ReadingPrefs) =>
  (Object.keys(DEFAULT_PREFS) as (keyof ReadingPrefs)[]).every((k) => p[k] === DEFAULT_PREFS[k])

/** CSS custom properties for a set of prefs. */
export function cssVars(p: ReadingPrefs): Record<string, string> {
  const q = normalize(p)
  return {
    '--read-scale': String(SIZE_STEPS[q.size]),
    '--read-leading-fa': String(LEADING_STEPS[q.leading].fa),
    '--read-leading-lat': String(LEADING_STEPS[q.leading].lat),
    '--read-measure': MEASURE_STEPS[q.measure],
    '--read-weight': String(WEIGHT_STEPS[q.weight]),
  }
}

export interface PrefStorage { getItem(k: string): string | null; setItem(k: string, v: string): void; removeItem(k: string): void }

export const loadPrefs = (s: PrefStorage | undefined) => {
  try { return parsePrefs(s?.getItem(STORAGE_KEY)) } catch { return { ...DEFAULT_PREFS } }
}

export function savePrefs(s: PrefStorage | undefined, p: ReadingPrefs) {
  try {
    if (isDefault(p)) s?.removeItem(STORAGE_KEY)
    else s?.setItem(STORAGE_KEY, serializePrefs(p))
  } catch { /* private mode / quota: settings just won't persist */ }
}

export function applyPrefs(el: HTMLElement, p: ReadingPrefs) {
  for (const [k, v] of Object.entries(cssVars(p))) el.style.setProperty(k, v)
}

/** Runs in <head> before first paint so stored prefs never flash. Self-contained on purpose. */
export const READING_BOOT_SCRIPT = `(function(){try{var r=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});if(!r)return;var p=JSON.parse(r)||{};var S=${JSON.stringify(SIZE_STEPS)},L=${JSON.stringify(LEADING_STEPS)},M=${JSON.stringify(MEASURE_STEPS)},W=${JSON.stringify(WEIGHT_STEPS)};function c(v,a,d){v=typeof v==='number'&&isFinite(v)?Math.round(v):d;return a[Math.min(a.length-1,Math.max(0,v))]}var s=document.documentElement.style;s.setProperty('--read-scale',c(p.size,S,1));var l=c(p.leading,L,1);s.setProperty('--read-leading-fa',l.fa);s.setProperty('--read-leading-lat',l.lat);s.setProperty('--read-measure',c(p.measure,M,1));s.setProperty('--read-weight',c(p.weight,W,1))}catch(e){}})()`
