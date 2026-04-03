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

export type RepresentativeProduct = {
  id: string
  title: string
  summary: string
  highlights: string[]
  focus: string
  inquiryHint: string
  status: string
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
  description: string
  sourceLabel: string
  sourceUrl: string
  categoriesTitle: string
  directoryEyebrow: string
  directoryTitle: string
  directoryDescription: string
  categoriesSummary: string
  industrialSensorsTitle: string
  industrialSensorsSummary: string
  familyCtaLabel: string
  familyConsultCtaLabel: string
  consultTitle: string
  consultHeading: string
  consultBody: string
  consultCtaLabel: string
  backToCatalogLabel: string
  relatedFamiliesTitle: string
  relatedFamiliesSummary: string
  categoryMetaGroupsLabel: string
  categoryMetaSeriesLabel: string
  sourceSyncedLabel: string
  projectInferredLabel: string
  subgroupCtaLabel: string
  subgroupNavigatorTitle: string
  subgroupNavigatorSummary: string
  listingTemplateTitle: string
  listingTemplateSummary: string
  listingSeriesLabel: string
  listingFocusLabel: string
  listingStatusLabel: string
  listingReadyLabel: string
  siblingGroupsTitle: string
  siblingGroupsSummary: string
  featuredProductsTitle: string
  featuredProductsSummary: string
  productHighlightsLabel: string
  productInquiryHintLabel: string
  productCardCtaLabel: string
  productDetailPanelTitle: string
  categories: ProductFamily[]
}
