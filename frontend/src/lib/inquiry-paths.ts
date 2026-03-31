import type { ProductFamilyKey } from '../content/products/types'
import { buildLocalePath, type Locale } from '../i18n/locales'

export type InquiryCategory =
  | 'industrial-sensors'
  | 'safety-protection-sensors'
  | 'laser-ranging-sensors'
  | 'linear-guides-modules'
  | 'pneumatic-components'
  | 'industrial-automation-solution'
  | 'software-development'
  | 'technical-integration'
  | 'general-consultation'

export type InquirySource =
  | 'home'
  | 'about'
  | 'product-center'
  | 'product-family'
  | 'industrial-sensor-group'
  | 'solutions'
  | 'support'

type InquiryPathOptions = {
  category?: InquiryCategory
  source?: InquirySource
}

export function buildInquiryPath(locale: Locale, options: InquiryPathOptions = {}) {
  const params = new URLSearchParams()

  if (options.category) {
    params.set('category', options.category)
  }

  if (options.source) {
    params.set('source', options.source)
  }

  const basePath = buildLocalePath(locale, 'contact')
  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}

export function getInquiryCategoryForProductFamily(
  familyKey: ProductFamilyKey,
): InquiryCategory {
  const categoryMap: Record<ProductFamilyKey, InquiryCategory> = {
    'industrial-sensors': 'industrial-sensors',
    'safety-protection-sensors': 'safety-protection-sensors',
    'laser-ranging-sensors': 'laser-ranging-sensors',
    'linear-guides-and-modules': 'linear-guides-modules',
    'pneumatic-components': 'pneumatic-components',
  }

  return categoryMap[familyKey]
}

export function getInquiryCategoryForSolutionAnchor(anchor: string): InquiryCategory {
  switch (anchor) {
    case 'industrial-automation':
      return 'industrial-automation-solution'
    case 'software-development':
      return 'software-development'
    case 'technical-integration':
      return 'technical-integration'
    default:
      return 'general-consultation'
  }
}
