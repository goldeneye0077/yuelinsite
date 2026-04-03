import { useState } from 'react'
import { ArrowRight, ChevronLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import {
  buildIndustrialSensorGroupPath,
  buildProductFamilyPath,
  buildRepresentativeProducts,
  getIndustrialSensorFamily,
  getIndustrialSensorGroup,
  getProductTaxonomy,
  normalizeIndustrialSensorGroupSlug,
} from '../content/products'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function ProductGroupPage() {
  const { locale } = useSiteShellContext()
  const { groupSlug } = useParams()
  const normalizedGroupSlug = normalizeIndustrialSensorGroupSlug(locale, groupSlug)
  const taxonomy = getProductTaxonomy(locale)
  const family = getIndustrialSensorFamily(locale)
  const group = normalizedGroupSlug
    ? getIndustrialSensorGroup(locale, normalizedGroupSlug)
    : null
  const products = normalizedGroupSlug
    ? buildRepresentativeProducts(locale, normalizedGroupSlug)
    : []
  const [activeProductId, setActiveProductId] = useState<string | null>(null)
  const activeProduct =
    products.find((item) => item.id === activeProductId) ?? products[0] ?? null
  const hasVisualProducts = products.some((item) => item.imageSrc)
  const siblingGroups = family?.groups.filter((item) => item.slug !== group?.slug) ?? []

  if (!normalizedGroupSlug) {
    return (
      <Navigate
        replace
        to={buildProductFamilyPath(locale, 'industrial-sensors')}
      />
    )
  }

  if (!family || !group) {
    return (
      <Navigate
        replace
        to={buildProductFamilyPath(locale, 'industrial-sensors')}
      />
    )
  }

  const applicationLabel = locale === 'zh' ? '应用场景' : 'Application'
  const seriesLabel = locale === 'zh' ? '代表系列' : 'Series'
  const referenceLabel = locale === 'zh' ? '参考来源' : 'Reference'
  const previewTitle = locale === 'zh' ? '代表产品图' : 'Reference products'

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
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'industrial-sensors',
                  source: 'industrial-sensor-group',
                })}
              >
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
            {activeProduct?.imageSrc ? (
              <figure className="surface-media-card surface-media-card--hero product-detail-hero__media">
                <img
                  alt={activeProduct.imageAlt ?? activeProduct.title}
                  className="surface-media-card__image"
                  src={activeProduct.imageSrc}
                />
                <figcaption className="surface-media-card__caption">
                  <span>{previewTitle}</span>
                  <strong>{activeProduct.seriesCode ?? activeProduct.title}</strong>
                </figcaption>
              </figure>
            ) : null}
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
            <div className="product-detail-hero__preview product-detail-hero__preview--media">
              {products.slice(0, 3).map((product) => (
                <button
                  key={product.id}
                  aria-pressed={product.id === activeProduct?.id}
                  className={`product-detail-hero__preview-item${product.id === activeProduct?.id ? ' product-detail-hero__preview-item--active' : ''}`}
                  onClick={() => setActiveProductId(product.id)}
                  type="button"
                >
                  {product.imageSrc ? (
                    <div className="product-detail-hero__preview-thumb">
                      <img alt="" src={product.imageSrc} />
                    </div>
                  ) : null}
                  <div className="product-detail-hero__preview-copy">
                    <h2>{product.title}</h2>
                    <p>{product.seriesCode ?? taxonomy.listingReadyLabel}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="product-subgroup-layout">
          <section className="product-subgroup-main motion-rise motion-delay-2">
            <p className="eyebrow">{taxonomy.featuredProductsTitle}</p>
            <h2 className="profile-title">{group.name}</h2>
            <p className="story-intro">{taxonomy.featuredProductsSummary}</p>
            <div className="product-card-stage">
              <div className="product-card-grid">
                {products.map((product) => (
                  <button
                    aria-pressed={product.id === activeProduct?.id}
                    key={product.id}
                    className={`product-card product-card--media${product.id === activeProduct?.id ? ' product-card--active' : ''}`}
                    onClick={() => setActiveProductId(product.id)}
                    type="button"
                  >
                    {product.imageSrc ? (
                      <div className="product-card__thumb">
                        <img alt="" src={product.imageSrc} />
                      </div>
                    ) : null}
                    <div className="product-card__body">
                      <p className="product-card__status">
                        {product.seriesCode ?? product.status}
                      </p>
                      <h3>{product.title}</h3>
                      <p className="product-card__summary">{product.summary}</p>
                      {product.application ? (
                        <p className="product-card__application">{product.application}</p>
                      ) : null}
                      <p className="product-card__cta">{taxonomy.productCardCtaLabel}</p>
                    </div>
                  </button>
                ))}
              </div>

              {activeProduct ? (
                <aside className="product-card-detail">
                  {activeProduct.imageSrc ? (
                    <figure className="product-card-detail__media">
                      <img
                        alt={activeProduct.imageAlt ?? activeProduct.title}
                        className="product-card-detail__image"
                        src={activeProduct.imageSrc}
                      />
                    </figure>
                  ) : null}
                  <div className="product-card-detail__header">
                    <p className="eyebrow">{taxonomy.productDetailPanelTitle}</p>
                    <h3>{activeProduct.title}</h3>
                    <div className="product-card-detail__badges">
                      {activeProduct.seriesCode ? (
                        <span className="product-source-badge">{activeProduct.seriesCode}</span>
                      ) : null}
                      <span className="product-source-badge">{activeProduct.status}</span>
                    </div>
                  </div>
                  <p className="story-intro">{activeProduct.summary}</p>
                  {activeProduct.application ? (
                    <div className="product-card-detail__block">
                      <p className="track-label">{applicationLabel}</p>
                      <p className="product-card-detail__paragraph">{activeProduct.application}</p>
                    </div>
                  ) : null}
                  <div className="product-card-detail__block">
                    <p className="track-label">{taxonomy.productHighlightsLabel}</p>
                    <div className="product-card-detail__highlights">
                      {activeProduct.highlights.map((highlight) => (
                        <p key={highlight}>{highlight}</p>
                      ))}
                    </div>
                  </div>
                  <div className="product-card-detail__meta">
                    <article>
                      <p className="track-label">{taxonomy.listingFocusLabel}</p>
                      <p>{activeProduct.focus}</p>
                    </article>
                    <article>
                      <p className="track-label">{taxonomy.productInquiryHintLabel}</p>
                      <p>{activeProduct.inquiryHint}</p>
                    </article>
                  </div>
                  {activeProduct.sourceUrl ? (
                    <a
                      className="product-card-detail__source"
                      href={activeProduct.sourceUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{referenceLabel}</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : null}
                  <div className="section-actions">
                    <Link
                      className="cta-link"
                      to={buildInquiryPath(locale, {
                        category: 'industrial-sensors',
                        source: 'industrial-sensor-group',
                      })}
                    >
                      <span>{taxonomy.consultCtaLabel}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      className="secondary-link"
                      to={buildProductFamilyPath(locale, 'industrial-sensors')}
                    >
                      {family.name}
                    </Link>
                  </div>
                </aside>
              ) : null}
            </div>

            <p className="eyebrow">{taxonomy.listingTemplateTitle}</p>
            <p className="story-intro">{taxonomy.listingTemplateSummary}</p>
            <div className="product-series-list">
              {hasVisualProducts
                ? products.map((product, index) => (
                    <article
                      key={product.id}
                      className="product-series-row product-series-row--visual"
                    >
                      <p className="product-series-row__index">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      {product.imageSrc ? (
                        <div className="product-series-row__media">
                          <img alt={product.imageAlt ?? product.title} src={product.imageSrc} />
                        </div>
                      ) : null}
                      <div className="product-series-row__name">
                        <p className="track-label">{seriesLabel}</p>
                        <h3>{product.title}</h3>
                        <p>{product.summary}</p>
                      </div>
                      <div className="product-series-row__meta">
                        <div>
                          <p className="track-label">{taxonomy.listingFocusLabel}</p>
                          <p>{product.application ?? product.focus}</p>
                        </div>
                        <div>
                          <p className="track-label">{taxonomy.productInquiryHintLabel}</p>
                          <p>{product.inquiryHint}</p>
                        </div>
                        {product.sourceUrl ? (
                          <a
                            className="product-inline-link"
                            href={product.sourceUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span>{referenceLabel}</span>
                            <ExternalLink size={15} />
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))
                : group.series.map((series, index) => (
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
