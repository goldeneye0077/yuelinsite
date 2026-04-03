import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { SiteContent } from '../../content/site/types'
import { buildLocalePath, type Locale } from '../../i18n/locales'

type FooterProps = {
  content: SiteContent
  locale: Locale
}

const ADMIN_ENTRY_WORD = 'Yuelin'
const ADMIN_ENTRY_TRIGGER = 'in'

function renderFooterLegalNote(legal: string, locale: Locale) {
  const wordIndex = legal.indexOf(ADMIN_ENTRY_WORD)

  if (wordIndex === -1) {
    return legal
  }

  const triggerStart = wordIndex + ADMIN_ENTRY_WORD.length - ADMIN_ENTRY_TRIGGER.length
  const triggerEnd = triggerStart + ADMIN_ENTRY_TRIGGER.length
  const adminLabel =
    locale === 'zh' ? '打开管理员询盘后台' : 'Open administrator inquiry console'

  return (
    <>
      <span>{legal.slice(0, triggerStart)}</span>
      <Link
        aria-label={adminLabel}
        className="footer-hidden-entry"
        to={`/${locale}/admin/inquiries`}
      >
        {legal.slice(triggerStart, triggerEnd)}
      </Link>
      <span>{legal.slice(triggerEnd)}</span>
    </>
  )
}

export function Footer({ content, locale }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="page-band page-band--bordered">
        <div className="footer-grid">
          <div className="footer-group">
            <p className="section-caption">{content.meta.brandName}</p>
            <p className="footer-summary">{content.footer.summary}</p>
            <div className="footer-address-block">
              <p className="section-caption">{content.footer.addressLabel}</p>
              <p className="footer-address">{content.footer.address}</p>
            </div>
            <div className="footer-address-block">
              <p className="section-caption">{content.footer.inquiryLabel}</p>
              <p className="footer-address">{content.footer.inquirySummary}</p>
              <Link className="cta-link" to={buildLocalePath(locale, 'contact')}>
                <span>{content.placeholder.inquiryCta}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {content.footer.groups.map((group) => (
            <div key={group.title} className="footer-group">
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.section}>
                    <Link
                      className="footer-link"
                      to={buildLocalePath(locale, item.section)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-note">
          {renderFooterLegalNote(content.footer.legal, locale)}
        </div>
      </div>
    </footer>
  )
}
