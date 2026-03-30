# Roadmap: 跃鳞科技企业官网

## Overview

本项目将从前后端基础架构、Docker Compose 运行环境、双语路由和主题系统开始，先建立可扩展的官网底盘，再逐步完成品牌首页、产品中心、解决方案与支持内容，最后收口询盘转化、响应式质量与上线准备。路线图的顺序遵循一个原则：先解决平台与结构问题，再解决内容承载，最后补齐转化和上线质量。

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Platform Foundation & Theme Shell** - 搭建前后端底座、Docker Compose、双语路由和明暗主题框架
- [ ] **Phase 2: Brand Story & Corporate Presence** - 完成首页、关于我们和品牌信任表达
- [ ] **Phase 3: Product Center & Taxonomy** - 建立产品中心结构和工业传感器细分类目
- [ ] **Phase 4: Solutions, Brands & Support** - 完成解决方案、品牌合作和服务支持内容
- [ ] **Phase 5: Inquiry, QA & Launch Readiness** - 完成询盘闭环、跨页 CTA、响应式校验和上线质量收口

## Phase Details

### Phase 1: Platform Foundation & Theme Shell
**Goal**: 建立可扩展的官网底盘，包括前后端工程、Docker Compose、双语路由、主题系统、全局布局和基础页面框架  
**Depends on**: Nothing (first phase)  
**Requirements**: [GLOB-01, GLOB-02, GLOB-03, GLOB-05]  
**UI hint**: yes  
**Success Criteria** (what must be TRUE):
  1. User can access both Chinese and English homepage routes with the same site structure
  2. User can switch language from the global navigation without losing orientation
  3. User can reach the main sections and contact entry from a shared header and footer on core templates
  4. User can switch between light and dark themes and keep core navigation, typography, and chart areas readable
  5. Developers can start frontend, backend, and database together through a single Docker Compose setup
**Plans**: 3 plans

Plans:
- [ ] 01-01: Scaffold the React + Vite frontend, FastAPI backend, PostgreSQL integration baseline, and Docker Compose setup
- [ ] 01-02: Implement locale routing, content loading conventions, and frontend-backend API contract for site data and inquiries
- [ ] 01-03: Build shared layout, header, footer, mobile navigation, and the light/dark theme token system

### Phase 2: Brand Story & Corporate Presence
**Goal**: 用首页、关于我们和企业信任内容把品牌定位、公司介绍和联系事实讲清楚  
**Depends on**: Phase 1  
**Requirements**: [HOME-01, HOME-02, HOME-03, ABOU-01, ABOU-02, ABOU-03]  
**UI hint**: yes  
**Success Criteria** (what must be TRUE):
  1. User can understand what the company does within the first screen of the homepage
  2. User can view a complete bilingual company profile and the Shenzhen office address
  3. User can see trust-building sections such as core strengths, company introduction, and reserved qualification/authorization areas
  4. User can enter product, solutions, and inquiry paths directly from homepage CTA modules
**Plans**: 4 plans

Plans:
- [ ] 02-01: Build homepage hero, positioning, and core value sections
- [ ] 02-02: Build bilingual company profile and About page content
- [ ] 02-03: Add trust modules, reserved qualification blocks, and brand-consistent visual system
- [ ] 02-04: Wire company facts, address, and supporting bilingual copy across core brand pages

### Phase 3: Product Center & Taxonomy
**Goal**: 建立产品中心的信息架构、5 个一级类与工业传感器二级分类，并形成可浏览的产品页体系  
**Depends on**: Phase 2  
**Requirements**: [PROD-01, PROD-02, PROD-03, PROD-04]  
**UI hint**: yes  
**Success Criteria** (what must be TRUE):
  1. User can browse all five top-level product categories from the product center
  2. User can drill into industrial sensor subcategories based on the selected reference taxonomy
  3. User can open category pages with category explanation, representative groupings, and inquiry entry
  4. User can view representative product cards or detail content with key highlights and contact CTA
**Plans**: 4 plans

Plans:
- [ ] 03-01: Define structured product taxonomy and bilingual product data model
- [ ] 03-02: Build product center landing page and five top-level category entry pages
- [ ] 03-03: Build industrial sensor subcategory navigation and listing templates
- [ ] 03-04: Build representative product card/detail components with inquiry CTA

### Phase 4: Solutions, Brands & Support
**Goal**: 通过解决方案、品牌合作和服务支持内容，把公司的业务能力与合作生态说清楚  
**Depends on**: Phase 3  
**Requirements**: [SOLN-01, SOLN-02, BRND-01, BRND-02, SUPP-01, SUPP-02]  
**UI hint**: yes  
**Success Criteria** (what must be TRUE):
  1. User can view the three solution directions and understand their scenarios, scope, and value
  2. User can view the five cooperation brands with contextual explanation instead of logo-only presentation
  3. User can browse service and support capabilities and find a clear catalog/download entry
  4. User can move from solutions or support content into an inquiry path without dead ends
**Plans**: 4 plans

Plans:
- [ ] 04-01: Build solution content structure for industrial automation, software development, and technical integration
- [ ] 04-02: Implement bilingual solution pages and related CTA sections
- [ ] 04-03: Implement brand cooperation page/modules with contextual presentation for partner brands
- [ ] 04-04: Build service and support page with catalog/download request entry

### Phase 5: Inquiry, QA & Launch Readiness
**Goal**: 补齐联系与询盘闭环，验证响应式体验与主题一致性，并形成可上线状态  
**Depends on**: Phase 4  
**Requirements**: [LEAD-01, LEAD-02, LEAD-03, GLOB-04]  
**UI hint**: yes  
**Success Criteria** (what must be TRUE):
  1. User can open a dedicated contact page with a clear inquiry path
  2. User can submit an inquiry form with essential business fields and receive clear feedback
  3. User can find inquiry entry points from homepage, product, solution, and contact pages
  4. User can browse the core pages on desktop and mobile without blocked navigation or broken layouts
  5. User sees consistent light/dark theme behavior across the core pages and chart surfaces
  6. Developers can build and run the launch-ready stack through Docker Compose with stable environment configuration
**Plans**: 4 plans

Plans:
- [ ] 05-01: Build contact page, inquiry form, backend validation, persistence, and submission flow
- [ ] 05-02: Audit and add CTA entry points across homepage, product, solution, and contact pages
- [ ] 05-03: Complete responsive QA, theme consistency checks, and accessibility/performance fixes
- [ ] 05-04: Finalize Docker Compose deployment workflow, launch checklist, and release-ready verification

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Platform Foundation & Theme Shell | 0/3 | Not started | - |
| 2. Brand Story & Corporate Presence | 0/4 | Not started | - |
| 3. Product Center & Taxonomy | 0/4 | Not started | - |
| 4. Solutions, Brands & Support | 0/4 | Not started | - |
| 5. Inquiry, QA & Launch Readiness | 0/4 | Not started | - |
