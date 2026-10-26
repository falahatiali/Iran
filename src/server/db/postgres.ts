import type { SqlDriver } from './repositories'

/**
 * Postgres driver stub. To implement:
 *  1. npm i pg
 *  2. implement SqlDriver with a pg Pool, translating `?` placeholders to `$1..$n`
 *  3. createSqlRepositories(driver) works unchanged (the SQL is ANSI apart from AUTOINCREMENT in 0001 – add migrations/postgres/ if needed)
 */
export function createPostgresDriver(_url: string): SqlDriver {
  throw new Error('DB_DRIVER=postgres is not implemented yet – see src/server/db/postgres.ts')
}
