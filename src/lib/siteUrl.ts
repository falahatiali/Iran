/** Placeholder used in old fallbacks — never emit this in a production artifact. */
export const PLACEHOLDER_SITE_URL = 'https://iran-history.example'

const PLACEHOLDER = /iran-history\.example|(?:^https?:\/\/)?(?:www\.)?example\.com(?:\/|$)/i

export function isPlaceholderSiteUrl(url: string): boolean {
  return PLACEHOLDER.test(url.trim())
}

function stripSlash(url: string): string {
  return url.trim().replace(/\/+$/, '')
}

/** Turn APP_DOMAIN (`iiraan.com` or a full origin) into an origin. */
export function originFromAppDomain(domain: string): string {
  const d = domain.trim()
  if (!d) return ''
  if (/^https?:\/\//i.test(d)) return stripSlash(d)
  return `https://${d.replace(/^\/+/, '')}`
}

export function resolvePublicSiteUrl(opts: {
  viteUrl?: string | null
  envUrl?: string | null
  appDomain?: string | null
  /** Vite MODE or NODE_ENV. Production builds must not use a placeholder or empty origin. */
  mode?: string | null
  /** Sitemap / release artifacts are always strict, even if NODE_ENV is unset. */
  strict?: boolean
}): string {
  const strict = opts.strict || opts.mode === 'production'
  const fromVite = opts.viteUrl?.trim() ?? ''
  const fromEnv = opts.envUrl?.trim() ?? ''
  const fromDomain = opts.appDomain ? originFromAppDomain(opts.appDomain) : ''
  const raw = stripSlash(fromVite || fromEnv || fromDomain)

  if (raw && isPlaceholderSiteUrl(raw)) {
    throw new Error(
      `Refusing placeholder site URL "${raw}". Set VITE_SITE_URL (or APP_DOMAIN) to the public origin, e.g. https://iiraan.com.`,
    )
  }
  if (strict) {
    if (!raw) {
      throw new Error(
        'VITE_SITE_URL or APP_DOMAIN is required for this production build. Canonical, og:url, sitemap and robots must not fall back to a placeholder.',
      )
    }
    if (!/^https:\/\//i.test(raw)) {
      throw new Error(`Production site URL must be an https origin, got "${raw}".`)
    }
  }
  return raw || 'http://localhost:3000'
}
