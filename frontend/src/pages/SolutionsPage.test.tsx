import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getSiteContent } from '../content/site'

describe('SolutionsPage', () => {
  it('renders the dedicated bilingual solutions surface with three service tracks', async () => {
    const content = getSiteContent('zh')
    const router = createAppRouter({
      initialEntries: ['/zh/solutions'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      await screen.findByRole('heading', { name: content.solutions.title }),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.solutionsPage.coverageItems[0].title),
    ).toBeInTheDocument()
    expect(
      (await screen.findAllByText(content.solutionsPage.tracks[0].title)).length,
    ).toBeGreaterThan(0)
    expect(
      await screen.findByText(content.solutionsPage.processTitle),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.solutionsPage.partnershipTitle),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.solutionsPage.partnerBrands[0].name),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('link', { name: content.solutionsPage.tracks[0].primaryCta.label }),
    ).toBeInTheDocument()
    expect(
      (
        await screen.findAllByRole('link', { name: content.solutions.primaryCta })
      ).some(
        (link) =>
          link.getAttribute('href') ===
          '/zh/contact?category=general-consultation&source=solutions',
      ),
    ).toBe(true)
    expect(
      await screen.findByRole('link', { name: content.solutionsPage.tracks[1].transition.ctaLabel }),
    ).toHaveAttribute('href', `#${content.solutionsPage.tracks[1].transition.targetId}`)
  })
})
