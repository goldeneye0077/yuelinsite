import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getSiteContent } from '../content/site'

describe('SupportPage', () => {
  it('renders the dedicated support surface with capability and resource-entry modules', async () => {
    const content = getSiteContent('zh')
    const router = createAppRouter({
      initialEntries: ['/zh/support'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      await screen.findByRole('heading', { name: content.support.title }),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.supportPage.capabilityTitle),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.supportPage.resources[0].title),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.supportPage.processTitle),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', {
        name: content.supportPage.resources[0].primaryCta.label,
      }),
    ).toBeInTheDocument()
    expect(
      (
        await screen.findAllByRole('link', {
          name: content.support.primaryCta,
        })
      ).some(
        (link) =>
          link.getAttribute('href') ===
          '/zh/contact?category=general-consultation&source=support',
      ),
    ).toBe(true)
  })
})
