# Phase 1 Plan 02 Summary

**Implemented the bilingual route layer and the first formal site/inquiry API contracts, so the Phase 1 shell now has mirrored Chinese and English paths plus typed frontend/backend boundaries.**

## Performance

- **Duration:** ~55 minutes
- **Tasks:** 3 completed
- **Files modified:** 18+

## Accomplishments

- Added locale-prefixed routing with a default redirect to `/zh`, mirrored core section routes, and route-level tests for both `zh` and `en`.
- Introduced typed bilingual content modules and locale helpers that preserve route structure while switching only the locale segment.
- Added backend bootstrap and inquiry contract endpoints with Pydantic schemas, frontend API client types, and backend tests covering both the Chinese and English bootstrap variants plus the Phase 5 inquiry placeholder response.

## Verification

- `npm run typecheck` in `frontend/` passed
- `npm run lint` in `frontend/` passed
- `npm run test -- --run` in `frontend/` passed
- `npm run build` in `frontend/` passed
- `docker compose config` passed
- `docker compose run --rm frontend npm run test -- --run` passed
- `docker compose run --rm backend pytest -q` passed

## Files Created/Modified

- `frontend/src/app/router.tsx` - locale-prefixed router factory and exported browser router
- `frontend/src/app/RoutePage.tsx` - route-driven bilingual placeholder page
- `frontend/src/i18n/locales.ts` - supported locale model, path builders, and locale-switch helper
- `frontend/src/content/site/` - mirrored `zh` and `en` site content modules with typed content shape
- `frontend/src/lib/api/site-client.ts` - typed frontend client for bootstrap and inquiry contracts
- `backend/app/api/routes/site.py` - shell bootstrap endpoint
- `backend/app/api/routes/inquiries.py` - contract-first inquiry endpoint returning a Phase 5 placeholder
- `backend/app/schemas/` - typed backend request/response models
- `backend/tests/test_site_contract.py` - backend contract verification

## Decisions & Deviations

- Kept the visible route pages intentionally lightweight and placeholder-driven because the shared header/footer/theme shell still belongs to `01-03`.
- Used ASCII `\u` escapes in backend Chinese strings to avoid Windows terminal encoding corruption during Python-side contract work.
- Added `email-validator` to backend dependencies because `EmailStr` in the inquiry contract requires it at runtime.

## Risks

- The route pages already render bilingual content, but they still use a temporary presentation layer; `01-03` will replace this with the real shared shell and theme system.
- The frontend bundle grew to roughly 319 kB minified JS after routing and VChart dependencies. That is acceptable for foundation work, but worth watching as more content lands.

## Next Phase Readiness

- `01-03` can now attach theme switching, shared header/footer, and mobile navigation to a stable locale route structure.
- The backend already exposes the contract shape that later frontend shell and inquiry flows can consume without redesigning endpoints.

