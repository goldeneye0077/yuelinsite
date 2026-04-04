import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getSiteContent } from '../content/site'

describe('SolutionsPage', () => {
  it('renders the streamlined solutions surface without the three-track card block', async () => {
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
      (await screen.findAllByText(content.solutionsPage.coverageItems[0].title)).length,
    ).toBeGreaterThan(0)
    expect(
      await screen.findByText(content.solutionsPage.processTitle),
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
      screen.queryByText(content.solutionsPage.partnershipTitle),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(content.solutionsPage.partnershipModesTitle),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(content.solutionsPage.tracksTitle),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: content.solutionsPage.tracks[0].primaryCta.label }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(content.solutionsPage.tracks[0].summary),
    ).not.toBeInTheDocument()
  })
})
