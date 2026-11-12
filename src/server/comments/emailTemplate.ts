/* The one-time code email: Persian first, English below, plain-text twin for every client. */

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
const faDigits = (s: string) => s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])

export function codeEmail(opts: { code: string; minutes: number; siteUrl: string }) {
  const { code, minutes, siteUrl } = opts
  const host = siteUrl.replace(/^https?:\/\//, '')
  const subject = `کد ورود شما: ${code} · Your sign-in code`
  const text = [
    `کد ورود شما به «تاریخ ایران»: ${code}`,
    `این کد تا ${faDigits(String(minutes))} دقیقه معتبر است و فقط یک بار به کار می‌آید.`,
    'اگر شما درخواست نکرده‌اید، این نامه را نادیده بگیرید.',
    '',
    `Your sign-in code for Iran History: ${code}`,
    `It works once and expires in ${minutes} minutes. If you did not ask for it, ignore this email.`,
    '',
    siteUrl,
  ].join('\n')
  const digits = code.split('').map((d) => `<span style="display:inline-block;min-width:34px;margin:0 3px;padding:10px 0;border-radius:10px;background:#0f1f4b;border:1px solid #d9b45a55;color:#f2d68b;font:700 28px/1 Menlo,Consolas,monospace;text-align:center">${esc(d)}</span>`).join('')
  const html = `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#070d1f;color:#f6efe1;font-family:Vazirmatn,Tahoma,Arial,sans-serif">
<div style="display:none;max-height:0;overflow:hidden">کد ورود: ${esc(code)} · Code: ${esc(code)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#070d1f;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#0b1530;border:1px solid #d9b45a40;border-radius:20px;padding:32px 28px">
<tr><td style="text-align:center;font-size:22px;font-weight:900;color:#f2d68b;padding-bottom:6px">تاریخ ایران</td></tr>
<tr><td style="text-align:center;font-size:15px;line-height:1.9;color:#f6efe1cc;padding:8px 0 18px">کد ورود شما:</td></tr>
<tr><td dir="ltr" style="text-align:center;padding-bottom:18px">${digits}</td></tr>
<tr><td style="text-align:center;font-size:14px;line-height:2;color:#f6efe1b3">این کد تا ${esc(faDigits(String(minutes)))} دقیقه معتبر است و فقط یک بار به کار می‌آید.<br>اگر شما درخواست نکرده‌اید، این نامه را نادیده بگیرید.</td></tr>
<tr><td style="padding:22px 0 0"><hr style="border:0;border-top:1px solid #d9b45a33;margin:0"></td></tr>
<tr><td dir="ltr" lang="en" style="text-align:center;font-family:Georgia,'Times New Roman',serif;font-size:14px;line-height:1.8;color:#f6efe1b3;padding-top:16px">Your sign-in code for <b style="color:#f2d68b">Iran History</b> is <b style="color:#f2d68b">${esc(code)}</b>.<br>It works once and expires in ${minutes} minutes. If you did not ask for it, ignore this email.</td></tr>
<tr><td style="text-align:center;padding-top:22px"><a href="${esc(siteUrl)}" style="color:#2ec4b6;font-size:13px;text-decoration:none">${esc(host)}</a></td></tr>
</table></td></tr></table></body></html>`
  return { subject, text, html }
}
