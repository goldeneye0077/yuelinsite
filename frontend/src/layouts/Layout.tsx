import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

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

export function Layout() {
  const { locale: localeParam } = useParams()
  const locale = normalizeLocale(localeParam)
  const location = useLocation()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  if (!locale) {
    return <Navigate replace to={buildLocalePath(DEFAULT_LOCALE)} />
  }

  const content = getSiteContent(locale)

  return (
    <div className="site-shell app-layout">
      <RouteScrollManager />
      <div aria-hidden="true" className="app-layout__backdrop" />
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
      <main className="site-main app-main">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="page-transition-frame"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key={location.pathname}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet context={{ locale, content }} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer content={content} locale={locale} />
    </div>
  )
}
