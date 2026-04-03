import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { enSiteContent } from '../../content/site/en'
import { zhSiteContent } from '../../content/site/zh'
import { Footer } from './Footer'

describe('Footer', () => {
  it('preserves the legal copy while exposing a hidden admin entry for zh', () => {
    render(
      <MemoryRouter>
        <Footer content={zhSiteContent} locale="zh" />
      </MemoryRouter>,
    )

    expect(
      screen.getByText((_, node) => node?.textContent === zhSiteContent.footer.legal),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: '打开管理员询盘后台' }),
    ).toHaveAttribute('href', '/zh/admin/inquiries')
  })

  it('routes the hidden admin entry to the english admin console', () => {
    render(
      <MemoryRouter>
        <Footer content={enSiteContent} locale="en" />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('link', { name: 'Open administrator inquiry console' }),
    ).toHaveAttribute('href', '/en/admin/inquiries')
  })
})
