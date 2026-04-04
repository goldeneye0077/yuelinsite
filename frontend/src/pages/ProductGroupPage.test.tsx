import { fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'
import { buildRepresentativeProducts, getProductTaxonomy } from '../content/products'

describe('ProductGroupPage', () => {
  it('renders an industrial sensor subgroup page with product visuals, detail content, and sibling navigation', async () => {
    const taxonomy = getProductTaxonomy('zh')
    const group = taxonomy.categories[0].groups[0]
    const products = buildRepresentativeProducts(
      'zh',
      'industrial-sensors',
      'fiber-sensors',
    )
    const router = createAppRouter({
      initialEntries: ['/zh/products/industrial-sensors/fiber-sensors'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect((await screen.findAllByText(group.name)).length).toBeGreaterThan(0)
    expect(await screen.findByText(taxonomy.featuredProductsTitle)).toBeInTheDocument()
    expect(await screen.findByText(taxonomy.listingTemplateTitle)).toBeInTheDocument()
    expect(
      (
        await screen.findAllByAltText(products[0].imageAlt ?? products[0].title)
      ).length,
    ).toBeGreaterThan(0)

    const productButtons = screen.getAllByRole('button', {
      name: new RegExp(products[1].title, 'i'),
    })

    fireEvent.click(productButtons[0])

    expect(
      (await screen.findAllByText(products[1].seriesCode ?? '')).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(products[1].application ?? '')).length,
    ).toBeGreaterThan(0)
    expect(
      screen
        .getAllByRole('button', { name: new RegExp(products[1].title, 'i') })
        .some((button) => button.getAttribute('aria-pressed') === 'true'),
    ).toBe(true)
  })

  it('renders other industrial sensor subgroup pages with the same visual product pattern', async () => {
    const products = buildRepresentativeProducts(
      'zh',
      'industrial-sensors',
      'photoelectric-sensors',
    )
    const router = createAppRouter({
      initialEntries: ['/zh/products/industrial-sensors/photoelectric-sensors'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect((await screen.findAllByText('光电传感器')).length).toBeGreaterThan(0)
    expect(
      (
        await screen.findAllByAltText(products[0].imageAlt ?? products[0].title)
      ).length,
    ).toBeGreaterThan(0)
    expect((await screen.findAllByText('LS100 系列')).length).toBeGreaterThan(0)

    fireEvent.click(
      screen.getAllByRole('button', {
        name: new RegExp(products[1].title, 'i'),
      })[0],
    )

    expect((await screen.findAllByText('LS200 系列')).length).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0)
    expect(
      screen
        .getAllByRole('button', { name: new RegExp(products[1].title, 'i') })
        .some((button) => button.getAttribute('aria-pressed') === 'true'),
    ).toBe(true)
  })

  it('renders a safety subgroup page with media-rich detail content', async () => {
    const products = buildRepresentativeProducts(
      'zh',
      'safety-protection-sensors',
      'safety-door-lock-switches',
    )
    const router = createAppRouter({
      initialEntries: ['/zh/products/safety-protection-sensors/safety-door-lock-switches'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect((await screen.findAllByText('安全门锁开关')).length).toBeGreaterThan(0)
    expect(
      (
        await screen.findAllByAltText(products[0].imageAlt ?? products[0].title)
      ).length,
    ).toBeGreaterThan(0)
    expect((await screen.findAllByText('SDS 系列')).length).toBeGreaterThan(0)
  })
  it('renders project-inferred product groups with the same rich visual detail pattern', async () => {
    const products = buildRepresentativeProducts(
      'zh',
      'pneumatic-components',
      'cylinders',
    )
    const router = createAppRouter({
      initialEntries: ['/zh/products/pneumatic-components/cylinders'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect((await screen.findAllByText('气缸')).length).toBeGreaterThan(0)
    expect(
      (
        await screen.findAllByAltText(products[0].imageAlt ?? products[0].title)
      ).length,
    ).toBeGreaterThan(0)

    fireEvent.click(
      screen.getAllByRole('button', {
        name: new RegExp(products[1].title, 'i'),
      })[0],
    )

    expect(
      (await screen.findAllByText(products[1].highlights[0])).length,
    ).toBeGreaterThan(0)
    expect(
      (await screen.findAllByText(products[1].application ?? '')).length,
    ).toBeGreaterThan(0)
  })
})
