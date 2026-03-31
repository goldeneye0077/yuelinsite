import type { Locale } from '../../i18n/locales'
import { enProductTaxonomy } from './en'
import { zhProductTaxonomy } from './zh'

const productTaxonomyMap = {
  zh: zhProductTaxonomy,
  en: enProductTaxonomy,
}

export function getProductTaxonomy(locale: Locale) {
  return productTaxonomyMap[locale]
}
