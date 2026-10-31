import type { FeaturedKing } from '../featured/types'
import { ardashirI } from './ardashir1'
import { shapurI } from './shapur1'

export * from './common'
export * from './ardashir1'
export * from './shapur1'

/** Every Sasanian king with a page, in reign order. */
export const sasanianKings: FeaturedKing[] = [ardashirI, shapurI]
