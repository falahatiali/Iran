import type { FeaturedKing } from '../featured/types'
import { artaxerxesII } from './artaxerxes2'
import { artaxerxesIII } from './artaxerxes3'
import { dariusIII } from './darius3'
import { dariusII } from './darius2'
import { artaxerxesIV, bessus, sogdianus, xerxesII } from './short'

export * from './common'
export * from './short'
export * from './darius2'
export * from './artaxerxes2'
export * from './artaxerxes3'
export * from './darius3'

/** Every late-Achaemenid featured king, in reign order. */
export const lateKings: FeaturedKing[] = [xerxesII, sogdianus, dariusII, artaxerxesII, artaxerxesIII, artaxerxesIV, dariusIII, bessus]
