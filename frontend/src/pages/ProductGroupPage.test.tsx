import { fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getProductTaxonomy } from '../content/products'

describe('ProductGroupPage', () => {
  it('renders an industrial sensor subgroup page with cards, detail content, and sibling navigation', async () => {
    const taxonomy = getProductTaxonomy('zh')
    const group = taxonomy.categories[0].groups[0]
    const router = createAppRouter({
      initialEntries: ['/zh/products/industrial-sensors/fiber-sensors'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect((await screen.findAllByText(group.name)).length).toBeGreaterThan(0)
    expect((await screen.findAllByText(group.series[0])).length).toBeGreaterThan(0)
    expect(
      await screen.findByText(taxonomy.featuredProductsTitle),
    ).toBeInTheDocument()
    expect(await screen.findByText(taxonomy.listingTemplateTitle)).toBeInTheDocument()
    expect(
      (await screen.findAllByText(taxonomy.categories[0].groups[1].name)).length,
    ).toBeGreaterThan(0)

    fireEvent.click(screen.getByRole('button', { name: /双数显光纤传感器/i }))

    expect(
      (await screen.findAllByText(/双数显光纤传感器 作为 光纤传感器 下的代表系列/i))
        .length,
    ).toBeGreaterThan(0)
    expect(await screen.findByText(taxonomy.productHighlightsLabel)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /双数显光纤传感器/i }),
    ).toHaveAttribute('aria-pressed', 'true')
  })
})
