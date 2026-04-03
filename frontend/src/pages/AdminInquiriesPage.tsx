import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ArrowLeft, Lock, LogOut, RefreshCcw, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  AdminUnauthorizedError,
  createAdminSession,
  destroyAdminSession,
  getAdminInquiries,
  getAdminSession,
  type AdminInquiryRecord,
} from '../lib/api/admin-client'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

const PAGE_SIZE = 20

const ADMIN_COPY = {
  zh: {
    eyebrow: '管理员后台',
    title: '询盘后台列表',
    summary:
      '这个页面只给管理员查看，用来集中查看官网询盘、来源标签、联系信息和提交时间。',
    description:
      '访客前台看不到这里的询盘数据。登录成功后，列表会从后端受保护接口读取真实记录。',
    loginTitle: '管理员登录',
    loginBody: '使用后台账号登录后，才能查看询盘列表与来源统计。',
    usernameLabel: '管理员账号',
    passwordLabel: '管理员密码',
    submitLabel: '登录后台',
    logoutLabel: '退出登录',
    searchLabel: '搜索询盘',
    searchPlaceholder: '搜索公司、联系人、邮箱、电话或留言内容',
    categoryLabel: '需求分类',
    sourceLabel: '来源标签',
    allCategories: '全部分类',
    allSources: '全部来源',
    emptySource: '未标记来源',
    totalLabel: '总询盘数',
    sourceCountLabel: '来源标签数',
    pageLabel: '当前页',
    loadingSession: '正在确认管理员会话...',
    loadingInquiries: '正在读取询盘列表...',
    noResults: '当前筛选条件下还没有询盘记录。',
    backToSite: '返回官网前台',
    refreshLabel: '刷新列表',
    previousPage: '上一页',
    nextPage: '下一页',
    pageSummary: '第 {page} / {totalPages} 页',
    fieldCompany: '公司',
    fieldContact: '联系人',
    fieldCategory: '分类',
    fieldSource: '来源',
    fieldCreatedAt: '提交时间',
    fieldLocale: '语言',
    fieldStatus: '状态',
    fieldMessage: '留言',
    fieldReference: '请求 ID',
    fieldClientIp: '访客 IP',
    fieldReferer: 'Referer',
    sourcePageLabel: '提交页',
    signedInAs: '当前管理员',
    loginErrorFallback: '管理员登录失败，请稍后再试。',
  },
  en: {
    eyebrow: 'Admin console',
    title: 'Inquiry admin list',
    summary:
      'This route is reserved for administrators to review inquiries, source tags, contact details, and submission timing.',
    description:
      'Public visitors cannot see this data. After sign-in, the list is loaded from protected backend endpoints.',
    loginTitle: 'Administrator sign-in',
    loginBody: 'Use the admin account to unlock the inquiry list and source tracking.',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    submitLabel: 'Sign in',
    logoutLabel: 'Sign out',
    searchLabel: 'Search inquiries',
    searchPlaceholder: 'Search company, contact, email, phone, or message',
    categoryLabel: 'Category',
    sourceLabel: 'Source tag',
    allCategories: 'All categories',
    allSources: 'All sources',
    emptySource: 'No source tag',
    totalLabel: 'Total inquiries',
    sourceCountLabel: 'Tracked source tags',
    pageLabel: 'Current page',
    loadingSession: 'Checking administrator session...',
    loadingInquiries: 'Loading inquiry list...',
    noResults: 'No inquiries match the current filters.',
    backToSite: 'Back to website',
    refreshLabel: 'Refresh list',
    previousPage: 'Previous',
    nextPage: 'Next',
    pageSummary: 'Page {page} / {totalPages}',
    fieldCompany: 'Company',
    fieldContact: 'Contact',
    fieldCategory: 'Category',
    fieldSource: 'Source',
    fieldCreatedAt: 'Submitted',
    fieldLocale: 'Locale',
    fieldStatus: 'Status',
    fieldMessage: 'Message',
    fieldReference: 'Request ID',
    fieldClientIp: 'Client IP',
    fieldReferer: 'Referer',
    sourcePageLabel: 'Source page',
    signedInAs: 'Signed in as',
    loginErrorFallback: 'Administrator login failed. Please try again.',
  },
} as const

type AdminLocaleCopy = (typeof ADMIN_COPY)[keyof typeof ADMIN_COPY]

function formatTimestamp(value: string, locale: 'zh' | 'en') {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

function renderPageSummary(copy: AdminLocaleCopy, page: number, totalPages: number) {
  return copy.pageSummary
    .replace('{page}', String(page))
    .replace('{totalPages}', String(totalPages))
}

function getCategoryLabel(
  categories: Array<{ value: string; label: string }>,
  value: string,
) {
  return categories.find((category) => category.value === value)?.label ?? value
}

function InquiryCard({
  copy,
  locale,
  item,
  categoryLabel,
}: {
  copy: AdminLocaleCopy
  locale: 'zh' | 'en'
  item: AdminInquiryRecord
  categoryLabel: string
}) {
  return (
    <article className="admin-inquiry-card">
      <header className="admin-inquiry-card__header">
        <div className="admin-inquiry-card__identity">
          <p className="admin-inquiry-card__eyebrow">
            {copy.fieldCompany} #{item.id}
          </p>
          <h2>{item.companyName}</h2>
          <p>{item.contactName}</p>
        </div>
        <div className="admin-inquiry-card__meta">
          <span className="admin-badge">{item.status}</span>
          <span className="admin-badge admin-badge--muted">
            {formatTimestamp(item.createdAt, locale)}
          </span>
        </div>
      </header>

      <div className="admin-inquiry-card__grid">
        <div>
          <p className="admin-field-label">{copy.fieldContact}</p>
          <p>{item.contactName}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        </div>
        <div>
          <p className="admin-field-label">{copy.fieldCategory}</p>
          <p>{categoryLabel}</p>
          <p className="admin-field-label">{copy.fieldLocale}</p>
          <p>{item.locale.toUpperCase()}</p>
        </div>
        <div>
          <p className="admin-field-label">{copy.fieldSource}</p>
          <p>{item.sourceContext ?? copy.emptySource}</p>
          <p className="admin-field-label">{copy.sourcePageLabel}</p>
          <p>{item.sourcePage}</p>
        </div>
        <div>
          <p className="admin-field-label">{copy.fieldReference}</p>
          <p>{item.requestId ?? '-'}</p>
          <p className="admin-field-label">{copy.fieldClientIp}</p>
          <p>{item.clientIp ?? '-'}</p>
        </div>
      </div>

      <div className="admin-inquiry-card__message">
        <p className="admin-field-label">{copy.fieldMessage}</p>
        <p>{item.message}</p>
      </div>

      <div className="admin-inquiry-card__footer">
        <span>
          {copy.fieldReferer}: {item.referer ?? '-'}
        </span>
        <span>
          {copy.fieldCreatedAt}: {formatTimestamp(item.createdAt, locale)}
        </span>
      </div>
    </article>
  )
}

export function AdminInquiriesPage() {
  const { locale, content } = useSiteShellContext()
  const queryClient = useQueryClient()
  const copy = ADMIN_COPY[locale]
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [sourceContext, setSourceContext] = useState('')
  const [page, setPage] = useState(1)
  const deferredQuery = useDeferredValue(query.trim())

  const sessionQuery = useQuery({
    queryKey: ['admin-session'],
    queryFn: getAdminSession,
    retry: false,
  })

  const loginMutation = useMutation({
    mutationFn: createAdminSession,
    onSuccess: (session) => {
      queryClient.setQueryData(['admin-session'], session)
      queryClient.removeQueries({ queryKey: ['admin-inquiries'] })
      setCredentials({ username: '', password: '' })
    },
  })

  const logoutMutation = useMutation({
    mutationFn: destroyAdminSession,
    onSuccess: () => {
      queryClient.setQueryData(['admin-session'], null)
      queryClient.removeQueries({ queryKey: ['admin-inquiries'] })
    },
  })

  const inquiriesQuery = useQuery({
    queryKey: ['admin-inquiries', page, deferredQuery, category, sourceContext],
    queryFn: () =>
      getAdminInquiries({
        page,
        pageSize: PAGE_SIZE,
        query: deferredQuery || undefined,
        interestCategory: category || undefined,
        sourceContext: sourceContext || undefined,
      }),
    enabled: Boolean(sessionQuery.data),
    retry: false,
  })

  useEffect(() => {
    if (inquiriesQuery.error instanceof AdminUnauthorizedError) {
      queryClient.setQueryData(['admin-session'], null)
      queryClient.removeQueries({ queryKey: ['admin-inquiries'] })
    }
  }, [inquiriesQuery.error, queryClient])

  const categoryOptions = content.contactPage.categoryOptions
  const availableSourceContexts = inquiriesQuery.data?.availableSourceContexts ?? []
  const stats = useMemo(
    () => [
      {
        label: copy.totalLabel,
        value: String(inquiriesQuery.data?.total ?? 0),
      },
      {
        label: copy.sourceCountLabel,
        value: String(availableSourceContexts.length),
      },
      {
        label: copy.pageLabel,
        value: inquiriesQuery.data
          ? renderPageSummary(copy, inquiriesQuery.data.page, inquiriesQuery.data.totalPages)
          : renderPageSummary(copy, 1, 1),
      },
    ],
    [availableSourceContexts.length, copy, inquiriesQuery.data],
  )

  if (sessionQuery.isLoading) {
    return (
      <section className="page-band page-band--tight">
        <div className="admin-shell admin-shell--single">
          <div className="admin-panel admin-panel--muted">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.loadingSession}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!sessionQuery.data) {
    return (
      <section className="page-band page-band--tight">
        <div className="admin-shell admin-shell--single">
          <div className="admin-panel">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-summary">{copy.summary}</p>
            <p className="hero-description">{copy.description}</p>

            <div className="admin-login-card">
              <div className="admin-login-card__intro">
                <p className="admin-field-label">{copy.loginTitle}</p>
                <h2>{copy.loginBody}</h2>
              </div>

              <form
                className="admin-login-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  loginMutation.mutate(credentials)
                }}
              >
                <label className="contact-field">
                  <span>{copy.usernameLabel}</span>
                  <input
                    autoComplete="username"
                    name="username"
                    onChange={(event) => {
                      const { value } = event.currentTarget
                      setCredentials((current) => ({
                        ...current,
                        username: value,
                      }))
                    }}
                    required
                    value={credentials.username}
                  />
                </label>

                <label className="contact-field">
                  <span>{copy.passwordLabel}</span>
                  <input
                    autoComplete="current-password"
                    name="password"
                    onChange={(event) => {
                      const { value } = event.currentTarget
                      setCredentials((current) => ({
                        ...current,
                        password: value,
                      }))
                    }}
                    required
                    type="password"
                    value={credentials.password}
                  />
                </label>

                {loginMutation.isError ? (
                  <p className="admin-login-error" role="alert">
                    {loginMutation.error instanceof Error
                      ? loginMutation.error.message
                      : copy.loginErrorFallback}
                  </p>
                ) : null}

                <div className="admin-login-actions">
                  <button className="contact-submit" type="submit">
                    <Lock size={16} />
                    <span>{copy.submitLabel}</span>
                  </button>
                  <Link className="secondary-link" to={buildLocalePath(locale)}>
                    <ArrowLeft size={16} />
                    <span>{copy.backToSite}</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="admin-shell">
          <div className="admin-panel">
            <div className="admin-panel__header">
              <div>
                <p className="eyebrow">{copy.eyebrow}</p>
                <h1>{copy.title}</h1>
                <p className="hero-summary">{copy.summary}</p>
                <p className="hero-description">{copy.description}</p>
              </div>
              <div className="admin-session-box">
                <p className="admin-field-label">{copy.signedInAs}</p>
                <h2>{sessionQuery.data.username}</h2>
                <p>{formatTimestamp(sessionQuery.data.expiresAt, locale)}</p>
                <button
                  className="secondary-link"
                  onClick={() => logoutMutation.mutate()}
                  type="button"
                >
                  <LogOut size={16} />
                  <span>{copy.logoutLabel}</span>
                </button>
              </div>
            </div>

            <div className="admin-stat-grid">
              {stats.map((item) => (
                <article key={item.label} className="admin-stat-card">
                  <p className="admin-field-label">{item.label}</p>
                  <h2>{item.value}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="admin-shell">
          <div className="admin-panel admin-panel--muted">
            <div className="admin-filter-bar">
              <label className="contact-field admin-filter-field">
                <span>{copy.searchLabel}</span>
                <div className="admin-search-input">
                  <Search size={16} />
                  <input
                    onChange={(event) => {
                      setQuery(event.currentTarget.value)
                      setPage(1)
                    }}
                    placeholder={copy.searchPlaceholder}
                    value={query}
                  />
                </div>
              </label>

              <label className="contact-field admin-filter-field">
                <span>{copy.categoryLabel}</span>
                <select
                  onChange={(event) => {
                    setCategory(event.currentTarget.value)
                    setPage(1)
                  }}
                  value={category}
                >
                  <option value="">{copy.allCategories}</option>
                  {categoryOptions
                    .filter((item) =>
                      (inquiriesQuery.data?.availableCategories ?? []).includes(item.value),
                    )
                    .map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </label>

              <label className="contact-field admin-filter-field">
                <span>{copy.sourceLabel}</span>
                <select
                  onChange={(event) => {
                    setSourceContext(event.currentTarget.value)
                    setPage(1)
                  }}
                  value={sourceContext}
                >
                  <option value="">{copy.allSources}</option>
                  {availableSourceContexts.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <button
                className="secondary-link"
                onClick={() => inquiriesQuery.refetch()}
                type="button"
              >
                <RefreshCcw size={16} />
                <span>{copy.refreshLabel}</span>
              </button>
            </div>

            {inquiriesQuery.isLoading ? (
              <p className="admin-loading-copy">{copy.loadingInquiries}</p>
            ) : null}

            {inquiriesQuery.data?.items.length ? (
              <div className="admin-inquiry-list">
                {inquiriesQuery.data.items.map((item) => (
                  <InquiryCard
                    key={item.id}
                    categoryLabel={getCategoryLabel(categoryOptions, item.interestCategory)}
                    copy={copy}
                    item={item}
                    locale={locale}
                  />
                ))}
              </div>
            ) : inquiriesQuery.isLoading ? null : (
              <p className="admin-empty-state">{copy.noResults}</p>
            )}

            <div className="admin-pagination">
              <button
                className="secondary-link"
                disabled={page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                type="button"
              >
                {copy.previousPage}
              </button>
              <p>
                {renderPageSummary(
                  copy,
                  inquiriesQuery.data?.page ?? page,
                  inquiriesQuery.data?.totalPages ?? 1,
                )}
              </p>
              <button
                className="secondary-link"
                disabled={page >= (inquiriesQuery.data?.totalPages ?? 1)}
                onClick={() =>
                  setPage((current) =>
                    Math.min(inquiriesQuery.data?.totalPages ?? 1, current + 1),
                  )
                }
                type="button"
              >
                {copy.nextPage}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
