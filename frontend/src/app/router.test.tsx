import { render, screen, waitFor } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { AppProviders } from './providers'
import { createAppRouter } from './router'
import {
  buildLocalePath,
  DEFAULT_LOCALE,
  SECTION_ROUTE_KEYS,
  SUPPORTED_LOCALES,
} from '../i18n/locales'
import { getProductTaxonomy } from '../content/products'
import { getSiteContent } from '../content/site'
import { routeContentKeyMap } from '../content/site/types'

describe('createAppRouter', () => {
  it('redirects invalid locales to /zh', async () => {
    const router = createAppRouter({
      initialEntries: ['/fr/products'],
    })

      render(
        <AppProviders>
          <RouterProvider router={router} />
        </AppProviders>,
      )

      await waitFor(() => {
        expect(router.state.location.pathname).toBe(buildLocalePath(DEFAULT_LOCALE))
      })
  })

  it.each(SUPPORTED_LOCALES)(
    'renders the expected sections under %s routes',
    async (locale) => {
      const content = getSiteContent(locale)

      for (const section of SECTION_ROUTE_KEYS) {
        const router = createAppRouter({
          initialEntries: [buildLocalePath(locale, section)],
        })
        const expectedHeading =
          section === 'home'
            ? content.meta.brandName
            : section === 'products'
            ? getProductTaxonomy(locale).title
            : content[routeContentKeyMap[section]].title

        const { unmount } = render(
          <AppProviders>
            <RouterProvider router={router} />
          </AppProviders>,
        )

        if (section === 'home') {
          expect(
            await screen.findByRole('heading', {
              level: 1,
              name: expectedHeading,
            }),
          ).toBeInTheDocument()
        } else {
          expect(
            await screen.findByRole('heading', {
              name: expectedHeading,
            }),
          ).toBeInTheDocument()
        }

        unmount()
      }
    },
  )
})
