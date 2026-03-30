# Phase 1: Platform Foundation & Theme Shell - Research

**Date:** 2026-03-30
**Status:** Ready for planning

## Research Question

What implementation approach gives Phase 1 a stable bilingual shell, a clean Docker Compose developer experience, and a durable Precision Industrial theme system without overbuilding the backend?

## Recommended Baseline

### Repository shape

Use a simple monorepo layout rooted at the repository:

- `frontend/` - React + Vite + TypeScript app
- `backend/` - FastAPI app, Alembic config, SQLAlchemy models, tests
- `compose.yaml` - orchestration for frontend, backend, and PostgreSQL
- `.env.example` - shared environment contract
- `README.md` - local start, build, and verification commands

This keeps Phase 1 understandable and avoids framework nesting that would add overhead before the site content exists.

### Frontend conventions

- Use TypeScript from the start.
- Use `createBrowserRouter` with a locale-prefixed route tree rooted at `/:locale`.
- Keep route slugs stable across languages. The content changes with locale; the route keys do not.
- Use React Query provider setup now, even if most Phase 1 data is still typed placeholder content.
- Use plain CSS variables plus component-scoped styles rather than a utility-first CSS framework. This better suits the custom industrial art direction and reduces theme drift.
- Keep a typed `SiteContent` model with separate `zh` and `en` dictionaries under `frontend/src/content/`.

### Backend conventions

- Use FastAPI with a small app package under `backend/app/`.
- Use synchronous SQLAlchemy 2 with `psycopg` for simplicity. This site does not need async database complexity in Phase 1.
- Place configuration in a Pydantic settings module so Docker Compose and future deployment share the same contract.
- Expose:
  - `GET /api/health` for container liveness
  - `GET /api/ready` for dependency-aware readiness
  - `GET /api/v1/site/bootstrap?locale=zh|en` for shell-level company/navigation data
  - `POST /api/v1/inquiries` as a contract-first endpoint that can intentionally return `501 Not Implemented` until Phase 5 persistence is built
- Add Alembic now so Phase 5 inquiry persistence can land on an existing migration path instead of retrofitting the backend later.

### Docker Compose baseline

Use three services with predictable names:

- `frontend`
- `backend`
- `db`

Recommended contract:

- PostgreSQL database name: `yuelin_site`
- PostgreSQL user: `yuelin`
- PostgreSQL password: `yuelin_dev`
- SQLAlchemy URL: `postgresql+psycopg://yuelin:yuelin_dev@db:5432/yuelin_site`

Add a Postgres healthcheck and gate backend startup on database health. The frontend should still be independently runnable through Compose and bind Vite to `0.0.0.0`.

## Locale and Content Strategy

### Route strategy

Use these shell routes in Phase 1:

- `/zh`
- `/zh/products`
- `/zh/solutions`
- `/zh/support`
- `/zh/about`
- `/zh/contact`
- `/en`
- `/en/products`
- `/en/solutions`
- `/en/support`
- `/en/about`
- `/en/contact`

The language switch should preserve the route key by swapping only the locale segment. This gives a direct and predictable orientation model.

### Content loading strategy

Phase 1 should not introduce a CMS. Use typed frontend locale files for route titles, placeholder headings, navigation labels, and footer content. Pair that with a backend bootstrap contract for company metadata and future service-backed content.

This hybrid approach is the right compromise:

- The frontend can ship immediately with fast local iteration.
- The backend still defines the future API surface instead of being bolted on later.
- Later phases can move more fields from static dictionaries to the API without rewriting the shell architecture.

## Theme and Visual Foundation

### Theme system

Use CSS custom properties keyed by `data-theme="light"` and `data-theme="dark"` on the root element.

Recommended token groups:

- Surface: background, panel, elevated panel, border
- Text: primary, secondary, muted, inverse
- Interactive: primary button, hover, focus ring, link, accent
- Data: chart surface, chart axis, highlight stroke

Persist the theme preference with `localStorage` key `yuelin-theme`. Respect `prefers-color-scheme` when there is no stored preference.

### Precision Industrial UI rules

- Favor broad horizontal sections over nested card collections.
- Use line separators, restrained borders, and clear grid rhythm.
- Keep animation minimal: fade, translate, or reveal only where it reinforces hierarchy.
- Keep accent amber sparse. It should mark action or emphasis, not paint whole sections.

### VChart readiness

Even though charts are not a Phase 1 feature, create a small adapter that exports light and dark chart tokens so later solution pages can stay on-brand without inventing a second color system.

## Validation Architecture

Phase 1 should set up validation that matches the future delivery shape, not only the current shell.

### Frontend

- Framework: `Vitest` + `@testing-library/react`
- Coverage target for this phase: route resolution, locale switching behavior, theme toggle persistence, and shell rendering smoke tests
- Non-goal: end-to-end browser automation in this phase

### Backend

- Framework: `pytest`
- Coverage target for this phase: health endpoints, bootstrap schema serialization, inquiry contract shape, and config loading smoke tests

### Command model

- Quick feedback:
  - `docker compose run --rm frontend npm run test -- --run`
  - `docker compose run --rm backend pytest -q`
- Full phase feedback:
  - `docker compose run --rm frontend npm run build`
  - `docker compose run --rm frontend npm run test -- --run`
  - `docker compose run --rm backend pytest -q`

### Manual verification still needed

- Confirm the shell does not feel template-like in either theme
- Confirm the language switch preserves page orientation
- Confirm mobile navigation and theme contrast remain readable

## Risks and Guardrails

### Risk: overbuilding the backend too early

Guardrail: keep backend responsibilities to health, schemas, bootstrap data, and migration readiness. Do not add admin/auth/CMS work.

### Risk: bilingual routing drift

Guardrail: keep identical route keys under `zh` and `en`; only content changes with locale.

### Risk: theme inconsistency across shell and chart surfaces

Guardrail: define a single token source and adapt VChart from those tokens instead of picking separate chart colors ad hoc.

### Risk: placeholder content becoming permanent clutter

Guardrail: isolate placeholder text into typed content modules and label reserved trust/material areas clearly.

## Planning Implications

The strongest Phase 1 sequencing is:

1. Scaffold the repo, app runtimes, Compose stack, and smoke tests.
2. Establish locale routing, typed content conventions, and backend API contracts.
3. Build the shared shell, theme system, and visual baseline on top of those contracts.

This reduces rework and keeps file ownership clean between plans.

---

*Phase: 01-platform-foundation-theme-shell*
*Research completed: 2026-03-30*
