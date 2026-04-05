import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { buildInquiryPath } from '../lib/inquiry-paths'

export function SolutionsPage() {
  const { locale, content } = useSiteShellContext()
  const heroImage = siteReferenceImages.solutionsHero
  const heroCopy =
    locale === 'zh'
      ? {
          eyebrow: '项目路径',
          summary: '围绕工业自动化、软件配合与技术集成，先帮项目判断正确路径。',
          description: '从场景切入，让选型、接口与交付边界更快对齐。',
          railSummary: '适用于设备开发、系统集成与产线升级项目，先看清合作范围，再进入正式沟通。',
          primaryCta: '发起咨询',
          secondaryCta: '产品中心',
        }
      : {
          eyebrow: 'Project route',
          summary:
            'A clearer route for industrial automation, software coordination, and technical integration.',
          description:
            'Start from the scenario and align interfaces, scope, and delivery rhythm earlier.',
          railSummary:
            'Useful for new machines, integration work, and line-side upgrades where the first project read needs to be fast.',
          primaryCta: 'Start inquiry',
          secondaryCta: 'Product center',
        }

  return (
    <div className="solutions-page">
      <section className="page-band page-band--tight">
        <div className="solutions-hero">
          <div className="solutions-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{heroCopy.eyebrow}</p>
            <h1>{content.solutions.title}</h1>
            <p className="hero-summary">{heroCopy.summary}</p>
            <p className="hero-description">{heroCopy.description}</p>
            <div className="hero-actions">
              <Link
                className="cta-link"
                to={buildInquiryPath(locale, {
                  category: 'general-consultation',
                  source: 'solutions',
                })}
              >
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {heroCopy.secondaryCta}
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
                <strong>{content.solutionsPage.coverageItems[0]?.title}</strong>
              </figcaption>
            </figure>
            <p className="story-intro">{heroCopy.railSummary}</p>
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

      <section className="page-band page-band--bordered page-band--solutions-body">
        <div className="solutions-operating-frame motion-rise motion-delay-4">
          <div className="solutions-support-grid">
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

          <div className="final-cta final-cta--nested motion-rise motion-delay-5">
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
                <span>{heroCopy.primaryCta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="secondary-link" to={buildLocalePath(locale, 'products')}>
                {heroCopy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
