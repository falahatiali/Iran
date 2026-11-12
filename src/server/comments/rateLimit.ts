import type { RateLimitRepository } from './storage/types'

/** Sliding-window counters kept in storage, so limits hold across restarts and both blue/green containers. */
export function rateLimiter(repo: RateLimitRepository, now: () => number) {
  return {
    count: (bucket: string, windowMs: number) => repo.count(bucket, now() - windowMs),
    hit: (...buckets: string[]) => repo.hit(buckets, now()),
    /** true when the bucket already has `max` events inside the window */
    async exceeded(bucket: string, max: number, windowMs: number) {
      return (await repo.count(bucket, now() - windowMs)) >= max
    },
    clear: (bucket: string) => repo.clear(bucket),
    prune: (olderThanMs = 2 * 24 * 3600_000) => repo.pruneBefore(now() - olderThanMs),
  }
}
export type RateLimiter = ReturnType<typeof rateLimiter>
