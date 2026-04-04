import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { getProductTaxonomy } from '../content/products'

describe('ProductCenterPage', () => {
  it('renders the product landing page with all five product families', async () => {
    const taxonomy = getProductTaxonomy('zh')
    const expectedTitle = '工业传感与执行元件'
    const expectedDirectoryTitle = '按一级类判断产品范围'
    const router = createAppRouter({
      initialEntries: ['/zh/products'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(await screen.findByText(expectedTitle)).toBeInTheDocument()
    expect(await screen.findByText(expectedDirectoryTitle)).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', {
        level: 2,
        name: '产品中心 / Product Center',
      }),
    ).not.toBeInTheDocument()
    expect(
      (await screen.findAllByText(taxonomy.categories[0].name)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(taxonomy.categories[4].name)).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(taxonomy.categories[0].groups[0].name)).length,
    ).toBeGreaterThan(0)
    expect(await screen.findAllByText(taxonomy.consultCtaLabel)).not.toHaveLength(0)
    expect(
      await screen.findAllByRole('link', {
        name: taxonomy.familyConsultCtaLabel,
      }),
    ).not.toHaveLength(0)
    expect(
      (
        await screen.findAllByRole('link', {
          name: taxonomy.consultCtaLabel,
        })
      ).some(
        (link) =>
          link.getAttribute('href') ===
          '/zh/contact?category=general-consultation&source=product-center',
      ),
    ).toBe(true)
  })
})
