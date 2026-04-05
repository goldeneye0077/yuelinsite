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
import { getLocalizedAlt, siteReferenceImages } from '../content/media/referenceAssets'
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
  const heroImage = siteReferenceImages.contactHero
  const heroCopy =
    locale === 'zh'
      ? {
          eyebrow: '询盘入口',
          summary: '项目方向明确后，可以直接在这里提交企业信息和需求边界。',
          description: '适用于产品选型、方案沟通、技术集成跟进和资料申请。',
          railSummary: '公司坐标、需求范围和受理方式会在这里一次说清。',
          primaryCta: '提交需求',
          secondaryCta: '服务与支持',
        }
      : {
          eyebrow: 'Inquiry route',
          summary:
            'When the project direction is clear, use this form to send the business boundary first.',
          description:
            'Use it for product selection, solution consultation, integration follow-up, and material requests.',
          railSummary:
            'The page makes the office location, request scope, and intake route clear before the form is submitted.',
          primaryCta: 'Submit inquiry',
          secondaryCta: 'Support',
        }
  const bodyCopy =
    locale === 'zh'
      ? {
          formTitle: '询盘表单',
          formSummary: '先留下企业信息和项目边界，表单会直接进入后端受理。',
          requiredHint: '首次受理需要完整基本信息。',
          helperNote: '如已知道型号、检测距离、接口条件或安全边界，建议直接写明。',
          guidanceTitle: '提交前建议',
          guidanceSummary: '简短但具体的项目描述，更容易被快速分派。',
          guidanceItems: [
            {
              title: '先说清设备或产线语境',
              detail: '可提及生产环境、检测对象、检测距离或集成边界。',
            },
            {
              title: '先确定大致方向',
              detail: '即使还没有最终料号，先选产品大类或方案方向也会更快。',
            },
            {
              title: '商务与技术问题可以一起写',
              detail: '如果选型与集成是同一个项目问题，建议一次说清。',
            },
          ],
          routingTitle: '如果需求还在成形',
          routingSummary: '还没到正式留资时，可以先回到相关页面继续判断。',
          processTitle: '提交之后会发生什么',
          processSummary: '询盘表单不是浏览终点，而是进入后续沟通的轻量交接点。',
          processSteps: [
            {
              step: '01',
              title: '提交内容会立即入库',
              detail: '询盘会真实写入后端，而不是停留在占位响应。',
            },
            {
              step: '02',
              title: '按类型与场景快速分派',
              detail: '产品方向、解决路径和现场描述会成为第一层判断依据。',
            },
            {
              step: '03',
              title: '进入合适的下一步沟通',
              detail: '后续会进入产品确认、资料反馈、报价讨论或技术集成沟通。',
            },
          ],
        }
      : {
          formTitle: 'Inquiry form',
          formSummary: 'Leave the company details and project boundary first. The form goes straight into backend intake.',
          requiredHint: 'Complete basic information is required for first-pass intake.',
          helperNote: 'If model numbers, sensing distance, interface conditions, or safety limits are known, include them directly.',
          guidanceTitle: 'Before you send',
          guidanceSummary: 'A short but concrete project note gets routed faster.',
          guidanceItems: [
            {
              title: 'State the machine or line context first',
              detail: 'Mention the production environment, sensing target, distance, or integration boundary.',
            },
            {
              title: 'Point to the likely direction first',
              detail: 'Even without a final model, choosing the product family or solution route helps.',
            },
            {
              title: 'Business and technical questions can stay together',
              detail: 'If selection and integration belong to the same project, send them in one note.',
            },
          ],
          routingTitle: 'If the request is still taking shape',
          routingSummary: 'If you are not ready to leave full details, go back and keep judging from the related pages.',
          processTitle: 'What happens after submission',
          processSummary: 'The form is not the end of browsing. It is the handoff into the next conversation.',
          processSteps: [
            {
              step: '01',
              title: 'The submission is stored immediately',
              detail: 'The inquiry is written into the backend instead of stopping at a placeholder response.',
            },
            {
              step: '02',
              title: 'It is routed by type and scenario',
              detail: 'Product direction, solution route, and field context become the first triage layer.',
            },
            {
              step: '03',
              title: 'It moves into the right next discussion',
              detail: 'The next step can become product confirmation, file feedback, quotation, or technical integration.',
            },
          ],
        }
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
            <p className="eyebrow">{heroCopy.eyebrow}</p>
            <h1>{content.contact.title}</h1>
            <p className="hero-summary">{heroCopy.summary}</p>
            <p className="hero-description">{heroCopy.description}</p>
            <div className="hero-actions">
              <Button asChild>
                <a href="#contact-form">
                  <span>{heroCopy.primaryCta}</span>
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <Link to={buildLocalePath(locale, 'support')}>
                  {heroCopy.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>

          <Card className="contact-hero__rail">
            <CardHeader className="contact-hero__header">
              <figure className="surface-media-card surface-media-card--hero">
                <img
                  alt={getLocalizedAlt(heroImage, locale)}
                  className="surface-media-card__image"
                  src={heroImage.src}
                />
                <figcaption className="surface-media-card__caption">
                  <strong>{content.meta.brandName}</strong>
                </figcaption>
              </figure>
              <CardDescription className="story-intro">{heroCopy.railSummary}</CardDescription>
            </CardHeader>
            <CardContent className="contact-quick-list">
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
              <p className="eyebrow">{bodyCopy.formTitle}</p>
              <CardTitle>{bodyCopy.formSummary}</CardTitle>
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
                    <p className="field-hint">{bodyCopy.requiredHint}</p>
                    <p className="field-hint">{bodyCopy.helperNote}</p>
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
                <p className="eyebrow">{bodyCopy.guidanceTitle}</p>
                <CardTitle>{bodyCopy.guidanceSummary}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {bodyCopy.guidanceItems.map((item) => (
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
                <p className="eyebrow">{bodyCopy.routingTitle}</p>
                <CardTitle>{bodyCopy.routingSummary}</CardTitle>
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
            <p className="eyebrow">{bodyCopy.processTitle}</p>
            <CardTitle>{bodyCopy.processSummary}</CardTitle>
          </CardHeader>
          <CardContent className="process-list">
            {bodyCopy.processSteps.map((item) => (
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
