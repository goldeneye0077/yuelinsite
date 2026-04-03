import type { Locale } from '../../i18n/locales'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

export class AdminUnauthorizedError extends Error {
  constructor(message = 'Administrator login required.') {
    super(message)
    this.name = 'AdminUnauthorizedError'
  }
}

export interface AdminSessionInput {
  username: string
  password: string
}

export interface AdminSessionData {
  authenticated: boolean
  username: string
  expiresAt: string
}

export interface AdminInquiryRecord {
  id: number
  companyName: string
  contactName: string
  email: string
  phone: string
  interestCategory: string
  message: string
  locale: Locale
  sourcePage: string
  sourceContext: string | null
  status: string
  requestId: string | null
  clientIp: string | null
  referer: string | null
  createdAt: string
}

export interface AdminInquiryListResponse {
  items: AdminInquiryRecord[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  availableCategories: string[]
  availableSourceContexts: string[]
}

export interface AdminInquiryListQuery {
  page: number
  pageSize: number
  query?: string
  interestCategory?: string
  sourceContext?: string
}

export async function getAdminSession(): Promise<AdminSessionData | null> {
  const response = await fetch(`${API_BASE_URL}/api/v1/admin/session`, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.status === 401) {
    return null
  }

  if (!response.ok) {
    throw new Error(await getAdminErrorMessage(response))
  }

  return (await response.json()) as AdminSessionData
}

export async function createAdminSession(
  payload: AdminSessionInput,
): Promise<AdminSessionData> {
  const response = await fetch(`${API_BASE_URL}/api/v1/admin/session`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (response.status === 401) {
    throw new AdminUnauthorizedError(await getAdminErrorMessage(response))
  }

  if (!response.ok) {
    throw new Error(await getAdminErrorMessage(response))
  }

  return (await response.json()) as AdminSessionData
}

export async function destroyAdminSession(): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/v1/admin/session`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok && response.status !== 401) {
    throw new Error(await getAdminErrorMessage(response))
  }
}

export async function getAdminInquiries(
  query: AdminInquiryListQuery,
): Promise<AdminInquiryListResponse> {
  const params = new URLSearchParams({
    page: String(query.page),
    pageSize: String(query.pageSize),
  })

  if (query.query) {
    params.set('query', query.query)
  }

  if (query.interestCategory) {
    params.set('interestCategory', query.interestCategory)
  }

  if (query.sourceContext) {
    params.set('sourceContext', query.sourceContext)
  }

  const response = await fetch(
    `${API_BASE_URL}/api/v1/admin/inquiries?${params.toString()}`,
    {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    },
  )

  if (response.status === 401) {
    throw new AdminUnauthorizedError('Administrator login required.')
  }

  if (!response.ok) {
    throw new Error(await getAdminErrorMessage(response))
  }

  return (await response.json()) as AdminInquiryListResponse
}

async function getAdminErrorMessage(response: Response) {
  try {
    const data = (await response.json()) as { detail?: string }
    if (typeof data.detail === 'string') {
      return data.detail
    }
  } catch {
    return 'Administrator request failed.'
  }

  return 'Administrator request failed.'
}
