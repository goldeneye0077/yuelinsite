import { Languages, MoonStar, SunMedium, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { useTheme } from '../../features/theme/useTheme'
import {
  buildLocalePath,
  swapLocaleInPathname,
  type Locale,
} from '../../i18n/locales'
import type { SiteContent } from '../../content/site/types'

type MobileNavProps = {
  content: SiteContent
  locale: Locale
  open: boolean
  onClose: () => void
}

export function MobileNav({
  content,
  locale,
  open,
  onClose,
}: MobileNavProps) {
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const targetLocale = locale === 'zh' ? 'en' : 'zh'

  return (
    <div className="mobile-drawer" hidden={!open}>
      <button
        aria-hidden="true"
        className="mobile-drawer__backdrop"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <div
        aria-label={content.meta.menuLabel}
        aria-modal="true"
        className="mobile-drawer__panel"
        role="dialog"
      >
        <div className="mobile-drawer__header">
          <div className="brand-copy">
            <p className="brand-name">{content.meta.brandName}</p>
            <p className="brand-line">{content.meta.brandLine}</p>
          </div>
          <button
            aria-label={content.meta.closeMenuLabel}
            className="mobile-close"
            onClick={onClose}
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-drawer__stack">
          <nav aria-label="Mobile primary" className="mobile-drawer__links">
            {content.navigation.map((item) => (
              <NavLink
                key={item.key}
                className={({ isActive }) =>
                  `mobile-link${isActive ? ' mobile-link--active' : ''}`
                }
                end={item.key === 'home'}
                onClick={onClose}
                to={buildLocalePath(locale, item.key)}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-drawer__links">
            <Link
              className="locale-switch"
              onClick={onClose}
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
                <span className="theme-switch__label">
                  {content.meta.lightLabel}
                </span>
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
          </div>
        </div>
      </div>
    </div>
  )
}
