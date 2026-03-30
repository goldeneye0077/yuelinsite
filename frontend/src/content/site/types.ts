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

export type RouteNavigationItem = {
  key: SectionRouteKey
  label: string
}

export type RoutePageContent = {
  title: string
  summary: string
  description: string
}

export interface SiteContent {
  locale: Locale
  meta: {
    brandName: string
    companyName: string
    switchLabel: Record<Locale, string>
    trackLabel: string
  }
  navigation: RouteNavigationItem[]
  foundationTracks: FoundationTrack[]
  home: RoutePageContent & {
    eyebrow: string
    statusLabel: string
    statusItems: [string, string, string]
  }
  productCenter: RoutePageContent
  solutions: RoutePageContent
  support: RoutePageContent
  about: RoutePageContent
  contact: RoutePageContent
}

export const routeContentKeyMap: Record<SectionRouteKey, SiteContentKey> = {
  home: 'home',
  products: 'productCenter',
  solutions: 'solutions',
  support: 'support',
  about: 'about',
  contact: 'contact',
}
