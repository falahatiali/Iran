import { csrfHeaders, refreshSession, setSession } from './session'

type Res = { ok: boolean; error?: string; extra?: Record<string, number | string> }
type Fn<D, R> = (opts: { data: D; headers?: Record<string, string> }) => Promise<R>

/** Calls a state-changing server function with the CSRF header; refreshes the token once if it went stale. */
export async function mutate<D, R extends Res>(fn: Fn<D, R>, data: D): Promise<R | { ok: false; error: string; extra?: Record<string, number | string> }> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const r = await fn({ data, headers: await csrfHeaders() })
      if (!r.ok && r.error === 'csrf' && attempt === 0) { setSession({ csrf: '' }); await refreshSession(); continue }
      if (!r.ok && r.error === 'unauthorized') void refreshSession()
      return r
    } catch {
      return { ok: false, error: 'network' }
    }
  }
  return { ok: false, error: 'csrf' }
}
