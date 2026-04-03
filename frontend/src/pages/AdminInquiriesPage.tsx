import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'
import {
  ArrowLeft,
  LockKeyhole,
  LogOut,
  RefreshCcw,
  Search,
} from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Field } from '../components/ui/field'
import { Input } from '../components/ui/input'
import { Select } from '../components/ui/select'
import { Skeleton } from '../components/ui/skeleton'
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
      '这个入口只给管理员查看，用来集中筛选官网询盘、来源标签、联系信息和提交时间。',
    description:
      '访客即使知道链接，也只能看到登录层。登录成功后，页面会从受保护接口读取真实询盘记录。',
    loginTitle: '管理员登录',
    loginBody: '使用后台账号解锁询盘列表、来源上下文和筛选面板。',
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
    emptySource: '未记录',
    totalLabel: '总询盘数',
    sourceCountLabel: '来源标签数',
    pageLabel: '当前页',
    loadingSession: '正在确认管理员会话...',
    loadingInquiries: '正在读取询盘列表...',
    noResults: '当前筛选条件下还没有匹配的询盘记录。',
    backToSite: '返回官网前台',
    refreshLabel: '刷新列表',
    previousPage: '上一页',
    nextPage: '下一页',
    pageSummary: '第 {page} / {totalPages} 页',
    fieldCompany: '公司',
    fieldContact: '联系人',
    fieldCategory: '分类',
    fieldSource: '来源标签',
    fieldCreatedAt: '提交时间',
    fieldLocale: '语言',
    fieldStatus: '状态',
    fieldMessage: '留言',
    fieldReference: '请求 ID',
    fieldClientIp: '访客 IP',
    fieldReferer: 'Referer',
    sourcePageLabel: '提交页',
    signedInAs: '当前管理员',
    loginErrorFallback: '管理员登录失败，请稍后重试。',
    loginSuccess: '后台登录成功',
    logoutSuccess: '已退出后台会话',
  },
  en: {
    eyebrow: 'Admin console',
    title: 'Inquiry console',
    summary:
      'This route is reserved for administrators to review incoming inquiries, source tags, contact details, and submission timing.',
    description:
      'Visitors can reach the URL but cannot see any protected data until an administrator signs in.',
    loginTitle: 'Administrator sign-in',
    loginBody: 'Use the admin account to unlock inquiry records, source context, and filters.',
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
    emptySource: 'Not recorded',
    totalLabel: 'Total inquiries',
    sourceCountLabel: 'Tracked sources',
    pageLabel: 'Current page',
    loadingSession: 'Checking administrator session...',
    loadingInquiries: 'Loading inquiry records...',
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
    loginSuccess: 'Administrator session unlocked',
    logoutSuccess: 'Administrator session closed',
  },
} as const

type AdminLocaleCopy = (typeof ADMIN_COPY)[keyof typeof ADMIN_COPY]

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

function formatRelativeTime(value: string, locale: 'zh' | 'en') {
  return formatDistanceToNow(new Date(value), {
    addSuffix: true,
    locale: locale === 'zh' ? zhCN : enUS,
  })
}

function LoadingState({ copy }: { copy: AdminLocaleCopy }) {
  return (
    <div className="grid gap-6">
      <Card className="admin-panel admin-panel--muted">
        <CardHeader>
          <p className="eyebrow">{copy.eyebrow}</p>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.loadingSession}</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
        <Card className="admin-panel">
          <CardContent className="grid gap-4 p-6">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </CardContent>
        </Card>
        <Card className="admin-panel">
          <CardContent className="grid gap-4 p-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-11 w-40" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
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
    <Card className="admin-inquiry-card">
      <CardContent className="grid gap-5 p-6">
        <div className="admin-inquiry-card__header">
          <div className="admin-inquiry-card__identity">
            <p className="admin-inquiry-card__eyebrow">
              {copy.fieldCompany} #{item.id}
            </p>
            <h2>{item.companyName}</h2>
            <p>{item.contactName}</p>
          </div>
          <div className="admin-inquiry-card__meta">
            <Badge>{item.status}</Badge>
            <Badge variant="muted">{formatRelativeTime(item.createdAt, locale)}</Badge>
          </div>
        </div>

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
            {copy.fieldCreatedAt}: {formatRelativeTime(item.createdAt, locale)}
          </span>
        </div>
      </CardContent>
    </Card>
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
      toast.success(copy.loginSuccess, {
        description: session.username,
      })
    },
    onError: (error) => {
      toast.error(copy.submitLabel, {
        description:
          error instanceof Error ? error.message : copy.loginErrorFallback,
      })
    },
  })

  const logoutMutation = useMutation({
    mutationFn: destroyAdminSession,
    onSuccess: () => {
      queryClient.setQueryData(['admin-session'], null)
      queryClient.removeQueries({ queryKey: ['admin-inquiries'] })
      toast.success(copy.logoutSuccess)
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
      toast.error(copy.logoutLabel, {
        description: inquiriesQuery.error.message,
      })
    }
  }, [copy.logoutLabel, inquiriesQuery.error, queryClient])

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
        <div className="admin-shell">
          <LoadingState copy={copy} />
        </div>
      </section>
    )
  }

  if (!sessionQuery.data) {
    return (
      <section className="page-band page-band--tight">
        <div className="admin-shell admin-shell--single">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="admin-panel">
              <CardHeader className="space-y-3">
                <p className="eyebrow">{copy.eyebrow}</p>
                <CardTitle className="text-4xl leading-none">{copy.title}</CardTitle>
                <CardDescription className="hero-summary">{copy.summary}</CardDescription>
                <CardDescription className="hero-description">
                  {copy.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Card className="admin-login-card">
                  <CardHeader className="admin-login-card__intro">
                    <p className="admin-field-label">{copy.loginTitle}</p>
                    <CardTitle className="text-2xl">{copy.loginBody}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <form
                      className="admin-login-form"
                      onSubmit={(event) => {
                        event.preventDefault()
                        loginMutation.mutate(credentials)
                      }}
                    >
                      <Field htmlFor="admin-username" label={copy.usernameLabel} required>
                        <Input
                          aria-label={copy.usernameLabel}
                          autoComplete="username"
                          id="admin-username"
                          name="username"
                          onChange={(event) => {
                            const { value } = event.currentTarget
                            setCredentials((current) => ({
                              ...current,
                              username: value,
                            }))
                          }}
                          value={credentials.username}
                        />
                      </Field>

                      <Field htmlFor="admin-password" label={copy.passwordLabel} required>
                        <Input
                          aria-label={copy.passwordLabel}
                          autoComplete="current-password"
                          id="admin-password"
                          name="password"
                          onChange={(event) => {
                            const { value } = event.currentTarget
                            setCredentials((current) => ({
                              ...current,
                              password: value,
                            }))
                          }}
                          type="password"
                          value={credentials.password}
                        />
                      </Field>

                      <div className="admin-login-actions">
                        <Button
                          disabled={loginMutation.isPending}
                          size="lg"
                          type="submit"
                        >
                          <LockKeyhole size={16} />
                          <span>{copy.submitLabel}</span>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                          <Link to={buildLocalePath(locale)}>
                            <ArrowLeft size={16} />
                            <span>{copy.backToSite}</span>
                          </Link>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <div className="space-y-6">
      <section className="page-band page-band--tight">
        <div className="admin-shell">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="admin-panel">
              <div className="admin-panel__header">
                <CardHeader className="space-y-3">
                  <p className="eyebrow">{copy.eyebrow}</p>
                  <CardTitle className="text-4xl leading-none">{copy.title}</CardTitle>
                  <CardDescription className="hero-summary">{copy.summary}</CardDescription>
                  <CardDescription className="hero-description">
                    {copy.description}
                  </CardDescription>
                </CardHeader>
                <Card className="admin-session-box">
                  <CardContent className="grid gap-3 p-5">
                    <p className="admin-field-label">{copy.signedInAs}</p>
                    <h2>{sessionQuery.data.username}</h2>
                    <p>{formatRelativeTime(sessionQuery.data.expiresAt, locale)}</p>
                    <Button
                      className="justify-start"
                      onClick={() => logoutMutation.mutate()}
                      variant="secondary"
                    >
                      <LogOut size={16} />
                      <span>{copy.logoutLabel}</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <CardContent className="admin-stat-grid">
                {stats.map((item) => (
                  <Card key={item.label} className="admin-stat-card">
                    <CardContent className="grid gap-2 p-5">
                      <p className="admin-field-label">{item.label}</p>
                      <h2>{item.value}</h2>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="admin-shell">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.28, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="admin-panel admin-panel--muted">
              <CardContent className="grid gap-6 p-6">
                <div className="admin-filter-bar">
                  <Field className="admin-filter-field" label={copy.searchLabel}>
                    <div className="admin-search-input">
                      <Search size={16} />
                      <input
                        aria-label={copy.searchLabel}
                        onChange={(event) => {
                          setQuery(event.currentTarget.value)
                          setPage(1)
                        }}
                        placeholder={copy.searchPlaceholder}
                        value={query}
                      />
                    </div>
                  </Field>

                  <Field className="admin-filter-field" label={copy.categoryLabel}>
                    <Select
                      aria-label={copy.categoryLabel}
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
                    </Select>
                  </Field>

                  <Field className="admin-filter-field" label={copy.sourceLabel}>
                    <Select
                      aria-label={copy.sourceLabel}
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
                    </Select>
                  </Field>

                  <Button
                    className="mt-auto"
                    onClick={() => inquiriesQuery.refetch()}
                    variant="secondary"
                  >
                    <RefreshCcw size={16} />
                    <span>{copy.refreshLabel}</span>
                  </Button>
                </div>

                {inquiriesQuery.isLoading ? (
                  <div className="grid gap-4">
                    <p className="admin-loading-copy">{copy.loadingInquiries}</p>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Card key={index} className="admin-inquiry-card">
                        <CardContent className="grid gap-4 p-6">
                          <Skeleton className="h-5 w-28" />
                          <Skeleton className="h-10 w-1/2" />
                          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-20 w-full" />
                          </div>
                          <Skeleton className="h-24 w-full" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : inquiriesQuery.data?.items.length ? (
                  <div className="admin-inquiry-list">
                    {inquiriesQuery.data.items.map((item, index) => (
                      <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 8 }}
                        key={item.id}
                        transition={{
                          duration: 0.24,
                          delay: Math.min(index * 0.04, 0.16),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <InquiryCard
                          categoryLabel={getCategoryLabel(
                            categoryOptions,
                            item.interestCategory,
                          )}
                          copy={copy}
                          item={item}
                          locale={locale}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="admin-empty-state">{copy.noResults}</p>
                )}

                <div className="admin-pagination">
                  <Button
                    disabled={page <= 1}
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    variant="secondary"
                  >
                    {copy.previousPage}
                  </Button>
                  <p>
                    {renderPageSummary(
                      copy,
                      inquiriesQuery.data?.page ?? page,
                      inquiriesQuery.data?.totalPages ?? 1,
                    )}
                  </p>
                  <Button
                    disabled={page >= (inquiriesQuery.data?.totalPages ?? 1)}
                    onClick={() =>
                      setPage((current) =>
                        Math.min(inquiriesQuery.data?.totalPages ?? 1, current + 1),
                      )
                    }
                    variant="secondary"
                  >
                    {copy.nextPage}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
