import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

export function HomeShellPage() {
  const { locale, content } = useSiteShellContext()

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="hero-grid">
          <div className="hero-copy">
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

          <div className="hero-visual">
            <p className="hero-visual__label">{content.home.visualLabel}</p>
            <div aria-hidden="true" className="hero-visual__grid" />
            <div aria-hidden="true" className="hero-visual__arc" />
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="status-strip">
          {content.home.statusItems.map((item) => (
            <p key={item} className="status-item">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <p className="eyebrow">{content.meta.trackLabel}</p>
        <div className="track-grid">
          {content.foundationTracks.map((track) => (
            <article key={track.label} className="track-card">
              <p className="track-label">{track.label}</p>
              <p className="track-value">{track.value}</p>
              <p className="track-detail">{track.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
