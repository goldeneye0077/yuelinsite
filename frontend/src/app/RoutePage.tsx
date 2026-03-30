import { ArrowUpRight, Database, Globe2, Layers3 } from 'lucide-react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'

import { getSiteContent } from '../content/site'
import { routeContentKeyMap } from '../content/site/types'
import {
  buildLocalePath,
  DEFAULT_LOCALE,
  type Locale,
  normalizeLocale,
  type SectionRouteKey,
  swapLocaleInPathname,
} from '../i18n/locales'

type RoutePageProps = {
  section: SectionRouteKey
}

const foundationStatusIcons = [Globe2, Database, Layers3] as const

export function RoutePage({ section }: RoutePageProps) {
  const { locale } = useParams()
  const location = useLocation()
  const normalizedLocale = normalizeLocale(locale)

  if (!normalizedLocale) {
    return <Navigate replace to={buildLocalePath(DEFAULT_LOCALE)} />
  }

  const content = getSiteContent(normalizedLocale)
  const pageKey = routeContentKeyMap[section]
  const page = content[pageKey]
  const alternateLocale: Locale = normalizedLocale === 'zh' ? 'en' : 'zh'
  const alternatePath = swapLocaleInPathname(location.pathname, alternateLocale)

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{content.home.eyebrow}</p>
          <div className="route-header">
            {content.navigation.map((item) => (
              <span className="route-chip" key={item.key}>
                {item.label}
              </span>
            ))}
          </div>
          <h1>{page.title}</h1>
          <p className="hero-summary">{page.summary}</p>
          <div className="hero-actions">
            <Link className="primary-link" lang={alternateLocale} to={alternatePath}>
              {content.meta.switchLabel[alternateLocale]}
              <ArrowUpRight size={18} />
            </Link>
            <p className="support-copy">{page.description}</p>
          </div>
        </div>

        <div className="hero-anchor" aria-hidden="true">
          <div className="anchor-sweep" />
          <div className="anchor-grid" />
          <div className="anchor-mark">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="status-strip" aria-label={content.home.statusLabel}>
        {content.home.statusItems.map((item, index) => {
          const Icon = foundationStatusIcons[index]

          return (
            <div className="status-item" key={item}>
              <Icon size={18} />
              <span>{item}</span>
            </div>
          )
        })}
      </section>

      <section className="status-grid" aria-label={content.meta.trackLabel}>
        {content.foundationTracks.map((item) => (
          <article className="status-block" key={item.label}>
            <p className="status-label">{item.label}</p>
            <h2>{item.value}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
