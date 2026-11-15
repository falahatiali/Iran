import type { StoryPoemCommentary } from './types'

/** One lazy chunk per story: a story page fetches only its own commentary, together with its poem. */
const loaders: Record<string, () => Promise<StoryPoemCommentary>> = {
  keyumars: () => import('./keyumars').then((m) => m.keyumarsCommentary),
  hushang: () => import('./hushang').then((m) => m.hushangCommentary),
  tahmuras: () => import('./tahmuras').then((m) => m.tahmurasCommentary),
  jamshid: () => import('./jamshid').then((m) => m.jamshidCommentary),
  zahhak: () => import('./zahhak').then((m) => m.zahhakCommentary),
  fereydun: () => import('./fereydun').then((m) => m.fereydunCommentary),
  iraj: () => import('./iraj').then((m) => m.irajCommentary),
  manuchehr: () => import('./manuchehr').then((m) => m.manuchehrCommentary),
  zal: () => import('./zal').then((m) => m.zalCommentary),
  'rostam-birth': () => import('./rostam-birth').then((m) => m.rostamBirthCommentary),
  'haft-khan': () => import('./haft-khan').then((m) => m.haftKhanCommentary),
  sohrab: () => import('./sohrab').then((m) => m.sohrabCommentary),
  'bizhan-manizheh': () => import('./bizhan-manizheh').then((m) => m.bizhanManizhehCommentary),
  'rostam-esfandiar': () => import('./rostam-esfandiar').then((m) => m.rostamEsfandiarCommentary),
  'rostam-shaghad': () => import('./rostam-shaghad').then((m) => m.rostamShaghadCommentary),
  'bahram-gur': () => import('./bahram-gur').then((m) => m.bahramGurCommentary),
  anushirvan: () => import('./anushirvan').then((m) => m.anushirvanCommentary),
  'kay-khosrow': () => import('./kay-khosrow').then((m) => m.kayKhosrowCommentary),
  siyavash: () => import('./siyavash').then((m) => m.siyavashCommentary),
}

export const COMMENTARY_SLUGS = Object.keys(loaders)

export async function loadCommentary(slug: string): Promise<StoryPoemCommentary> {
  const load = Object.prototype.hasOwnProperty.call(loaders, slug) ? loaders[slug] : undefined
  return load ? load() : { slug, status: 'in-progress', notes: {} }
}
