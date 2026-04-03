import { Languages, Menu, MoonStar, SunMedium } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import brandLogo from '../../assets/logo6.png'
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
  const compactLocaleLabel = targetLocale === 'en' ? 'EN' : '中'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-lockup brand-lockup--header" to={buildLocalePath(locale)}>
          <span aria-hidden="true" className="brand-mark">
            <img alt="" className="brand-mark__image" src={brandLogo} />
          </span>
          <span className="brand-copy brand-copy--header">
            <span className="brand-name brand-name--company">
              {content.meta.companyName}
            </span>
            <span className="brand-line brand-line--header">
              {content.meta.brandLine}
            </span>
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
            aria-label={content.meta.switchLabel[targetLocale]}
            className="locale-switch locale-switch--header"
            to={swapLocaleInPathname(location.pathname, targetLocale)}
          >
            <Languages size={14} />
            <span aria-hidden="true">{compactLocaleLabel}</span>
          </Link>

          <div
            aria-label={content.meta.themeLabel}
            className="theme-switch theme-switch--header"
            role="group"
          >
            <button
              aria-label={content.meta.lightLabel}
              aria-pressed={theme === 'light'}
              className={`theme-switch__button theme-switch__button--header${theme === 'light' ? ' theme-switch__button--active' : ''}`}
              onClick={() => setTheme('light')}
              type="button"
            >
              <SunMedium size={14} />
              <span className="theme-switch__label theme-switch__label--header">
                {content.meta.lightLabel}
              </span>
            </button>
            <button
              aria-label={content.meta.darkLabel}
              aria-pressed={theme === 'dark'}
              className={`theme-switch__button theme-switch__button--header${theme === 'dark' ? ' theme-switch__button--active' : ''}`}
              onClick={() => setTheme('dark')}
              type="button"
            >
              <MoonStar size={14} />
              <span className="theme-switch__label theme-switch__label--header">
                {content.meta.darkLabel}
              </span>
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
