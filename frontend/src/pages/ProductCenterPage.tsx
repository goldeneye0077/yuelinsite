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
  const pageCopy =
    locale === 'zh'
      ? {
          eyebrow: '产品中心',
          title: '工业传感与执行元件',
          summary: '五大一级类目录，覆盖工业传感器细分与自动化执行元件。',
          description: '先判断产品方向，再进入分类、子类与咨询沟通。',
          directoryEyebrow: '一级分类总览',
          directoryTitle: '按一级类判断产品范围',
          categoriesSummary: '五大一级类按跃鳞科技业务组织，工业传感器细分对齐参考目录。',
          directoryDescription: '先看分类边界，再进入子类、系列与咨询入口。',
          industrialSensorsTitle: '工业传感器细分',
          industrialSensorsSummary: '承接最成熟的传感器分组，便于先看方向再进系列。',
          consultTitle: '需要选型支持',
          consultHeading: '先确认场景，再收敛型号',
          consultBody: '适合围绕应用场景、设备结构或替换需求先发起沟通。',
        }
      : {
          eyebrow: taxonomy.eyebrow,
          title: taxonomy.title,
          summary: taxonomy.summary,
          description: taxonomy.description,
          directoryEyebrow: taxonomy.directoryEyebrow,
          directoryTitle: taxonomy.directoryTitle,
          categoriesSummary: taxonomy.categoriesSummary,
          directoryDescription: taxonomy.directoryDescription,
          industrialSensorsTitle: taxonomy.industrialSensorsTitle,
          industrialSensorsSummary: taxonomy.industrialSensorsSummary,
          consultTitle: taxonomy.consultTitle,
          consultHeading: taxonomy.consultHeading,
          consultBody: taxonomy.consultBody,
        }
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
              <p className="eyebrow">{pageCopy.eyebrow}</p>
              <h1>{pageCopy.title}</h1>
              <p className="hero-summary">{pageCopy.summary}</p>
              <p className="hero-description">{pageCopy.description}</p>
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
            <p className="eyebrow">{pageCopy.industrialSensorsTitle}</p>
            <h2 className="profile-title">{spotlightFamily?.name}</h2>
            <p className="story-intro">{pageCopy.industrialSensorsSummary}</p>
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
            <p className="eyebrow">{pageCopy.directoryEyebrow}</p>
            <h2 className="profile-title">{pageCopy.directoryTitle}</h2>
            <p className="story-intro">{pageCopy.categoriesSummary}</p>
            <p className="track-detail">{pageCopy.directoryDescription}</p>
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
            <p className="eyebrow">{pageCopy.consultTitle}</p>
            <h2>{pageCopy.consultHeading}</h2>
            <p>{pageCopy.consultBody}</p>
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
            <Link className="secondary-link" to={buildLocalePath(locale, 'support')}>
              {content.navigation.find((item) => item.key === 'support')?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
