/* Versioned schema for the comments database. Append new entries; never edit an applied one.
 * Kept in code (not .sql files) so the bundled server carries it without extra files in the image. */
export const MIGRATIONS: { version: string; up: string }[] = [
  {
    version: 'c0001_comments',
    up: `
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  password_hash TEXT,
  blocked INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  last_login_at INTEGER
);
CREATE TABLE login_codes (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  consumed_at INTEGER,
  ip_hash TEXT
);
CREATE INDEX login_codes_email ON login_codes (email, created_at);
CREATE TABLE sessions (
  id_hash TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  auth_method TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  device_id TEXT,
  user_agent TEXT,
  ip_hash TEXT
);
CREATE INDEX sessions_user ON sessions (user_id);
CREATE INDEX sessions_device ON sessions (device_id);
CREATE TABLE rate_events (
  bucket TEXT NOT NULL,
  at INTEGER NOT NULL
);
CREATE INDEX rate_events_bucket ON rate_events (bucket, at);
CREATE TABLE comments (
  id INTEGER PRIMARY KEY,
  page_path TEXT NOT NULL,
  anchor TEXT NOT NULL DEFAULT '',
  quote TEXT,
  block_text TEXT,
  parent_id INTEGER REFERENCES comments (id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
  is_admin INTEGER NOT NULL DEFAULT 0,
  locale TEXT NOT NULL DEFAULT 'fa',
  created_at INTEGER NOT NULL,
  moderated_at INTEGER,
  moderated_by INTEGER,
  ip_hash TEXT
);
CREATE INDEX comments_page ON comments (page_path, status);
CREATE INDEX comments_status ON comments (status, created_at);
CREATE INDEX comments_parent ON comments (parent_id);
CREATE TABLE app_secrets (
  name TEXT PRIMARY KEY,
  value TEXT NOT NULL
)`,
  },
]
