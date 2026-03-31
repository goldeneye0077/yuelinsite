import { render, screen } from '@testing-library/react'

import { App } from './App'
import { AppProviders } from './providers'

describe('App', () => {
  it('renders the routed bilingual foundation shell', async () => {
    render(
      <AppProviders>
        <App />
      </AppProviders>,
    )

    expect(
      await screen.findByRole('heading', { name: /shenzhen yuelin technology/i }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: /switch to english/i }),
    ).toBeInTheDocument()
  })
})
