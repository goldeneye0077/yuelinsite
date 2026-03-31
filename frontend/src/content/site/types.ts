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
    finalCtaTitle: string
    finalCtaBody: string
  }
  productCenter: RoutePageContent
  solutions: RoutePageContent
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
    qualificationsTitle: string
    qualificationsSummary: string
    qualifications: QualificationPlaceholder[]
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
