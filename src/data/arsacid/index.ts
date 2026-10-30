import type { FeaturedKing } from '../featured/types'
import { mithridatesI } from './mithridates1'
import { mithridatesII } from './mithridates2'
import { artabanusI, arsacesI, arsacesII, phraatesI, phraatesII, phriapatius } from './short'
import { gotarzesI, mithridatesIII, orodesI, phraatesIII, sinatruces } from './dark'
import { orodesII } from './orodes2'
import { phraatesIV } from './phraates4'

export * from './common'
export * from './short'
export * from './mithridates1'
export * from './mithridates2'
export * from './phraates4'
export * from './orodes2'
export * from './dark'

/** Every Arsacid featured king done so far, in reign order. */
export const arsacidKings: FeaturedKing[] = [arsacesI, arsacesII, phriapatius, phraatesI, mithridatesI, phraatesII, artabanusI, mithridatesII, gotarzesI, orodesI, sinatruces, phraatesIII, mithridatesIII, orodesII, phraatesIV]
