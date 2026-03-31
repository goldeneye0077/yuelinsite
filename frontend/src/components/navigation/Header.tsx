import { Languages, Menu, MoonStar, SunMedium } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import type { SiteContent } from '../../content/site/types'
import {
  buildLocalePath,
  swapLocaleInPathname,
  type Locale,
} from '../../i18n/locales'
import { useTheme } from '../../features/theme/useTheme'

type HeaderProps = {
  content: SiteContent
  locale: Locale
  onOpenMenu: () => void
}

export function Header({ content, locale, onOpenMenu }: HeaderProps) {
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const targetLocale = locale === 'zh' ? 'en' : 'zh'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-lockup" to={buildLocalePath(locale)}>
          <span aria-hidden="true" className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <span className="brand-name">{content.meta.companyName}</span>
            <span className="brand-line">{content.meta.brandLine}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="primary-nav">
          {content.navigation.map((item) => (
            <NavLink
              key={item.key}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link--active' : ''}`
              }
              end={item.key === 'home'}
              to={buildLocalePath(locale, item.key)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="shell-controls">
          <Link
            className="locale-switch"
            to={swapLocaleInPathname(location.pathname, targetLocale)}
          >
            <Languages size={16} />
            <span>{content.meta.switchLabel[targetLocale]}</span>
          </Link>

          <div
            aria-label={content.meta.themeLabel}
            className="theme-switch"
            role="group"
          >
            <button
              aria-pressed={theme === 'light'}
              className={`theme-switch__button${theme === 'light' ? ' theme-switch__button--active' : ''}`}
              onClick={() => setTheme('light')}
              type="button"
            >
              <SunMedium size={16} />
              <span className="theme-switch__label">{content.meta.lightLabel}</span>
            </button>
            <button
              aria-pressed={theme === 'dark'}
              className={`theme-switch__button${theme === 'dark' ? ' theme-switch__button--active' : ''}`}
              onClick={() => setTheme('dark')}
              type="button"
            >
              <MoonStar size={16} />
              <span className="theme-switch__label">{content.meta.darkLabel}</span>
            </button>
          </div>

          <button
            aria-label={content.meta.menuLabel}
            className="menu-button"
            onClick={onOpenMenu}
            type="button"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
