import { render, screen } from '@testing-library/react'

import { getSiteContent } from '../content/site'
import { App } from './App'
import { AppProviders } from './providers'

describe('App', () => {
  it('renders the routed bilingual foundation shell', async () => {
    const content = getSiteContent('zh')

    render(
      <AppProviders>
        <App />
      </AppProviders>,
    )

    expect((await screen.findAllByText(content.home.title)).length).toBeGreaterThan(0)
    expect(await screen.findByRole('link', { name: /^english$/i })).toBeInTheDocument()
    expect(
      (await screen.findAllByRole('link', { name: /request consultation/i })).length,
    ).toBeGreaterThan(0)
    expect((await screen.findAllByText(content.home.partnersTitle)).length).toBeGreaterThan(0)
    expect(await screen.findByText(/Panasonic/i)).toBeInTheDocument()
    expect(await screen.findByText(content.home.directionsTitle)).toBeInTheDocument()
  })
})
