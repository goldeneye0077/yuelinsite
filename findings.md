# Findings & Decisions

## Requirements
- The user expects persistent context across long UI/copy refinement sessions.
- The user explicitly wants `planning-with-files` to remain in use for continuity.
- The site is already production-deployed, so every page refinement should be treated as a live change.
- Recent tasks focus on making copy read more like a formal enterprise website and less like explanatory documentation.
- The current request is specifically about the English tone on product family and product group detail pages.

## Research Findings
- The repo already contains long-term GSD planning in `.planning/`, but that does not automatically act as session memory for rapid iterative page polishing.
- The `planning-with-files` skill expects `task_plan.md`, `findings.md`, and `progress.md` in the project root.
- The current workflow benefits from an additional lightweight memory layer because the user is issuing many sequential live-edit requests.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Create root-level planning files now instead of waiting for the next task | Fixes the current gap immediately and prevents another context-only run |
| Record both local verification and live deployment state in progress.md | The project is deployed continuously, so local-only logs are not sufficient |
| Keep copy-shortening logic in shared page-level maps when possible | Makes later tone adjustments faster and more consistent across product pages |
| Keep English product-detail tone in the shared compact copy map | Lets family and group pages stay consistent without duplicating revised copy |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Iterative turns drifted away from file-based memory | Re-established file-based planning in project root |
| Some older files contained garbled Chinese literals | Replaced affected page/test files with clean UTF-8 content during recent edits |
| Product/detail copy was duplicated in multiple page layers | Introduced shared compact copy helpers for product families and groups |

## Resources
- Project roadmap artifacts: `E:\跃麟科技\official-site\.planning\`
- Active session memory files: `E:\跃麟科技\official-site\task_plan.md`, `E:\跃麟科技\official-site\findings.md`, `E:\跃麟科技\official-site\progress.md`
- Live frontend: `http://89.144.47.236:25173`
- Live backend health: `http://89.144.47.236:28000/api/ready`
- Deployment target: `root@89.144.47.236:/root/yuelinsite`

## Visual/Browser Findings
- Solutions, support, and contact pages already had below-the-fold copy compressed and redeployed before this file was created.
- Homepage and product center were also compressed in a later pass and deployed at commit `5bf0457`.
- Product family and product group detail pages were compressed again and deployed at commit `3c54787`.
- English product detail copy still reads more like utility copy than polished enterprise-site language in some sections.
- English product detail pages now use more formal phrases such as `Subgroup Map`, `Other Product Families`, and `Review the featured series first, then move into inquiry when the direction is clear.` in code and tests.
- Live spot checks confirmed the shorter copy is visible on:
  - `/zh/products/industrial-sensors`
  - `/zh/products/industrial-sensors/fiber-sensors`
  - `/zh/products/pneumatic-components/cylinders`

---
*Update this file after every 2 view/browser/search operations*
*This prevents visual information from being lost*
