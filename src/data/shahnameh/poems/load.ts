import type { StoryPoemText } from './types'

export const POEM_SLUGS = ['keyumars', 'hushang', 'tahmuras', 'jamshid', 'zahhak', 'fereydun', 'iraj', 'manuchehr', 'zal', 'rostam-birth', 'haft-khan', 'sohrab', 'siyavash', 'kay-khosrow', 'bizhan-manizheh', 'rostam-esfandiar', 'rostam-shaghad', 'bahram-gur', 'anushirvan'] as const
export type PoemSlug = (typeof POEM_SLUGS)[number]

export async function loadStoryPoem(slug: string): Promise<StoryPoemText | undefined> {
  switch (slug) {
    case 'keyumars': return (await import('./keyumars.json')).default
    case 'hushang': return (await import('./hushang.json')).default
    case 'tahmuras': return (await import('./tahmuras.json')).default
    case 'jamshid': return (await import('./jamshid.json')).default
    case 'zahhak': return (await import('./zahhak.json')).default
    case 'fereydun': return (await import('./fereydun.json')).default
    case 'iraj': return (await import('./iraj.json')).default
    case 'manuchehr': return (await import('./manuchehr.json')).default
    case 'zal': return (await import('./zal.json')).default
    case 'rostam-birth': return (await import('./rostam-birth.json')).default
    case 'haft-khan': return (await import('./haft-khan.json')).default
    case 'sohrab': return (await import('./sohrab.json')).default
    case 'siyavash': return (await import('./siyavash.json')).default
    case 'kay-khosrow': return (await import('./kay-khosrow.json')).default
    case 'bizhan-manizheh': return (await import('./bizhan-manizheh.json')).default
    case 'rostam-esfandiar': return (await import('./rostam-esfandiar.json')).default
    case 'rostam-shaghad': return (await import('./rostam-shaghad.json')).default
    case 'bahram-gur': return (await import('./bahram-gur.json')).default
    case 'anushirvan': return (await import('./anushirvan.json')).default
    default: return undefined
  }
}

export function verseAnchor(ganjoorId: number, n: number) {
  return `v-${ganjoorId}-${n}`
}

export function noteKey(ganjoorId: number, n: number) {
  return `${ganjoorId}:${n}`
}
