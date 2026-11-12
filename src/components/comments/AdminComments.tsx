/* Moderation: every reader comment waits here until an admin (ADMIN_EMAILS) approves it. */
import { useCallback, useEffect, useState } from 'react'
import { adminBlockUser, adminListComments, adminModerate, adminReply } from '../../server/commentsApi'
import type { AdminComment } from '../../lib/commentTypes'
import { mutate } from './call'
import { AuthForm } from './AuthForm'
import { AccountBar } from './Thread'
import { useSession } from './session'
import { errorText, num, strings, timeAgo } from './strings'
import './comments.css'

type Status = 'pending' | 'approved' | 'rejected' | 'all'
const TABS: [Status, string][] = [['pending', 'در انتظار تأیید'], ['approved', 'تأییدشده'], ['rejected', 'ردشده'], ['all', 'همه']]
const STATUS_FA = { pending: 'در انتظار', approved: 'تأییدشده', rejected: 'ردشده' } as const
const t = strings('fa')

export function AdminComments() {
  const { me, loaded } = useSession()
  const [status, setStatus] = useState<Status>('pending')
  const [path, setPath] = useState('')
  const [data, setData] = useState<{ items: AdminComment[]; counts: Record<'pending' | 'approved' | 'rejected', number>; pages: { path: string; total: number; pending: number }[] } | null>(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const load = useCallback(async (offset = 0) => {
    setBusy(true)
    try {
      const r = await adminListComments({ data: { status, path: path || undefined, offset } })
      if (!r.ok) { setError(errorText(t, 'fa', r)); return }
      setError('')
      setData((d) => (offset && d ? { ...r, items: [...d.items, ...r.items] } : r))
    } catch { setError(t.errors.network) } finally { setBusy(false) }
  }, [status, path])

  useEffect(() => { if (me?.isAdmin) void load() }, [me, load])

  if (!loaded) return <div className="ih-c-ui ih-admin"><p className="ih-c-muted">…</p></div>
  if (!me) return (
    <div className="ih-c-ui ih-admin ih-admin-narrow">
      <div className="ih-c-discussion-inner"><AuthForm locale="fa" title="ورود مدیر" compact /></div>
    </div>
  )
  if (!me.isAdmin) return (
    <div className="ih-c-ui ih-admin ih-admin-narrow">
      <div className="ih-c-discussion-inner"><p>{t.errors.forbidden}</p><AccountBar locale="fa" /></div>
    </div>
  )

  async function act(c: AdminComment, action: 'approve' | 'reject' | 'pending' | 'delete') {
    if (action === 'delete' && !window.confirm('این نظر و پاسخ‌هایش برای همیشه پاک شوند؟')) return
    const r = await mutate(adminModerate, { id: c.id, action })
    if (!r.ok) { setError(errorText(t, 'fa', r)); return }
    void load()
  }
  async function block(c: AdminComment) {
    const on = !c.authorBlocked
    if (on && !window.confirm(`حساب ${c.authorEmail} مسدود شود؟ نظرهای تازه‌اش پذیرفته نمی‌شود و از همه‌جا خارج می‌شود.`)) return
    const r = await mutate(adminBlockUser, { userId: c.userId, blocked: on })
    if (!r.ok) { setError(errorText(t, 'fa', r)); return }
    void load()
  }

  return (
    <div className="ih-c-ui ih-admin" dir="rtl">
      <header className="ih-admin-head">
        <h1 className="ih-admin-title">مدیریت نظرها</h1>
        <AccountBar locale="fa" />
      </header>
      <div className="ih-admin-bar">
        <div role="tablist" aria-label="وضعیت" className="ih-admin-tabs">
          {TABS.map(([k, label]) => (
            <button key={k} role="tab" aria-selected={status === k} className={`ih-admin-tab ${status === k ? 'is-on' : ''}`} onClick={() => setStatus(k)}>
              {label}{k !== 'all' && data && <span className="ih-c-count">{num(data.counts[k], 'fa')}</span>}
            </button>
          ))}
        </div>
        <label className="ih-admin-filter">
          <span className="ih-c-small ih-c-muted">صفحه:</span>
          <select value={path} onChange={(e) => setPath(e.target.value)} className="ih-c-input" dir="ltr">
            <option value="">همهٔ صفحه‌ها</option>
            {data?.pages.map((p) => <option key={p.path} value={p.path}>{p.path} ({p.pending ? `${p.pending} در انتظار / ` : ''}{p.total})</option>)}
          </select>
        </label>
        <button type="button" className="ih-c-btn" onClick={() => void load()} disabled={busy}>↻ تازه کردن</button>
      </div>
      {error && <p className="ih-c-error" role="alert">{error}</p>}
      {data && data.items.length === 0 && <p className="ih-c-muted ih-admin-empty">{status === 'pending' ? 'نظری در انتظار تأیید نیست. ✦' : 'چیزی نیست.'}</p>}
      <ol className="ih-admin-list">
        {data?.items.map((c) => <AdminCard key={c.id} c={c} onAct={(a) => void act(c, a)} onBlock={() => void block(c)} onReplied={() => void load()} onError={setError} />)}
      </ol>
      {data && data.items.length > 0 && data.items.length % 50 === 0 && (
        <button type="button" className="ih-c-btn" onClick={() => void load(data.items.length)} disabled={busy}>بیشتر</button>
      )}
    </div>
  )
}

function AdminCard({ c, onAct, onBlock, onReplied, onError }: { c: AdminComment; onAct: (a: 'approve' | 'reject' | 'pending' | 'delete') => void; onBlock: () => void; onReplied: () => void; onError: (s: string) => void }) {
  const [replying, setReplying] = useState(false)
  const [body, setBody] = useState('')
  const link = `${c.path}#comment-${c.id}`
  async function send(e: React.FormEvent) {
    e.preventDefault()
    const r = await mutate(adminReply, { id: c.id, body })
    if (!r.ok) { onError(errorText(t, 'fa', r)); return }
    setBody(''); setReplying(false); onReplied()
  }
  return (
    <li className={`ih-admin-card is-${c.status}`}>
      <div className="ih-admin-meta">
        <span className={`ih-c-badge ${c.status === 'pending' ? 'ih-c-badge-pending' : c.status === 'approved' ? 'ih-c-badge-admin' : 'ih-admin-badge-rej'}`}>{STATUS_FA[c.status]}</span>
        <a href={link} target="_blank" rel="noopener" className="ih-c-link" dir="ltr">{c.path}</a>
        <span className="ih-c-small ih-c-muted" dir="ltr">{c.anchor ? `#${c.anchor}` : 'کل صفحه'}</span>
        {c.locale === 'en' && <span className="ih-c-badge ih-c-badge-pending">EN</span>}
        <time className="ih-c-time" dateTime={new Date(c.createdAt).toISOString()} title={new Date(c.createdAt).toLocaleString('fa-IR')}>{timeAgo(c.createdAt, 'fa')}</time>
      </div>
      {c.parentBody && <blockquote className="ih-c-quote ih-c-quote-sm"><span className="ih-c-quote-label">در پاسخ به</span><bdi>{c.parentBody.slice(0, 300)}</bdi></blockquote>}
      {(c.quote || c.blockText) && !c.parentId && (
        <blockquote className="ih-c-quote ih-c-quote-sm">
          <span className="ih-c-quote-label">{c.quote ? 'بخش انتخاب‌شده' : 'بند'}</span>
          <bdi>{(c.quote ?? c.blockText ?? '').slice(0, 400)}</bdi>
          {c.quote && c.blockText && <span className="ih-admin-context"><bdi>{c.blockText.slice(0, 260)}…</bdi></span>}
        </blockquote>
      )}
      <p className="ih-c-body" dir="auto">{c.body}</p>
      <div className="ih-admin-author ih-c-small">
        <span>{c.isAdmin ? '✦ مدیر' : c.authorName || 'بی‌نام'}</span> · <bdi dir="ltr">{c.authorEmail}</bdi>
        {c.authorBlocked && <span className="ih-admin-badge-rej ih-c-badge">مسدود</span>}
      </div>
      <div className="ih-admin-actions">
        {c.status !== 'approved' && <button className="ih-c-btn ih-c-btn-primary" onClick={() => onAct('approve')}>✓ تأیید</button>}
        {c.status !== 'rejected' && <button className="ih-c-btn" onClick={() => onAct('reject')}>✕ رد</button>}
        {c.status !== 'pending' && <button className="ih-c-btn" onClick={() => onAct('pending')}>بازگشت به انتظار</button>}
        {!c.isAdmin && <button className="ih-c-btn" onClick={() => setReplying((r) => !r)} aria-expanded={replying}>↩ پاسخ</button>}
        <button className="ih-c-btn ih-admin-danger" onClick={() => onAct('delete')}>حذف</button>
        {!c.isAdmin && <button className="ih-c-link ih-c-small" onClick={onBlock}>{c.authorBlocked ? 'رفع مسدودی' : 'مسدود کردن کاربر'}</button>}
      </div>
      {replying && (
        <form onSubmit={send} className="ih-c-composer">
          <textarea className="ih-c-textarea" dir="auto" rows={3} value={body} onChange={(e) => setBody(e.target.value)} placeholder="پاسخ ویراستار (بی‌درنگ منتشر می‌شود و نظر را هم تأیید می‌کند)" aria-label="پاسخ" />
          <div className="ih-c-row ih-c-row-end"><button type="submit" className="ih-c-btn ih-c-btn-primary" disabled={body.trim().length < 2}>انتشار پاسخ</button></div>
        </form>
      )}
    </li>
  )
}
