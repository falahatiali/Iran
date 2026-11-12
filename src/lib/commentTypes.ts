/** Shapes shared by the comments server and the browser. */
export type CommentStatus = 'pending' | 'approved' | 'rejected'

export interface Me { email: string; displayName: string | null; hasPassword: boolean; isAdmin: boolean }

export interface PublicComment {
  id: number; anchor: string; quote: string | null; blockText: string | null; parentId: number | null
  body: string; status: CommentStatus; isAdmin: boolean; authorName: string | null; createdAt: number; mine: boolean
}

export interface AdminComment {
  id: number; path: string; anchor: string; quote: string | null; blockText: string | null
  parentId: number | null; parentBody: string | null; body: string; status: CommentStatus; isAdmin: boolean; locale: string
  createdAt: number; moderatedAt: number | null; authorEmail: string; authorName: string | null; authorBlocked: boolean; userId: number
}

export type ApiResult<T> = ({ ok: true } & T) | { ok: false; error: string; extra?: Record<string, number | string> }
