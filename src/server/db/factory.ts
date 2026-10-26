import path from 'node:path'
import type { Repositories, SqlDriver } from './repositories'
import { createSqliteDriver, createSqlRepositories } from './sqlite'
import { createPostgresDriver } from './postgres'

export type DbDriverName = 'sqlite' | 'postgres'

export function dbConfig() {
  const driver = (process.env.DB_DRIVER ?? 'sqlite') as DbDriverName
  const url = process.env.DATABASE_URL ?? `file:${path.resolve(process.cwd(), 'data/iran.db')}`
  return { driver, url }
}

export function createDriver(): SqlDriver {
  const { driver, url } = dbConfig()
  switch (driver) {
    case 'sqlite': return createSqliteDriver(url)
    case 'postgres': return createPostgresDriver(url)
    default: throw new Error(`Unknown DB_DRIVER: ${String(driver)}`)
  }
}

let repos: Repositories | null = null
/** Single entry point for business code. */
export function getRepositories(): Repositories {
  repos ??= createSqlRepositories(createDriver())
  return repos
}
