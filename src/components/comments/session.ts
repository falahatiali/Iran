/* Browser-side session state for comments, shared by every component on the page and synced across tabs. */
import { useSyncExternalStore } from 'react'
import { getMe } from '../../server/commentsApi'
import type { Me } from '../../lib/commentTypes'

interface State { loaded: boolean; me: Me | null; csrf: string; canSignIn: boolean }
let state: State = { loaded: false, me: null, csrf: '', canSignIn: true }
const subs = new Set<() => void>()
const emit = () => subs.forEach((f) => f())

export function setSession(patch: Partial<State>) {
  state = { ...state, ...patch }
  emit()
}

let inflight: Promise<void> | null = null
export function refreshSession(): Promise<void> {
  inflight ??= getMe()
    .then((r) => { if (r.ok) setSession({ loaded: true, me: r.me, csrf: r.csrf, canSignIn: r.canSignIn }); else setSession({ loaded: true }) })
    .catch(() => setSession({ loaded: true }))
    .finally(() => { inflight = null })
  return inflight
}

export function useSession(): State {
  return useSyncExternalStore(
    (f) => { subs.add(f); if (!state.loaded) void refreshSession(); return () => subs.delete(f) },
    () => state,
    () => state,
  )
}

/** Headers for a state-changing call (double-submit CSRF token). */
export async function csrfHeaders(): Promise<Record<string, string>> {
  if (!state.csrf) await refreshSession()
  return { 'x-ih-csrf': state.csrf }
}

/* ------- persistence: the code form and the draft must outlive reloads, tab switches, and navigation ------- */

export interface PendingAuth { email: string; requestId: string; expiresAt: number; resendAt: number }
export interface Draft { path: string; anchor: string; quote: string | null; blockText: string | null; parentId: number | null; body: string; savedAt: number; resume?: boolean }

const PENDING = 'ih.auth.pending'
const DRAFT = 'ih.comments.draft'
const SIGNAL = 'ih.auth.signal'

function read<T>(k: string): T | null {
  try { const v = localStorage.getItem(k); return v ? (JSON.parse(v) as T) : null } catch { return null }
}
function write(k: string, v: unknown) {
  try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)) } catch { /* private mode */ }
}

export const pendingAuth = {
  get(): PendingAuth | null {
    const p = read<PendingAuth>(PENDING)
    return p && p.expiresAt > Date.now() && typeof p.email === 'string' ? p : null
  },
  /** the email survives even after the code has expired, so the reader never types it twice */
  lastEmail(): string { return read<PendingAuth>(PENDING)?.email ?? read<{ email: string }>('ih.auth.email')?.email ?? '' },
  set(p: PendingAuth | null) {
    write(PENDING, p)
    if (p) write('ih.auth.email', { email: p.email })
    emitPending()
  },
}

export const drafts = {
  get(): Draft | null {
    const d = read<Draft>(DRAFT)
    return d && Date.now() - d.savedAt < 7 * 24 * 3600_000 ? d : null
  },
  set(d: Draft | null) { write(DRAFT, d); emitPending() },
}

const pendingSubs = new Set<() => void>()
function emitPending() { pendingSubs.forEach((f) => f()) }
let pendingSnap = ''
export function usePendingAuth(): PendingAuth | null {
  const raw = useSyncExternalStore(
    (f) => { pendingSubs.add(f); return () => pendingSubs.delete(f) },
    () => { const v = typeof localStorage === 'undefined' ? '' : JSON.stringify(pendingAuth.get()); if (v !== pendingSnap) pendingSnap = v; return pendingSnap },
    () => '',
  )
  return raw ? (JSON.parse(raw) as PendingAuth | null) : null
}

/** Tell other tabs that the sign-in state changed. */
export function broadcastAuth() { write(SIGNAL, { at: Date.now() }) }

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === SIGNAL) void refreshSession()
    if (e.key === PENDING || e.key === DRAFT) emitPending()
  })
  // Coming back from the mail app: make sure the timers and the session are current.
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { emitPending(); if (!state.me) void refreshSession() } })
}
