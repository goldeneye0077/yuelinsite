# Phase 1: Platform Foundation & Theme Shell - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 establishes the production-minded foundation for the corporate website: the React + Vite frontend, the FastAPI + PostgreSQL backend baseline, the Docker Compose development stack, bilingual route structure, shared global shell, and the light/dark Precision Industrial theme system.

This phase does not deliver the final homepage storytelling, full product center content, real inquiry persistence, or complete trust assets. It creates the engineering and design shell those later phases will build on.

</domain>

<decisions>
## Implementation Decisions

### Architecture baseline
- **D-01:** The stack is fixed to `React + Vite + React Query + React Router + VChart` on the frontend and `Python 3.11 + FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL` on the backend.
- **D-02:** Local development and launch packaging must center on a single root `Docker Compose` workflow that starts frontend, backend, and database together.
- **D-03:** The backend should stay thin in v1. It should provide health checks, typed site-data contracts, and future-ready inquiry boundaries without inventing a heavy CMS or admin layer.

### Locale and navigation model
- **D-04:** v1 must support both Chinese and English from the foundation phase, not as a later retrofit.
- **D-05:** Route structure should be locale-prefixed with the same information architecture on both languages so users can switch language without losing page context.
- **D-06:** The shared shell must already expose the core top-level sections: home, product center, solutions, service/support, about, and contact.

### Visual direction
- **D-07:** The visual direction is locked to `Precision Industrial`: deep navy, steel gray, cool white, and restrained amber accents.
- **D-08:** Light mode should feel like an engineering catalog; dark mode should feel like an industrial control room.
- **D-09:** The shell must avoid a generic SaaS or template-tech look. Large surfaces, line-based separators, sharp hierarchy, and restrained motion are preferred over glowing chrome or card grids.

### Content and placeholder strategy
- **D-10:** Brand presentation is the primary goal; inquiry capture is secondary but must remain structurally visible.
- **D-11:** The site must serve three audience groups from the start: equipment manufacturers, system integrators, and factory-side buyers.
- **D-12:** Only the company name, address, logo, and high-level business scope are confirmed assets right now. Contact phone, email, certifications, authorization images, and product imagery should be introduced as clearly labeled placeholders.

### Phase-specific scope guardrails
- **D-13:** This phase should establish route shells and typed content loading conventions, but not spend effort on the complete copy deck for later pages.
- **D-14:** This phase should establish the inquiry API contract, but real validation, persistence, and submission UX belong to Phase 5.
- **D-15:** VChart should be theme-ready in Phase 1, but charts themselves should remain minimal until solution storytelling in later phases.

### the agent's Discretion
- Choose the exact frontend file layout as long as it keeps routing, theming, and content boundaries easy to extend.
- Choose the exact Python packaging layout as long as Alembic, FastAPI config, and tests remain straightforward.
- Choose the exact implementation details for mobile navigation, theme persistence, and placeholder pages as long as they follow the visual direction above.

</decisions>

<specifics>
## Specific Ideas

- Company name: `Shenzhen Yuelin Technology Co., Ltd.` / `深圳市跃鳞科技有限公司`
- Confirmed address: `深圳市南山区粤海街道科技园社区科苑路 8 号讯美科技广场 3 号楼`
- Logo direction: dynamic blue upward mark with a modern industrial feel; the shell should reinforce professionalism, reliability, and international-facing presentation.
- Future top-level product categories are already fixed for later phases:
  - Industrial sensors
  - Safety protection sensors
  - Laser ranging sensors
  - Linear guides and modules
  - Pneumatic components
- The reference taxonomy source for industrial sensor subcategories is `https://www.hyfcn.com/product.html`.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project scope
- `.planning/PROJECT.md` - The product definition, fixed constraints, audience, and business direction.
- `.planning/REQUIREMENTS.md` - Requirement IDs and v1 scope, especially `GLOB-01`, `GLOB-02`, `GLOB-03`, and `GLOB-05`.
- `.planning/ROADMAP.md` - The Phase 1 goal, success criteria, and plan breakdown.
- `.planning/STATE.md` - Current project position and planning status.

### Architecture and stack
- `.planning/research/STACK.md` - Locked stack choices and the rationale for the selected technologies.
- `.planning/research/ARCHITECTURE.md` - High-level system direction for frontend, backend, and deployment boundaries.
- `.planning/research/SUMMARY.md` - Consolidated project research notes that planning should stay aligned with.

### Collaboration rules
- `AGENTS.md` - Project-specific working rules, current phase, and UI guardrails.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet. This repository does not contain an existing application shell that Phase 1 can extend.

### Established Patterns
- Planning artifacts already establish the target stack, bilingual requirement, and Precision Industrial art direction.

### Integration Points
- Phase 1 creates the first real integration boundary between frontend routing/content, backend API contracts, and Docker Compose orchestration.

</code_context>

<deferred>
## Deferred Ideas

- Final homepage storytelling and high-fidelity brand sections - Phase 2
- Product center taxonomy, category pages, and product cards - Phase 3
- Solution pages, partner brand storytelling, and support content - Phase 4
- Real inquiry persistence, contact flows, and responsive launch QA - Phase 5
- Real certificates, authorization imagery, product photography, and polished English copy - later content pass

</deferred>

---

*Phase: 01-platform-foundation-theme-shell*
*Context gathered: 2026-03-30*
