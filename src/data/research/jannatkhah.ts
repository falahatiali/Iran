import type { BibliographyEntry } from './types'

/**
 * First verified pass only. No quotations. Unverified titles stay flagged.
 * See docs/RESEARCH_LOG.md §8.
 */
export interface JannatkhahWork {
  id: string
  title: string
  titleVerified: boolean
  kind: 'video' | 'talk-title' | 'reported-book' | 'file-title'
  url: string | null
  date: string | null
  whatWasVerified: string
  whatWasNotAccessed: string
}

export const jannatkhahWorks: JannatkhahWork[] = [
  {
    id: 'jk-shahkelid-video',
    title: 'شاه کلید آینده ایران: نظریه‌ای نو درباره آزادی و دین',
    titleVerified: true,
    kind: 'video',
    url: 'https://www.youtube.com/watch?v=X9PVaxjoVYE',
    date: '2024-11-01',
    whatWasVerified: 'Public title on YouTube and Aparat; author description that the book was unfinished and the video condenses 1,340 Instagram stories; he presents the theory as concerning religion, freedom, and property rights.',
    whatWasNotAccessed: 'Full transcript; Instagram story corpus; any paginated book corresponding to this title.',
  },
  {
    id: 'jk-theory-file-title',
    title: 'نظریه آزادی، ایران و دین',
    titleVerified: true,
    kind: 'file-title',
    url: 'https://t.me/s/jannatkhah',
    date: null,
    whatWasVerified: 'Search hits show this title used for downloadable reading files on Telegram/X associated with the same author.',
    whatWasNotAccessed: 'The files themselves were not downloaded or quoted (copyright; no stable pagination in hand).',
  },
  {
    id: 'jk-din-va-azadi',
    title: 'دین و آزادی',
    titleVerified: false,
    kind: 'reported-book',
    url: null,
    date: null,
    whatWasVerified: 'Named in the owner directive as a known work. No ISBN, publisher, or library catalog record was found in this pass.',
    whatWasNotAccessed: 'Any edition. Do not cite, quote, or treat this title as a verified published book until an edition is in hand.',
  },
]

export const jannatkhahBibliographyIds: Array<BibliographyEntry['id']> = ['jannatkhah-youtube-2024']
