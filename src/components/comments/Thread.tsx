/* Comment items, threads, the composer, and the account bar — shared by the inline panel and the page discussion. */
import { useEffect, useId, useRef, useState } from 'react'
import { logout, postComment, setAccountPassword } from '../../server/commentsApi'
import type { PublicComment } from '../../lib/commentTypes'
import { mutate } from './call'
import { AuthForm } from './AuthForm'
import { broadcastAuth, drafts, setSession, useSession, type Draft } from './session'
import { errorText, strings, timeAgo, type Locale } from './strings'

export interface Target { anchor: string; quote: string | null; blockText: string | null; parentId: number | null }

export function CommentItem({ c, locale, onReply, highlight }: { c: PublicComment; locale: Locale; onReply?: () => void; highlight?: boolean }) {
  const t = strings(locale)
  const name = c.isAdmin ? t.siteTeam : c.authorName || t.reader
  return (
    <article id={`comment-${c.id}`} className={`ih-c-item ${c.isAdmin ? 'ih-c-item-admin' : ''} ${c.status === 'pending' ? 'ih-c-item-pending' : ''} ${highlight ? 'ih-c-item-hl' : ''}`}>
      <header className="ih-c-item-head">
        <span className="ih-c-avatar" aria-hidden="true">{c.isAdmin ? '✦' : (c.authorName || t.reader).trim().slice(0, 1)}</span>
        <span className="ih-c-name"><bdi>{name}</bdi>{c.mine && !c.isAdmin && <span className="ih-c-you"> · {t.you}</span>}</span>
        {c.isAdmin && <span className="ih-c-badge ih-c-badge-admin">{locale === 'en' ? 'Editor' : 'پاسخ ویراستار'}</span>}
        {c.status === 'pending' && <span className="ih-c-badge ih-c-badge-pending">{t.pending}</span>}
        <time className="ih-c-time" dateTime={new Date(c.createdAt).toISOString()}>{timeAgo(c.createdAt, locale)}</time>
      </header>
      {c.quote && !c.parentId && <blockquote className="ih-c-quote ih-c-quote-sm"><bdi>{c.quote}</bdi></blockquote>}
      <p className="ih-c-body" dir="auto">{c.body}</p>
      {onReply && c.status === 'approved' && <button type="button" className="ih-c-link ih-c-small" onClick={onReply}>↩ {t.reply}</button>}
    </article>
  )
}

export function ThreadList({ roots, replies, locale, path, highlightId, onPosted }: {
  roots: PublicComment[]; replies: Map<number, PublicComment[]>; locale: Locale; path: string; highlightId?: number | null; onPosted: () => void
}) {
  const [replyTo, setReplyTo] = useState<number | null>(null)
  return (
    <ol className="ih-c-threads">
      {roots.map((c) => (
        <li key={c.id} className="ih-c-thread">
          <CommentItem c={c} locale={locale} onReply={() => setReplyTo(c.id)} highlight={highlightId === c.id} />
          {(replies.get(c.id)?.length ?? 0) > 0 && (
            <ol className="ih-c-replies">
              {replies.get(c.id)!.map((r) => <li key={r.id}><CommentItem c={r} locale={locale} highlight={highlightId === r.id} /></li>)}
            </ol>
          )}
          {replyTo === c.id && (
            <div className="ih-c-replies">
              <Composer locale={locale} path={path} target={{ anchor: c.anchor, quote: null, blockText: null, parentId: c.id }} autoFocus onPosted={() => { setReplyTo(null); onPosted() }} onCancel={() => setReplyTo(null)} />
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

const sameTarget = (d: Draft | null, path: string, t: Target) => !!d && d.path === path && d.anchor === t.anchor && (d.parentId ?? null) === (t.parentId ?? null)

export function Composer({ locale, path, target, autoFocus, onPosted, onCancel, autopost }: {
  locale: Locale; path: string; target: Target; autoFocus?: boolean; onPosted: (status: string) => void; onCancel?: () => void; autopost?: boolean
}) {
  const t = strings(locale)
  const { me, loaded } = useSession()
  const [body, setBody] = useState(() => { const d = typeof window === 'undefined' ? null : drafts.get(); return sameTarget(d, path, target) ? d!.body : '' })
  const [name, setName] = useState('')
  const [needAuth, setNeedAuth] = useState(() => { const d = typeof window === 'undefined' ? null : drafts.get(); return sameTarget(d, path, target) && !!d!.resume })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const hp = useRef<HTMLInputElement>(null)
  const ta = useRef<HTMLTextAreaElement>(null)
  const ids = { body: useId(), name: useId(), err: useId() }
  const posting = useRef(false)

  useEffect(() => { if (autoFocus) ta.current?.focus({ preventScroll: true }) }, [autoFocus])

  // every keystroke is kept: nothing typed is lost to a reload, a sign-in, or a closed tab
  useEffect(() => {
    if (!body) { if (sameTarget(drafts.get(), path, target)) drafts.set(null); return }
    const h = setTimeout(() => drafts.set({ path, ...target, body, savedAt: Date.now(), resume: needAuth }), 250)
    return () => clearTimeout(h)
  }, [body, needAuth, path, target])

  async function post(text = body) {
    if (posting.current) return
    posting.current = true
    setBusy(true); setError('')
    const r = await mutate(postComment, {
      path, anchor: target.anchor, quote: target.quote ?? undefined, blockText: target.blockText ?? undefined, parentId: target.parentId,
      body: text, locale, displayName: me && !me.displayName && name.trim() ? name : undefined, website: hp.current?.value ?? '',
    })
    posting.current = false
    setBusy(false)
    if (!r.ok) {
      if (r.error === 'unauthorized') { setNeedAuth(true); return }
      setError(errorText(t, locale, r)); return
    }
    drafts.set(null)
    setBody('')
    setNeedAuth(false)
    if (me && !me.displayName && name.trim()) setSession({ me: { ...me, displayName: name.trim() } })
    onPosted(r.status)
  }

  // returning from sign-in (here, in another tab, or after a reload): send what they already wrote
  useEffect(() => {
    if (me && needAuth && body.trim().length >= 2) void post()
    else if (me && autopost && body.trim().length >= 2) void post()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (body.trim().length < 2) { setError(t.errors.too_short); return }
    if (!me) {
      setNeedAuth(true)
      drafts.set({ path, ...target, body, savedAt: Date.now(), resume: true })
      return
    }
    void post()
  }

  return (
    <div className="ih-c-composer">
      <form onSubmit={submit} aria-describedby={error ? ids.err : undefined}>
        <label htmlFor={ids.body} className="sr-only">{target.parentId ? t.replyPlaceholder : t.placeholder}</label>
        <textarea
          ref={ta} id={ids.body} className="ih-c-textarea" dir="auto" rows={target.parentId ? 3 : 4} maxLength={4000}
          placeholder={target.parentId ? t.replyPlaceholder : t.placeholder} value={body}
          onChange={(e) => { setBody(e.target.value); if (error) setError('') }}
          onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submit(e) }}
          readOnly={needAuth && !me}
        />
        <input ref={hp} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="ih-c-hp" />
        {me && !me.displayName && !target.parentId && body.length > 0 && (
          <div className="ih-c-namefield">
            <label htmlFor={ids.name} className="ih-c-label">{t.displayName}</label>
            <input id={ids.name} className="ih-c-input" maxLength={40} value={name} onChange={(e) => setName(e.target.value)} autoComplete="nickname" />
            <p className="ih-c-small ih-c-muted">{t.displayNameHint}</p>
          </div>
        )}
        {error && <p id={ids.err} className="ih-c-error" role="alert">{error}</p>}
        {!(needAuth && !me) && (
          <div className="ih-c-row ih-c-row-end">
            {body.length > 3400 && <span className="ih-c-small ih-c-muted">{body.length}/4000</span>}
            {onCancel && <button type="button" className="ih-c-btn" onClick={onCancel}>{t.cancel}</button>}
            <button type="submit" className="ih-c-btn ih-c-btn-primary" disabled={busy || !loaded}>{target.parentId ? t.sendReply : t.send}</button>
          </div>
        )}
      </form>
      {needAuth && !me && (
        <div className="ih-c-authbox">
          <AuthForm locale={locale} />
          <button type="button" className="ih-c-link ih-c-small" onClick={() => { setNeedAuth(false); drafts.set({ path, ...target, body, savedAt: Date.now() }) }}>{t.cancel}</button>
        </div>
      )}
      {!target.parentId && !(needAuth && !me) && <p className="ih-c-small ih-c-muted">{t.moderationNote}</p>}
    </div>
  )
}

export function AccountBar({ locale }: { locale: Locale }) {
  const t = strings(locale)
  const { me } = useSession()
  const [pwOpen, setPwOpen] = useState(false)
  const [pw, setPw] = useState('')
  const [cur, setCur] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')
  const ids = { pw: useId(), cur: useId() }
  if (!me) return null
  async function out() {
    const r = await mutate(logout, undefined as never)
    if (r.ok) { setSession({ me: null }); broadcastAuth() }
  }
  async function savePw(e: React.FormEvent) {
    e.preventDefault(); setErr(''); setMsg('')
    const r = await mutate(setAccountPassword, { password: pw, current: cur || undefined })
    if (!r.ok) { setErr(errorText(t, locale, r)); return }
    setPw(''); setCur(''); setMsg(t.saved); setSession({ me: { ...me!, hasPassword: true } })
  }
  return (
    <div className="ih-c-account">
      <div className="ih-c-row">
        <span className="ih-c-small ih-c-muted">{t.signedInAs} <bdi dir="ltr">{me.email}</bdi></span>
        <span className="ih-c-row">
          {me.isAdmin && <a className="ih-c-link ih-c-small" href="/admin/comments">{locale === 'en' ? 'Moderate' : 'مدیریت نظرها'}</a>}
          <button type="button" className="ih-c-link ih-c-small" onClick={() => setPwOpen((o) => !o)} aria-expanded={pwOpen}>{t.setPassword}</button>
          <button type="button" className="ih-c-link ih-c-small" onClick={() => void out()}>{t.logout}</button>
        </span>
      </div>
      {pwOpen && (
        <form className="ih-c-auth ih-c-pwform" onSubmit={savePw}>
          <h3 className="ih-c-auth-title">{t.setPasswordTitle}</h3>
          <p className="ih-c-small ih-c-muted">{t.setPasswordHint}</p>
          <input type="email" autoComplete="username" value={me.email} readOnly hidden />
          {me.hasPassword && <>
            <label htmlFor={ids.cur} className="ih-c-label">{t.currentPassword}</label>
            <input id={ids.cur} className="ih-c-input" type="password" dir="ltr" autoComplete="current-password" value={cur} onChange={(e) => setCur(e.target.value)} />
          </>}
          <label htmlFor={ids.pw} className="ih-c-label">{t.newPassword}</label>
          <input id={ids.pw} className="ih-c-input" type="password" dir="ltr" autoComplete="new-password" minLength={8} required value={pw} onChange={(e) => setPw(e.target.value)} />
          {err && <p className="ih-c-error" role="alert">{err}</p>}
          {msg && <p className="ih-c-ok" role="status">{msg}</p>}
          <button type="submit" className="ih-c-btn ih-c-btn-primary">{t.save}</button>
        </form>
      )}
    </div>
  )
}
