import type { FeaturedKing } from '../featured/types'
import { artaxerxesIV, bessus, sogdianus, xerxesII } from './short'

export * from './common'
export * from './short'

/** Every late-Achaemenid featured king, in reign order. */
export const lateKings: FeaturedKing[] = [xerxesII, sogdianus, artaxerxesIV, bessus]
