import type { FeaturedKing } from '../featured/types'
import { ardashirI } from './ardashir1'
import { shapurI } from './shapur1'
import { narseh } from './narseh'
import { bahramI, bahramII, bahramIII, hormizdI } from './short'
import { adurNarseh, hormizdII } from './short2'

export * from './common'
export * from './ardashir1'
export * from './shapur1'
export * from './short'
export * from './narseh'
export * from './short2'

/** Every Sasanian king with a page, in reign order. */
export const sasanianKings: FeaturedKing[] = [ardashirI, shapurI, hormizdI, bahramI, bahramII, bahramIII, narseh, hormizdII, adurNarseh]
