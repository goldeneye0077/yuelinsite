import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import brandLogo from '../assets/logo6.png'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

export function HomeShellPage() {
  const { locale, content } = useSiteShellContext()

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1>{content.home.title}</h1>
            <p className="hero-summary">{content.home.summary}</p>
            <p className="hero-description">{content.home.description}</p>
            <div className="hero-actions">
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{content.home.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {content.home.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__visual-frame">
              <p className="hero-visual__label">{content.home.visualLabel}</p>
              <div aria-hidden="true" className="hero-visual__grid" />
              <div aria-hidden="true" className="hero-visual__arc" />
              <img alt="" className="home-hero__logo" src={brandLogo} />
              <div className="home-hero__metrics" aria-hidden="true">
                {content.home.strengths.slice(0, 3).map((item) => (
                  <div key={item.title} className="home-hero__metric">
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-band page-band--tight">
        <p className="eyebrow">{content.home.statusLabel}</p>
        <div className="status-strip status-strip--audience">
          {content.home.statusItems.map((item) => (
            <p key={item} className="status-item">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="home-story-grid">
          <section className="story-block">
            <p className="eyebrow">{content.home.strengthsTitle}</p>
            <div className="story-list">
              {content.home.strengths.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-block">
            <p className="eyebrow">{content.home.directionsTitle}</p>
            <div className="story-list story-list--compact">
              {content.home.directions.map((item) => (
                <article key={item.title} className="story-item story-item--compact">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="home-story-grid">
          <section className="story-block">
            <p className="eyebrow">{content.home.partnersTitle}</p>
            <p className="story-intro">{content.home.partnersSummary}</p>
            <div className="partner-list">
              {content.home.partners.map((partner) => (
                <article key={partner.name} className="partner-item">
                  <h2>{partner.name}</h2>
                  <p>{partner.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-block story-block--profile">
            <p className="eyebrow">{content.home.profileTitle}</p>
            <h2 className="profile-title">{content.home.profileSummary}</h2>
            <p className="story-intro">{content.home.profileBody}</p>
            <div className="profile-facts">
              {content.home.profileFacts.map((fact) => (
                <article key={fact.label} className="profile-fact">
                  <p className="track-label">{fact.label}</p>
                  <p className="profile-fact__value">{fact.value}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta">
          <div>
            <p className="eyebrow">{content.meta.brandName}</p>
            <h2>{content.home.finalCtaTitle}</h2>
            <p>{content.home.finalCtaBody}</p>
          </div>
          <div className="section-actions">
            <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
              <span>{content.home.primaryCta}</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="secondary-link" to={buildLocalePath(locale, 'solutions')}>
              {content.navigation.find((item) => item.key === 'solutions')?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
