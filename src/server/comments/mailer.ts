/* Pluggable mail sending. The transport and its credentials come only from server env vars. */
import type { CommentsConfig } from './config'

export interface Mail { to: string; subject: string; text: string; html: string }
export interface Mailer { readonly name: string; send(mail: Mail): Promise<void> }

export class MailUnavailableError extends Error {}

export function createMailer(cfg: CommentsConfig['mail']): Mailer {
  switch (cfg.transport) {
    case 'console':
      return {
        name: 'console',
        async send(m) { console.info(`[mail:console] to=${m.to} subject=${JSON.stringify(m.subject)}\n${m.text}`) },
      }
    case 'resend':
      return {
        name: 'resend',
        async send(m) {
          if (!cfg.resendApiKey) throw new MailUnavailableError('RESEND_API_KEY missing')
          const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${cfg.resendApiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ from: cfg.from, to: [m.to], subject: m.subject, text: m.text, html: m.html }),
            signal: AbortSignal.timeout(15_000),
          })
          if (!r.ok) throw new Error(`resend ${r.status}`)
        },
      }
    case 'smtp': {
      let transporter: { sendMail(o: object): Promise<unknown> } | null = null
      return {
        name: 'smtp',
        async send(m) {
          if (!cfg.smtp.host) throw new MailUnavailableError('SMTP_HOST missing')
          if (!transporter) {
            const nodemailer = await import('nodemailer')
            transporter = nodemailer.createTransport({
              host: cfg.smtp.host,
              port: cfg.smtp.port,
              secure: cfg.smtp.secure,
              requireTLS: !cfg.smtp.secure,
              auth: cfg.smtp.user ? { user: cfg.smtp.user, pass: cfg.smtp.pass } : undefined,
              connectionTimeout: 10_000,
              greetingTimeout: 10_000,
              socketTimeout: 20_000,
            })
          }
          await transporter.sendMail({ from: cfg.from, to: m.to, subject: m.subject, text: m.text, html: m.html })
        },
      }
    }
    default:
      return { name: 'disabled', async send() { throw new MailUnavailableError('no mail transport configured') } }
  }
}

/** Test helper: remembers every mail instead of sending. */
export function memoryMailer(): Mailer & { sent: Mail[] } {
  const sent: Mail[] = []
  return { name: 'memory', sent, async send(m) { sent.push(m) } }
}
