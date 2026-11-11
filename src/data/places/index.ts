import { bisotun } from './bisotun'
import { gonbadQabus } from './gonbad-qabus'
import type { Place } from './types'

export type { Place, PlaceSection, CommonsPhoto } from './types'

export const places: Record<string, Place> = { [bisotun.slug]: bisotun, [gonbadQabus.slug]: gonbadQabus }
export const getPlace = (slug: string): Place | undefined => places[slug]
export const placeForEventTitle = (title: string): Place | undefined => Object.values(places).find((p) => p.eventTitles.includes(title))
export const placesForKing = (slug: string): Place[] => Object.values(places).filter((p) => p.kings.includes(slug))
