import { useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'

import { Footer } from '../components/navigation/Footer'
import { Header } from '../components/navigation/Header'
import { MobileNav } from '../components/navigation/MobileNav'
import { getSiteContent } from '../content/site'
import type { SiteContent } from '../content/site/types'
import {
  buildLocalePath,
  DEFAULT_LOCALE,
  normalizeLocale,
  type Locale,
} from '../i18n/locales'
import { RouteScrollManager } from './RouteScrollManager'

export type SiteShellOutletContext = {
  locale: Locale
  content: SiteContent
}

export function SiteShell() {
  const { locale: localeParam } = useParams()
  const locale = normalizeLocale(localeParam)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  if (!locale) {
    return <Navigate replace to={buildLocalePath(DEFAULT_LOCALE)} />
  }

  const content = getSiteContent(locale)

  return (
    <div className="site-shell">
      <RouteScrollManager />
      <Header
        content={content}
        locale={locale}
        onOpenMenu={() => setIsMobileNavOpen(true)}
      />
      <MobileNav
        content={content}
        locale={locale}
        open={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
      <main className="site-main">
        <Outlet context={{ locale, content }} />
      </main>
      <Footer content={content} locale={locale} />
    </div>
  )
}
