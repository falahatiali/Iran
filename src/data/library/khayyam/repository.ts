import type { Edition, ForoughiMeanings, HedayatEdition, Quatrain, QuatrainNotes, RubaiyatRepository } from './types'

/** The rubaiyat as JSON shipped with the site; each file is its own lazy chunk, loaded only by the page that reads it. */
export const jsonRubaiyat: RubaiyatRepository = {
  hedayat: () => import('./text/hedayat.json').then((m) => m.default as unknown as HedayatEdition),
  foroughi: () => import('./text/foroughi.json').then((m) => m.default as unknown as Edition<Quatrain>),
  foroughiMeanings: () => import('./text/foroughi-meanings.json').then((m) => m.default as unknown as ForoughiMeanings),
  notes: () => import('./notes/hedayat.json').then((m) => m.default as unknown as QuatrainNotes),
}

/** The one place to swap the store. */
export const rubaiyat: RubaiyatRepository = jsonRubaiyat
