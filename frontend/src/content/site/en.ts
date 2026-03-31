import type { SiteContent } from './types'

export const enSiteContent: SiteContent = {
  locale: 'en',
  meta: {
    brandName: 'Yuelin Technology',
    companyName: 'Shenzhen Yuelin Technology Co., Ltd.',
    crossLocaleCompanyName: '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8',
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
    title: 'Shenzhen Yuelin Technology Co., Ltd.',
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
    assuranceTitle: 'Qualification and authorization framing',
    assuranceSummary:
      'The homepage now reserves visible trust positions for company documents, authorization proof, and delivery references so industrial buyers can read the confidence layer without leaving the first narrative flow.',
    assuranceSignals: [
      {
        label: 'Credential dossier',
        title: 'Company document surfaces are already prepared',
        detail:
          'Business qualifications, system certifications, and company capability materials can be inserted later without rebuilding the homepage structure.',
      },
      {
        label: 'Authorization readiness',
        title: 'Partner authorization space is structurally defined',
        detail:
          'Brand letters, agency statements, and supporting authorization visuals can be slotted into the existing layout as the asset pack is completed.',
      },
      {
        label: 'Delivery proof',
        title: 'Case and application evidence can grow in place',
        detail:
          'Project snapshots, application notes, and industry examples can be added progressively while keeping the same homepage story intact.',
      },
    ],
    processTitle: 'Project coordination rhythm',
    processSummary:
      'The consulting path is intentionally short: confirm the sensing scenario first, align model and interface next, then move into inquiry and follow-up.',
    processSteps: [
      {
        step: '01',
        title: 'Confirm the scenario',
        detail:
          'Start from the equipment type, sensing target, installation condition, and line-side constraints so the need boundary is clear early.',
      },
      {
        step: '02',
        title: 'Align model and interface',
        detail:
          'Review brand preference, output method, integration interface, and delivery scope before the conversation becomes a formal business inquiry.',
      },
      {
        step: '03',
        title: 'Enter inquiry follow-up',
        detail:
          'Once the direction is stable, the next step can move naturally into inquiry, quotation, sampling, or deeper technical coordination.',
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
      'Industrial automation solutions, software development, and technical integration are framed as one connected path from selection to project delivery.',
    description:
      'This page establishes the bilingual solutions structure first, so equipment makers, integrators, and factory-side teams can quickly judge fit, scope, and next steps.',
    primaryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    secondaryCta: 'View product center',
  },
  solutionsPage: {
    eyebrow: 'Solutions and delivery paths',
    heroSummary:
      'From industrial sensor selection to software coordination and field integration, Yuelin Technology presents three service tracks that are easier for industrial buyers to scan and compare.',
    heroDescription:
      'The page no longer stops at capability framing. It now tells visitors which route to enter first, where each track should lead next, and how a project can move cleanly from one direction into another without losing context.',
    coverageTitle: 'Customer fit and project stage',
    coverageSummary:
      'Whether the need is a new machine, a line-side upgrade, or a project that must connect sensing, execution, and control, this view should make the collaboration boundary easier to read.',
    coverageItems: [
      {
        label: 'Equipment makers',
        title: 'For new-machine development and coordinated selection',
        detail:
          'Useful when the project needs sensors, execution units, interface direction, and outgoing reliability considered together.',
      },
      {
        label: 'System integrators',
        title: 'For interface review and implementation alignment',
        detail:
          'Useful when signal paths, control interfaces, brand preference, and delivery boundaries need to be clarified early.',
      },
      {
        label: 'Factory-side teams',
        title: 'For production-line upgrades and replacement support',
        detail:
          'Useful around inspection stations, positioning units, safety reinforcement, or cycle-time-driven retrofit work.',
      },
    ],
    trackNavLabel: 'Solution direction navigation',
    tracksTitle: 'Three solution directions',
    tracksSummary:
      'The goal is to help visitors choose a route quickly, then move through the right scope, value, and action path without bouncing between unrelated information blocks.',
    tracks: [
      {
        anchor: 'industrial-automation',
        step: '01',
        title: 'Industrial automation solutions',
        summary:
          'Bring sensing, execution, control, and production rhythm into one implementation path instead of treating them as separate conversations.',
        scenarioTitle: 'Applicable scenarios',
        scenario:
          'Suitable for new equipment development, inspection-station builds, machine upgrades, line retrofits, and safety reinforcement projects.',
        scopeTitle: 'Support scope',
        scope: [
          'Selection guidance across sensors, pneumatic units, and linear modules',
          'Interface alignment for inspection, positioning, safety, and motion linkage',
          'Implementation guidance shaped by equipment structure and field constraints',
        ],
        valueTitle: 'Expected value',
        value: [
          'Reduce early-stage selection and integration friction',
          'Align equipment-side and control-side boundaries earlier',
          'Create a clearer path into sampling, quotation, and validation',
        ],
        actionTitle: 'Best entered from the real production scenario',
        actionBody:
          'If the equipment type, inspection target, or retrofit goal is already clear, this route is usually the most efficient place to start the discussion.',
        primaryCta: {
          label: 'Discuss the automation scenario',
          section: 'contact',
        },
        secondaryCta: {
          label: 'View relevant product directions',
          section: 'products',
        },
        transition: {
          label: 'Continue the route',
          title: 'Move forward when the field logic also needs software coordination',
          detail:
            'If the project needs status displays, alarms, process logic, or operator-facing tools on top of the hardware path, the next stop is usually the software-development track.',
          ctaLabel: 'Jump to software development',
          targetId: 'software-development',
        },
      },
      {
        anchor: 'software-development',
        step: '02',
        title: 'Software development',
        summary:
          'Connect field signals, logic handling, and operator-facing software into one practical software route.',
        scenarioTitle: 'Applicable scenarios',
        scenario:
          'Suitable for automation-adjacent work that needs data capture, status monitoring, workstation logic, basic visualization, or lightweight business coordination.',
        scopeTitle: 'Support scope',
        scope: [
          'Field-signal structuring and software-logic breakdown',
          'Lightweight planning around monitoring, parameters, alarms, and process flow',
          'Basic UI or data-handling support attached to existing automation projects',
        ],
        valueTitle: 'Expected value',
        value: [
          'Extend the conversation from hardware selection into software coordination',
          'Reduce the gap between sensor data and field logic',
          'Help customers see a clearer path from detection to usable information',
        ],
        actionTitle: 'Best entered from data and workflow expectations',
        actionBody:
          'If the team already knows what should be collected, monitored, or shown on screen, this route helps define the software boundary faster.',
        primaryCta: {
          label: 'Discuss software needs',
          section: 'contact',
        },
        secondaryCta: {
          label: 'Review service support',
          section: 'support',
        },
        transition: {
          label: 'Continue the route',
          title: 'Move forward when software work must align with multi-brand systems',
          detail:
            'If the software layer also has to coordinate partner brands, existing systems, execution units, and field-side constraints, the next stop is usually technical integration.',
          ctaLabel: 'Jump to technical integration',
          targetId: 'technical-integration',
        },
      },
      {
        anchor: 'technical-integration',
        step: '03',
        title: 'Technical integration',
        summary:
          'Combine brands, interfaces, execution units, and implementation boundaries into a coordinated route that can actually move forward.',
        scenarioTitle: 'Applicable scenarios',
        scenario:
          'Suitable for multi-brand environments, complex system connections, field-constrained installations, or projects that need sustained technical coordination.',
        scopeTitle: 'Support scope',
        scope: [
          'Interface coordination around partner brands and existing systems',
          'Layout, linkage, and replacement planning based on field conditions',
          'Continuous technical alignment across selection, validation, and delivery',
        ],
        valueTitle: 'Expected value',
        value: [
          'Help project teams align brand and interface strategy faster',
          'Lower rework risk when plans change on site',
          'Keep commercial discussion and technical implementation in the same rhythm',
        ],
        actionTitle: 'Best entered from system boundaries and brand conditions',
        actionBody:
          'If the site already includes multiple brands, interface constraints, or tighter delivery pressure, this route is better for clarifying the coordination boundary first.',
        primaryCta: {
          label: 'Discuss integration boundaries',
          section: 'contact',
        },
        secondaryCta: {
          label: 'View the product center',
          section: 'products',
        },
        transition: {
          label: 'Return to action',
          title: 'When the route is clear, move into the intake step',
          detail:
            'Once the team has identified the right direction, the next move is to gather the equipment facts, interface conditions, and timeline for a real consultation.',
          ctaLabel: 'Jump to conversation prep',
          targetId: 'solution-intake',
        },
      },
    ],
    coordinationTitle: 'What to prepare for the first conversation',
    coordinationSummary:
      'If the project does not yet have a complete specification file, these inputs are enough to start productively.',
    coordinationItems: [
      {
        title: 'Equipment and station boundary',
        detail:
          'Share the equipment type, inspection target, cycle requirement, and installation limits to narrow the route faster.',
      },
      {
        title: 'Interface and control conditions',
        detail:
          'Sync PLC, IO, communication method, software linkage, or execution-unit interfaces early so implementation complexity is easier to judge.',
      },
      {
        title: 'Delivery target and timing',
        detail:
          'Whether the need is sampling, replacement, validation, or a broader line upgrade, a clear milestone makes the next step more effective.',
      },
    ],
    processTitle: 'How the solution path moves forward',
    processSummary:
      'The solutions page should not only list capabilities. It should also explain the route: confirm the scenario first, align the boundaries next, then move into commercial and implementation follow-up.',
    processSteps: [
      {
        step: '01',
        title: 'Confirm the scenario and target',
        detail:
          'Clarify the inspection target, motion relationship, safety expectation, and field limits so the problem definition is stable.',
      },
      {
        step: '02',
        title: 'Align product, software, and integration boundaries',
        detail:
          'Use the chosen solution direction to decide the needed sensors, execution units, software logic, and coordination interfaces.',
      },
      {
        step: '03',
        title: 'Move into inquiry and execution follow-up',
        detail:
          'Once the direction is clear, the route can progress into quotation, sampling, validation planning, or implementation scheduling.',
      },
    ],
    finalCtaTitle: 'If the scenario is already clear, the next step is the conversation',
    finalCtaBody:
      'Share the equipment type, detection target, control method, or retrofit goal first, and we can narrow the path through the most suitable solution direction.',
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
    partnersSummary:
      'These partner references are presented as capability context, showing the sensing, safety, pneumatic, and integration ecosystem the company is prepared to work within.',
    qualificationsTitle: 'Qualifications and authorization placeholders',
    qualificationsSummary:
      'The structure is ready for company credentials, partner authorization materials, and supporting capability documents, even though the real assets are still pending.',
    qualifications: [
      {
        title: 'Company credentials',
        detail:
          'Reserved for business qualifications, system certifications, and project-level supporting documents.',
        status: 'Reserved',
      },
      {
        title: 'Partner authorization',
        detail:
          'Reserved for cooperation brand authorization images, agency materials, or related statements.',
        status: 'Reserved',
      },
      {
        title: 'Delivery proof',
        detail:
          'Reserved for project cases, service process references, or industry application evidence.',
        status: 'Reserved',
      },
    ],
    authorizationTitle: 'Authorization and document readiness',
    authorizationSummary:
      'The real materials can arrive later, but the structure for authorization, compliance, and project proof is already defined so the trust layer can grow without redesign.',
    authorizationItems: [
      {
        label: 'Partner authorization',
        title: 'Brand-specific material slots are ready',
        detail:
          'Separate positions can hold letters or supporting documents for Panasonic, Sick, AirTAC, Mindman, and other partner-related materials.',
      },
      {
        label: 'Company compliance',
        title: 'Corporate documents can be grouped clearly',
        detail:
          'Business qualifications, certifications, and capability files can be added in layers instead of being scattered across unrelated pages.',
      },
      {
        label: 'Project evidence',
        title: 'Cases and supporting proof can be added progressively',
        detail:
          'Delivery screenshots, application notes, and industry references can be appended over time without changing the core About layout.',
      },
    ],
    deliveryTitle: 'Delivery coordination path',
    deliverySummary:
      'The About page should explain not only what the company offers, but also how communication moves from requirement framing into a workable project path.',
    deliverySteps: [
      {
        step: '01',
        title: 'Confirm scenario and constraints',
        detail:
          'Clarify the equipment environment, sensing target, safety expectation, and field-side limitations before narrowing down the route.',
      },
      {
        step: '02',
        title: 'Align model, interface, and scope',
        detail:
          'Discuss sensors, execution units, software paths, and technical integration boundaries in one coordinated conversation.',
      },
      {
        step: '03',
        title: 'Move into inquiry and follow-up',
        detail:
          'Once the direction is stable, the discussion can progress into quotation, sampling, or deeper project coordination.',
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
    factsSummary:
      'Until each section is fully built, the core company facts, Shenzhen location, and consultation route stay visible in the same place for continuity.',
    inquiryCta: 'Request Consultation / \u83b7\u53d6\u54a8\u8be2',
    homeCta: 'Return home',
  },
}
