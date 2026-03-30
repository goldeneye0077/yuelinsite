export const SUPPORTED_LOCALES = ['zh', 'en'] as const
export const DEFAULT_LOCALE = 'zh'

export type Locale = (typeof SUPPORTED_LOCALES)[number]
export type SectionRouteKey =
  | 'home'
  | 'products'
  | 'solutions'
  | 'support'
  | 'about'
  | 'contact'

export const SECTION_ROUTE_KEYS: SectionRouteKey[] = [
  'home',
  'products',
  'solutions',
  'support',
  'about',
  'contact',
]

const sectionPathMap: Record<SectionRouteKey, string> = {
  home: '',
  products: 'products',
  solutions: 'solutions',
  support: 'support',
  about: 'about',
  contact: 'contact',
}

export function normalizeLocale(locale?: string | null): Locale | null {
  if (!locale) {
    return null
  }

  return SUPPORTED_LOCALES.includes(locale as Locale) ? (locale as Locale) : null
}

export function buildLocalePath(
  locale: Locale,
  section: SectionRouteKey = 'home',
): string {
  const suffix = sectionPathMap[section]
  return suffix ? `/${locale}/${suffix}` : `/${locale}`
}

export function swapLocaleInPathname(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  const currentLocale = normalizeLocale(segments[0])

  if (currentLocale) {
    const [, ...rest] = segments
    return rest.length > 0 ? `/${targetLocale}/${rest.join('/')}` : `/${targetLocale}`
  }

  return `/${targetLocale}`
}
