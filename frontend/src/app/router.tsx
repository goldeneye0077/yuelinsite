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
import { HomeShellPage } from '../pages/HomeShellPage'
import { SectionPlaceholderPage } from '../pages/SectionPlaceholderPage'

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
          element: <SectionPlaceholderPage section="products" />,
        },
        {
          path: 'solutions',
          element: <SectionPlaceholderPage section="solutions" />,
        },
        {
          path: 'support',
          element: <SectionPlaceholderPage section="support" />,
        },
        {
          path: 'about',
          element: <SectionPlaceholderPage section="about" />,
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
