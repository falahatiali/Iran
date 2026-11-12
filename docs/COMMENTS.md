# Comments • نظرها

Readers can comment on any paragraph, verse, heading, or list item of any page, the way a reviewer leaves a line comment on a pull request, and in a discussion section at the foot of every page. Every reader comment waits for a moderator.

## How it works

- **Anchors.** Pages are not edited. At runtime the browser picks the innermost block (`p, li, h2–h4, blockquote, figcaption, dd, dt, td`) and names it: `data-comment-anchor` when a page sets one, else `i:<id>` for an element with its own id (Shahnameh verses), else `<nearest section id>~<hash of the folded text>`. The comment also stores the selected quote and the block text, so after an edit it is found again by its quote or listed under "on an earlier version of this page". Code: `src/lib/commentAnchors.ts`.
- **Sign-in = sign-up.** Email → 6-digit code → signed in. A password is optional and can be set later. The login form offers both. The pending code request (email, request id, expiry, resend time) and the draft are kept in `localStorage`, so a reload, a tab switch, navigation, or a trip to the mail app never loses the code form or the text. After sign-in the reader is returned to the same page and block, and the comment posts itself.
- **Moderation.** `/admin/comments` (noindex, disallowed in robots.txt). Admins are the emails in `ADMIN_EMAILS` and sign in the same way. Approve, reject, return to pending, delete (with replies), reply as the editor (published at once, and approves the parent), block a reader (ends their sessions).

## Security

| Concern | Measure |
| --- | --- |
| Codes | 6 digits from `crypto.randomInt`, stored only as HMAC-SHA256 (secret pepper + request id + email), 10-minute expiry, single use (atomic `consumed_at`), 5 tries per code, constant-time compare |
| Rate limits (kept in the DB, so they hold across restarts and both blue/green containers) | codes: 60 s resend cooldown, 5/email/h, 15/IP/h, 300/h overall; wrong codes: 10/email/15 min, 40/IP/h; passwords: 5/email/15 min, 20/IP/h; comments: 6/user/10 min, 40/user/day, 20/IP/h |
| Passwords | scrypt (N=2^15, r=8, p=1, 16-byte salt). A missing account costs the same time as a wrong password |
| Sessions | 32-byte random token in an `HttpOnly`, `Secure`, `SameSite=Lax`, `__Host-` cookie. Only its SHA-256 is stored server-side. 180-day sliding expiry. Logout deletes the row |
| CSRF | Double-submit token (`ih_csrf` cookie, `SameSite=Strict`) sent as the `x-ih-csrf` header on every mutation, plus Fetch-Metadata and Origin checks. TanStack Start also refuses cross-site server-function calls |
| Input | NFC, control and bidi-override characters stripped, length limits (comment 4000, quote 500), page path and anchor allow-lists, honeypot field, link cap, duplicate check. Rendered only as React text, never as HTML |
| Privacy | IPs are stored only as keyed hashes. Emails are never shown publicly |
| Mail in production | Without a configured transport, sign-in is disabled. Codes are never logged in production |

**Trusted device (later).** Each browser gets a random `__Host-ih_dev` id (HttpOnly). It is stored with every session (`sessions.device_id`), together with the user agent and the IP hash. That is the hook for "same device, email only" sign-in once it is designed. No fingerprinting is done.

## Data

The data lives in a separate SQLite file, `comments.db`, next to `DATABASE_URL`, which is `/data/comments.db` in the container on the `iran-history-data` volume. Override it with `COMMENTS_DATABASE_URL`. It is kept apart from `iran.db` because the content database is rolled back and reseeded on every build and boot, and readers' data must never be. The schema is versioned in `src/server/comments/storage/sqlite/schema.ts` and applied automatically on first use.

**Backups.** Use `sqlite3 /data/comments.db ".backup /data/comments-$(date +%F).db"` inside the container, or copy the volume.

## Storage adapters

The comment and sign-in code never talks to a database directly. It follows the repository pattern:

- **Contract.** `src/server/comments/storage/types.ts` defines the plain domain types (`User`, `LoginCode`, `Session`, `Comment`) and one repository interface per aggregate: `UserRepository`, `LoginCodeRepository`, `SessionRepository`, `RateLimitRepository`, `CommentRepository` and `SecretRepository`. Together they form `Storage`. Nothing in it mentions SQL, rows or columns.
- **Adapters.** `storage/sqlite/` is the production adapter, and the only folder that holds SQL or imports `@libsql/client`. `storage/memory/` is a Map-based adapter used by the tests.
- **Composition root.** `storage/index.ts` lists the adapters in `ADAPTERS` and picks one. `service.ts` receives a `Storage` through `createService({ storage, mailer, config })` and depends only on the interfaces, which keeps the dependency direction inward (SOLID: dependency inversion, interface segregation). The only place that builds the real thing is `commentsApi.ts`, with `createStorage()`.
- **Proof.** `storage/contract.test.ts` runs the same repository contract against every entry in `ADAPTERS`, and the full service suite (`service.test.ts`) runs once per adapter. The same file fails the build if SQL or a database client appears anywhere in `src/server/comments` or `commentsApi.ts` outside `storage/sqlite/`.

**Switching databases is one line.** Either set the server env var

```
COMMENTS_DB_DRIVER=mongodb
```

or change the default in `src/server/comments/storage/index.ts`:

```ts
export const DEFAULT_DRIVER: DriverName = 'sqlite' // ← the one line
```

An unknown driver name fails at startup with the list of known ones. `memory` keeps nothing across restarts, so it is for tests only.

**Adding an adapter, MongoDB as the example:**

1. Create `src/server/comments/storage/mongodb/index.ts` that exports `createMongoStorage: StorageFactory`. It gets `{ url, env }` (`url` comes from `COMMENTS_DATABASE_URL`) and returns an object that implements `Storage`: the six repositories plus `close()`. Use `storage/memory/index.ts` as the readable reference for the expected behaviour, for example `comments.delete` also removes replies, `codes.consume` succeeds only once, and lists come back in creation order.
2. Add one entry to `ADAPTERS` in `storage/index.ts`: `mongodb: createMongoStorage`.
3. Make `npm test` pass. The contract suite and the service suite pick up the new adapter automatically. If it needs a running server, point the test at it with an env var.
4. Move existing data with a one-off script that reads through one adapter and writes through the other. Both speak the same domain types, so the script needs no SQL.
5. Set `COMMENTS_DB_DRIVER=mongodb` and `COMMENTS_DATABASE_URL=mongodb://…` in the server env, and redeploy.

The service, the API, the UI and the security rules do not change.

## Configuration

See `.env.production.example`. You need `ADMIN_EMAILS`, `MAIL_FROM`, and one mail transport: `smtp` with `SMTP_*`, or `resend` with `RESEND_API_KEY`. `AUTH_SECRET` is optional.
