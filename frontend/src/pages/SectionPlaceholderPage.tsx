import { Link } from 'react-router-dom'

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
    </>
  )
}
