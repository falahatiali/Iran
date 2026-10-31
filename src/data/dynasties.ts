import { elam, medes, achaemenids, seleucids } from './ancient'
import { parthians, sasanians } from './classical'
import { tahirids, saffarids, samanids, ziyarids, buyids, ghaznavids, seljuks, khwarazmshahs } from './medieval'
import { ilkhanids, timurids, turkmens, safavids, hotakis, afsharids, zands, qajars, pahlavis, islamicRepublic } from './later'
import { persis, elymais, jostanids, bavandids, alavids, sallarids, kakuyids, kartids, injuids, mozaffarids, sarbadars } from './regional'
import type { Dynasty } from './types'

export const dynasties: Dynasty[] = [
  elam, medes, achaemenids, seleucids, parthians, sasanians,
  tahirids, saffarids, samanids, ziyarids, buyids, ghaznavids, seljuks, khwarazmshahs,
  ilkhanids, timurids, turkmens, safavids, hotakis, afsharids, zands, qajars, pahlavis, islamicRepublic,
  persis, elymais, jostanids, bavandids, alavids, sallarids, kakuyids, kartids, injuids, mozaffarids, sarbadars,
].sort((a, b) => a.start - b.start)
