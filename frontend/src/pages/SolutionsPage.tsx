import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import {
  buildInquiryPath,
  getInquiryCategoryForSolutionAnchor,
} from '../lib/inquiry-paths'

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
        <div className="solution-track-heading motion-rise motion-delay-2">
          <p className="eyebrow">{content.solutionsPage.tracksTitle}</p>
          <p className="story-intro">{content.solutionsPage.tracksSummary}</p>
        </div>
        <nav
          aria-label={content.solutionsPage.trackNavLabel}
          className="solution-track-nav motion-rise motion-delay-3"
        >
          {content.solutionsPage.tracks.map((track) => (
            <a key={track.anchor} className="solution-track-nav__item" href={`#${track.anchor}`}>
              <span className="solution-track-nav__index">{track.step}</span>
              <span className="solution-track-nav__title">{track.title}</span>
              <span className="solution-track-nav__summary">{track.summary}</span>
            </a>
          ))}
        </nav>
        <div className="solution-track-list motion-rise motion-delay-3">
          {content.solutionsPage.tracks.map((track) => (
            <article key={track.step} className="solution-track" id={track.anchor}>
              <div className="solution-track__lead">
                <p className="solution-track__index">{track.step}</p>
                <div className="solution-track__copy">
                  <h2>{track.title}</h2>
                  <p className="solution-track__summary">{track.summary}</p>
                  <p className="track-label">{track.scenarioTitle}</p>
                  <p className="solution-track__scenario">{track.scenario}</p>
                </div>
              </div>

              <div className="solution-track__body">
                <section className="solution-track__block">
                  <p className="track-label">{track.scopeTitle}</p>
                  <ul className="solution-track__list">
                    {track.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="solution-track__block">
                  <p className="track-label">{track.valueTitle}</p>
                  <ul className="solution-track__list">
                    {track.value.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <aside className="solution-track__rail">
                  <section className="solution-track__action">
                    <p className="assurance-item__label">{track.actionTitle}</p>
                    <p className="solution-track__action-copy">{track.actionBody}</p>
                    <div className="section-actions">
                      <Link
                        className="cta-link"
                        to={
                          track.primaryCta.section === 'contact'
                            ? buildInquiryPath(locale, {
                                category: getInquiryCategoryForSolutionAnchor(track.anchor),
                                source: 'solutions',
                              })
                            : buildLocalePath(locale, track.primaryCta.section)
                        }
                      >
                        <span>{track.primaryCta.label}</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        className="secondary-link"
                        to={buildLocalePath(locale, track.secondaryCta.section)}
                      >
                        {track.secondaryCta.label}
                      </Link>
                    </div>
                  </section>

                  <section className="solution-track__transition">
                    <p className="track-label">{track.transition.label}</p>
                    <h3>{track.transition.title}</h3>
                    <p>{track.transition.detail}</p>
                    <a className="product-inline-link" href={`#${track.transition.targetId}`}>
                      {track.transition.ctaLabel}
                    </a>
                  </section>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="brand-ecosystem motion-rise motion-delay-4" id="partner-ecosystem">
          <section className="brand-ecosystem__lead">
            <p className="eyebrow">{content.solutionsPage.partnershipTitle}</p>
            <p className="story-intro">{content.solutionsPage.partnershipSummary}</p>
            <div className="story-list">
              {content.solutionsPage.partnershipModes.map((item) => (
                <article key={item.title} className="story-item">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="brand-ecosystem__rail">
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
