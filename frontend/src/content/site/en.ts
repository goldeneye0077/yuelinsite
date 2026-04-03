import type { SiteContent } from './types'

export const enSiteContent: SiteContent = {
  locale: 'en',
  meta: {
    brandName: 'Yuelin Technology',
    companyName: 'Shenzhen Yuelin Technology Co., Ltd.',
    crossLocaleCompanyName: '\u6df1\u5733\u5e02\u8dc3\u9cde\u79d1\u6280\u6709\u9650\u516c\u53f8',
    brandLine: 'Industrial sensing and automation integration',
    switchLabel: {
      zh: '\u4e2d\u6587',
      en: 'English',
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
    { key: 'partners', label: 'Partners' },
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
  partners: {
    title: 'Partners',
    summary:
      'Turn partner brands, authorization material, and collaboration context into a page that feels like a real business gateway.',
    description:
      'Instead of stopping at a brand list, this route explains partner roles, support material, collaboration signals, and the next action for a real project conversation.',
    primaryCta: 'Start partner inquiry',
    secondaryCta: 'View solutions',
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
          title: 'When the route is clear, check how partner brands fit the route',
          detail:
            'Technical integration often depends on how partner brands and proprietary business scope fit together, so the next stop should explain that cooperation structure before intake.',
          ctaLabel: 'Jump to partner ecosystem',
          targetId: 'partner-ecosystem',
        },
      },
    ],
    partnershipTitle: 'Partner ecosystem with context',
    partnershipSummary:
      'These brands are presented as working layers inside the project ecosystem, not as a detached logo wall. The point is to show how proprietary business, partner alignment, and mixed-brand delivery can coexist on the same site.',
    partnershipModesTitle: 'How brand cooperation is framed',
    partnershipModesSummary:
      'The module needs to explain both trust and operating logic: where Yuelin Technology leads directly, where partner brands add credibility, and where mixed-brand coordination matters most.',
    partnershipModes: [
      {
        title: 'Own business first, partner context second',
        detail:
          'The site should still read as Yuelin Technology’s business presentation, while partner brands clarify the sensing, safety, pneumatic, and integration ecosystem around it.',
      },
      {
        title: 'Brand references tied to real project layers',
        detail:
          'Each cooperation brand should be shown with the layer it strengthens, such as taxonomy reference, sensing precision, safety coverage, or execution-side support.',
      },
      {
        title: 'Mixed-brand projects stay readable',
        detail:
          'Visitors should understand that selection, replacement, and integration work may combine Yuelin delivery with brand-specific requirements instead of forcing a single-brand story.',
      },
    ],
    partnerTrackLabel: 'Related track',
    partnerBrands: [
      {
        label: 'Reference taxonomy',
        name: 'Huayifeng',
        detail:
          'Used as a practical reference source for category logic, helping the site describe industrial-sensor structure in a way buyers already recognize.',
        projectRole:
          'Best for projects that begin with selection range, category mapping, and quick understanding of the sensing catalog.',
        relatedTrack: 'Industrial automation solutions',
      },
      {
        label: 'Precision sensing',
        name: 'Panasonic',
        detail:
          'Supports the precision-sensing and internationally legible side of the story, especially where equipment teams care about stable detection reputation.',
        projectRole:
          'Fits projects that need clearer sensing credibility, tighter positioning expectations, or export-facing equipment communication.',
        relatedTrack: 'Industrial automation solutions',
      },
      {
        label: 'Safety and detection',
        name: 'Sick',
        detail:
          'Strengthens the connection to industrial sensing, safety inspection, and intelligent-manufacturing scenarios that need stronger technical context.',
        projectRole:
          'Fits projects that combine detection depth with safety logic, especially when the buyer expects a recognizable industrial reference.',
        relatedTrack: 'Technical integration',
      },
      {
        label: 'Pneumatic execution',
        name: 'AirTAC',
        detail:
          'Represents the execution-side and machine-side component layer, making automation solutions feel closer to real actuation and workstation motion.',
        projectRole:
          'Fits projects where sensing must coordinate with cylinders, pneumatic actions, or machine-level replacement work.',
        relatedTrack: 'Industrial automation solutions',
      },
      {
        label: 'System coordination',
        name: 'Mindman',
        detail:
          'Completes the partner expectation around execution units and system coordination, especially in mixed-brand implementation discussions.',
        projectRole:
          'Fits projects that need broader execution-unit alignment or longer-cycle integration coordination across multiple component layers.',
        relatedTrack: 'Technical integration',
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
      'Catalog requests, resource access, and technical coordination now share one clearer support route.',
    description:
      'The support page is structured as an industrial service desk: what help is available, which materials can be requested, and how the next support step should be started.',
    primaryCta: 'Request Support / 获取支持',
    secondaryCta: 'View product center',
  },
  supportPage: {
    eyebrow: 'Service and support routes',
    heroSummary:
      'The support page turns post-selection questions into a readable route: what can be requested now, what materials are still in preparation, and how technical follow-up should begin.',
    heroDescription:
      'Instead of hiding support behind a single contact button, this page gives industrial buyers a clearer service desk with visible entry points for catalogs, data preparation, and coordination needs.',
    quickPanelTitle: 'Quick support view',
    quickPanelSummary:
      'Three things should be readable at a glance: what materials are requestable, what is still in preparation, and how fast the next technical conversation can start.',
    quickPanelItems: [
      {
        label: 'Catalog route',
        title: 'Product catalog requests are already visible',
        detail:
          'Visitors can move from the support page into a clear catalog-request path instead of searching across unrelated sections.',
      },
      {
        label: 'Resource status',
        title: 'Downloads are framed with preparation status',
        detail:
          'Datasheets, manuals, and related files can be introduced later without changing the page structure again.',
      },
      {
        label: 'Technical response',
        title: 'Support is positioned as project coordination',
        detail:
          'The support route stays close to real project questions such as model fit, interface conditions, and replacement timing.',
      },
    ],
    capabilityTitle: 'Support capabilities',
    capabilitySummary:
      'The page should explain support as ongoing project assistance rather than as a passive after-sales notice board.',
    capabilities: [
      {
        title: 'Selection follow-up and replacement guidance',
        detail:
          'Suitable when the customer already knows the machine context but still needs help narrowing the right sensor, pneumatic, or linear-motion direction.',
      },
      {
        title: 'Technical coordination around integration conditions',
        detail:
          'Suitable when the request involves IO, communication method, field-side limits, or matching one component decision to a broader implementation path.',
      },
      {
        title: 'Resource preparation for decision-making',
        detail:
          'Suitable when the customer needs catalogs, file placeholders, or material confirmation before moving into a formal consultation or quotation step.',
      },
    ],
    guidanceTitle: 'When to use this page',
    guidanceSummary:
      'Support should guide the visitor into the next right step instead of forcing every question into the same generic route.',
    guidanceItems: [
      {
        title: 'Use it for catalog and material requests',
        detail:
          'If the buyer needs a product directory, a technical file placeholder, or a structured list of what can be shared next, the support page should be the first stop.',
      },
      {
        title: 'Use it for project-side technical clarification',
        detail:
          'If the question is about model fit, replacement boundaries, or field-side conditions, the support route should feel like technical coordination, not a dead-end form.',
      },
      {
        title: 'Use it before a deeper business handoff',
        detail:
          'Once the needed file set, scenario facts, or support boundary is clear, the visitor should be able to move smoothly into the consultation route.',
      },
    ],
    resourceTitle: 'Resource desk',
    resourceSummary:
      'These entries clarify what can be requested now and what remains a placeholder until the real document pack is supplied.',
    resources: [
      {
        label: 'Catalog request',
        status: 'Available route',
        title: 'Product catalog request',
        detail:
          'Use this when a customer needs a structured overview of product families before narrowing models or discussing integration details.',
        deliverable:
          'Expected output: category-level directory, selection conversation basis, and product-center handoff.',
        primaryCta: {
          label: 'Request catalog support',
          section: 'contact',
        },
        secondaryCta: {
          label: 'Browse product center',
          section: 'products',
        },
      },
      {
        label: 'Data placeholder',
        status: 'Prepared slot',
        title: 'Datasheet and manual access',
        detail:
          'Use this when the buyer needs to confirm that technical files, manuals, or related supporting data can be prepared through the support route.',
        deliverable:
          'Expected output: file-preparation confirmation, placeholder resource route, and next-step clarification.',
        primaryCta: {
          label: 'Request technical files',
          section: 'contact',
        },
        secondaryCta: {
          label: 'Review solutions',
          section: 'solutions',
        },
      },
      {
        label: 'Integration prep',
        status: 'Guided entry',
        title: 'Project-side support intake',
        detail:
          'Use this when the need is broader than a single file and must connect model choice, interface conditions, timing, and implementation coordination.',
        deliverable:
          'Expected output: clearer support boundary, intake facts, and the right route into technical follow-up.',
        primaryCta: {
          label: 'Start support intake',
          section: 'contact',
        },
        secondaryCta: {
          label: 'Return to solutions',
          section: 'solutions',
        },
      },
    ],
    processTitle: 'Support response rhythm',
    processSummary:
      'The support route should make the next three steps obvious: request, confirm, and continue into the right follow-up.',
    processSteps: [
      {
        step: '01',
        title: 'Submit the need boundary',
        detail:
          'Start with the product family, machine context, or file type needed so the support request is immediately scoped.',
      },
      {
        step: '02',
        title: 'Confirm resource or coordination type',
        detail:
          'Clarify whether the next step is catalog sharing, technical-file preparation, or broader project-side coordination.',
      },
      {
        step: '03',
        title: 'Move into the right follow-up path',
        detail:
          'Once the support route is clear, the next step can continue into consultation, quotation, sampling, or technical discussion.',
      },
    ],
    finalCtaTitle: 'If the support need is already clear, move directly into the request path',
    finalCtaBody:
      'Share the file type, machine scenario, or coordination question first, and the support route can narrow the fastest useful next step.',
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
    summary:
      'Use one dedicated contact surface to move from product interest into a real inquiry.',
    description:
      'The contact page now combines company coordinates, project-intake guidance, and real submission feedback in one place.',
    primaryCta: 'Start Inquiry',
    secondaryCta: 'View Support',
  },
  contactPage: {
    eyebrow: 'Inquiry channel',
    heroSummary:
      'When the project direction is clear enough to start a real conversation, use this form to send the core business boundary first.',
    heroDescription:
      'This route is built for product selection requests, solution consultations, and integration follow-up. Keep the message practical and we can align the right next step faster.',
    entryContextLabel: 'Entry route',
    categoryContextLabel: 'Default category',
    quickPanelTitle: 'Direct contact view',
    quickPanelSummary:
      'The page works like an intake desk: company coordinates stay visible, project scope can be stated clearly, and the inquiry now lands in the backend instead of stopping at a placeholder contract.',
    quickPanelItems: [
      {
        label: 'Office location',
        title: 'Shenzhen office stays visible on the inquiry surface',
        detail:
          'Building 3, Xunmei Technology Plaza, No. 8 Keyuan Road, Kejiyuan Community, Yuehai Subdistrict, Nanshan District, Shenzhen.',
      },
      {
        label: 'Response rhythm',
        title: 'The form is designed for quick triage instead of long back-and-forth',
        detail:
          'Share the product direction, scenario, or integration scope first, so the next reply can start from an actual project frame.',
      },
      {
        label: 'Intake scope',
        title: 'Products, solutions, and support requests can all enter here',
        detail:
          'Industrial sensor selection, automation collaboration, technical integration, and material requests all converge on the same inquiry path.',
      },
    ],
    formTitle: 'Inquiry form',
    formSummary:
      'Leave the essential company and project information first. The current flow stores the submission and returns an immediate confirmation.',
    form: {
      companyNameLabel: 'Company',
      companyNamePlaceholder: 'Factory, integrator, or project owner',
      contactNameLabel: 'Contact name',
      contactNamePlaceholder: 'Primary project contact',
      emailLabel: 'Email',
      emailPlaceholder: 'name@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Mobile or office number',
      interestCategoryLabel: 'Inquiry category',
      messageLabel: 'Project note',
      messagePlaceholder:
        'Briefly describe the scenario, target product direction, line condition, or integration scope.',
      submitLabel: 'Submit inquiry',
      pendingLabel: 'Submitting...',
      requiredHint: 'All fields are required for the first-pass intake.',
      helperNote:
        'If model numbers, target distance, safety constraints, or interface requirements are already known, include them here.',
      consentLabel: 'I agree that Yuelin Technology may process this inquiry',
      consentDetail:
        'The submitted information is used only for inquiry follow-up, product selection discussion, and related response materials.',
      successLabel: 'Inquiry received',
      errorLabel: 'Submission issue',
      referenceLabel: 'Reference',
    },
    categoryOptions: [
      { value: 'industrial-sensors', label: 'Industrial sensors' },
      { value: 'safety-protection-sensors', label: 'Safety protection sensors' },
      { value: 'laser-ranging-sensors', label: 'Laser ranging sensors' },
      { value: 'linear-guides-modules', label: 'Linear guides and modules' },
      { value: 'pneumatic-components', label: 'Pneumatic components' },
      { value: 'industrial-automation-solution', label: 'Industrial automation solution' },
      { value: 'software-development', label: 'Software development' },
      { value: 'technical-integration', label: 'Technical integration' },
      { value: 'general-consultation', label: 'General consultation' },
    ],
    guidanceTitle: 'Before you send',
    guidanceSummary:
      'A concise but concrete inquiry gets routed faster than a vague brand-level message.',
    guidanceItems: [
      {
        title: 'State the equipment or line context',
        detail:
          'Mention the production environment, sensing object, travel distance, or integration side so the request is not detached from use conditions.',
      },
      {
        title: 'Point to the likely category first',
        detail:
          'Even if the model is not fixed yet, selecting the rough product or solution category helps narrow the follow-up route quickly.',
      },
      {
        title: 'Keep business and technical questions together when needed',
        detail:
          'If product selection and integration coordination are linked, describe both in one note so the next reply starts with the full context.',
      },
    ],
    processTitle: 'What happens after submission',
    processSummary:
      'The form should not feel like a dead-end. It establishes a simple handoff rhythm from site browsing into business follow-up.',
    processSteps: [
      {
        step: '01',
        title: 'Submission is stored immediately',
        detail:
          'The inquiry is written into the backend so it no longer stops at a placeholder contract response.',
      },
      {
        step: '02',
        title: 'The request is read by category and scenario',
        detail:
          'Product-family interest, solution direction, and field-side notes provide the first sorting frame for follow-up.',
      },
      {
        step: '03',
        title: 'Communication moves into the right next path',
        detail:
          'The next step can become product clarification, material response, quotation discussion, or deeper integration coordination.',
      },
    ],
    routingTitle: 'Continue browsing if the need is still forming',
    routingSummary:
      'If the project is not ready for a full inquiry yet, move back into the product, solution, or support surfaces without losing the current route.',
    routingLinks: [
      { label: 'Review product center', section: 'products' },
      { label: 'Review solutions', section: 'solutions' },
      { label: 'Open support desk', section: 'support' },
    ],
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
