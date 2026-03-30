import type { SiteContent } from './types'

export const enSiteContent: SiteContent = {
  locale: 'en',
  meta: {
    brandName: 'Yuelin Technology',
    companyName: 'Shenzhen Yuelin Technology Co., Ltd.',
    switchLabel: {
      zh: '切换到中文',
      en: 'Switch to English',
    },
    trackLabel: 'Foundation tracks',
  },
  navigation: [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Product Center' },
    { key: 'solutions', label: 'Solutions' },
    { key: 'support', label: 'Support' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
  ],
  foundationTracks: [
    {
      label: 'Frontend',
      value: 'React + Vite',
      detail: 'A scalable client shell prepared for the bilingual corporate site.',
    },
    {
      label: 'Backend',
      value: 'FastAPI + PostgreSQL',
      detail: 'Health checks, site contracts, and migration boundaries are locked first.',
    },
    {
      label: 'Infrastructure',
      value: 'Docker Compose',
      detail: 'Local development and later launch verification share one startup workflow.',
    },
  ],
  home: {
    eyebrow: 'Phase 01 · Locale Routing and Contract Baseline',
    title: 'Shenzhen Yuelin Technology',
    summary:
      'Building the bilingual industrial site foundation for sensors, automation, and technical integration.',
    description:
      'This stage locks mirrored Chinese and English routes plus the first site data contracts, so the shared theme shell can connect cleanly next.',
    statusLabel: 'Foundation status',
    statusItems: [
      'Bilingual route structure is now active',
      'The site bootstrap contract is being formalized',
      'Theme shell and shared navigation land in the next plan',
    ],
  },
  productCenter: {
    title: 'Product Center',
    summary: 'The five core product directions will sit on a mirrored bilingual route structure.',
    description:
      'Industrial sensors, safety protection sensors, laser ranging sensors, linear guides and modules, and pneumatic components will expand in later phases.',
  },
  solutions: {
    title: 'Solutions',
    summary: 'Industrial automation, software development, and technical integration share the same information foundation.',
    description:
      'This page is a route placeholder for now and will later carry scenarios, service scope, and inquiry pathways.',
  },
  support: {
    title: 'Support',
    summary: 'Downloads, catalog requests, and technical support paths will connect through one support route.',
    description:
      'Phase 01 locks the route and content model now; actual materials and support workflows arrive in later phases.',
  },
  about: {
    title: 'About',
    summary: 'Company profile, address details, and trust content will keep the same mirrored structure in both languages.',
    description:
      'The company name and Shenzhen address are already confirmed; fuller brand storytelling and credentials come next.',
  },
  contact: {
    title: 'Contact',
    summary: 'Inquiry entry points will converge on one shared contact route across the site.',
    description:
      'Phase 01 establishes the route and API contract, while real inquiry persistence is scheduled for Phase 5.',
  },
}
