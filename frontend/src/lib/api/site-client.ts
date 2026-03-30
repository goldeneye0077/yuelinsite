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
  locale: Locale
  sourcePage: string
}

export interface InquiryContractResponse {
  detail: string
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

  return (await response.json()) as SiteBootstrapResponse
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

  const data = (await response.json()) as InquiryContractResponse

  if (!response.ok) {
    throw new Error(data.detail)
  }

  return data
}
