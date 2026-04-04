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
import { Layout } from '../layouts/Layout'
import { AdminInquiriesPage } from '../pages/AdminInquiriesPage'
import { ContactPage } from '../pages/ContactPage'
import { HomeShellPage } from '../pages/HomeShellPage'
import { ProductCenterPage } from '../pages/ProductCenterPage'
import { ProductFamilyPage } from '../pages/ProductFamilyPage'
import { ProductGroupPage } from '../pages/ProductGroupPage'
import { SolutionsPage } from '../pages/SolutionsPage'
import { SupportPage } from '../pages/SupportPage'

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
      element: <Layout />,
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
          path: 'products/:familyKey/:groupSlug',
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
          path: 'partners',
          element: <Navigate relative="path" replace to=".." />,
        },
        {
          path: 'support',
          element: <SupportPage />,
        },
        {
          path: 'about',
          element: <Navigate relative="path" replace to=".." />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'admin/inquiries',
          element: <AdminInquiriesPage />,
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
