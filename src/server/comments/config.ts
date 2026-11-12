/* Everything the comments system reads from the environment. Secrets come only from here,
 * never from the repository. See .env.production.example for the list. */
import { normalizeEmail } from './sanitize'

export type MailTransport = 'console' | 'smtp' | 'resend' | 'disabled'

export interface CommentsConfig {
  production: boolean
  siteUrl: string
  adminEmails: Set<string>
  authSecret: string | null
  mail: {
    transport: MailTransport
    from: string
    smtp: { host: string; port: number; secure: boolean; user?: string; pass?: string }
    resendApiKey?: string
  }
  /** how many reverse proxies (Traefik) sit in front of the app; their X-Forwarded-For entries are trusted */
  proxyHops: number
}

export function readConfig(env: NodeJS.ProcessEnv = process.env): CommentsConfig {
  const production = env.NODE_ENV === 'production'
  const explicit = (env.MAIL_TRANSPORT ?? '').trim().toLowerCase()
  const transport: MailTransport =
    explicit === 'smtp' || explicit === 'resend' || explicit === 'console' || explicit === 'disabled'
      ? explicit
      : env.SMTP_HOST ? 'smtp' : env.RESEND_API_KEY ? 'resend' : production ? 'disabled' : 'console'
  const port = Number(env.SMTP_PORT ?? 587)
  const secret = env.AUTH_SECRET?.trim()
  return {
    production,
    siteUrl: (env.VITE_SITE_URL || env.SITE_URL || 'http://localhost:3000').replace(/\/+$/, ''),
    adminEmails: new Set((env.ADMIN_EMAILS ?? '').split(/[,\s]+/).map(normalizeEmail).filter((e): e is string => !!e)),
    authSecret: secret && secret.length >= 32 ? secret : null,
    mail: {
      transport,
      from: env.MAIL_FROM?.trim() || 'تاریخ ایران <no-reply@iiraan.com>',
      smtp: {
        host: env.SMTP_HOST ?? '',
        port,
        secure: env.SMTP_SECURE ? env.SMTP_SECURE === 'true' : port === 465,
        user: env.SMTP_USER || undefined,
        pass: env.SMTP_PASS || undefined,
      },
      resendApiKey: env.RESEND_API_KEY || undefined,
    },
    proxyHops: Math.max(0, Number(env.TRUST_PROXY_HOPS ?? 1) || 0),
  }
}
