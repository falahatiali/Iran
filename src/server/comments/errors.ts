/** Every failure a reader can meet has a stable code; the UI turns it into Persian or English. */
export type ErrorCode =
  | 'invalid_email' | 'cooldown' | 'too_many_requests' | 'mail_unavailable' | 'mail_failed'
  | 'invalid_code' | 'expired' | 'too_many_attempts' | 'invalid_credentials' | 'weak_password'
  | 'current_password_required' | 'unauthorized' | 'forbidden' | 'csrf' | 'invalid_input'
  | 'too_short' | 'too_long' | 'duplicate' | 'blocked' | 'not_found' | 'spam'

export class AppError extends Error {
  constructor(public code: ErrorCode, public extra: Record<string, number | string> = {}) { super(code) }
}
