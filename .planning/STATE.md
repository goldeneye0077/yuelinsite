# Project State

## Project Reference

See: `.planning/PROJECT.md` (updated 2026-03-30)

**Core value:** Help potential customers quickly understand what Yuelin Technology offers, what problems it can solve, and why it is worth contacting.  
**Current focus:** Phase 3 - Product Center & Taxonomy

## Current Position

Phase: 3 of 5 (Product Center & Taxonomy)
Current plan: 03-01 complete
Status: Ready for 03-02
Last activity: 2026-03-31 - Implemented 03-01 with a bilingual product taxonomy model and product-center taxonomy preview

Progress: 8 of 19 plans complete

## Performance Metrics

**Velocity**

- Total plans completed: 8
- Average duration: ~60 minutes
- Total execution time: ~480 minutes

**By Phase**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 3 | ~180m | ~60m |
| 2 | 4 | ~240m | ~60m |
| 3 | 1 | ~60m | ~60m |

**Recent Trend**

- Last completed plans: 02-01, 02-02, 02-03, 02-04, 03-01
- Trend: Stable

## Accumulated Context

### Decisions

- Position the site as a bilingual corporate website focused on brand presentation first, with inquiry capture kept visible.
- Use five top-level product categories plus detailed industrial sensor subcategories from the reference site.
- Fix the stack as React + Vite, FastAPI + PostgreSQL, and Docker Compose.
- Provide light and dark themes from the foundation phase instead of adding them later.
- Keep PostgreSQL internal to Compose for now instead of binding host port `5432`.
- Preserve route orientation during locale switches by swapping only the first route segment.
- Establish backend site bootstrap and inquiry contracts before deeper UI phases.
- Use a Precision Industrial visual direction with restrained chrome, editorial composition, and chart-ready theme tokens.
- Show a cross-locale company signature on brand pages to make bilingual identity feel deliberate instead of bolted on.
- Keep company facts and the Shenzhen address visible on placeholder brand routes until those sections are fully built.
- Keep the five confirmed primary product families even when the reference source groups products differently.
- Treat industrial-sensor subgroup names as reference-synced and mark linear/pneumatic subgrouping as first-pass inferred until the real catalog is available.

### Pending Todos

- Continue with 03-02 to replace the preview with the full product-center landing page and dedicated top-level category pages.

### Blockers/Concerns

- Real product images, exact model lists, and downloadable documents are still placeholders.
- Linear-guide and pneumatic subgrouping is currently inferred and should later be reconciled with the actual catalog.
- English product wording will need a later polish pass before launch.
- `npm audit` still reports 2 critical vulnerabilities in transitive frontend packages and needs a later remediation pass.

## Session Continuity

Last session: 2026-03-31  
Stopped at: 03-01 complete and 03-02 ready
Resume from: `.planning/phases/03-product-center-taxonomy/03-02-PLAN.md`
