import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getProductTaxonomy } from '../content/products'

describe('ProductFamilyPage', () => {
  it('renders the selected family detail page with subgroup content and related families', async () => {
    const taxonomy = getProductTaxonomy('zh')
    const industrialSensors = taxonomy.categories[0]
    const router = createAppRouter({
      initialEntries: ['/zh/products/industrial-sensors'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      (await screen.findAllByText(industrialSensors.name)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(industrialSensors.groups[0].summary)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(taxonomy.subgroupCtaLabel)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(taxonomy.categories[1].name)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(taxonomy.backToCatalogLabel)).length,
    ).toBeGreaterThan(0)
  })
})
