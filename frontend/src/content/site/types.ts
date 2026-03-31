import type { Locale, SectionRouteKey } from '../../i18n/locales'

export type SiteContentKey =
  | 'home'
  | 'productCenter'
  | 'solutions'
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
  step: string
  title: string
  summary: string
  scenarioTitle: string
  scenario: string
  scopeTitle: string
  scope: string[]
  valueTitle: string
  value: string[]
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
  solutionsPage: {
    eyebrow: string
    heroSummary: string
    heroDescription: string
    coverageTitle: string
    coverageSummary: string
    coverageItems: TrustSignal[]
    tracksTitle: string
    tracksSummary: string
    tracks: SolutionTrack[]
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
  about: 'about',
  contact: 'contact',
}
