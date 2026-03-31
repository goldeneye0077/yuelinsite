import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getProductTaxonomy } from '../content/products'
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

  it('renders the top-level product families and synced industrial sensor groups', async () => {
    const content = getProductTaxonomy('zh')
    const router = createAppRouter({
      initialEntries: ['/zh/products'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(await screen.findByText(content.title)).toBeInTheDocument()
    expect(await screen.findByText(content.categories[0].name)).toBeInTheDocument()
    expect(await screen.findByText(content.categories[1].name)).toBeInTheDocument()
    expect(
      await screen.findByText(content.categories[0].groups[0].name),
    ).toBeInTheDocument()
    expect(
      await screen.findByText(content.categories[0].groups[6].name),
    ).toBeInTheDocument()
  })
})
