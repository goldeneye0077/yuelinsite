import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
} from 'react-router-dom'

import {
  buildLocalePath,
  DEFAULT_LOCALE,
  SECTION_ROUTE_KEYS,
} from '../i18n/locales'
import { SiteShell } from '../layouts/SiteShell'
import { AboutPage } from '../pages/AboutPage'
import { HomeShellPage } from '../pages/HomeShellPage'
import { ProductCenterPage } from '../pages/ProductCenterPage'
import { ProductFamilyPage } from '../pages/ProductFamilyPage'
import { ProductGroupPage } from '../pages/ProductGroupPage'
import { SectionPlaceholderPage } from '../pages/SectionPlaceholderPage'
import { SolutionsPage } from '../pages/SolutionsPage'

type RouterFactoryOptions = {
  initialEntries?: string[]
}

export function createAppRouter(options: RouterFactoryOptions = {}) {
  const routes = [
    {
      path: '/',
      element: <Navigate replace to={buildLocalePath(DEFAULT_LOCALE)} />,
    },
    {
      path: '/:locale',
      element: <SiteShell />,
      children: [
        {
          index: true,
          element: <HomeShellPage />,
        },
        {
          path: 'products',
          element: <ProductCenterPage />,
        },
        {
          path: 'products/industrial-sensors/:groupSlug',
          element: <ProductGroupPage />,
        },
        {
          path: 'products/:familyKey',
          element: <ProductFamilyPage />,
        },
        {
          path: 'solutions',
          element: <SolutionsPage />,
        },
        {
          path: 'support',
          element: <SectionPlaceholderPage section="support" />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'contact',
          element: <SectionPlaceholderPage section="contact" />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate replace to={buildLocalePath(DEFAULT_LOCALE)} />,
    },
  ]

  if (options.initialEntries) {
    return createMemoryRouter(routes, { initialEntries: options.initialEntries })
  }

  return createBrowserRouter(routes)
}

export const router = createAppRouter()
export const supportedRouteSections = SECTION_ROUTE_KEYS
