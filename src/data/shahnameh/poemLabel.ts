/** Format a couplet count in Persian digits. */
export function formatCoupletCount(count: number): string {
  return count.toLocaleString('fa-IR')
}

/**
 * Label for the full-poem tab, e.g. «شعر کامل · ۳۸ بیت».
 *
 * The separator is a middle dot followed by a right-to-left mark so that, in
 * an RTL paragraph, the dot cannot sit on the left of the digits and look
 * like a Persian zero (۳۸ · → ۳۸۰).
 */
export function poemTabLabel(count: number): string {
  return `شعر کامل \u00b7\u200f ${formatCoupletCount(count)} بیت`
}

/** Call-to-action line that uses the same bidi-safe separator. */
export function poemCtaLabel(count: number): string {
  return `شعر کامل را بخوانید \u00b7\u200f ${formatCoupletCount(count)} بیت`
}
