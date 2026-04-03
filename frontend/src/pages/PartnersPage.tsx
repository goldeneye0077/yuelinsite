import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function PartnersPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.partnersHero

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="partners-hero">
          <div className="partners-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{content.partners.title}</p>
            <h1>{content.partners.title}</h1>
            <p className="hero-signature hero-signature--surface">
              {content.meta.companyName} / {content.meta.crossLocaleCompanyName}
            </p>
            <p className="hero-summary">{content.partners.summary}</p>
            <p className="hero-description">{content.partners.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'partners',
                })}
              >
                <span>{content.partners.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'solutions')}>
                {content.partners.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="partners-hero__rail motion-rise motion-delay-2">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <span>{content.solutionsPage.partnershipTitle}</span>
                <strong>{content.solutionsPage.partnerBrands[0]?.name}</strong>
              </figcaption>
            </figure>
            <p className="eyebrow">{content.solutionsPage.partnershipTitle}</p>
            <p className="story-intro">{content.home.partnersSummary}</p>
            <div className="partners-mini-list">
              {content.solutionsPage.partnerBrands.slice(0, 3).map((brand) => (
                <article key={brand.name} className="partners-mini-card">
                  <p className="assurance-item__label">{brand.label}</p>
                  <h2>{brand.name}</h2>
                  <p>{brand.projectRole}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="partners-layout motion-rise motion-delay-2">
          <section className="partners-panel">
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

          <section className="partners-panel partners-panel--offset">
            <p className="eyebrow">{content.solutionsPage.partnershipModesTitle}</p>
            <p className="story-intro">{content.solutionsPage.partnershipModesSummary}</p>
            <div className="brand-context-list">
              {content.solutionsPage.partnerBrands.map((brand) => (
                <article key={brand.name} className="brand-context-item">
                  <p className="assurance-item__label">{brand.label}</p>
                  <h2>{brand.name}</h2>
                  <p>{brand.detail}</p>
                  <p className="brand-context-item__role">{brand.projectRole}</p>
                  <div className="brand-context-item__meta">
                    <p className="track-label">{content.solutionsPage.partnerTrackLabel}</p>
                    <p className="brand-context-item__track">{brand.relatedTrack}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="trust-ledger motion-rise motion-delay-3">
          <section className="trust-ledger__panel">
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

          <section className="trust-ledger__panel trust-ledger__panel--offset">
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
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="final-cta motion-rise motion-delay-4">
          <div>
            <p className="eyebrow">{content.meta.brandName}</p>
            <h2>{content.partners.summary}</h2>
            <p>{content.partners.description}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: 'general-consultation',
                source: 'partners',
              })}
            >
              <span>{content.partners.primaryCta}</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="secondary-link" to={buildLocalePath(locale, 'about')}>
              {content.navigation.find((item) => item.key === 'about')?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
