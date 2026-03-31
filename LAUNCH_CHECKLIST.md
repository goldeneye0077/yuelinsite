# Launch Checklist

## 1. Content And Asset Readiness

- Replace placeholder product images with the real catalog visuals.
- Replace placeholder authorization, qualification, and delivery-proof blocks with actual files.
- Confirm the final company phone number, email address, and contact recipient.
- Review English copy once more before public launch.

## 2. Environment Setup

- Copy `.env.example` to `.env` when local overrides are needed.
- Keep `VITE_API_BASE_URL` aligned with the exposed backend port.
- Keep `CORS_ORIGINS` aligned with the exposed frontend origin and preserve JSON-array format.
- Start the stack with `docker compose up --build -d`.

## 3. Automated Verification

- Run `docker compose config`.
- Run `npm --prefix frontend run typecheck`.
- Run `npm --prefix frontend run lint`.
- Run `npm --prefix frontend run test -- --run`.
- Run `npm --prefix frontend run build`.
- Run `npm --prefix frontend audit --omit=dev`.
- Run `pytest -q backend`.

## 4. Manual Smoke Test

- Open `/zh` and `/en`, then confirm the locale switch preserves the current route.
- Check homepage, product center, solutions, support, about, and contact on desktop and mobile widths.
- Toggle light and dark themes and refresh once to confirm the theme persists.
- Open the mobile drawer and verify all primary routes remain reachable.
- Submit one contact form inquiry and confirm success feedback appears.
- Verify the new inquiry row exists in PostgreSQL:

```sql
select id, company_name, contact_name, interest_category, source_page
from inquiries
order by id desc
limit 5;
```

## 5. Handoff Notes

- The site is launch-ready as a branded v1 corporate website with a working inquiry pipeline.
- Real catalog assets, brand authorization graphics, and downloadable files are still content follow-up items, not platform blockers.
