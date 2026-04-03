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

  it(
    'prefills the inquiry category and submits the production-ready payload',
    async () => {
      const content = getSiteContent('zh')
      const user = userEvent.setup()

      submitInquiryMock.mockResolvedValue({
        detail: 'Inquiry stored.',
        submissionId: 7,
        status: 'received',
      })

      const router = createAppRouter({
        initialEntries: ['/zh/contact?category=technical-integration&source=solutions'],
      })

      render(
        <AppProviders>
          <RouterProvider router={router} />
        </AppProviders>,
      )

      expect(screen.queryByText(content.contactPage.entryContextLabel)).not.toBeInTheDocument()
      expect(
        screen.getByLabelText(content.contactPage.form.interestCategoryLabel),
      ).toHaveValue('technical-integration')

      await user.type(
        screen.getByLabelText(content.contactPage.form.companyNameLabel),
        'Yuelin Partner Factory',
      )
      await user.type(
        screen.getByLabelText(content.contactPage.form.contactNameLabel),
        'Zhang Wei',
      )
      await user.type(
        screen.getByLabelText(content.contactPage.form.emailLabel),
        'zhang.wei@example.com',
      )
      await user.type(
        screen.getByLabelText(content.contactPage.form.phoneLabel),
        '13800000000',
      )
      await user.type(
        screen.getByLabelText(content.contactPage.form.messageLabel),
        'Need a technical-integration discussion for an automation line.',
      )
      await user.click(screen.getByRole('checkbox'))
      await user.click(
        screen.getByRole('button', { name: content.contactPage.form.submitLabel }),
      )

      await waitFor(() => {
        expect(submitInquiryMock.mock.calls[0]?.[0]).toEqual({
          companyName: 'Yuelin Partner Factory',
          contactName: 'Zhang Wei',
          email: 'zhang.wei@example.com',
          phone: '13800000000',
          interestCategory: 'technical-integration',
          message: 'Need a technical-integration discussion for an automation line.',
          website: '',
          consentAccepted: true,
          locale: 'zh',
          sourcePage: '/zh/contact',
          sourceContext: 'solutions',
        })
      })

      expect(await screen.findByText(content.contactPage.form.successLabel)).toBeInTheDocument()
      expect(await screen.findByText(/#7/)).toBeInTheDocument()
    },
    10000,
  )
})
