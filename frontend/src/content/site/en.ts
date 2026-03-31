import type { SiteContent } from './types'

export const enSiteContent: SiteContent = {
  locale: 'en',
  meta: {
    brandName: 'Yuelin Technology',
    companyName: 'Shenzhen Yuelin Technology Co., Ltd.',
    brandLine: 'Industrial sensing and automation integration',
    switchLabel: {
      zh: '\u5207\u6362\u5230\u4e2d\u6587',
      en: 'Switch to English',
    },
    trackLabel: 'Foundation tracks',
    themeLabel: 'Interface theme',
    lightLabel: 'Light',
    darkLabel: 'Dark',
    menuLabel: 'Open navigation',
    closeMenuLabel: 'Close navigation',
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
      detail:
        'Health checks, site contracts, and migration boundaries are locked before richer content phases.',
    },
    {
      label: 'Deployment',
      value: 'Docker Compose',
      detail: 'Local development and launch verification share one startup workflow.',
    },
  ],
  home: {
    eyebrow: 'Precision industrial corporate shell',
    title: 'Shenzhen Yuelin Technology',
    summary:
      'A bilingual corporate website foundation for industrial sensors, automation projects, and technical integration partnerships.',
    description:
      'The first screen prioritizes brand confidence, route clarity, and a low-friction consultation path before deeper product and solution content arrives.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'View product structure',
    statusLabel: 'Foundation status',
    statusItems: [
      'Mirrored Chinese and English route shells are active',
      'Inquiry touchpoints stay visible across the first foundation pages',
      'Light and dark themes share the same design tokens and surfaces',
    ],
    visualLabel: 'Reserved visual anchor',
  },
  productCenter: {
    title: 'Product Center',
    summary:
      'Five primary product categories frame the catalog while industrial sensors continue into synced secondary groups.',
    description:
      'Industrial sensors, safety protection sensors, laser ranging sensors, linear guides and modules, and pneumatic components will expand in later phases.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'Return home',
  },
  solutions: {
    title: 'Solutions',
    summary:
      'Industrial automation, software development, and technical integration will share one clear consulting narrative.',
    description:
      'This placeholder will later carry scenario framing, delivery scope, and the right consultation path for each customer type.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'Return home',
  },
  support: {
    title: 'Support',
    summary:
      'Downloads, catalog requests, and technical support will connect through one service route.',
    description:
      'Phase 01 secures the shell and the contact pathway first; manuals, datasheets, and support workflows arrive later.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'Return home',
  },
  about: {
    title: 'About',
    summary:
      'Company profile, trust signals, and address details will keep the same mirrored structure in both languages.',
    description:
      'The company name and Shenzhen address are confirmed, while deeper brand storytelling and credentials land in later phases.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'Return home',
  },
  contact: {
    title: 'Contact',
    summary: 'Inquiry entry points will converge on one shared contact route across the site.',
    description:
      'Phase 01 establishes the route and API contract, while real inquiry persistence is scheduled for Phase 5.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'Return home',
  },
  footer: {
    summary:
      'Yuelin Technology focuses on industrial sensors, automation solutions, and technical integration, with brand presentation first and lightweight inquiry capture kept ready.',
    addressLabel: 'Address',
    address:
      'Building 3, Xunmei Technology Plaza, No. 8 Keyuan Road, Kejiyuan Community, Yuehai Subdistrict, Nanshan District, Shenzhen',
    inquiryLabel: 'Consultation channel',
    inquirySummary:
      'Share your product model, project scenario, or integration demand. This entry will later connect to the complete inquiry workflow.',
    legal: '\u00a9 2026 Shenzhen Yuelin Technology Co., Ltd. All rights reserved.',
    groups: [
      {
        title: 'Explore',
        items: [
          { label: 'Home', section: 'home' },
          { label: 'Product Center', section: 'products' },
          { label: 'Solutions', section: 'solutions' },
        ],
      },
      {
        title: 'Connect',
        items: [
          { label: 'Support', section: 'support' },
          { label: 'About', section: 'about' },
          { label: 'Contact', section: 'contact' },
        ],
      },
    ],
  },
  placeholder: {
    eyebrow: 'Materials in preparation',
    body:
      'If you already have a product model, project scenario, or integration scope in mind, use the consultation path now and we will map the right catalog or technical route next.',
    inquiryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    homeCta: 'Return home',
  },
}
