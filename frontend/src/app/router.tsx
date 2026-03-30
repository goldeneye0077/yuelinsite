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
import { RoutePage } from './RoutePage'

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
      element: <RoutePage section="home" />,
    },
    {
      path: '/:locale/products',
      element: <RoutePage section="products" />,
    },
    {
      path: '/:locale/solutions',
      element: <RoutePage section="solutions" />,
    },
    {
      path: '/:locale/support',
      element: <RoutePage section="support" />,
    },
    {
      path: '/:locale/about',
      element: <RoutePage section="about" />,
    },
    {
      path: '/:locale/contact',
      element: <RoutePage section="contact" />,
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
