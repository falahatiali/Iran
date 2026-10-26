import { elam, medes, achaemenids, seleucids } from './ancient'
import { parthians, sasanians } from './classical'
import { tahirids, saffarids, samanids, ziyarids, buyids, ghaznavids, seljuks, khwarazmshahs } from './medieval'
import { ilkhanids, timurids, turkmens, safavids, hotakis, afsharids, zands, qajars, pahlavis, islamicRepublic } from './later'
import type { Dynasty } from './types'

export const dynasties: Dynasty[] = [
  elam, medes, achaemenids, seleucids, parthians, sasanians,
  tahirids, saffarids, samanids, ziyarids, buyids, ghaznavids, seljuks, khwarazmshahs,
  ilkhanids, timurids, turkmens, safavids, hotakis, afsharids, zands, qajars, pahlavis, islamicRepublic,
].sort((a, b) => a.start - b.start)
