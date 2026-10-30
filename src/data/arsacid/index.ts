import type { FeaturedKing } from '../featured/types'
// import { mithridatesI } from './mithridates1'
// import { mithridatesII } from './mithridates2'
import { arsacesI, arsacesII, phraatesI, phriapatius } from './short'

export * from './common'
export * from './short'
// export * from './mithridates1'
// export * from './mithridates2'

/** Every Arsacid featured king done so far, in reign order. */
export const arsacidKings: FeaturedKing[] = [arsacesI, arsacesII, phriapatius, phraatesI]
