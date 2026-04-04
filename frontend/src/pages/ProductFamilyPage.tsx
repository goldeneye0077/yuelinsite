import { ArrowRight, ChevronLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import {
  buildProductFamilyPath,
  buildProductGroupPath,
  buildRepresentativeProducts,
  getProductFamily,
  getProductFamilyDisplaySummary,
  getProductFamilyDisplayUseCase,
  getProductGroupDisplaySummary,
  getProductTaxonomy,
  normalizeProductFamilyKey,
} from '../content/products'
import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import type { ProductFamily, ProductSourceType } from '../content/products/types'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import {
  buildInquiryPath,
  getInquiryCategoryForProductFamily,
} from '../lib/inquiry-paths'

function getSourceLabel(
  source: ProductSourceType,
  syncedLabel: string,
  inferredLabel: string,
) {
  return source === 'reference-synced' ? syncedLabel : inferredLabel
}

function getSeriesCount(family: ProductFamily) {
  return family.groups.reduce((total, group) => total + group.series.length, 0)
}

export function ProductFamilyPage() {
  const { locale, content } = useSiteShellContext()
  const { familyKey } = useParams()
  const normalizedKey = normalizeProductFamilyKey(familyKey)

  if (!normalizedKey) {
    return <Navigate replace to={buildLocalePath(locale, 'products')} />
  }

  const taxonomy = getProductTaxonomy(locale)
  const family = getProductFamily(locale, normalizedKey)

  if (!family) {
    return <Navigate replace to={buildLocalePath(locale, 'products')} />
  }

  const relatedFamilies = taxonomy.categories.filter(
    (category) => category.key !== family.key,
  )
  const inquiryCategory = getInquiryCategoryForProductFamily(family.key)
  const familyPreviewProducts = family.groups
    .map((group) => {
      const [firstProduct] = buildRepresentativeProducts(locale, family.key, group.slug)
      return firstProduct
        ? {
            group,
            product: firstProduct,
          }
        : null
    })
    .filter(
      (
        entry,
      ): entry is {
        group: ProductFamily['groups'][number]
        product: ReturnType<typeof buildRepresentativeProducts>[number]
      } => entry !== null,
    )

  const fallbackHeroImage =
    family.key === 'industrial-sensors'
      ? siteReferenceImages.industrialSensorsFamily
      : siteReferenceImages.productCenterHero

  const heroProduct = familyPreviewProducts[0]

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="product-detail-hero motion-rise motion-delay-1">
          <div className="product-detail-hero__main">
            <Link className="product-back-link" to={buildLocalePath(locale, 'products')}>
              <ChevronLeft size={16} />
              <span>{taxonomy.backToCatalogLabel}</span>
            </Link>
            <p className="eyebrow">{content.productCenter.title}</p>
            <h1>{family.name}</h1>
            <p className="hero-summary">{getProductFamilyDisplaySummary(locale, family)}</p>
            <p className="hero-description">{getProductFamilyDisplayUseCase(locale, family)}</p>
            <div className="section-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: inquiryCategory,
                  source: 'product-family',
                })}
              >
                <span>{taxonomy.consultCtaLabel}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {taxonomy.backToCatalogLabel}
              </Link>
            </div>
          </div>

          <aside className="product-detail-hero__rail">
            {heroProduct?.product.imageSrc ? (
              <figure className="surface-media-card surface-media-card--hero">
                <img
                  alt={heroProduct.product.imageAlt ?? heroProduct.product.title}
                  className="surface-media-card__image"
                  src={heroProduct.product.imageSrc}
                />
                <figcaption className="surface-media-card__caption">
                  <span>{taxonomy.categoriesTitle}</span>
                  <strong>{heroProduct.product.seriesCode ?? family.name}</strong>
                </figcaption>
              </figure>
            ) : (
              <figure className="surface-media-card surface-media-card--hero">
                <img
                  alt={getLocalizedAlt(fallbackHeroImage, locale)}
                  className="surface-media-card__image"
                  src={fallbackHeroImage.src}
                />
                <figcaption className="surface-media-card__caption">
                  <span>{taxonomy.categoriesTitle}</span>
                  <strong>{family.name}</strong>
                </figcaption>
              </figure>
            )}
            <div className="product-detail-hero__rail-header">
              <span className="product-source-badge">
                {getSourceLabel(
                  family.source,
                  taxonomy.sourceSyncedLabel,
                  taxonomy.projectInferredLabel,
                )}
              </span>
            </div>
            <div className="product-detail-hero__stats">
              <article>
                <p className="track-label">{taxonomy.categoryMetaGroupsLabel}</p>
                <p className="product-family-sheet__stat-value">{family.groups.length}</p>
              </article>
              <article>
                <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
                <p className="product-family-sheet__stat-value">{getSeriesCount(family)}</p>
              </article>
            </div>
            <div className="product-detail-hero__preview product-detail-hero__preview--media">
              {familyPreviewProducts.slice(0, 3).map((entry) => (
                <Link
                  key={entry.group.slug}
                  className="product-detail-hero__preview-item"
                  to={buildProductGroupPath(locale, family.key, entry.group.slug)}
                >
                  {entry.product.imageSrc ? (
                    <div className="product-detail-hero__preview-thumb">
                      <img alt="" src={entry.product.imageSrc} />
                    </div>
                  ) : null}
                  <div className="product-detail-hero__preview-copy">
                    <h2>{entry.group.name}</h2>
                    <p>
                      {entry.product.seriesCode &&
                      entry.product.seriesCode !== entry.product.title
                        ? entry.product.seriesCode
                        : entry.product.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-detail-grid">
          <section className="product-detail-section motion-rise motion-delay-2">
            <p className="eyebrow">{taxonomy.subgroupNavigatorTitle}</p>
            <p className="story-intro">{taxonomy.subgroupNavigatorSummary}</p>
            <div className="product-detail-group-list">
              {family.groups.map((group) => {
                const [groupProduct] = buildRepresentativeProducts(locale, family.key, group.slug)

                return (
                  <article
                    key={group.slug}
                    className={`product-detail-group${groupProduct?.imageSrc ? ' product-detail-group--media' : ''}`}
                  >
                    {groupProduct?.imageSrc ? (
                      <div className="product-detail-group__media">
                        <img alt={groupProduct.imageAlt ?? groupProduct.title} src={groupProduct.imageSrc} />
                      </div>
                    ) : null}
                    <div className="product-detail-group__content">
                      <div className="product-detail-group__header">
                        <h2>{group.name}</h2>
                        <span className="product-source-badge">
                          {getSourceLabel(
                            group.source,
                            taxonomy.sourceSyncedLabel,
                            taxonomy.projectInferredLabel,
                          )}
                        </span>
                      </div>
                      <p className="story-intro">{getProductGroupDisplaySummary(locale, group)}</p>
                      <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
                      <p className="product-detail-group__series">
                        {group.series.join(' / ')}
                      </p>
                      {groupProduct?.application ? (
                        <div className="product-detail-group__meta">
                          <div>
                            <p className="track-label">{taxonomy.listingFocusLabel}</p>
                            <p>{groupProduct.application}</p>
                          </div>
                          {groupProduct.sourceUrl ? (
                            <a
                              className="product-inline-link"
                              href={groupProduct.sourceUrl}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <span>{locale === 'zh' ? '参考来源' : 'Reference'}</span>
                              <ExternalLink size={15} />
                            </a>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="product-detail-group__actions">
                        <Link
                          className="product-inline-link"
                          to={buildProductGroupPath(locale, family.key, group.slug)}
                        >
                          <span>{taxonomy.subgroupCtaLabel}</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          <aside className="product-detail-sidebar motion-rise motion-delay-3">
            <p className="eyebrow">{taxonomy.consultTitle}</p>
            <p className="story-intro">{taxonomy.consultBody}</p>
            <div className="placeholder-facts">
              {content.aboutPage.facts.slice(0, 3).map((fact) => (
                <article key={fact.label} className="placeholder-fact">
                  <p className="track-label">{fact.label}</p>
                  <p className="placeholder-fact__value">{fact.value}</p>
                </article>
              ))}
            </div>
            <div className="section-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: inquiryCategory,
                  source: 'product-family',
                })}
              >
                <span>{taxonomy.consultCtaLabel}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'support')}>
                {content.navigation.find((item) => item.key === 'support')?.label}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-related motion-rise motion-delay-4">
          <div className="product-related__copy">
            <p className="eyebrow">{taxonomy.relatedFamiliesTitle}</p>
            <h2 className="profile-title">{content.productCenter.title}</h2>
            <p className="story-intro">{taxonomy.relatedFamiliesSummary}</p>
          </div>

          <div className="product-related__list">
            {relatedFamilies.map((category) => (
              <Link
                key={category.key}
                className="product-related__item"
                to={buildProductFamilyPath(locale, category.key)}
              >
                <h3>{category.name}</h3>
                <p>{getProductFamilyDisplaySummary(locale, category)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
