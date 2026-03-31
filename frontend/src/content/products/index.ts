import { buildLocalePath, type Locale } from '../../i18n/locales'
import { enProductTaxonomy } from './en'
import { zhProductTaxonomy } from './zh'
import type { ProductFamilyKey } from './types'

const productTaxonomyMap = {
  zh: zhProductTaxonomy,
  en: enProductTaxonomy,
}

export const productFamilyKeys: ProductFamilyKey[] = [
  'industrial-sensors',
  'safety-protection-sensors',
  'laser-ranging-sensors',
  'linear-guides-and-modules',
  'pneumatic-components',
]

export function getProductTaxonomy(locale: Locale) {
  return productTaxonomyMap[locale]
}

export function normalizeProductFamilyKey(
  value?: string | null,
): ProductFamilyKey | null {
  if (!value) {
    return null
  }

  return productFamilyKeys.includes(value as ProductFamilyKey)
    ? (value as ProductFamilyKey)
    : null
}

export function getProductFamily(locale: Locale, key: ProductFamilyKey) {
  return getProductTaxonomy(locale).categories.find((category) => category.key === key)
}

export function buildProductFamilyPath(locale: Locale, key: ProductFamilyKey) {
  return `${buildLocalePath(locale, 'products')}/${key}`
}
