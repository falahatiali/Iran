export type Locale = 'fa' | 'en'

const fa = {
  comment: 'نظر', comments: 'نظرها', addComment: 'نظر بدهید', commentHere: 'نظر دربارهٔ این بخش',
  onThisPart: 'نظر دربارهٔ این بند', pageDiscussion: 'گفت‌وگو دربارهٔ این صفحه',
  pageDiscussionLede: 'اشتباهی دیدید، منبعی سراغ دارید یا پرسشی دارید؟ بنویسید. برای نظر دربارهٔ یک بند یا بیت مشخص، روی آن بروید یا بخشی از متنش را انتخاب کنید.',
  noComments: 'هنوز نظری نیامده. نخستین نفر باشید.', inlineCount: (n: string) => `${n} نظر روی بندهای این صفحه`,
  placeholder: 'نظر، اصلاح یا منبع خود را بنویسید…', replyPlaceholder: 'پاسخ شما…',
  send: 'ارسال نظر', sendReply: 'ارسال پاسخ', reply: 'پاسخ', cancel: 'انصراف', close: 'بستن',
  pending: 'در انتظار تأیید', moderationNote: 'نظرها پس از تأیید مدیر برای همه نمایش داده می‌شوند.',
  posted: 'نظر شما ثبت شد و پس از تأیید نمایش داده می‌شود. سپاس!', postedAdmin: 'منتشر شد.',
  reader: 'خواننده', siteTeam: 'تاریخ ایران', you: 'شما',
  displayName: 'نام نمایشی (اختیاری)', displayNameHint: 'این نام کنار نظرتان دیده می‌شود. ایمیل شما هرگز نمایش داده نمی‌شود.',
  quoted: 'بخش انتخاب‌شده', changedPart: 'روی نسخهٔ پیشینِ این صفحه', jump: 'رفتن به این بند',
  signedInAs: 'وارد شده با', logout: 'خروج', setPassword: 'رمز عبور', setPasswordTitle: 'تعیین رمز عبور (اختیاری)',
  setPasswordHint: 'لازم نیست؛ با کد یک‌بار مصرف هم همیشه می‌توانید وارد شوید.', newPassword: 'رمز تازه (دست‌کم ۸ نویسه)',
  currentPassword: 'رمز فعلی', save: 'ذخیره', saved: 'ذخیره شد.',
  authTitle: 'برای فرستادن نظر، ایمیلتان را بنویسید', authLede: 'ثبت‌نام و ورود یکی است: یک ایمیل، یک کد. رمز لازم نیست.',
  email: 'ایمیل', sendCode: 'فرستادن کد ورود', sending: 'در حال فرستادن…',
  withPassword: 'ورود با رمز عبور', withCode: 'ورود با کد یک‌بار مصرف', password: 'رمز عبور', login: 'ورود',
  codeTitle: 'کد را وارد کنید', codeSentTo: 'کدی ۶ رقمی به این نشانی فرستادیم:', codeLabel: 'کد ۶ رقمی',
  codeHint: 'این صفحه منتظر می‌ماند؛ می‌توانید بروید ایمیل را ببینید و برگردید.', verifying: 'در حال بررسی…',
  verify: 'ورود', resend: 'فرستادن دوباره', resendIn: (s: string) => `فرستادن دوباره تا ${s} ثانیهٔ دیگر`,
  changeEmail: 'تغییر ایمیل', expiresIn: (m: string) => `اعتبار کد: ${m}`, openMail: (n: string) => `باز کردن ${n}`,
  checkSpam: 'اگر نامه نرسید، پوشهٔ هرزنامه (Spam) را هم ببینید.', welcome: 'خوش آمدید! وارد شدید.',
  pendingBanner: (e: string) => `کد ورود به ${e} فرستاده شد`, enterCode: 'وارد کردن کد',
  signInUnavailable: 'ورود فعلاً در دسترس نیست. کمی بعد دوباره سر بزنید.',
  hintSelect: 'برای نظر دربارهٔ یک بند، بخشی از متن را انتخاب کنید یا نشانگر را روی آن ببرید.',
  errors: {
    invalid_email: 'این نشانی ایمیل درست به نظر نمی‌رسد.',
    cooldown: 'کمی صبر کنید و دوباره بفرستید.',
    too_many_requests: 'درخواست‌ها زیاد شد. کمی بعد دوباره تلاش کنید.',
    mail_unavailable: 'فرستادن ایمیل فعلاً در دسترس نیست.',
    mail_failed: 'فرستادن ایمیل ناکام ماند. لطفاً دوباره تلاش کنید.',
    invalid_code: 'کد درست نیست.',
    expired: 'این کد دیگر معتبر نیست. کد تازه بفرستید.',
    too_many_attempts: 'تلاش‌های نادرست زیاد شد. چند دقیقه بعد دوباره تلاش کنید.',
    invalid_credentials: 'ایمیل یا رمز عبور درست نیست. می‌توانید با کد یک‌بار مصرف وارد شوید.',
    weak_password: 'رمز باید دست‌کم ۸ نویسه باشد.',
    current_password_required: 'رمز فعلی را درست وارد کنید (یا خارج شوید و با کد وارد شوید).',
    unauthorized: 'لطفاً دوباره وارد شوید.', forbidden: 'دسترسی ندارید.',
    csrf: 'نشست شما تازه شد. لطفاً دوباره تلاش کنید.',
    invalid_input: 'درخواست نامعتبر بود.', too_short: 'نظر خیلی کوتاه است.', too_long: 'نظر خیلی بلند است (حداکثر ۴۰۰۰ نویسه).',
    duplicate: 'همین نظر را پیش‌تر فرستاده‌اید.', blocked: 'امکان فرستادن نظر برای این حساب بسته شده است.',
    not_found: 'پیدا نشد.', spam: 'این نظر شبیه هرزنامه است. پیوندها را کمتر کنید.', server: 'خطایی رخ داد. دوباره تلاش کنید.',
    network: 'اتصال برقرار نشد. اینترنت را بررسی کنید و دوباره بزنید.',
  } as Record<string, string>,
  remaining: (n: string) => `${n} تلاش دیگر باقی است.`,
}

const en: typeof fa = {
  comment: 'Comment', comments: 'Comments', addComment: 'Add a comment', commentHere: 'Comment on this part',
  onThisPart: 'Comments on this passage', pageDiscussion: 'Discussion of this page',
  pageDiscussionLede: 'Spotted a mistake, know a source, or have a question? Write it here. To comment on one paragraph or verse, hover it or select some of its text.',
  noComments: 'No comments yet. Be the first.', inlineCount: (n) => `${n} comments on passages of this page`,
  placeholder: 'Your comment, correction, or source…', replyPlaceholder: 'Your reply…',
  send: 'Post comment', sendReply: 'Post reply', reply: 'Reply', cancel: 'Cancel', close: 'Close',
  pending: 'Awaiting approval', moderationNote: 'Comments appear for everyone once a moderator approves them.',
  posted: 'Thanks! Your comment is saved and will appear once approved.', postedAdmin: 'Published.',
  reader: 'Reader', siteTeam: 'Iran History', you: 'You',
  displayName: 'Display name (optional)', displayNameHint: 'Shown next to your comment. Your email is never shown.',
  quoted: 'Selected text', changedPart: 'On an earlier version of this page', jump: 'Go to this passage',
  signedInAs: 'Signed in as', logout: 'Sign out', setPassword: 'Password', setPasswordTitle: 'Set a password (optional)',
  setPasswordHint: 'Not needed: you can always sign in with a one-time code.', newPassword: 'New password (8+ characters)',
  currentPassword: 'Current password', save: 'Save', saved: 'Saved.',
  authTitle: 'Enter your email to post', authLede: 'Signing up and signing in are the same: one email, one code. No password needed.',
  email: 'Email', sendCode: 'Email me a sign-in code', sending: 'Sending…',
  withPassword: 'Sign in with a password', withCode: 'Sign in with a one-time code', password: 'Password', login: 'Sign in',
  codeTitle: 'Enter your code', codeSentTo: 'We sent a 6-digit code to', codeLabel: '6-digit code',
  codeHint: 'This form will wait for you: go check your email and come back.', verifying: 'Checking…',
  verify: 'Sign in', resend: 'Send again', resendIn: (s) => `Send again in ${s}s`,
  changeEmail: 'Change email', expiresIn: (m) => `Code valid for ${m}`, openMail: (n) => `Open ${n}`,
  checkSpam: 'No email? Check your spam folder too.', welcome: 'Welcome! You are signed in.',
  pendingBanner: (e) => `Sign-in code sent to ${e}`, enterCode: 'Enter code',
  signInUnavailable: 'Sign-in is unavailable right now. Please try again later.',
  hintSelect: 'To comment on one passage, select some of its text or hover it.',
  errors: {
    invalid_email: 'That email address does not look right.', cooldown: 'Wait a moment and send again.',
    too_many_requests: 'Too many requests. Please try again later.', mail_unavailable: 'Email sending is unavailable right now.',
    mail_failed: 'The email could not be sent. Please try again.', invalid_code: 'That code is not right.',
    expired: 'This code is no longer valid. Send a new one.', too_many_attempts: 'Too many wrong tries. Wait a few minutes.',
    invalid_credentials: 'Wrong email or password. You can sign in with a one-time code instead.',
    weak_password: 'Use at least 8 characters.', current_password_required: 'Enter your current password (or sign out and use a code).',
    unauthorized: 'Please sign in again.', forbidden: 'Not allowed.', csrf: 'Your session was refreshed. Please try again.',
    invalid_input: 'Invalid request.', too_short: 'The comment is too short.', too_long: 'The comment is too long (4,000 characters max).',
    duplicate: 'You already posted this comment.', blocked: 'Commenting is closed for this account.', not_found: 'Not found.',
    spam: 'This looks like spam. Use fewer links.', server: 'Something went wrong. Please try again.',
    network: 'Could not connect. Check your connection and try again.',
  },
  remaining: (n) => `${n} tries left.`,
}

export const strings = (l: Locale) => (l === 'en' ? en : fa)
export type Strings = typeof fa

export const num = (n: number, l: Locale) => (l === 'en' ? String(n) : n.toLocaleString('fa-IR'))

export function errorText(t: Strings, l: Locale, r: { error: string; extra?: Record<string, number | string> }): string {
  const base = t.errors[r.error] ?? t.errors.server
  const rem = r.extra?.remaining
  return r.error === 'invalid_code' && typeof rem === 'number' && rem > 0 ? `${base} ${t.remaining(num(rem, l))}` : base
}

export function timeAgo(ts: number, l: Locale): string {
  const s = Math.round((Date.now() - ts) / 1000)
  const rtf = new Intl.RelativeTimeFormat(l === 'en' ? 'en' : 'fa', { numeric: 'auto' })
  if (s < 60) return rtf.format(0, 'second')
  if (s < 3600) return rtf.format(-Math.floor(s / 60), 'minute')
  if (s < 86400) return rtf.format(-Math.floor(s / 3600), 'hour')
  if (s < 30 * 86400) return rtf.format(-Math.floor(s / 86400), 'day')
  return new Intl.DateTimeFormat(l === 'en' ? 'en' : 'fa-IR', { dateStyle: 'medium' }).format(ts)
}
