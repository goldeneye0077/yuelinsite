import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { AlertCircle, ArrowRight, CheckCircle2, Send } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { type InquirySubmissionInput, submitInquiry } from '../lib/api/site-client'
import { buildLocalePath } from '../i18n/locales'
import { useSiteShellContext } from '../layouts/useSiteShellContext'

type ContactFormState = Omit<InquirySubmissionInput, 'locale' | 'sourcePage'>

type ContactFormFieldName = keyof ContactFormState

function createInitialFormState(defaultCategory: string): ContactFormState {
  return {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interestCategory: defaultCategory,
    message: '',
  }
}

export function ContactPage() {
  const { locale, content } = useSiteShellContext()
  const location = useLocation()
  const defaultCategory = content.contactPage.categoryOptions[0]?.value ?? 'general'
  const [formState, setFormState] = useState<ContactFormState>(() =>
    createInitialFormState(defaultCategory),
  )

  const inquiryMutation = useMutation({
    mutationFn: submitInquiry,
    onSuccess: () => {
      setFormState(createInitialFormState(defaultCategory))
    },
  })

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.currentTarget

    if (inquiryMutation.isSuccess || inquiryMutation.isError) {
      inquiryMutation.reset()
    }

    setFormState((current) => ({
      ...current,
      [name as ContactFormFieldName]: value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    inquiryMutation.mutate({
      ...formState,
      locale,
      sourcePage: location.pathname,
    })
  }

  const formCopy = content.contactPage.form
  const errorMessage =
    inquiryMutation.error instanceof Error
      ? inquiryMutation.error.message
      : formCopy.helperNote

  return (
    <>
      <section className="page-band page-band--tight">
        <div className="contact-hero">
          <div className="contact-hero__copy motion-rise motion-delay-1">
            <p className="eyebrow">{content.contactPage.eyebrow}</p>
            <h1>{content.contact.title}</h1>
            <p className="hero-signature hero-signature--surface">
              {content.meta.companyName} / {content.meta.crossLocaleCompanyName}
            </p>
            <p className="hero-summary">{content.contactPage.heroSummary}</p>
            <p className="hero-description">{content.contactPage.heroDescription}</p>
            <div className="hero-actions">
              <a className="cta-link" href="#contact-form">
                <span>{content.contact.primaryCta}</span>
                <ArrowRight size={16} />
              </a>
              <Link className="secondary-link" to={buildLocalePath(locale, 'support')}>
                {content.contact.secondaryCta}
              </Link>
            </div>
          </div>

          <aside className="contact-hero__rail motion-rise motion-delay-2">
            <p className="eyebrow">{content.contactPage.quickPanelTitle}</p>
            <p className="story-intro">{content.contactPage.quickPanelSummary}</p>
            <div className="contact-quick-list">
              {content.contactPage.quickPanelItems.map((item) => (
                <article key={item.title} className="contact-quick-item">
                  <p className="assurance-item__label">{item.label}</p>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="contact-layout">
          <section className="contact-form-panel motion-rise motion-delay-2">
            <div className="contact-section-heading">
              <p className="eyebrow">{content.contactPage.formTitle}</p>
              <p className="story-intro">{content.contactPage.formSummary}</p>
            </div>

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__grid">
                <label className="contact-field">
                  <span>{formCopy.companyNameLabel}</span>
                  <input
                    required
                    name="companyName"
                    onChange={handleFieldChange}
                    placeholder={formCopy.companyNamePlaceholder}
                    value={formState.companyName}
                  />
                </label>

                <label className="contact-field">
                  <span>{formCopy.contactNameLabel}</span>
                  <input
                    required
                    name="contactName"
                    onChange={handleFieldChange}
                    placeholder={formCopy.contactNamePlaceholder}
                    value={formState.contactName}
                  />
                </label>

                <label className="contact-field">
                  <span>{formCopy.emailLabel}</span>
                  <input
                    required
                    name="email"
                    onChange={handleFieldChange}
                    placeholder={formCopy.emailPlaceholder}
                    type="email"
                    value={formState.email}
                  />
                </label>

                <label className="contact-field">
                  <span>{formCopy.phoneLabel}</span>
                  <input
                    required
                    name="phone"
                    onChange={handleFieldChange}
                    placeholder={formCopy.phonePlaceholder}
                    value={formState.phone}
                  />
                </label>
              </div>

              <label className="contact-field">
                <span>{formCopy.interestCategoryLabel}</span>
                <select
                  name="interestCategory"
                  onChange={handleFieldChange}
                  value={formState.interestCategory}
                >
                  {content.contactPage.categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-field">
                <span>{formCopy.messageLabel}</span>
                <textarea
                  required
                  name="message"
                  onChange={handleFieldChange}
                  placeholder={formCopy.messagePlaceholder}
                  rows={6}
                  value={formState.message}
                />
              </label>

              <div className="contact-form__meta">
                <p className="contact-form__hint">{formCopy.requiredHint}</p>
                <p className="contact-form__note">{formCopy.helperNote}</p>
              </div>

              {(inquiryMutation.isSuccess || inquiryMutation.isError) && (
                <div
                  aria-live="polite"
                  className={`contact-feedback ${
                    inquiryMutation.isSuccess
                      ? 'contact-feedback--success'
                      : 'contact-feedback--error'
                  }`}
                  role="status"
                >
                  <div className="contact-feedback__icon">
                    {inquiryMutation.isSuccess ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                  </div>
                  <div className="contact-feedback__copy">
                    <p className="assurance-item__label">
                      {inquiryMutation.isSuccess
                        ? formCopy.successLabel
                        : formCopy.errorLabel}
                    </p>
                    <p>
                      {inquiryMutation.isSuccess
                        ? inquiryMutation.data.detail
                        : errorMessage}
                    </p>
                    {inquiryMutation.isSuccess ? (
                      <p className="contact-feedback__reference">
                        {formCopy.referenceLabel} #{inquiryMutation.data.submissionId}
                      </p>
                    ) : null}
                  </div>
                </div>
              )}

              <button
                className="contact-submit"
                disabled={inquiryMutation.isPending}
                type="submit"
              >
                <Send size={16} />
                <span>
                  {inquiryMutation.isPending
                    ? formCopy.pendingLabel
                    : formCopy.submitLabel}
                </span>
              </button>
            </form>
          </section>

          <aside className="contact-sidebar motion-rise motion-delay-3">
            <section className="contact-side-panel">
              <p className="eyebrow">{content.contactPage.guidanceTitle}</p>
              <p className="story-intro">{content.contactPage.guidanceSummary}</p>
              <div className="story-list">
                {content.contactPage.guidanceItems.map((item) => (
                  <article key={item.title} className="story-item">
                    <h2>{item.title}</h2>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="contact-side-panel contact-side-panel--offset">
              <p className="eyebrow">{content.contactPage.routingTitle}</p>
              <p className="story-intro">{content.contactPage.routingSummary}</p>
              <div className="contact-routing-list">
                {content.contactPage.routingLinks.map((item) => (
                  <Link
                    key={item.section}
                    className="contact-routing-item"
                    to={buildLocalePath(locale, item.section)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="page-band page-band--bordered">
        <div className="contact-process motion-rise motion-delay-4">
          <div className="contact-section-heading">
            <p className="eyebrow">{content.contactPage.processTitle}</p>
            <p className="story-intro">{content.contactPage.processSummary}</p>
          </div>
          <div className="process-list">
            {content.contactPage.processSteps.map((item) => (
              <article key={item.step} className="process-step">
                <p className="process-step__index">{item.step}</p>
                <div className="process-step__copy">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
