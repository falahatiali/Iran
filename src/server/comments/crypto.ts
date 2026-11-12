import { createHash, createHmac, randomBytes, randomInt, scrypt, timingSafeEqual, type ScryptOptions } from 'node:crypto'

export const randomToken = (bytes = 32) => randomBytes(bytes).toString('base64url')
export const sha256 = (s: string) => createHash('sha256').update(s).digest('base64url')
export const hmac = (secret: string, s: string) => createHmac('sha256', secret).update(s).digest('base64url')

/** Constant-time string comparison (lengths are compared in constant time too, via fixed-size digests). */
export function safeEqual(a: string, b: string): boolean {
  const x = createHash('sha256').update(a).digest()
  const y = createHash('sha256').update(b).digest()
  return timingSafeEqual(x, y) && a.length === b.length
}

/** A uniformly random 6-digit code. */
export const newCode = () => String(randomInt(0, 1_000_000)).padStart(6, '0')

const SCRYPT = { N: 1 << 15, r: 8, p: 1, keylen: 32, maxmem: 96 * 1024 * 1024 }

function scryptAsync(password: string, salt: Buffer, keylen: number, opts: ScryptOptions): Promise<Buffer> {
  return new Promise((resolve, reject) => scrypt(password, salt, keylen, opts, (err, key) => (err ? reject(err) : resolve(key))))
}

/** scrypt$N$r$p$salt$hash */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16)
  const key = await scryptAsync(password.normalize('NFKC'), salt, SCRYPT.keylen, { N: SCRYPT.N, r: SCRYPT.r, p: SCRYPT.p, maxmem: SCRYPT.maxmem })
  return ['scrypt', SCRYPT.N, SCRYPT.r, SCRYPT.p, salt.toString('base64url'), key.toString('base64url')].join('$')
}

export async function verifyPassword(password: string, stored: string | null): Promise<boolean> {
  // Always do the work, so a missing account and a wrong password take the same time.
  const parts = (stored ?? '').split('$')
  const ok = parts.length === 6 && parts[0] === 'scrypt'
  const [N, r, p] = ok ? parts.slice(1, 4).map(Number) : [SCRYPT.N, SCRYPT.r, SCRYPT.p]
  const salt = ok ? Buffer.from(parts[4], 'base64url') : randomBytes(16)
  const want = ok ? Buffer.from(parts[5], 'base64url') : randomBytes(SCRYPT.keylen)
  const key = await scryptAsync(password.normalize('NFKC'), salt, want.length, { N, r, p, maxmem: SCRYPT.maxmem })
  return timingSafeEqual(key, want) && ok
}
