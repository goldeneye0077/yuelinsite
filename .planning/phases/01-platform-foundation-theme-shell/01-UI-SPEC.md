---
phase: 1
slug: platform-foundation-theme-shell
status: draft
shadcn_initialized: false
preset: none
created: 2026-03-30
---

# Phase 1 - UI Design Contract

> Visual and interaction contract for frontend phases. Generated for the Phase 1 shell and foundation work.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none |
| Icon library | `lucide-react` |
| Font | `IBM Plex Sans`, `IBM Plex Sans Condensed`, `Noto Sans SC`, `sans-serif` |

---

## Spacing Scale

Declared values (must be multiples of 4):

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, inline padding, micro labels |
| sm | 8px | Compact controls, close text stacks |
| md | 16px | Default content spacing |
| lg | 24px | Cardless section interiors, nav spacing |
| xl | 40px | Layout gaps, group separation |
| 2xl | 64px | Major section spacing |
| 3xl | 96px | Homepage band separation, display breathing room |

Exceptions: none

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px | 400 | 1.6 |
| Label | 13px | 500 | 1.35 |
| Heading | 30px | 600 | 1.2 |
| Display | 56px | 600 | 1.05 |

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | `#F4F7FA / #07111B` | Page background, large surfaces, shell base |
| Secondary (30%) | `#D9E2EA / #112232` | Panels, separators, elevated shell surfaces |
| Accent (10%) | `#D8892B` | Primary CTA, active nav marker, key emphasis strokes |
| Destructive | `#C94B4B` | Destructive actions only |

Accent reserved for: primary CTA buttons, active navigation state, key metric emphasis, focus ring highlight, and chart accent strokes. Never use accent for full-page fills, long body text, or large decorative glows.

---

## Theme Tokens

| Token Role | Light | Dark |
|------------|-------|------|
| Background | `#F4F7FA` | `#07111B` |
| Surface | `#FFFFFF` | `#0E1B29` |
| Elevated Surface | `#E8EEF3` | `#14283A` |
| Border | `#C3D0DA` | `#2C455A` |
| Text Primary | `#112132` | `#F3F7FB` |
| Text Secondary | `#526679` | `#A8B9C8` |
| Link / Interactive | `#0D4D7A` | `#56B0E8` |
| Chart Neutral | `#6B7E90` | `#7F97AB` |
| Chart Highlight | `#D8892B` | `#F0A94B` |

---

## Composition Rules

- The first screen should read like a poster, not a dashboard or a card wall.
- Navigation chrome should stay lean. Use space, lines, and type hierarchy before using boxes.
- Dark mode should feel like a control room, but not glossy or neon.
- Light mode should feel technical and trustworthy, closer to an engineering catalog than a marketing brochure.
- Use motion only for entry, menu reveal, or theme transition. Do not add decorative looping motion.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary CTA | `Request Consultation / 获取咨询` |
| Empty state heading | `Materials are being prepared / 资料整理中` |
| Empty state body | `Share your product model or project scenario and we will match the right catalog or technical path.` |
| Error state | `This section could not load. Refresh once, or contact us directly for a manual response.` |
| Destructive confirmation | `Remove draft: this only clears local placeholder content.` |

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| none | none | not required |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-03-30
