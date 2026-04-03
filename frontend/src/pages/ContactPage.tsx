import { type ChangeEvent, type FormEvent, type ReactNode, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Send } from 'lucide-react'
import { toast } from 'sonner'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

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
import { Textarea } from '../components/ui/textarea'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'
import { type InquirySubmissionInput, submitInquiry } from '../lib/api/site-client'

type ContactFormState = Omit<InquirySubmissionInput, 'locale' | 'sourcePage'>
type ContactFieldName = keyof ContactFormState
type ContactFieldErrors = Partial<Record<ContactFieldName, string>>

function createInitialFormState(defaultCategory: string): ContactFormState {
  return {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interestCategory: defaultCategory,
    message: '',
    website: '',
    consentAccepted: false,
  }
}

function resolveRequestedCategory(
  requestedCategory: string | null,
  availableCategories: Array<{ value: string }>,
) {
  if (
    requestedCategory &&
    availableCategories.some((option) => option.value === requestedCategory)
  ) {
    return requestedCategory
  }

  return availableCategories[0]?.value ?? 'general-consultation'
}

function resolveSourceContext(source: string | null) {
  const normalized = source?.trim().toLowerCase() ?? ''
  return normalized.length > 0 ? normalized : null
}

function getValidationMessages(locale: 'zh' | 'en') {
  if (locale === 'zh') {
    return {
      companyName: '请输入公司名称。',
      contactName: '请输入联系人姓名。',
      email: '请输入有效邮箱。',
      phone: '请输入联系电话。',
      message: '请填写你的需求说明。',
      consentAccepted: '提交前请先勾选信息处理同意项。',
    }
  }

  return {
    companyName: 'Please enter the company name.',
    contactName: 'Please enter the contact name.',
    email: 'Please enter a valid email address.',
    phone: 'Please enter a phone number.',
    message: 'Please describe the request.',
    consentAccepted: 'Please confirm the consent checkbox before submitting.',
  }
}

function validateForm(
  formState: ContactFormState,
  locale: 'zh' | 'en',
): ContactFieldErrors {
  const copy = getValidationMessages(locale)
  const errors: ContactFieldErrors = {}
  const emailPattern = /\S+@\S+\.\S+/

  if (!formState.companyName.trim()) {
    errors.companyName = copy.companyName
  }

  if (!formState.contactName.trim()) {
    errors.contactName = copy.contactName
  }

  if (!emailPattern.test(formState.email.trim())) {
    errors.email = copy.email
  }

  if (!formState.phone.trim()) {
    errors.phone = copy.phone
  }

  if (!formState.message.trim()) {
    errors.message = copy.message
  }

  if (!formState.consentAccepted) {
    errors.consentAccepted = copy.consentAccepted
  }

  return errors
}

function clearFieldError(
  currentErrors: ContactFieldErrors,
  fieldName: ContactFieldName,
  nextValue: string | boolean,
  locale: 'zh' | 'en',
) {
  const nextErrors = { ...currentErrors }

  if (fieldName === 'consentAccepted') {
    if (nextValue === true) {
      delete nextErrors.consentAccepted
    }

    return nextErrors
  }

  if (typeof nextValue === 'string' && nextValue.trim()) {
    delete nextErrors[fieldName]
  }

  if (fieldName === 'email' && typeof nextValue === 'string') {
    const emailPattern = /\S+@\S+\.\S+/

    if (emailPattern.test(nextValue.trim())) {
      delete nextErrors.email
    } else if (currentErrors.email) {
      nextErrors.email = getValidationMessages(locale).email
    }
  }

  return nextErrors
}

function MotionSection({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

export function ContactPage() {
  const { locale, content } = useSiteShellContext()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const defaultCategory = resolveRequestedCategory(
    searchParams.get('category'),
    content.contactPage.categoryOptions,
  )
  const [formState, setFormState] = useState<ContactFormState>(() =>
    createInitialFormState(defaultCategory),
  )
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const messages = useMemo(() => getValidationMessages(locale), [locale])

  const inquiryMutation = useMutation({
    mutationFn: submitInquiry,
    onSuccess: (data) => {
      toast.success(content.contactPage.form.successLabel, {
        description:
          data.submissionId > 0
            ? `${data.detail} ${content.contactPage.form.referenceLabel} #${data.submissionId}`
            : data.detail,
      })
      setFormState(createInitialFormState(defaultCategory))
      setErrors({})
    },
    onError: (error) => {
      const description =
        error instanceof Error ? error.message : content.contactPage.form.helperNote

      toast.error(content.contactPage.form.errorLabel, {
        description,
      })
    },
  })

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const target = event.currentTarget
    const { name } = target
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value

    setFormState((current) => ({
      ...current,
      [name as ContactFieldName]: value,
    }))
    setErrors((current) =>
      clearFieldError(current, name as ContactFieldName, value, locale),
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateForm(formState, locale)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      toast.error(content.contactPage.form.errorLabel, {
        description: Object.values(nextErrors)[0] ?? messages.consentAccepted,
      })
      return
    }

    inquiryMutation.mutate({
      ...formState,
      locale,
      sourcePage: location.pathname,
      sourceContext: resolveSourceContext(searchParams.get('source')),
    })
  }

  const formCopy = content.contactPage.form

  return (
    <div className="space-y-6">
      <MotionSection className="page-band page-band--tight" delay={0.02}>
        <div className="contact-hero">
          <div className="contact-hero__copy">
            <p className="eyebrow">{content.contactPage.eyebrow}</p>
            <h1>{content.contact.title}</h1>
            <p className="hero-signature hero-signature--surface">
              {content.meta.companyName} / {content.meta.crossLocaleCompanyName}
            </p>
            <p className="hero-summary">{content.contactPage.heroSummary}</p>
            <p className="hero-description">{content.contactPage.heroDescription}</p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#contact-form">
                  <span>{content.contact.primaryCta}</span>
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to={buildLocalePath(locale, 'support')}>
                  {content.contact.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>

          <Card className="contact-hero__rail">
            <CardHeader>
              <p className="eyebrow">{content.contactPage.quickPanelTitle}</p>
              <CardDescription className="story-intro">
                {content.contactPage.quickPanelSummary}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {content.contactPage.quickPanelItems.map((item) => (
                <Card key={item.title} className="contact-quick-item border-border/50 bg-card/70">
                  <CardContent className="grid gap-2 p-5">
                    <p className="assurance-item__label">{item.label}</p>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.detail}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="page-band page-band--bordered" delay={0.06}>
        <div className="contact-layout">
          <Card className="contact-form-panel">
            <CardHeader className="contact-section-heading">
              <p className="eyebrow">{content.contactPage.formTitle}</p>
              <CardTitle>{content.contactPage.formSummary}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    error={errors.companyName}
                    htmlFor="companyName"
                    label={formCopy.companyNameLabel}
                    required
                  >
                    <Input
                      aria-label={formCopy.companyNameLabel}
                      id="companyName"
                      invalid={Boolean(errors.companyName)}
                      name="companyName"
                      onChange={handleFieldChange}
                      placeholder={formCopy.companyNamePlaceholder}
                      value={formState.companyName}
                    />
                  </Field>

                  <Field
                    error={errors.contactName}
                    htmlFor="contactName"
                    label={formCopy.contactNameLabel}
                    required
                  >
                    <Input
                      aria-label={formCopy.contactNameLabel}
                      id="contactName"
                      invalid={Boolean(errors.contactName)}
                      name="contactName"
                      onChange={handleFieldChange}
                      placeholder={formCopy.contactNamePlaceholder}
                      value={formState.contactName}
                    />
                  </Field>

                  <Field
                    error={errors.email}
                    htmlFor="email"
                    label={formCopy.emailLabel}
                    required
                  >
                    <Input
                      aria-label={formCopy.emailLabel}
                      id="email"
                      invalid={Boolean(errors.email)}
                      name="email"
                      onChange={handleFieldChange}
                      placeholder={formCopy.emailPlaceholder}
                      type="email"
                      value={formState.email}
                    />
                  </Field>

                  <Field
                    error={errors.phone}
                    htmlFor="phone"
                    label={formCopy.phoneLabel}
                    required
                  >
                    <Input
                      aria-label={formCopy.phoneLabel}
                      id="phone"
                      invalid={Boolean(errors.phone)}
                      name="phone"
                      onChange={handleFieldChange}
                      placeholder={formCopy.phonePlaceholder}
                      value={formState.phone}
                    />
                  </Field>
                </div>

                <Field
                  htmlFor="interestCategory"
                  label={formCopy.interestCategoryLabel}
                >
                  <Select
                    aria-label={formCopy.interestCategoryLabel}
                    id="interestCategory"
                    name="interestCategory"
                    onChange={handleFieldChange}
                    value={formState.interestCategory}
                  >
                    {content.contactPage.categoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field
                  error={errors.message}
                  htmlFor="message"
                  label={formCopy.messageLabel}
                  required
                >
                  <Textarea
                    aria-label={formCopy.messageLabel}
                    id="message"
                    invalid={Boolean(errors.message)}
                    name="message"
                    onChange={handleFieldChange}
                    placeholder={formCopy.messagePlaceholder}
                    rows={6}
                    value={formState.message}
                  />
                </Field>

                <div aria-hidden="true" className="hidden">
                  <label htmlFor="website">Website</label>
                  <Input
                    autoComplete="off"
                    id="website"
                    name="website"
                    onChange={handleFieldChange}
                    tabIndex={-1}
                    value={formState.website}
                  />
                </div>

                <div
                  className={`rounded-2xl border p-4 ${
                    errors.consentAccepted
                      ? 'field-invalid border-destructive/30 bg-destructive/5'
                      : 'border-border/70 bg-secondary/60'
                  }`}
                >
                  <label className="flex items-start gap-3 text-sm text-foreground/90">
                    <input
                      checked={formState.consentAccepted}
                      className="mt-1 size-4 rounded border-border text-primary focus:ring-primary"
                      name="consentAccepted"
                      onChange={handleFieldChange}
                      type="checkbox"
                    />
                    <span className="grid gap-1">
                      <strong>{formCopy.consentLabel}</strong>
                      <small className="text-sm leading-relaxed text-muted-foreground">
                        {formCopy.consentDetail}
                      </small>
                    </span>
                  </label>
                  {errors.consentAccepted ? (
                    <p className="field-error mt-3">{errors.consentAccepted}</p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-4 border-t border-border/70 pt-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <p className="field-hint">{formCopy.requiredHint}</p>
                    <p className="field-hint">{formCopy.helperNote}</p>
                  </div>
                  <Button
                    className="min-w-[180px]"
                    disabled={inquiryMutation.isPending}
                    size="lg"
                    type="submit"
                  >
                    <Send size={16} />
                    <span>
                      {inquiryMutation.isPending
                        ? formCopy.pendingLabel
                        : formCopy.submitLabel}
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="contact-sidebar space-y-6">
            <Card className="contact-side-panel">
              <CardHeader>
                <p className="eyebrow">{content.contactPage.guidanceTitle}</p>
                <CardTitle>{content.contactPage.guidanceSummary}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {content.contactPage.guidanceItems.map((item) => (
                  <Card key={item.title} className="story-item border-border/50 bg-card/70">
                    <CardContent className="grid gap-2 p-5">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.detail}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="contact-side-panel contact-side-panel--offset">
              <CardHeader>
                <p className="eyebrow">{content.contactPage.routingTitle}</p>
                <CardTitle>{content.contactPage.routingSummary}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {content.contactPage.routingLinks.map((item) => (
                  <Link
                    key={item.section}
                    className="contact-routing-item flex items-center justify-between rounded-xl border border-border/70 px-4 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    to={buildLocalePath(locale, item.section)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="page-band page-band--bordered" delay={0.1}>
        <Card className="contact-process">
          <CardHeader className="contact-section-heading">
            <p className="eyebrow">{content.contactPage.processTitle}</p>
            <CardTitle>{content.contactPage.processSummary}</CardTitle>
          </CardHeader>
          <CardContent className="process-list">
            {content.contactPage.processSteps.map((item) => (
              <article key={item.step} className="process-step">
                <p className="process-step__index">{item.step}</p>
                <div className="process-step__copy">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
