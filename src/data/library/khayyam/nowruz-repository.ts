import type { NwIndex, NwSection } from './nowruz'

export interface NowruzRepository {
  index(): Promise<NwIndex>
  section(n: number): Promise<NwSection | undefined>
}

const files = import.meta.glob<{ default: NwSection }>(['./text/nowruz/*.json', '!./text/nowruz/index.json'])

export const nowruz: NowruzRepository = {
  index: () => import('./text/nowruz/index.json').then((m) => m.default as unknown as NwIndex),
  section: async (n) => (await files[`./text/nowruz/${n}.json`]?.())?.default,
}
