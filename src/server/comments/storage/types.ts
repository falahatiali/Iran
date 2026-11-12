/* The storage contract of the comments system: domain records and one repository per aggregate.
 * Services depend only on these interfaces (dependency inversion); adapters implement them.
 * Nothing here knows about SQL, documents, or any particular database. Times are epoch milliseconds. */
import type { CommentStatus } from '../../../lib/commentTypes'

export interface User {
  id: number
  email: string
  displayName: string | null
  passwordHash: string | null
  blocked: boolean
  createdAt: number
  lastLoginAt: number | null
}

export interface LoginCode {
  id: string
  email: string
  codeHash: string
  createdAt: number
  expiresAt: number
  attempts: number
  consumedAt: number | null
  ipHash: string | null
}

export type AuthMethod = 'code' | 'password'

export interface Session {
  idHash: string
  userId: number
  authMethod: AuthMethod | string
  createdAt: number
  expiresAt: number
  lastSeenAt: number
  deviceId: string | null
  userAgent: string | null
  ipHash: string | null
}

export interface Comment {
  id: number
  pagePath: string
  anchor: string
  quote: string | null
  blockText: string | null
  parentId: number | null
  userId: number
  body: string
  status: CommentStatus
  isAdmin: boolean
  locale: string
  createdAt: number
  moderatedAt: number | null
  moderatedBy: number | null
  ipHash: string | null
}

export type NewComment = Omit<Comment, 'id'>

export interface UserRepository {
  findById(id: number): Promise<User | null>
  findByIds(ids: number[]): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  /** returns the user with this email, creating it if needed (idempotent under races) */
  ensure(email: string, now: number): Promise<User>
  recordLogin(id: number, at: number): Promise<void>
  setPasswordHash(id: number, hash: string): Promise<void>
  setDisplayName(id: number, name: string | null): Promise<void>
  setBlocked(id: number, blocked: boolean): Promise<void>
}

export interface LoginCodeRepository {
  create(code: LoginCode): Promise<void>
  findById(id: string): Promise<LoginCode | null>
  /** newest unconsumed code for the email, expired or not */
  latestUnconsumed(email: string): Promise<LoginCode | null>
  /** unconsumed, unexpired codes with attempts below the cap, newest first */
  findUsable(email: string, now: number, maxAttempts: number, limit: number): Promise<LoginCode[]>
  anyCreatedSince(email: string, since: number): Promise<boolean>
  incrementAttempts(ids: string[]): Promise<void>
  /** marks one code consumed; true only for the caller that flipped it (single use under races) */
  consume(id: string, at: number): Promise<boolean>
  consumeAllFor(email: string, at: number): Promise<void>
  delete(id: string): Promise<void>
  deleteExpiredBefore(time: number): Promise<void>
}

export interface SessionRepository {
  create(session: Session): Promise<void>
  findByIdHash(idHash: string): Promise<Session | null>
  touch(idHash: string, lastSeenAt: number, expiresAt: number): Promise<void>
  delete(idHash: string): Promise<void>
  deleteForUser(userId: number): Promise<void>
  deleteExpired(now: number): Promise<void>
}

export interface RateLimitRepository {
  count(bucket: string, since: number): Promise<number>
  hit(buckets: string[], at: number): Promise<void>
  clear(bucket: string): Promise<void>
  pruneBefore(time: number): Promise<void>
}

export interface CommentQuery {
  status?: CommentStatus
  pagePath?: string
  order: 'asc' | 'desc'
  limit: number
  offset: number
}

export interface CommentRepository {
  create(comment: NewComment): Promise<number>
  findById(id: number): Promise<Comment | null>
  findByIds(ids: number[]): Promise<Comment[]>
  /** approved comments of a page plus the viewer's own pending ones, oldest first */
  listVisible(pagePath: string, viewerId: number | null, limit: number): Promise<Comment[]>
  query(q: CommentQuery): Promise<Comment[]>
  existsSince(userId: number, body: string, since: number): Promise<boolean>
  countByStatus(): Promise<Record<CommentStatus, number>>
  pages(limit: number): Promise<{ path: string; total: number; pending: number }[]>
  /** false when no such comment */
  setStatus(id: number, status: CommentStatus, at: number, by: number): Promise<boolean>
  /** deletes the comment and its replies; false when no such comment */
  delete(id: number): Promise<boolean>
}

export interface SecretRepository {
  /** the stored value for name, storing `value` first if none exists (first writer wins) */
  getOrCreate(name: string, value: string): Promise<string>
}

/** Everything the comments system persists. One adapter = one implementation of this. */
export interface Storage {
  readonly driver: string
  users: UserRepository
  codes: LoginCodeRepository
  sessions: SessionRepository
  rateLimits: RateLimitRepository
  comments: CommentRepository
  secrets: SecretRepository
  close(): void
}

export interface StorageOptions {
  /** connection string; each adapter documents its own format and default */
  url?: string
  env?: NodeJS.ProcessEnv
}

export type StorageFactory = (opts: StorageOptions) => Promise<Storage>
