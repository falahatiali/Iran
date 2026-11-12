import type { Store } from './store'

/** Sliding-window counters kept in the store, so limits hold across restarts and both blue/green containers. */
export function rateLimiter(store: Store, now: () => number) {
  return {
    async count(bucket: string, windowMs: number): Promise<number> {
      const r = await store.get<{ n: number }>('SELECT COUNT(*) AS n FROM rate_events WHERE bucket = ? AND at > ?', [bucket, now() - windowMs])
      return Number(r?.n ?? 0)
    },
    async hit(...buckets: string[]) {
      const t = now()
      await store.tx(buckets.map((b) => ({ sql: 'INSERT INTO rate_events (bucket, at) VALUES (?, ?)', args: [b, t] })))
    },
    /** true when the bucket already has `max` events inside the window */
    async exceeded(bucket: string, max: number, windowMs: number) {
      return (await this.count(bucket, windowMs)) >= max
    },
    async clear(bucket: string) {
      await store.run('DELETE FROM rate_events WHERE bucket = ?', [bucket])
    },
    async prune(olderThanMs = 2 * 24 * 3600_000) {
      await store.run('DELETE FROM rate_events WHERE at < ?', [now() - olderThanMs])
    },
  }
}
export type RateLimiter = ReturnType<typeof rateLimiter>
