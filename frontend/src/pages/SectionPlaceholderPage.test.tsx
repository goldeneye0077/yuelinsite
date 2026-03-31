import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getSiteContent } from '../content/site'

describe('SectionPlaceholderPage', () => {
  it('keeps company facts and the Shenzhen address visible on placeholder routes', async () => {
    const content = getSiteContent('zh')
    const router = createAppRouter({
      initialEntries: ['/zh/contact'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      await screen.findByText((value) => value.trim() === content.aboutPage.factsTitle),
    ).toBeInTheDocument()
    expect(
      (await screen.findAllByText(content.meta.crossLocaleCompanyName)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(content.aboutPage.facts[1].value)).length,
    ).toBeGreaterThan(0)
  })
})
