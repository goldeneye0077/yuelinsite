import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function SolutionsPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.solutionsHero

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="solutions-hero">
          <div className="solutions-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{content.solutionsPage.eyebrow}</p>
            <h1>{content.solutions.title}</h1>
            <p className="hero-signature hero-signature--surface">
              {content.meta.companyName} / {content.meta.crossLocaleCompanyName}
            </p>
            <p className="hero-summary">{content.solutionsPage.heroSummary}</p>
            <p className="hero-description">
              {content.solutionsPage.heroDescription}
            </p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'solutions',
                })}
              >
                <span>{content.solutions.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {content.solutions.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="solutions-hero__rail motion-rise motion-delay-2">
            <figure className="surface-media-card surface-media-card--hero">
              <img
                alt={getLocalizedAlt(heroImage, locale)}
                className="surface-media-card__image"
                src={heroImage.src}
              />
              <figcaption className="surface-media-card__caption">
                <span>{content.solutionsPage.coverageTitle}</span>
                <strong>{content.solutionsPage.tracks[0]?.title}</strong>
              </figcaption>
            </figure>
            <p className="eyebrow">{content.solutionsPage.coverageTitle}</p>
            <p className="story-intro">{content.solutionsPage.coverageSummary}</p>
            <div className="solution-coverage-list">
              {content.solutionsPage.coverageItems.map((item) => (
                <article key={item.title} className="solution-coverage">
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
        <div className="solutions-support-grid motion-rise motion-delay-4">
          <section className="solutions-support-panel" id="solution-intake">
            <p className="eyebrow">{content.solutionsPage.coordinationTitle}</p>
            <p className="story-intro">{content.solutionsPage.coordinationSummary}</p>
            <div className="story-list">
              {content.solutionsPage.coordinationItems.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="solutions-support-panel solutions-support-panel--offset"
            id="solution-delivery-rhythm"
          >
            <p className="eyebrow">{content.solutionsPage.processTitle}</p>
            <p className="story-intro">{content.solutionsPage.processSummary}</p>
            <div className="process-list">
              {content.solutionsPage.processSteps.map((item) => (
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
            <h2>{content.solutionsPage.finalCtaTitle}</h2>
            <p>{content.solutionsPage.finalCtaBody}</p>
          </div>
          <div className="section-actions">
            <Link
              className="cta-link"
              to={buildInquiryPath(locale, {
                category: 'general-consultation',
                source: 'solutions',
              })}
            >
              <span>{content.solutions.primaryCta}</span>
              <ArrowRight size={16} />
            </Link>
            <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
              {content.navigation.find((item) => item.key === 'products')?.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
