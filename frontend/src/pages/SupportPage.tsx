import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

export function SupportPage() {
  const { locale, content } = useSiteShellContext()

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="support-hero">
          <div className="support-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{content.supportPage.eyebrow}</p>
            <h1>{content.support.title}</h1>
            <p className="hero-signature hero-signature--surface">
              {content.meta.companyName} / {content.meta.crossLocaleCompanyName}
            </p>
            <p className="hero-summary">{content.supportPage.heroSummary}</p>
            <p className="hero-description">{content.supportPage.heroDescription}</p>
            <div className="hero-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{content.support.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {content.support.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="support-hero__rail motion-rise motion-delay-2">
            <p className="eyebrow">{content.supportPage.quickPanelTitle}</p>
            <p className="story-intro">{content.supportPage.quickPanelSummary}</p>
            <div className="support-quick-list">
              {content.supportPage.quickPanelItems.map((item) => (
                <article key={item.title} className="support-quick-item">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-layout motion-rise motion-delay-2">
          <section className="support-panel">
            <p className="eyebrow">{content.supportPage.capabilityTitle}</p>
            <p className="story-intro">{content.supportPage.capabilitySummary}</p>
            <div className="story-list">
              {content.supportPage.capabilities.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="support-panel support-panel--offset">
            <p className="eyebrow">{content.supportPage.guidanceTitle}</p>
            <p className="story-intro">{content.supportPage.guidanceSummary}</p>
            <div className="story-list">
              {content.supportPage.guidanceItems.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-resource-heading motion-rise motion-delay-3">
          <p className="eyebrow">{content.supportPage.resourceTitle}</p>
          <p className="story-intro">{content.supportPage.resourceSummary}</p>
        </div>
        <div className="support-resource-list motion-rise motion-delay-4">
          {content.supportPage.resources.map((resource) => (
            <article key={resource.title} className="support-resource-item">
              <p className="support-resource-item__status">{resource.status}</p>
              <p className="assurance-item__label">{resource.label}</p>
              <h2>{resource.title}</h2>
              <p>{resource.detail}</p>
              <p className="support-resource-item__deliverable">{resource.deliverable}</p>
              <div className="section-actions">
                <Link
                  className="cta-link"
                  to={buildLocalePath(locale, resource.primaryCta.section)}
                >
                  <span>{resource.primaryCta.label}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  className="secondary-link"
                  to={buildLocalePath(locale, resource.secondaryCta.section)}
                >
                  {resource.secondaryCta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="support-layout motion-rise motion-delay-4">
          <section className="support-panel">
            <p className="eyebrow">{content.supportPage.processTitle}</p>
            <p className="story-intro">{content.supportPage.processSummary}</p>
            <div className="process-list">
              {content.supportPage.processSteps.map((item) => (
                <article key={item.step} className="process-step">
                  <p className="process-step__index">{item.step}</p>
                  <div className="process-step__copy">
                    <h2>{item.title}</h2>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="support-panel support-panel--offset">
            <p className="eyebrow">{content.meta.brandName}</p>
            <div className="support-closing-copy">
              <h2>{content.supportPage.finalCtaTitle}</h2>
              <p>{content.supportPage.finalCtaBody}</p>
            </div>
            <div className="section-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{content.support.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'solutions')}>
                {content.navigation.find((item) => item.key === 'solutions')?.label}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
