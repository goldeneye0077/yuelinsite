import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import brandLogo from '../assets/logo6.png'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

export function AboutPage() {
  const { locale, content } = useSiteShellContext()

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="about-hero">
          <div className="about-hero__copy">
            <p className="eyebrow">{content.aboutPage.eyebrow}</p>
            <h1>{content.about.title}</h1>
            <p className="hero-summary">{content.aboutPage.heroSummary}</p>
            <p className="hero-description">{content.aboutPage.heroDescription}</p>
            <div className="hero-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{content.about.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {content.navigation.find((item) => item.key === 'products')?.label}
              </Link>
            </div>
          </div>

          <aside className="about-hero__rail">
            <div className="about-hero__logo-frame">
              <img alt="" className="about-hero__logo" src={brandLogo} />
            </div>
            <div className="about-facts">
              <p className="eyebrow">{content.aboutPage.factsTitle}</p>
              {content.aboutPage.facts.map((fact) => (
                <article key={fact.label} className="about-fact">
                  <p className="track-label">{fact.label}</p>
                  <p className="about-fact__value">{fact.value}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="about-grid">
          <section className="about-section">
            <p className="eyebrow">{content.aboutPage.companyTitle}</p>
            <div className="about-copy">
              {content.aboutPage.companyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="about-section about-section--offset">
            <p className="eyebrow">{content.aboutPage.trustTitle}</p>
            <p className="story-intro">{content.aboutPage.trustSummary}</p>
            <div className="story-list">
              {content.aboutPage.trustItems.map((item) => (
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
        <div className="about-grid">
          <section className="about-section">
            <p className="eyebrow">{content.aboutPage.partnersTitle}</p>
            <p className="story-intro">{content.aboutPage.partnersSummary}</p>
            <div className="partner-list">
              {content.home.partners.map((partner) => (
                <article key={partner.name} className="partner-item">
                  <h2>{partner.name}</h2>
                  <p>{partner.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-section about-section--offset">
            <p className="eyebrow">{content.aboutPage.qualificationsTitle}</p>
            <p className="story-intro">{content.aboutPage.qualificationsSummary}</p>
            <div className="qualification-list">
              {content.aboutPage.qualifications.map((item) => (
                <article key={item.title} className="qualification-item">
                  <p className="qualification-item__status">{item.status}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="trust-ledger">
          <section className="trust-ledger__panel">
            <p className="eyebrow">{content.aboutPage.authorizationTitle}</p>
            <p className="story-intro">{content.aboutPage.authorizationSummary}</p>
            <div className="assurance-list">
              {content.aboutPage.authorizationItems.map((item) => (
                <article key={item.title} className="assurance-item">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2 className="assurance-item__title">{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="trust-ledger__panel trust-ledger__panel--offset">
            <p className="eyebrow">{content.aboutPage.deliveryTitle}</p>
            <p className="story-intro">{content.aboutPage.deliverySummary}</p>
            <div className="process-list">
              {content.aboutPage.deliverySteps.map((item) => (
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
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta">
          <div>
            <p className="eyebrow">{content.meta.companyName}</p>
            <h2>{content.aboutPage.finalCtaTitle}</h2>
            <p>{content.aboutPage.finalCtaBody}</p>
          </div>
          <div className="section-actions">
            <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
              <span>{content.about.primaryCta}</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="secondary-link" to={buildLocalePath(locale)}>
              {content.about.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
