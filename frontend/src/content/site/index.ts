import type { Locale } from '../../i18n/locales'
import { enSiteContent } from './en'
import { zhSiteContent } from './zh'

const siteContentMap = {
  zh: zhSiteContent,
  en: enSiteContent,
}

export function getSiteContent(locale: Locale) {
  return siteContentMap[locale]
}
