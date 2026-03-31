import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getProductTaxonomy } from '../content/products'

describe('ProductGroupPage', () => {
  it('renders an industrial sensor subgroup page with listing rows and sibling navigation', async () => {
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
    expect(await screen.findByText(taxonomy.listingTemplateTitle)).toBeInTheDocument()
    expect(
      (await screen.findAllByText(taxonomy.categories[0].groups[1].name)).length,
    ).toBeGreaterThan(0)
  })
})
