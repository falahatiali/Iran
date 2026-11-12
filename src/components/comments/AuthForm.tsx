/* Sign-in that is also sign-up: an email, then a 6-digit code — or a password for those who set one.
 * The code step is persisted (localStorage + the server's request id), so reloading, switching tabs,
 * or leaving to read the email never throws the reader back to the email step. */
import { useEffect, useId, useRef, useState } from 'react'
import { getPendingStatus, loginWithPassword, requestLoginCode, verifyLoginCode } from '../../server/commentsApi'
import type { Me } from '../../lib/commentTypes'
import { mutate } from './call'
import { broadcastAuth, pendingAuth, setSession, usePendingAuth, useSession, type PendingAuth } from './session'
import { errorText, num, strings, type Locale } from './strings'

const MAIL_APPS: [RegExp, string, string][] = [
  [/@(gmail|googlemail)\.com$/, 'Gmail', 'https://mail.google.com/mail/u/0/#search/in%3Aanywhere+newer_than%3A1h'],
  [/@(outlook|hotmail|live|msn)\.[a-z.]+$/, 'Outlook', 'https://outlook.live.com/mail/0/'],
  [/@yahoo\.[a-z.]+$/, 'Yahoo Mail', 'https://mail.yahoo.com/'],
  [/@(icloud|me|mac)\.com$/, 'iCloud Mail', 'https://www.icloud.com/mail'],
  [/@proton(mail)?\.(me|com)$/, 'Proton Mail', 'https://mail.proton.me/'],
]

export function AuthForm({ locale, onSignedIn, title, compact }: { locale: Locale; onSignedIn?: (me: Me) => void; title?: string; compact?: boolean }) {
  const t = strings(locale)
  const { canSignIn } = useSession()
  const [pending, setPending] = useState<PendingAuth | null>(() => (typeof window === 'undefined' ? null : pendingAuth.get()))
  const [mode, setMode] = useState<'email' | 'code' | 'password'>(pending ? 'code' : 'email')
  const [email, setEmail] = useState(() => (typeof window === 'undefined' ? '' : pendingAuth.lastEmail()))
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [now, setNow] = useState(() => Date.now())
  const honeypot = useRef<HTMLInputElement>(null)
  const codeRef = useRef<HTMLInputElement>(null)
  const ids = { email: useId(), code: useId(), pw: useId(), err: useId() }

  // another tab (or the banner) sent a code: follow it here too
  const stored = usePendingAuth()
  useEffect(() => {
    if (stored && stored.requestId !== pending?.requestId) { setPending(stored); setEmail(stored.email); setMode('code') }
  }, [stored, pending?.requestId])

  // tick for the countdowns; also re-read storage so another tab's resend shows here
  useEffect(() => {
    if (mode !== 'code') return
    const i = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(i)
  }, [mode])

  // On mount with a stored request, ask the server whether it is still usable.
  useEffect(() => {
    const p = pendingAuth.get()
    if (!p) return
    getPendingStatus({ data: { requestId: p.requestId } }).then((r) => {
      if (r.ok && r.valid) { const fresh = { ...p, expiresAt: r.expiresAt, resendAt: r.resendAt }; pendingAuth.set(fresh); setPending(fresh) }
      else if (r.ok && !r.valid) setError(t.errors.expired)
    }).catch(() => undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => { if (mode === 'code') codeRef.current?.focus() }, [mode])

  async function sendCode(e?: React.FormEvent) {
    e?.preventDefault()
    setBusy(true); setError('')
    const r = await mutate(requestLoginCode, { email, website: honeypot.current?.value ?? '' })
    setBusy(false)
    if (!r.ok) { setError(errorText(t, locale, r)); return }
    const p = { email: r.email, requestId: r.requestId, expiresAt: r.expiresAt, resendAt: r.resendAt }
    pendingAuth.set(p); setPending(p); setEmail(r.email); setCode(''); setMode('code'); setNow(Date.now())
  }

  async function finish(me: Me | null) {
    pendingAuth.set(null)
    setSession({ me })
    broadcastAuth()
    if (me) onSignedIn?.(me)
  }

  async function verify(value = code) {
    if (busy || !pending) return
    setBusy(true); setError('')
    const r = await mutate(verifyLoginCode, { email: pending.email, code: value })
    setBusy(false)
    if (!r.ok) {
      setError(errorText(t, locale, r))
      if (r.error === 'expired') setCode('')
      codeRef.current?.select()
      return
    }
    await finish(r.me)
  }

  async function loginPw(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true); setError('')
    const r = await mutate(loginWithPassword, { email, password })
    setBusy(false)
    if (!r.ok) { setError(errorText(t, locale, r)); return }
    setPassword('')
    await finish(r.me)
  }

  function onCodeInput(v: string) {
    const digits = v.replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0)).replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660)).replace(/\D/g, '').slice(0, 6)
    setCode(digits)
    if (error) setError('')
    if (digits.length === 6) void verify(digits)
  }

  if (!canSignIn) return <p className="ih-c-note" role="status">{t.signInUnavailable}</p>

  const errorEl = error ? <p id={ids.err} className="ih-c-error" role="alert">{error}</p> : null

  if (mode === 'code' && pending) {
    const resendLeft = Math.max(0, Math.ceil((pending.resendAt - now) / 1000))
    const expLeft = Math.max(0, pending.expiresAt - now)
    const mm = `${num(Math.floor(expLeft / 60000), locale)}:${num(Math.floor((expLeft % 60000) / 1000), locale).padStart(2, locale === 'en' ? '0' : '۰')}`
    const app = MAIL_APPS.find(([re]) => re.test(pending.email))
    return (
      <form className="ih-c-auth" onSubmit={(e) => { e.preventDefault(); void verify() }} aria-describedby={error ? ids.err : undefined}>
        <h3 className="ih-c-auth-title">{t.codeTitle}</h3>
        <p className="ih-c-muted">{t.codeSentTo} <bdi dir="ltr" className="ih-c-email">{pending.email}</bdi></p>
        <label htmlFor={ids.code} className="sr-only">{t.codeLabel}</label>
        <input
          ref={codeRef} id={ids.code} className="ih-c-code" value={code} onChange={(e) => onCodeInput(e.target.value)}
          inputMode="numeric" autoComplete="one-time-code" pattern="[0-9۰-۹٠-٩ ]*" maxLength={12} dir="ltr" placeholder="••••••"
          aria-invalid={!!error} aria-describedby={error ? ids.err : undefined} disabled={busy && code.length === 6}
        />
        {errorEl}
        <button type="submit" className="ih-c-btn ih-c-btn-primary" disabled={busy || code.length !== 6}>{busy ? t.verifying : t.verify}</button>
        <p className="ih-c-muted ih-c-small">{t.codeHint}</p>
        <div className="ih-c-row">
          {expLeft > 0 && <span className="ih-c-small ih-c-muted" aria-live="off">{t.expiresIn(mm)}</span>}
          {app && <a className="ih-c-link ih-c-small" href={app[2]} target="_blank" rel="noopener noreferrer">{t.openMail(app[1])} ↗</a>}
        </div>
        <div className="ih-c-row">
          <button type="button" className="ih-c-link" disabled={resendLeft > 0 || busy} onClick={() => void sendCode()}>
            {resendLeft > 0 ? t.resendIn(num(resendLeft, locale)) : t.resend}
          </button>
          <button type="button" className="ih-c-link" onClick={() => { pendingAuth.set(null); setPending(null); setMode('email'); setError(''); setCode('') }}>{t.changeEmail}</button>
        </div>
        <p className="ih-c-muted ih-c-small">{t.checkSpam}</p>
      </form>
    )
  }

  if (mode === 'password') {
    return (
      <form className="ih-c-auth" onSubmit={loginPw}>
        <h3 className="ih-c-auth-title">{t.withPassword}</h3>
        <label htmlFor={ids.email} className="ih-c-label">{t.email}</label>
        <input id={ids.email} className="ih-c-input" type="email" dir="ltr" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor={ids.pw} className="ih-c-label">{t.password}</label>
        <input id={ids.pw} className="ih-c-input" type="password" dir="ltr" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        {errorEl}
        <button type="submit" className="ih-c-btn ih-c-btn-primary" disabled={busy}>{busy ? t.verifying : t.login}</button>
        <button type="button" className="ih-c-link" onClick={() => { setMode('email'); setError('') }}>{t.withCode}</button>
      </form>
    )
  }

  return (
    <form className="ih-c-auth" onSubmit={sendCode}>
      <h3 className="ih-c-auth-title">{title ?? t.authTitle}</h3>
      {!compact && <p className="ih-c-muted ih-c-small">{t.authLede}</p>}
      <label htmlFor={ids.email} className="ih-c-label">{t.email}</label>
      <input
        id={ids.email} className="ih-c-input" type="email" inputMode="email" dir="ltr" autoComplete="email" required
        placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!error} aria-describedby={error ? ids.err : undefined}
      />
      {/* honeypot: hidden from people and assistive tech; bots fill it */}
      <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="ih-c-hp" />
      {errorEl}
      <button type="submit" className="ih-c-btn ih-c-btn-primary" disabled={busy}>{busy ? t.sending : t.sendCode}</button>
      <button type="button" className="ih-c-link" onClick={() => { setMode('password'); setError('') }}>{t.withPassword}</button>
    </form>
  )
}
