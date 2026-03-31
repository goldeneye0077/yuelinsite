# Roadmap: Shenzhen Yuelin Technology Official Site

## Overview

This project builds a bilingual corporate website for Shenzhen Yuelin Technology Co., Ltd. The delivery order stays intentional:

1. Establish the platform foundation, shared shell, and theme system.
2. Build the brand-facing homepage and corporate presence.
3. Expand the product center and taxonomy.
4. Add solutions, partner brands, and support content.
5. Close the loop with inquiry, QA, and launch readiness.

The guiding principle is simple: solve platform and structure first, then content, then conversion and launch quality.

## Phases

- [x] **Phase 1: Platform Foundation & Theme Shell** - Frontend/backend scaffold, Docker Compose, bilingual routing, shared shell, and light/dark Precision Industrial foundation
- [x] **Phase 2: Brand Story & Corporate Presence** - Homepage storytelling, About content, and trust-building presentation
- [ ] **Phase 3: Product Center & Taxonomy** - Product center structure plus industrial sensor subcategory taxonomy
- [ ] **Phase 4: Solutions, Brands & Support** - Solutions, partner brands, and service/support experience
- [ ] **Phase 5: Inquiry, QA & Launch Readiness** - Inquiry flow, responsive QA, theme consistency, and launch verification

## Phase Details

### Phase 1: Platform Foundation & Theme Shell

**Goal**: Establish the durable site foundation, including the frontend/backend scaffold, Docker Compose workflow, locale-prefixed routing, shared shell, and the Precision Industrial light/dark baseline.

**Depends on**: Nothing  
**Requirements**: [GLOB-01, GLOB-02, GLOB-03, GLOB-05]  
**UI hint**: yes  
**Success Criteria**:

1. Users can access mirrored Chinese and English routes with a shared site structure.
2. Users can switch language without losing route orientation.
3. Users can navigate the core sections from a consistent shared header and footer.
4. Users can switch between light and dark themes while keeping shell typography, navigation, and chart-ready surfaces readable.
5. Developers can run the project through one Compose workflow.
6. The first visible shell feels industrial and deliberate rather than template-like.

**Plans**: 3 plans

- [x] 01-01: Scaffold the React + Vite frontend, FastAPI backend, PostgreSQL integration baseline, and Docker Compose setup
- [x] 01-02: Implement locale routing, content loading conventions, and frontend-backend API contracts for site data and inquiries
- [x] 01-03: Build the shared layout, header, footer, mobile navigation, theme token system, and Precision Industrial visual shell

### Phase 2: Brand Story & Corporate Presence

**Goal**: Use the homepage and About surfaces to communicate the company position, address, trust framing, and first strong brand impression.

**Depends on**: Phase 1  
**Requirements**: [HOME-01, HOME-02, HOME-03, ABOU-01, ABOU-02, ABOU-03]  
**UI hint**: yes  
**Success Criteria**:

1. Users understand what the company does from the first screen.
2. Users can read a complete bilingual company profile and the Shenzhen office address.
3. Users see trust-building sections such as strengths, company introduction, and reserved qualification/authorization areas.
4. Users can move from homepage modules into product, solution, or inquiry paths.
5. The homepage hero remains dominant and editorial instead of turning into a card wall.

**Plans**: 4 plans

- [x] 02-01: Build a poster-like homepage hero with strong hierarchy, dominant visual anchor, and restrained CTA composition
- [x] 02-02: Build the bilingual company profile and About page content
- [x] 02-03: Add trust modules, reserved qualification blocks, and brand-consistent cardless layouts
- [x] 02-04: Wire company facts, address, bilingual copy, and controlled motion details across core brand pages

### Phase 3: Product Center & Taxonomy

**Goal**: Build the product information architecture around five top-level categories and detailed industrial sensor subcategories.

**Depends on**: Phase 2  
**Requirements**: [PROD-01, PROD-02, PROD-03, PROD-04]  
**UI hint**: yes  
**Success Criteria**:

1. Users can browse all five top-level product categories.
2. Users can drill into industrial sensor subcategories based on the reference taxonomy.
3. Users can open category pages with context, representative groupings, and inquiry entry points.
4. Users can view representative product cards or detail content with key highlights and CTA support.

**Plans**: 4 plans

- [x] 03-01: Define the structured product taxonomy and bilingual product data model
- [ ] 03-02: Build the product center landing page and the five top-level category pages
- [ ] 03-03: Build industrial sensor subcategory navigation and listing templates
- [ ] 03-04: Build representative product card/detail components with inquiry CTA

### Phase 4: Solutions, Brands & Support

**Goal**: Clarify business capability and partner ecosystem through solutions, cooperation brands, and support content.

**Depends on**: Phase 3  
**Requirements**: [SOLN-01, SOLN-02, BRND-01, BRND-02, SUPP-01, SUPP-02]  
**UI hint**: yes  
**Success Criteria**:

1. Users can understand the three solution directions and their value.
2. Users can view the five partner brands with context instead of logo-only presentation.
3. Users can find service/support capability and a clear catalog or download entry.
4. Users can move from solutions or support surfaces into inquiry without dead ends.

**Plans**: 4 plans

- [ ] 04-01: Build solution content structure for industrial automation, software development, and technical integration
- [ ] 04-02: Implement bilingual solution pages and CTA sections
- [ ] 04-03: Implement brand cooperation modules with contextual partner presentation
- [ ] 04-04: Build the service/support page with catalog and download request entry

### Phase 5: Inquiry, QA & Launch Readiness

**Goal**: Complete the contact and inquiry loop, verify responsive and theme quality, and prepare the stack for launch.

**Depends on**: Phase 4  
**Requirements**: [LEAD-01, LEAD-02, LEAD-03, GLOB-04]  
**UI hint**: yes  
**Success Criteria**:

1. Users can open a dedicated contact page with a clear inquiry path.
2. Users can submit an inquiry form with essential business fields and clear feedback.
3. Users can find inquiry entry points from homepage, product, solution, and contact pages.
4. Users can browse the core pages on desktop and mobile without broken navigation or layout regressions.
5. Users see consistent light/dark behavior across the shell and chart-ready surfaces.
6. Developers can build and run the launch-ready stack through Docker Compose.

**Plans**: 4 plans

- [ ] 05-01: Build the contact page, inquiry form, backend validation, persistence, and submission flow
- [ ] 05-02: Audit and add CTA entry points across homepage, product, solution, and contact pages
- [ ] 05-03: Complete responsive QA, theme consistency checks, and accessibility/performance fixes
- [ ] 05-04: Finalize deployment workflow, launch checklist, and release-ready verification

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Platform Foundation & Theme Shell | 3/3 | Complete | 2026-03-31 (01-01, 01-02, 01-03) |
| 2. Brand Story & Corporate Presence | 4/4 | Complete | 2026-03-31 (02-01, 02-02, 02-03, 02-04) |
| 3. Product Center & Taxonomy | 1/4 | In progress | 2026-03-31 (03-01) |
| 4. Solutions, Brands & Support | 0/4 | Not started | - |
| 5. Inquiry, QA & Launch Readiness | 0/4 | Not started | - |
