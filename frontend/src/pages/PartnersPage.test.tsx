import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getSiteContent } from '../content/site'

describe('PartnersPage', () => {
  it('renders the dedicated partner cooperation surface', async () => {
    const content = getSiteContent('zh')
    const router = createAppRouter({
      initialEntries: ['/zh/partners'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      await screen.findByRole('heading', { name: content.partners.title }),
    ).toBeInTheDocument()
    expect(
      (await screen.findAllByText(content.home.partners[0].name)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(content.solutionsPage.partnerBrands[0].name)).length,
    ).toBeGreaterThan(0)
    expect(
      (
        await screen.findAllByRole('link', { name: content.partners.primaryCta })
      ).some(
        (link) =>
          link.getAttribute('href') ===
          '/zh/contact?category=general-consultation&source=partners',
      ),
    ).toBe(true)
  })
})
