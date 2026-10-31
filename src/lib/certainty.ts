import type { Certainty } from '../data/featured/types'
import type { Locale } from './i18n'

/**
 * Map-card certainty labels. "Secure" means the event is well attested, whether by an ancient text or by
 * the modern scholarly works we cite; it must not claim a contemporary source, because most citations are modern.
 */
export const CERTAINTY_LABEL: Record<Locale, Record<Certainty, string>> = {
  fa: { secure: 'استوار (به‌خوبی گواهی‌شده)', probable: 'محتمل', disputed: 'محل بحث' },
  en: { secure: 'Secure (well attested)', probable: 'Probable', disputed: 'Disputed' },
}
