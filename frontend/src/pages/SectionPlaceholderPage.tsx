import { Link } from 'react-router-dom'

import { getProductTaxonomy } from '../content/products'
import { routeContentKeyMap } from '../content/site/types'
import { buildLocalePath, type SectionRouteKey } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

type SectionPlaceholderPageProps = {
  section: Exclude<SectionRouteKey, 'home'>
}

export function SectionPlaceholderPage({
  section,
}: SectionPlaceholderPageProps) {
  const { locale, content } = useSiteShellContext()
  const sectionContent = content[routeContentKeyMap[section]]
  const productTaxonomy =
    section === 'products' ? getProductTaxonomy(locale) : null
  const industrialSensors = productTaxonomy?.categories.find(
    (category) => category.key === 'industrial-sensors',
  )

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="placeholder-copy motion-rise motion-delay-1">
          <p className="eyebrow">{content.placeholder.eyebrow}</p>
          <h1>{sectionContent.title}</h1>
          <p>{sectionContent.summary}</p>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="placeholder-grid">
          <div className="placeholder-copy motion-rise motion-delay-2">
            <p>{sectionContent.description}</p>
            <p>{content.placeholder.body}</p>
          </div>
          <aside className="placeholder-rail motion-rise motion-delay-3">
            <p className="eyebrow">{content.aboutPage.factsTitle}</p>
            <p className="placeholder-signature">{content.meta.companyName}</p>
            <p className="hero-signature hero-signature--surface">
              {content.meta.crossLocaleCompanyName}
            </p>
            <p className="placeholder-note">{content.placeholder.factsSummary}</p>
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
                {sectionContent.primaryCta}
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale)}>
                {sectionContent.secondaryCta || content.placeholder.homeCta}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {productTaxonomy && industrialSensors ? (
        <section className="page-band page-band--bordered">
          <div className="taxonomy-layout">
            <section className="taxonomy-panel motion-rise motion-delay-2">
              <p className="eyebrow">{productTaxonomy.eyebrow}</p>
              <h2 className="taxonomy-title">{productTaxonomy.title}</h2>
              <p className="story-intro">{productTaxonomy.summary}</p>
              <p className="taxonomy-source">
                <span>{productTaxonomy.sourceLabel}</span>
                <a href={productTaxonomy.sourceUrl} rel="noreferrer" target="_blank">
                  {productTaxonomy.sourceUrl}
                </a>
              </p>
              <div className="taxonomy-divider" />
              <p className="eyebrow">{productTaxonomy.categoriesTitle}</p>
              <p className="story-intro">{productTaxonomy.categoriesSummary}</p>
              <div className="taxonomy-category-list">
                {productTaxonomy.categories.map((category) => (
                  <article key={category.key} className="taxonomy-category-item">
                    <div className="taxonomy-category-item__header">
                      <h3>{category.name}</h3>
                      <p className="taxonomy-category-item__count">
                        {category.groups.length}
                      </p>
                    </div>
                    <p className="taxonomy-category-item__summary">{category.summary}</p>
                    <p className="taxonomy-category-item__usecase">{category.useCase}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="taxonomy-panel taxonomy-panel--offset motion-rise motion-delay-3">
              <p className="eyebrow">{productTaxonomy.industrialSensorsTitle}</p>
              <p className="story-intro">{productTaxonomy.industrialSensorsSummary}</p>
              <div className="taxonomy-group-grid">
                {industrialSensors.groups.map((group) => (
                  <article key={group.slug} className="taxonomy-group-item">
                    <h3>{group.name}</h3>
                    <p className="taxonomy-group-item__summary">{group.summary}</p>
                    <p className="taxonomy-group-item__series">
                      {group.series.join(' / ')}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  )
}
