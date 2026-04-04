import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function HomeShellPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.aboutHero
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
            <h1>{content.meta.brandName}</h1>
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

            <div className="home-hero__support">
              <div className="home-hero__support-header">
                <p className="eyebrow">{content.home.statusLabel}</p>
                <p className="home-hero__support-intro">
                  {locale === 'zh'
                    ? '围绕选型、联动、实施和交付，把首页首屏直接收束成客户最关心的三类问题。'
                    : 'The first fold is organized around the three questions buyers usually bring first: selection, integration, and delivery.'}
                </p>
              </div>

              <div className="home-hero__support-list">
                {content.home.statusItems.map((item, index) => (
                  <article key={item} className="home-hero__support-item">
                    <span className="home-hero__support-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="home-hero__rail">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={heroImage.alt[locale]}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <span>{content.home.visualLabel}</span>
                <strong>{content.home.directions[0]?.title}</strong>
              </figcaption>
            </figure>

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

      <section className="page-band page-band--bordered">
        <div className="home-story-grid motion-rise motion-delay-1">
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
        <div className="home-story-grid home-story-grid--single motion-rise motion-delay-2">
          <section className="story-block">
            <p className="eyebrow">{content.home.partnersTitle}</p>
            <p className="story-intro">{content.home.partnersSummary}</p>
            <div className="partner-list partner-list--horizontal">
              {content.home.partners.map((partner) => (
                <article key={partner.name} className="partner-item">
                  <h2>{partner.name}</h2>
                  <p>{partner.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta motion-rise motion-delay-3">
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
