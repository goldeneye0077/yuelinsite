import type { Locale, SectionRouteKey } from '../../i18n/locales'

export type SiteContentKey =
  | 'home'
  | 'productCenter'
  | 'solutions'
  | 'partners'
  | 'support'
  | 'about'
  | 'contact'

export type FoundationTrack = {
  label: string
  value: string
  detail: string
}

export type HighlightItem = {
  title: string
  detail: string
}

export type TrustSignal = {
  label: string
  title: string
  detail: string
}

export type CompanyFact = {
  label: string
  value: string
}

export type PartnerBrand = {
  name: string
  detail: string
}

export type PartnerBrandContext = {
  label: string
  name: string
  detail: string
  projectRole: string
  relatedTrack: string
}

export type QualificationPlaceholder = {
  title: string
  detail: string
  status: string
}

export type ProcessStep = {
  step: string
  title: string
  detail: string
}

export type SolutionTrack = {
  anchor: string
  step: string
  title: string
  summary: string
  scenarioTitle: string
  scenario: string
  scopeTitle: string
  scope: string[]
  valueTitle: string
  value: string[]
  actionTitle: string
  actionBody: string
  primaryCta: SolutionTrackCta
  secondaryCta: SolutionTrackCta
  transition: SolutionTrackTransition
}

export type SolutionTrackCta = {
  label: string
  section: SectionRouteKey
}

export type SolutionTrackTransition = {
  label: string
  title: string
  detail: string
  ctaLabel: string
  targetId: string
}

export type SupportResourceEntry = {
  label: string
  status: string
  title: string
  detail: string
  deliverable: string
  primaryCta: SolutionTrackCta
  secondaryCta: SolutionTrackCta
}

export type ContactCategoryOption = {
  value: string
  label: string
}

export type ContactFormCopy = {
  companyNameLabel: string
  companyNamePlaceholder: string
  contactNameLabel: string
  contactNamePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  interestCategoryLabel: string
  messageLabel: string
  messagePlaceholder: string
  submitLabel: string
  pendingLabel: string
  requiredHint: string
  helperNote: string
  consentLabel: string
  consentDetail: string
  successLabel: string
  errorLabel: string
  referenceLabel: string
}

export type FooterLinkItem = {
  label: string
  section: SectionRouteKey
}

export type FooterGroup = {
  title: string
  items: FooterLinkItem[]
}

export type RouteNavigationItem = {
  key: SectionRouteKey
  label: string
}

export type RoutePageContent = {
  title: string
  summary: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export interface SiteContent {
  locale: Locale
  meta: {
    brandName: string
    companyName: string
    crossLocaleCompanyName: string
    brandLine: string
    switchLabel: Record<Locale, string>
    trackLabel: string
    themeLabel: string
    lightLabel: string
    darkLabel: string
    menuLabel: string
    closeMenuLabel: string
  }
  navigation: RouteNavigationItem[]
  foundationTracks: FoundationTrack[]
  home: RoutePageContent & {
    eyebrow: string
    statusLabel: string
    statusItems: [string, string, string]
    visualLabel: string
    strengthsTitle: string
    strengths: HighlightItem[]
    directionsTitle: string
    directions: HighlightItem[]
    partnersTitle: string
    partnersSummary: string
    partners: PartnerBrand[]
    profileTitle: string
    profileSummary: string
    profileBody: string
    profileFacts: CompanyFact[]
    assuranceTitle: string
    assuranceSummary: string
    assuranceSignals: TrustSignal[]
    processTitle: string
    processSummary: string
    processSteps: ProcessStep[]
    finalCtaTitle: string
    finalCtaBody: string
  }
  productCenter: RoutePageContent
  solutions: RoutePageContent
  partners: RoutePageContent
  solutionsPage: {
    eyebrow: string
    heroSummary: string
    heroDescription: string
    coverageTitle: string
    coverageSummary: string
    coverageItems: TrustSignal[]
    trackNavLabel: string
    tracksTitle: string
    tracksSummary: string
    tracks: SolutionTrack[]
    partnershipTitle: string
    partnershipSummary: string
    partnershipModesTitle: string
    partnershipModesSummary: string
    partnershipModes: HighlightItem[]
    partnerTrackLabel: string
    partnerBrands: PartnerBrandContext[]
    coordinationTitle: string
    coordinationSummary: string
    coordinationItems: HighlightItem[]
    processTitle: string
    processSummary: string
    processSteps: ProcessStep[]
    finalCtaTitle: string
    finalCtaBody: string
  }
  support: RoutePageContent
  supportPage: {
    eyebrow: string
    heroSummary: string
    heroDescription: string
    quickPanelTitle: string
    quickPanelSummary: string
    quickPanelItems: TrustSignal[]
    capabilityTitle: string
    capabilitySummary: string
    capabilities: HighlightItem[]
    guidanceTitle: string
    guidanceSummary: string
    guidanceItems: HighlightItem[]
    resourceTitle: string
    resourceSummary: string
    resources: SupportResourceEntry[]
    processTitle: string
    processSummary: string
    processSteps: ProcessStep[]
    finalCtaTitle: string
    finalCtaBody: string
  }
  about: RoutePageContent
  aboutPage: {
    eyebrow: string
    heroSummary: string
    heroDescription: string
    companyTitle: string
    companyParagraphs: string[]
    factsTitle: string
    facts: CompanyFact[]
    trustTitle: string
    trustSummary: string
    trustItems: HighlightItem[]
    partnersTitle: string
    partnersSummary: string
    qualificationsTitle: string
    qualificationsSummary: string
    qualifications: QualificationPlaceholder[]
    authorizationTitle: string
    authorizationSummary: string
    authorizationItems: TrustSignal[]
    deliveryTitle: string
    deliverySummary: string
    deliverySteps: ProcessStep[]
    finalCtaTitle: string
    finalCtaBody: string
  }
  contact: RoutePageContent
  contactPage: {
    eyebrow: string
    heroSummary: string
    heroDescription: string
    entryContextLabel: string
    categoryContextLabel: string
    quickPanelTitle: string
    quickPanelSummary: string
    quickPanelItems: TrustSignal[]
    formTitle: string
    formSummary: string
    form: ContactFormCopy
    categoryOptions: ContactCategoryOption[]
    guidanceTitle: string
    guidanceSummary: string
    guidanceItems: HighlightItem[]
    processTitle: string
    processSummary: string
    processSteps: ProcessStep[]
    routingTitle: string
    routingSummary: string
    routingLinks: FooterLinkItem[]
  }
  footer: {
    summary: string
    addressLabel: string
    address: string
    inquiryLabel: string
    inquirySummary: string
    legal: string
    groups: FooterGroup[]
  }
  placeholder: {
    eyebrow: string
    body: string
    factsSummary: string
    inquiryCta: string
    homeCta: string
  }
}

export const routeContentKeyMap: Record<SectionRouteKey, SiteContentKey> = {
  home: 'home',
  products: 'productCenter',
  solutions: 'solutions',
  support: 'support',
  contact: 'contact',
}
