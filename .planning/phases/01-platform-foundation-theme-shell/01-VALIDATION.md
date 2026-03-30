---
phase: 1
slug: platform-foundation-theme-shell
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-30
---

# Phase 1 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `Vitest` for frontend and `pytest` for backend |
| **Config file** | `frontend/vitest.config.ts` and `backend/pyproject.toml` |
| **Quick run command** | `docker compose run --rm frontend npm run test -- --run && docker compose run --rm backend pytest -q` |
| **Full suite command** | `docker compose run --rm frontend npm run build && docker compose run --rm frontend npm run test -- --run && docker compose run --rm backend pytest -q` |
| **Estimated runtime** | ~120 seconds |

---

## Sampling Rate

- **After every task commit:** Run `docker compose run --rm frontend npm run test -- --run && docker compose run --rm backend pytest -q`
- **After every plan wave:** Run `docker compose run --rm frontend npm run build && docker compose run --rm frontend npm run test -- --run && docker compose run --rm backend pytest -q`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | GLOB-01 | build/smoke | `docker compose config` | W0 | pending |
| 01-01-02 | 01 | 1 | GLOB-01 | integration smoke | `docker compose run --rm backend pytest -q` | W0 | pending |
| 01-01-03 | 01 | 1 | GLOB-05 | unit/smoke | `docker compose run --rm frontend npm run test -- --run` | W0 | pending |
| 01-02-01 | 02 | 2 | GLOB-01 | unit | `docker compose run --rm frontend npm run test -- --run` | yes | pending |
| 01-02-02 | 02 | 2 | GLOB-02 | unit | `docker compose run --rm frontend npm run test -- --run` | yes | pending |
| 01-02-03 | 02 | 2 | GLOB-01 | api/schema | `docker compose run --rm backend pytest -q` | yes | pending |
| 01-03-01 | 03 | 3 | GLOB-05 | unit | `docker compose run --rm frontend npm run test -- --run` | yes | pending |
| 01-03-02 | 03 | 3 | GLOB-03 | unit/manual | `docker compose run --rm frontend npm run test -- --run` | yes | pending |
| 01-03-03 | 03 | 3 | GLOB-03 | build/manual | `docker compose run --rm frontend npm run build` | yes | pending |

*Status: pending / green / red / flaky*

---

## Wave 0 Requirements

- [ ] `frontend/package.json` - add `build`, `dev`, and `test` scripts
- [ ] `frontend/vitest.config.ts` - frontend unit test configuration
- [ ] `backend/pyproject.toml` - Python dependencies plus `pytest`
- [ ] `backend/tests/conftest.py` - shared backend fixtures
- [ ] `backend/tests/test_health.py` - first smoke test

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Light and dark shells feel readable and intentional | GLOB-05 | Visual quality and contrast judgment | Run the shell, toggle themes, and inspect header, footer, placeholder sections, and chart-ready surfaces |
| Language switch preserves orientation | GLOB-02 | Best confirmed through actual navigation flow | Open the same route under `zh`, switch to `en`, and verify the section context stays the same |
| Mobile nav remains usable | GLOB-03 | Breakpoint behavior is easier to judge visually | Resize to mobile width and confirm navigation, theme toggle, and locale switch remain reachable |

---

## Validation Sign-Off

- [x] All tasks have automated verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all missing references
- [x] No watch-mode flags
- [x] Feedback latency < 120s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-03-30
