import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from '../../features/theme/ThemeProvider'
import { zhSiteContent } from '../../content/site/zh'
import { Header } from './Header'

function renderHeader(pathname = '/zh/products') {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[pathname]}>
        <Header content={zhSiteContent} locale="zh" onOpenMenu={() => {}} />
      </MemoryRouter>
    </ThemeProvider>,
  )
}

describe('Header', () => {
  it('renders the primary navigation entries', () => {
    renderHeader()

    expect(screen.getByRole('link', { name: '\u4ea7\u54c1\u4e2d\u5fc3' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '\u89e3\u51b3\u65b9\u6848' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '\u670d\u52a1\u4e0e\u652f\u6301' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '\u8054\u7cfb\u6211\u4eec' })).toBeInTheDocument()
  })

  it('preserves the current route when switching locale', () => {
    renderHeader('/zh/products')

    expect(screen.getByRole('link', { name: /^english$/i })).toHaveAttribute(
      'href',
      '/en/products',
    )
  })
})
