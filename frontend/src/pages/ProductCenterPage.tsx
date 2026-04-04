import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  buildProductFamilyPath,
  getProductFamilyDisplaySummary,
  getProductFamilyDisplayUseCase,
  getProductGroupDisplaySummary,
  getProductTaxonomy,
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

function buildGroupSeriesPreview(series: string[], locale: 'zh' | 'en') {
  const preview = series.slice(0, 3).join(' / ')

  if (series.length <= 3) {
    return preview
  }

  return locale === 'zh' ? `${preview} 等` : `${preview} and more`
}

export function ProductCenterPage() {
  const { locale, content } = useSiteShellContext()
  const taxonomy = getProductTaxonomy(locale)
  const heroImage = siteReferenceImages.productCenterHero
  const spotlightFamily = taxonomy.categories[0]
  const totalGroups = taxonomy.categories.reduce(
    (total, family) => total + family.groups.length,
    0,
  )
  const totalSeries = taxonomy.categories.reduce(
    (total, family) => total + getSeriesCount(family),
    0,
  )
  const spotlightGroups = spotlightFamily?.groups.slice(0, 6) ?? []

  return (
    <>
      <section className="product-hero">
        <div className="product-hero__inner">
          <div className="product-hero__intro">
            <div className="product-hero__copy">
              <p className="eyebrow">{taxonomy.eyebrow}</p>
              <h1>{taxonomy.title}</h1>
              <p className="hero-signature">{content.meta.crossLocaleCompanyName}</p>
              <p className="hero-summary">{taxonomy.summary}</p>
              <p className="hero-description">{taxonomy.description}</p>
              <div className="hero-actions">
                <Link
                  className="cta-link"
                  to={buildInquiryPath(locale, {
                    category: 'general-consultation',
                    source: 'product-center',
                  })}
                >
                  <span>{taxonomy.consultCtaLabel}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link className="secondary-link" to={buildLocalePath(locale, 'solutions')}>
                  {content.navigation.find((item) => item.key === 'solutions')?.label}
                </Link>
              </div>
            </div>

            <figure className="surface-media-card surface-media-card--product-sensor">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <span>
                  {locale === 'zh' ? '传感器实物展示' : 'Physical product showcase'}
                </span>
                <strong>{spotlightFamily?.groups[0]?.name ?? spotlightFamily?.name}</strong>
              </figcaption>
            </figure>
          </div>

          <div className="product-hero__stats" aria-hidden="true">
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoriesTitle}</p>
              <p className="product-hero__stat-value">{taxonomy.categories.length}</p>
            </article>
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoryMetaGroupsLabel}</p>
              <p className="product-hero__stat-value">{totalGroups}</p>
            </article>
            <article className="product-hero__stat">
              <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
              <p className="product-hero__stat-value">{totalSeries}</p>
            </article>
          </div>

          <div className="product-hero__family-list">
            {taxonomy.categories.map((family, index) => (
              <Link
                key={family.key}
                className="product-hero__family-link"
                to={buildProductFamilyPath(locale, family.key)}
              >
                <p className="product-hero__family-index">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="product-hero__family-copy">
                  <div className="product-hero__family-header">
                    <h2>{family.name}</h2>
                    <span className="product-source-badge">
                      {getSourceLabel(
                        family.source,
                        taxonomy.sourceSyncedLabel,
                        taxonomy.projectInferredLabel,
                      )}
                    </span>
                  </div>
                  <p className="product-hero__family-summary">
                    {getProductFamilyDisplaySummary(locale, family)}
                  </p>
                  <p className="product-hero__family-meta">
                    {family.groups.length} {taxonomy.categoryMetaGroupsLabel.toLowerCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-spotlight motion-rise motion-delay-1">
          <div className="product-spotlight__copy">
            <p className="eyebrow">{taxonomy.industrialSensorsTitle}</p>
            <h2 className="profile-title">{spotlightFamily?.name}</h2>
            <p className="story-intro">{taxonomy.industrialSensorsSummary}</p>
            <p className="taxonomy-source">
              <span>{taxonomy.sourceLabel}</span>
              <a href={taxonomy.sourceUrl} rel="noreferrer" target="_blank">
                {taxonomy.sourceUrl}
              </a>
            </p>
          </div>

          <div className="product-spotlight__list">
            {spotlightGroups.map((group) => (
              <article key={group.slug} className="product-spotlight__item">
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
                <p className="product-spotlight__series">
                  {buildGroupSeriesPreview(group.series, locale)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-directory">
          <div className="product-directory__intro motion-rise motion-delay-2">
            <p className="eyebrow">{taxonomy.directoryEyebrow}</p>
            <h2 className="profile-title">{taxonomy.directoryTitle}</h2>
            <p className="story-intro">{taxonomy.categoriesSummary}</p>
            <p className="track-detail">{taxonomy.directoryDescription}</p>
          </div>

          <div className="product-family-sheet-list">
            {taxonomy.categories.map((family, index) => (
              <article
                key={family.key}
                className={`product-family-sheet motion-rise motion-delay-${Math.min(index + 3, 5)}`}
              >
                <div className="product-family-sheet__lead">
                  <div className="product-family-sheet__meta">
                    <p className="track-label">
                      {String(index + 1).padStart(2, '0')} / {taxonomy.categoryMetaGroupsLabel}
                    </p>
                    <span className="product-source-badge">
                      {getSourceLabel(
                        family.source,
                        taxonomy.sourceSyncedLabel,
                        taxonomy.projectInferredLabel,
                      )}
                    </span>
                  </div>
                  <h2>{family.name}</h2>
                  <p className="story-intro product-family-sheet__summary">
                    {getProductFamilyDisplaySummary(locale, family)}
                  </p>
                  <p className="product-family-sheet__usecase">
                    {getProductFamilyDisplayUseCase(locale, family)}
                  </p>
                </div>

                <div className="product-family-sheet__body">
                  <div className="product-family-sheet__stats">
                    <article>
                      <p className="track-label">{taxonomy.categoryMetaGroupsLabel}</p>
                      <p className="product-family-sheet__stat-value">{family.groups.length}</p>
                    </article>
                    <article>
                      <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
                      <p className="product-family-sheet__stat-value">
                        {getSeriesCount(family)}
                      </p>
                    </article>
                  </div>

                  <div className="product-family-sheet__group-list">
                    {family.groups.slice(0, 4).map((group) => (
                      <article key={group.slug} className="product-family-sheet__group-item">
                        <h3>{group.name}</h3>
                        <p>{getProductGroupDisplaySummary(locale, group)}</p>
                      </article>
                    ))}
                  </div>

                  <div className="section-actions product-family-sheet__actions">
                    <Link className="cta-link" to={buildProductFamilyPath(locale, family.key)}>
                      <span>{taxonomy.familyCtaLabel}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      className="secondary-link"
                      to={buildInquiryPath(locale, {
                        category: getInquiryCategoryForProductFamily(family.key),
                        source: 'product-center',
                      })}
                    >
                      {taxonomy.familyConsultCtaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta motion-rise motion-delay-4">
          <div>
            <p className="eyebrow">{taxonomy.consultTitle}</p>
            <h2>{taxonomy.consultHeading}</h2>
            <p>{taxonomy.consultBody}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: 'general-consultation',
                source: 'product-center',
              })}
            >
              <span>{taxonomy.consultCtaLabel}</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="secondary-link" to={buildLocalePath(locale, 'about')}>
              {content.navigation.find((item) => item.key === 'about')?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
