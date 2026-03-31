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
    eyebrow: 'Industrial sensing and automation integration',
    title: 'Shenzhen Yuelin Technology',
    summary:
      'Industrial sensors, automation-focused components, and technical integration support for equipment makers, integrators, and factory buyers.',
    description:
      'Yuelin Technology combines industrial sensor supply, safety protection, laser ranging, linear motion components, pneumatic products, software development, and technical integration into one clear consulting path.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'View product structure',
    statusLabel: 'Who we serve',
    statusItems: [
      'Equipment makers: sensing, linkage, and production-line upgrades',
      'System integrators: interface alignment, control paths, and implementation support',
      'Factory-side buyers: reliable supply, technical guidance, and responsive delivery',
    ],
    visualLabel: 'Live logo and industrial flow anchor',
    strengthsTitle: 'Core strengths',
    strengths: [
      {
        title: 'Selection and combination support',
        detail:
          'Match industrial sensors, safety protection, and motion components to the actual requirements of equipment and line-side environments.',
      },
      {
        title: 'Software development and integration',
        detail:
          'Connect sensing signals, software logic, and implementation needs into a practical automation delivery path.',
      },
      {
        title: 'Consultation-to-project continuity',
        detail:
          'Keep brand presentation, technical discussion, and inquiry capture on one continuous route instead of separate disconnected steps.',
      },
    ],
    directionsTitle: 'Major product and service directions',
    directions: [
      {
        title: 'Industrial sensors',
        detail:
          'Built around the reference taxonomy for photoelectric, displacement, ultrasonic, pressure, magnetic, and related subcategories.',
      },
      {
        title: 'Safety protection sensors',
        detail:
          'Prepared for line-side protection, region detection, and machine safety scenarios.',
      },
      {
        title: 'Laser ranging sensors',
        detail:
          'For non-contact ranging, displacement checks, and high-precision positioning use cases.',
      },
      {
        title: 'Linear guides and modules',
        detail:
          'Supporting motion units, positioning modules, and structure-level equipment upgrades.',
      },
      {
        title: 'Pneumatic components',
        detail:
          'Extending the execution and control layer around integrated automation projects.',
      },
    ],
    partnersTitle: 'Partner brands',
    partnersSummary:
      'The homepage should present partner capability with context, building trust through recognizable industrial references instead of logo-only decoration.',
    partners: [
      {
        name: 'Huayifeng',
        detail:
          'A key structural reference for the industrial sensor category system used across the site.',
      },
      {
        name: 'Panasonic',
        detail:
          'Supports a more precise and internationally legible sensing and automation impression.',
      },
      {
        name: 'Sick',
        detail:
          'Connects naturally with industrial sensing, safety, and intelligent manufacturing scenarios.',
      },
      {
        name: 'AirTAC',
        detail:
          'Reinforces the pneumatic and machine-side application story on the homepage.',
      },
      {
        name: 'Mindman',
        detail:
          'Rounds out the partner expectation around execution units and technical integration.',
      },
    ],
    profileTitle: 'Company profile',
    profileSummary:
      'Shenzhen Yuelin Technology Co., Ltd. is based in Shenzhen and focuses on industrial sensors, automation-related products, and technical services.',
    profileBody:
      'The company serves smart manufacturing scenarios with industrial sensors, safety protection sensors, laser ranging sensors, linear guides and modules, pneumatic components, software development, and technical integration. The aim is to improve equipment automation capability and production efficiency through reliable supply, practical technical support, and responsive delivery.',
    profileFacts: [
      {
        label: 'Office',
        value:
          'Building 3, Xunmei Technology Plaza, No. 8 Keyuan Road, Kejiyuan Community, Yuehai Subdistrict, Nanshan District, Shenzhen',
      },
      {
        label: 'Main focus',
        value:
          'Industrial sensors | Solutions | Software development | Technical integration',
      },
      {
        label: 'Working style',
        value: 'Selection support | Project coordination | Technical response',
      },
    ],
    finalCtaTitle: 'Start with the project scenario',
    finalCtaBody:
      'Share the equipment model, sensing requirement, or integration scope first, and the next step can be mapped to the right product and technical route.',
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
  aboutPage: {
    eyebrow: 'About Yuelin Technology',
    heroSummary:
      'From industrial sensing and component selection to automation integration paths, the company is positioned to support projects with steadier supply and more practical technical coordination.',
    heroDescription:
      'This page brings the company profile, office address, business facts, partner references, and qualification placeholders into one calm corporate surface so industrial buyers can build trust faster.',
    companyTitle: 'Company profile',
    companyParagraphs: [
      'Shenzhen Yuelin Technology Co., Ltd. is based in Shenzhen and focuses on industrial sensors, automation-related products, and technical services. The company works with equipment makers, system integrators, and factory-side customers who need clearer selection and implementation support.',
      'Its business scope covers industrial sensors, safety protection sensors, laser ranging sensors, linear guides and modules, pneumatic components, software development, and technical integration. The goal is to improve equipment automation capability and line efficiency through reliable supply, practical support, and responsive project coordination.',
    ],
    factsTitle: 'Company facts',
    facts: [
      {
        label: 'Full name',
        value: 'Shenzhen Yuelin Technology Co., Ltd.',
      },
      {
        label: 'Office address',
        value:
          'Building 3, Xunmei Technology Plaza, No. 8 Keyuan Road, Kejiyuan Community, Yuehai Subdistrict, Nanshan District, Shenzhen',
      },
      {
        label: 'Customer types',
        value: 'Equipment makers | System integrators | Factory-side buyers',
      },
      {
        label: 'Business focus',
        value:
          'Industrial sensors | Solutions | Software development | Technical integration',
      },
    ],
    trustTitle: 'How we work',
    trustSummary:
      'For industrial customers, reliable supply response, a clear selection path, and project-ready coordination matter more than broad marketing claims.',
    trustItems: [
      {
        title: 'Reliable supply and selection dialogue',
        detail:
          'Conversations start from actual scenarios, product models, and implementation needs rather than vague brand language alone.',
      },
      {
        title: 'Integration-aware technical support',
        detail:
          'Sensor signals, execution units, and software paths are framed together so technical discussions can stay close to delivery reality.',
      },
      {
        title: 'Bilingual corporate expression',
        detail:
          'Chinese and English surfaces share the same company structure, making external presentation more consistent for local and international communication.',
      },
    ],
    partnersTitle: 'Partner brands',
    qualificationsTitle: 'Qualifications and authorization placeholders',
    qualificationsSummary:
      'The structure is ready for company credentials, partner authorization materials, and supporting capability documents, even though the real assets are still pending.',
    qualifications: [
      {
        title: 'Company credentials',
        detail:
          'Reserved for business qualifications, system certifications, and project-level supporting documents.',
      },
      {
        title: 'Partner authorization',
        detail:
          'Reserved for cooperation brand authorization images, agency materials, or related statements.',
      },
      {
        title: 'Delivery proof',
        detail:
          'Reserved for project cases, service process references, or industry application evidence.',
      },
    ],
    finalCtaTitle: 'If the project direction is already clear, start the conversation directly',
    finalCtaBody:
      'Whether the need is product selection, technical integration, or production-line automation coordination, the consultation entry can be the first concrete next step.',
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
