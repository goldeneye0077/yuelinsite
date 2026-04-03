import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider } from 'react-router-dom'
import { vi } from 'vitest'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'

describe('RouteScrollManager', () => {
  it('scrolls to top when route navigation changes the page', async () => {
    const user = userEvent.setup()
    const router = createAppRouter({
      initialEntries: ['/zh/products'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'auto',
    })

    vi.mocked(window.scrollTo).mockClear()

    await user.click(
      (await screen.findAllByRole('link', {
        name: '关于我们',
      }))[0],
    )

    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/zh/about')
    })

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  })
})
