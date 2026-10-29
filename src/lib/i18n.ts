export type Locale = 'fa' | 'en'

export function localeFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'fa'
}

export function altCylinderPath(locale: Locale): string {
  return locale === 'fa' ? '/en/cylinder' : '/cylinder'
}

export function altArchivesPath(locale: Locale): string {
  return locale === 'fa' ? '/en/archives' : '/archives'
}
