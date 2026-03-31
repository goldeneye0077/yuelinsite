import { render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { createAppRouter } from '../app/router'
import { AppProviders } from '../app/providers'

describe('AboutPage', () => {
  it('renders the bilingual company profile and Shenzhen address', async () => {
    const router = createAppRouter({
      initialEntries: ['/zh/about'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(
      await screen.findByRole('heading', { name: /about/i }),
    ).toBeInTheDocument()
    expect(
      (
        await screen.findAllByText(
          /深圳市南山区粤海街道科技园社区科苑路 8 号讯美科技广场 3 号楼/,
        )
      ).length,
    ).toBeGreaterThan(0)
    expect(await screen.findByText(/企业资质/)).toBeInTheDocument()
  })
})
