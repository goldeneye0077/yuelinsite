import type { Locale } from '../../i18n/locales'

export interface SiteNavigationItem {
  key: string
  label: string
  href: string
}

export interface SiteFooterGroup {
  title: string
  items: SiteNavigationItem[]
}

export interface ThemeOption {
  key: 'light' | 'dark'
  label: string
}

export interface SiteBootstrapResponse {
  locale: Locale
  supportedLocales: Locale[]
  companyName: string
  brandName: string
  address: string
  navItems: SiteNavigationItem[]
  footerGroups: SiteFooterGroup[]
  themeOptions: ThemeOption[]
}

export interface InquirySubmissionInput {
  companyName: string
  contactName: string
  email: string
  phone: string
  interestCategory: string
  message: string
  website: string
  consentAccepted: boolean
  locale: Locale
  sourcePage: string
  sourceContext?: string | null
}

export interface InquiryContractResponse {
  detail: string
  submissionId: number
  status: 'received'
}

interface ApiEnvelope<T> {
  success: boolean
  data: T
  meta: {
    requestId: string | null
    generatedAt: string
  }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

export async function getSiteBootstrap(
  locale: Locale,
): Promise<SiteBootstrapResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/site/bootstrap?locale=${locale}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )

  if (!response.ok) {
    throw new Error(`Failed to load bootstrap contract for locale "${locale}"`)
  }

  return unwrapApiEnvelope<SiteBootstrapResponse>(await response.json())
}

export async function submitInquiry(
  payload: InquirySubmissionInput,
): Promise<InquiryContractResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(await getInquiryErrorMessage(response, payload.locale))
  }

  return unwrapApiEnvelope<InquiryContractResponse>(await response.json())
}

function unwrapApiEnvelope<T>(payload: unknown): T {
  const envelope = payload as ApiEnvelope<T>
  return envelope.data
}

async function getInquiryErrorMessage(response: Response, locale: Locale) {
  const fallbackMessage =
    locale === 'zh'
      ? '询盘暂时无法提交，请稍后再试。'
      : 'Unable to submit the inquiry right now. Please try again later.'

  try {
    const data = (await response.json()) as {
      detail?: string | Array<{ msg?: string }>
    }

    if (typeof data.detail === 'string') {
      return data.detail
    }

    if (Array.isArray(data.detail)) {
      const firstMessage = data.detail.find((item) => typeof item.msg === 'string')?.msg

      if (firstMessage) {
        return firstMessage
      }
    }
  } catch {
    return fallbackMessage
  }

  return fallbackMessage
}
