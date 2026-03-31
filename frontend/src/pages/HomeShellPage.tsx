import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import brandLogo from '../assets/logo6.png'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function HomeShellPage() {
  const { locale, content } = useSiteShellContext()
  const heroStats =
    locale === 'zh'
      ? [
          { label: '产品结构', value: '5 大方向' },
          { label: '服务主线', value: '3 条路径' },
          { label: '站点形态', value: '双语询盘' },
        ]
      : [
          { label: 'Product Map', value: '5 Families' },
          { label: 'Service Lines', value: '3 Tracks' },
          { label: 'Site Format', value: 'Bilingual Inquiry' },
        ]

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1>{content.home.title}</h1>
            <p className="hero-signature">{content.meta.crossLocaleCompanyName}</p>
            <p className="hero-summary">{content.home.summary}</p>
            <p className="hero-description">{content.home.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'home',
                })}
              >
                <span>{content.home.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {content.home.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="home-hero__rail">
            <article className="home-hero__poster">
              <div className="home-hero__poster-copy">
                <p className="hero-visual__label">{content.home.visualLabel}</p>
                <h2>{content.meta.brandName}</h2>
                <p>{content.home.profileSummary}</p>
              </div>
              <img alt="" className="home-hero__logo" src={brandLogo} />
            </article>

            <div className="home-hero__stats" aria-hidden="true">
              {heroStats.map((fact) => (
                <article key={fact.label} className="home-hero__stat">
                  <p className="track-label">{fact.label}</p>
                  <p className="home-hero__stat-value">{fact.value}</p>
                </article>
              ))}
            </div>

            <div className="home-hero__direction-list">
              {content.home.directions.slice(0, 3).map((item, index) => (
                <article key={item.title} className="home-hero__direction-item">
                  <p className="home-hero__direction-index">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="home-hero__direction-copy">
                    <h2>{item.title}</h2>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--tight">
        <p className="eyebrow">{content.home.statusLabel}</p>
        <div className="status-strip status-strip--audience motion-rise motion-delay-1">
          {content.home.statusItems.map((item) => (
            <p key={item} className="status-item">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="home-story-grid motion-rise motion-delay-2">
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
        <div className="home-story-grid motion-rise motion-delay-3">
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
        <div className="trust-ledger motion-rise motion-delay-4">
          <section className="trust-ledger__panel">
            <p className="eyebrow">{content.home.assuranceTitle}</p>
            <p className="story-intro">{content.home.assuranceSummary}</p>
            <div className="assurance-list">
              {content.home.assuranceSignals.map((item) => (
                <article key={item.title} className="assurance-item">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2 className="assurance-item__title">{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="trust-ledger__panel trust-ledger__panel--offset">
            <p className="eyebrow">{content.home.processTitle}</p>
            <p className="story-intro">{content.home.processSummary}</p>
            <div className="process-list">
              {content.home.processSteps.map((item) => (
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
        <div className="final-cta motion-rise motion-delay-5">
          <div>
            <p className="eyebrow">{content.meta.brandName}</p>
            <h2>{content.home.finalCtaTitle}</h2>
            <p>{content.home.finalCtaBody}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: 'general-consultation',
                source: 'home',
              })}
            >
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
