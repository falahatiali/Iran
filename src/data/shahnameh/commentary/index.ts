import type { StoryPoemCommentary } from './types'
import { hushangCommentary } from './hushang'
import { jamshidCommentary } from './jamshid'
import { keyumarsCommentary } from './keyumars'
import { tahmurasCommentary } from './tahmuras'
import { fereydunCommentary } from './fereydun'
import { irajCommentary } from './iraj'
import { manuchehrCommentary } from './manuchehr'
import { zalCommentary } from './zal'
import { rostamBirthCommentary } from './rostam-birth'
import { haftKhanCommentary } from './haft-khan'
import { zahhakCommentary } from './zahhak'

const bySlug: Record<string, StoryPoemCommentary> = {
  keyumars: keyumarsCommentary,
  hushang: hushangCommentary,
  tahmuras: tahmurasCommentary,
  jamshid: jamshidCommentary,
  zahhak: zahhakCommentary,
  fereydun: fereydunCommentary,
  iraj: irajCommentary,
  manuchehr: manuchehrCommentary,
  zal: zalCommentary,
  'rostam-birth': rostamBirthCommentary,
  'haft-khan': haftKhanCommentary,
}

export type { GlossaryEntry, StoryPoemCommentary, VerseNote } from './types'

export function getCommentary(slug: string): StoryPoemCommentary {
  return bySlug[slug] ?? { slug, status: 'in-progress', notes: {} }
}

export function commentaryIsComplete(slug: string) {
  return getCommentary(slug).status === 'complete'
}
