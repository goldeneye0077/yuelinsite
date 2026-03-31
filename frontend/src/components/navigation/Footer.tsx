import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { SiteContent } from '../../content/site/types'
import { buildLocalePath, type Locale } from '../../i18n/locales'

type FooterProps = {
  content: SiteContent
  locale: Locale
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

        <div className="footer-note">{content.footer.legal}</div>
      </div>
    </footer>
  )
}
