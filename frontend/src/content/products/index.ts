import { fiberSensorVisuals } from '../media/referenceAssets'
import { buildLocalePath, type Locale } from '../../i18n/locales'
import { enProductTaxonomy } from './en'
import { zhProductTaxonomy } from './zh'
import type { ProductFamilyKey, RepresentativeProduct } from './types'

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

export function getIndustrialSensorFamily(locale: Locale) {
  return getProductFamily(locale, 'industrial-sensors')
}

export function normalizeIndustrialSensorGroupSlug(
  locale: Locale,
  value?: string | null,
) {
  if (!value) {
    return null
  }

  const family = getIndustrialSensorFamily(locale)
  return family?.groups.some((group) => group.slug === value) ? value : null
}

export function getIndustrialSensorGroup(locale: Locale, slug: string) {
  return getIndustrialSensorFamily(locale)?.groups.find((group) => group.slug === slug)
}

export function buildIndustrialSensorGroupPath(locale: Locale, slug: string) {
  return `${buildProductFamilyPath(locale, 'industrial-sensors')}/${slug}`
}

function buildFiberSensorProducts(locale: Locale, status: string) {
  return fiberSensorVisuals.map((item) => ({
    id: item.id,
    title: item.title[locale],
    summary: item.summary[locale],
    highlights: item.highlights[locale],
    focus: item.application[locale],
    inquiryHint: item.inquiryHint[locale],
    status,
    seriesCode: item.seriesCode[locale],
    application: item.application[locale],
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt[locale],
    sourceUrl: item.sourceUrl,
  }))
}

export function buildRepresentativeProducts(
  locale: Locale,
  groupSlug: string,
): RepresentativeProduct[] {
  const taxonomy = getProductTaxonomy(locale)
  const family = getIndustrialSensorFamily(locale)
  const group = getIndustrialSensorGroup(locale, groupSlug)

  if (!taxonomy || !family || !group) {
    return []
  }

  if (groupSlug === 'fiber-sensors') {
    return buildFiberSensorProducts(locale, taxonomy.listingReadyLabel)
  }

  return group.series.map((series, index) => {
    const order = index + 1

    if (locale === 'zh') {
      return {
        id: `${group.slug}-${order}`,
        title: series,
        summary: `${series} 作为 ${group.name} 下的代表系列，适合先做选型沟通、安装空间判断与接口预确认。`,
        highlights: [
          `聚焦 ${group.name} 的典型部署场景`,
          `延续“${family.useCase}”这条应用主线`,
          '后续可继续补型号、参数、图片与下载资料',
        ],
        focus: family.useCase,
        inquiryHint: '沟通时可先说明检测对象、安装位置和现有控制接口。',
        status: taxonomy.listingReadyLabel,
      }
    }

    return {
      id: `${group.slug}-${order}`,
      title: series,
      summary: `${series} is treated as a representative series inside ${group.name}, ready for early selection discussions, mounting checks, and interface alignment.`,
      highlights: [
        `Focused on the core ${group.name.toLowerCase()} deployment path`,
        `Stays aligned with ${family.useCase.toLowerCase()}`,
        'Ready for later model, spec, image, and download enrichment',
      ],
      focus: family.useCase,
      inquiryHint:
        'Start the discussion with the target object, mounting position, and current control interface.',
      status: taxonomy.listingReadyLabel,
    }
  })
}
