import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { AppProviders } from '../app/providers'
import { queryClient } from '../app/query-client'
import { createAppRouter } from '../app/router'
import {
  createAdminSession,
  getAdminInquiries,
  getAdminSession,
} from '../lib/api/admin-client'

vi.mock('../lib/api/admin-client', async () => {
  const actual = await vi.importActual<typeof import('../lib/api/admin-client')>(
    '../lib/api/admin-client',
  )

  return {
    ...actual,
    createAdminSession: vi.fn(),
    destroyAdminSession: vi.fn(),
    getAdminInquiries: vi.fn(),
    getAdminSession: vi.fn(),
  }
})

const createAdminSessionMock = vi.mocked(createAdminSession)
const getAdminInquiriesMock = vi.mocked(getAdminInquiries)
const getAdminSessionMock = vi.mocked(getAdminSession)

describe('AdminInquiriesPage', () => {
  afterEach(() => {
    createAdminSessionMock.mockReset()
    getAdminInquiriesMock.mockReset()
    getAdminSessionMock.mockReset()
    queryClient.clear()
  })

  it('shows the sign-in form when no administrator session is active', async () => {
    getAdminSessionMock.mockResolvedValue(null)

    const router = createAppRouter({
      initialEntries: ['/zh/admin/inquiries'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    expect(await screen.findByRole('heading', { name: '询盘后台列表' })).toBeInTheDocument()
    expect(await screen.findByLabelText('管理员账号')).toBeInTheDocument()
    expect(screen.queryByText('总询盘数')).not.toBeInTheDocument()
  })

  it('signs in and renders protected inquiry records', async () => {
    const user = userEvent.setup()

    getAdminSessionMock.mockResolvedValue(null)
    createAdminSessionMock.mockResolvedValue({
      authenticated: true,
      username: 'admin',
      expiresAt: '2026-04-04T09:00:00.000Z',
    })
    getAdminInquiriesMock.mockResolvedValue({
      items: [
        {
          id: 18,
          companyName: '跃鳞测试工厂',
          contactName: '张伟',
          email: 'zhang.wei@example.com',
          phone: '13800000000',
          interestCategory: 'technical-integration',
          message: '需要确认技术集成边界。',
          locale: 'zh',
          sourcePage: '/zh/contact',
          sourceContext: 'about',
          status: 'new',
          requestId: 'req-18',
          clientIp: '203.0.113.19',
          referer: 'http://89.144.47.236:25173/zh/about',
          createdAt: '2026-04-03T09:00:00.000Z',
        },
      ],
      total: 1,
      page: 1,
      pageSize: 20,
      totalPages: 1,
      availableCategories: ['technical-integration'],
      availableSourceContexts: ['about'],
    })

    const router = createAppRouter({
      initialEntries: ['/zh/admin/inquiries'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    await user.type(await screen.findByLabelText('管理员账号'), 'admin')
    await user.type(await screen.findByLabelText('管理员密码'), 'admin123456')
    await user.click(screen.getByRole('button', { name: '登录后台' }))

    await waitFor(() => {
      expect(createAdminSessionMock.mock.calls[0]?.[0]).toEqual({
        username: 'admin',
        password: 'admin123456',
      })
    })

    expect(await screen.findByText('总询盘数')).toBeInTheDocument()
    expect(await screen.findByText('跃鳞测试工厂')).toBeInTheDocument()
    expect((await screen.findAllByText('about')).length).toBeGreaterThan(0)
  })
})
