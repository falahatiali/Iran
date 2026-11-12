/* Composition root for comments storage: the ONE place that decides which database is used.
 *
 * To switch databases, change the driver — either set COMMENTS_DB_DRIVER in the server env,
 * or change DEFAULT_DRIVER below. Nothing else in the app knows which adapter is running.
 * Adding an adapter: implement `Storage` (./types.ts) in ./<name>/index.ts, register it in ADAPTERS,
 * and make it pass ./contract.test.ts. See docs/COMMENTS.md. */
import type { Storage, StorageFactory, StorageOptions } from './types'
import { createSqliteStorage } from './sqlite'
import { createMemoryStorage } from './memory'

export const ADAPTERS = {
  sqlite: createSqliteStorage,
  memory: createMemoryStorage,
} satisfies Record<string, StorageFactory>

export type DriverName = keyof typeof ADAPTERS

export const DEFAULT_DRIVER: DriverName = 'sqlite' // ← the one line

export function selectedDriver(env: NodeJS.ProcessEnv = process.env): DriverName {
  const want = (env.COMMENTS_DB_DRIVER ?? DEFAULT_DRIVER).trim().toLowerCase()
  if (!(want in ADAPTERS)) throw new Error(`Unknown COMMENTS_DB_DRIVER "${want}". Known: ${Object.keys(ADAPTERS).join(', ')}`)
  return want as DriverName
}

export function createStorage(opts: StorageOptions & { driver?: DriverName } = {}): Promise<Storage> {
  const env = opts.env ?? process.env
  const driver = opts.driver ?? selectedDriver(env)
  return ADAPTERS[driver]({ url: opts.url ?? env.COMMENTS_DATABASE_URL, env })
}

export type * from './types'
