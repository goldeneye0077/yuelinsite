import { ArrowRight, ChevronLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import {
  buildIndustrialSensorGroupPath,
  buildProductFamilyPath,
  getIndustrialSensorFamily,
  getIndustrialSensorGroup,
  getProductTaxonomy,
  normalizeIndustrialSensorGroupSlug,
} from '../content/products'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

export function ProductGroupPage() {
  const { locale } = useSiteShellContext()
  const { groupSlug } = useParams()
  const normalizedGroupSlug = normalizeIndustrialSensorGroupSlug(locale, groupSlug)

  if (!normalizedGroupSlug) {
    return (
      <Navigate
        replace
        to={buildProductFamilyPath(locale, 'industrial-sensors')}
      />
    )
  }

  const taxonomy = getProductTaxonomy(locale)
  const family = getIndustrialSensorFamily(locale)
  const group = getIndustrialSensorGroup(locale, normalizedGroupSlug)

  if (!family || !group) {
    return (
      <Navigate
        replace
        to={buildProductFamilyPath(locale, 'industrial-sensors')}
      />
    )
  }

  const siblingGroups = family.groups.filter((item) => item.slug !== group.slug)

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="product-detail-hero motion-rise motion-delay-1">
          <div className="product-detail-hero__main">
            <Link
              className="product-back-link"
              to={buildProductFamilyPath(locale, 'industrial-sensors')}
            >
              <ChevronLeft size={16} />
              <span>{family.name}</span>
            </Link>
            <p className="eyebrow">{taxonomy.subgroupNavigatorTitle}</p>
            <h1>{group.name}</h1>
            <p className="hero-summary">{group.summary}</p>
            <p className="hero-description">{family.useCase}</p>
            <div className="section-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{taxonomy.consultCtaLabel}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                className="secondary-link"
                to={buildProductFamilyPath(locale, 'industrial-sensors')}
              >
                {taxonomy.backToCatalogLabel}
              </Link>
            </div>
          </div>

          <aside className="product-detail-hero__rail">
            <div className="product-detail-hero__rail-header">
              <span className="product-source-badge">
                {taxonomy.sourceSyncedLabel}
              </span>
            </div>
            <div className="product-detail-hero__stats">
              <article>
                <p className="track-label">{taxonomy.categoryMetaSeriesLabel}</p>
                <p className="product-family-sheet__stat-value">{group.series.length}</p>
              </article>
              <article>
                <p className="track-label">{taxonomy.categoryMetaGroupsLabel}</p>
                <p className="product-family-sheet__stat-value">{family.groups.length}</p>
              </article>
            </div>
            <div className="product-detail-hero__preview">
              {group.series.slice(0, 3).map((series) => (
                <article key={series} className="product-detail-hero__preview-item">
                  <h2>{series}</h2>
                  <p>{taxonomy.listingReadyLabel}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-subgroup-layout">
          <section className="product-subgroup-main motion-rise motion-delay-2">
            <p className="eyebrow">{taxonomy.listingTemplateTitle}</p>
            <h2 className="profile-title">{group.name}</h2>
            <p className="story-intro">{taxonomy.listingTemplateSummary}</p>
            <div className="product-series-list">
              {group.series.map((series, index) => (
                <article key={series} className="product-series-row">
                  <p className="product-series-row__index">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="product-series-row__name">
                    <h3>{series}</h3>
                    <p>{group.summary}</p>
                  </div>
                  <div className="product-series-row__meta">
                    <div>
                      <p className="track-label">{taxonomy.listingFocusLabel}</p>
                      <p>{family.useCase}</p>
                    </div>
                    <div>
                      <p className="track-label">{taxonomy.listingStatusLabel}</p>
                      <p>{taxonomy.listingReadyLabel}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="product-subgroup-sidebar motion-rise motion-delay-3">
            <div className="product-subgroup-sidebar__block">
              <p className="eyebrow">{taxonomy.subgroupNavigatorTitle}</p>
              <p className="story-intro">{taxonomy.subgroupNavigatorSummary}</p>
            </div>
            <div className="product-subnav product-subnav--stacked">
              {family.groups.map((item) => (
                <Link
                  key={item.slug}
                  className={`product-subnav__item${item.slug === group.slug ? ' product-subnav__item--active' : ''}`}
                  to={buildIndustrialSensorGroupPath(locale, item.slug)}
                >
                  <span className="product-subnav__title">{item.name}</span>
                  <span className="product-subnav__meta">
                    {item.series.length} {taxonomy.categoryMetaSeriesLabel.toLowerCase()}
                  </span>
                </Link>
              ))}
            </div>
            <p className="taxonomy-source">
              <span>{taxonomy.sourceLabel}</span>
              <a href={taxonomy.sourceUrl} rel="noreferrer" target="_blank">
                {taxonomy.sourceUrl}
              </a>
            </p>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-related motion-rise motion-delay-4">
          <div className="product-related__copy">
            <p className="eyebrow">{taxonomy.siblingGroupsTitle}</p>
            <h2 className="profile-title">{family.name}</h2>
            <p className="story-intro">{taxonomy.siblingGroupsSummary}</p>
          </div>

          <div className="product-related__list">
            {siblingGroups.map((item) => (
              <Link
                key={item.slug}
                className="product-related__item"
                to={buildIndustrialSensorGroupPath(locale, item.slug)}
              >
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
