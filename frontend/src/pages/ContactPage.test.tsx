import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { AppProviders } from '../app/providers'
import { queryClient } from '../app/query-client'
import { createAppRouter } from '../app/router'
import { getSiteContent } from '../content/site'
import { submitInquiry } from '../lib/api/site-client'

vi.mock('../lib/api/site-client', async () => {
  const actual = await vi.importActual<typeof import('../lib/api/site-client')>(
    '../lib/api/site-client',
  )

  return {
    ...actual,
    submitInquiry: vi.fn(),
  }
})

const submitInquiryMock = vi.mocked(submitInquiry)

describe('ContactPage', () => {
  afterEach(() => {
    submitInquiryMock.mockReset()
    queryClient.clear()
  })

  it('submits the inquiry form and renders success feedback', async () => {
    const content = getSiteContent('zh')
    const user = userEvent.setup()

    submitInquiryMock.mockResolvedValue({
      detail: '询盘已收到，我们会尽快与您联系。',
      submissionId: 7,
      status: 'received',
    })

    const router = createAppRouter({
      initialEntries: ['/zh/contact'],
    })

    render(
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>,
    )

    await user.type(
      screen.getByLabelText(content.contactPage.form.companyNameLabel),
      '跃鳞科技合作客户',
    )
    await user.type(
      screen.getByLabelText(content.contactPage.form.contactNameLabel),
      '张伟',
    )
    await user.type(
      screen.getByLabelText(content.contactPage.form.emailLabel),
      'zhang.wei@example.com',
    )
    await user.type(
      screen.getByLabelText(content.contactPage.form.phoneLabel),
      '13800000000',
    )
    await user.selectOptions(
      screen.getByLabelText(content.contactPage.form.interestCategoryLabel),
      content.contactPage.categoryOptions[1].value,
    )
    await user.type(
      screen.getByLabelText(content.contactPage.form.messageLabel),
      '我们希望了解适合自动化产线的工业传感器与技术集成支持。',
    )
    await user.click(
      screen.getByRole('button', { name: content.contactPage.form.submitLabel }),
    )

    await waitFor(() => {
      expect(submitInquiryMock.mock.calls[0]?.[0]).toEqual({
        companyName: '跃鳞科技合作客户',
        contactName: '张伟',
        email: 'zhang.wei@example.com',
        phone: '13800000000',
        interestCategory: content.contactPage.categoryOptions[1].value,
        message: '我们希望了解适合自动化产线的工业传感器与技术集成支持。',
        locale: 'zh',
        sourcePage: '/zh/contact',
      })
    })

    expect(await screen.findByText(content.contactPage.form.successLabel)).toBeInTheDocument()
    expect(await screen.findByText(/#7/)).toBeInTheDocument()
  })
})
