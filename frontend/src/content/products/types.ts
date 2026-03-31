import type { Locale } from '../../i18n/locales'

export type ProductSourceType = 'reference-synced' | 'project-inferred'

export type ProductFamilyKey =
  | 'industrial-sensors'
  | 'safety-protection-sensors'
  | 'laser-ranging-sensors'
  | 'linear-guides-and-modules'
  | 'pneumatic-components'

export type ProductGroup = {
  slug: string
  name: string
  summary: string
  source: ProductSourceType
  series: string[]
}

export type ProductFamily = {
  key: ProductFamilyKey
  name: string
  summary: string
  useCase: string
  source: ProductSourceType
  groups: ProductGroup[]
}

export type ProductTaxonomyContent = {
  locale: Locale
  eyebrow: string
  title: string
  summary: string
  sourceLabel: string
  sourceUrl: string
  categoriesTitle: string
  categoriesSummary: string
  industrialSensorsTitle: string
  industrialSensorsSummary: string
  categories: ProductFamily[]
}
