import { ArrowRight, ChevronLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import {
  buildIndustrialSensorGroupPath,
  buildProductFamilyPath,
  getProductFamily,
  getProductTaxonomy,
  normalizeProductFamilyKey,
} from '../content/products'
import type { ProductFamily, ProductSourceType } from '../content/products/types'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

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
  const isIndustrialSensorFamily = family.key === 'industrial-sensors'

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
            <p className="hero-summary">{family.summary}</p>
            <p className="hero-description">{family.useCase}</p>
            <div className="section-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{taxonomy.consultCtaLabel}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {taxonomy.backToCatalogLabel}
              </Link>
            </div>
          </div>

          <aside className="product-detail-hero__rail">
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
            <div className="product-detail-hero__preview">
              {family.groups.slice(0, 3).map((group) => (
                <article key={group.slug} className="product-detail-hero__preview-item">
                  <h2>{group.name}</h2>
                  <p>{group.summary}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-detail-grid">
          <section className="product-detail-section motion-rise motion-delay-2">
            <p className="eyebrow">
              {isIndustrialSensorFamily
                ? taxonomy.subgroupNavigatorTitle
                : taxonomy.categoriesTitle}
            </p>
            {isIndustrialSensorFamily ? (
              <p className="story-intro">{taxonomy.subgroupNavigatorSummary}</p>
            ) : null}
            {isIndustrialSensorFamily ? (
              <div className="product-subnav">
                {family.groups.map((group) => (
                  <Link
                    key={group.slug}
                    className="product-subnav__item"
                    to={buildIndustrialSensorGroupPath(locale, group.slug)}
                  >
                    <span className="product-subnav__title">{group.name}</span>
                    <span className="product-subnav__meta">
                      {group.series.length} {taxonomy.categoryMetaSeriesLabel.toLowerCase()}
                    </span>
                  </Link>
                ))}
              </div>
            ) : null}
            <div className="product-detail-group-list">
              {family.groups.map((group) => (
                <article key={group.slug} className="product-detail-group">
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
                  <p className="story-intro">{group.summary}</p>
                  <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
                  <p className="product-detail-group__series">
                    {group.series.join(' / ')}
                  </p>
                  {isIndustrialSensorFamily ? (
                    <div className="product-detail-group__actions">
                      <Link
                        className="product-inline-link"
                        to={buildIndustrialSensorGroupPath(locale, group.slug)}
                      >
                        <span>{taxonomy.subgroupCtaLabel}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  ) : null}
                </article>
              ))}
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
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
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
                <p>{category.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
