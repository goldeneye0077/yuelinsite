# Phase 3 Validation Targets

## Requirements In Scope

- `PROD-01`: Users can browse the five top-level product categories
- `PROD-02`: Users can browse industrial sensor subcategories based on the reference taxonomy

## Validation Approach

- Taxonomy unit tests confirm there are five aligned top-level families in both locales
- Route-level product-center rendering confirms the current `/products` route surfaces both the top-level families and the industrial-sensor subgroup preview
- Build verification confirms the new taxonomy model and product preview compile cleanly

## Out Of Scope For 03-01

- Dedicated category pages
- Product listing templates
- Product cards, detail modules, or inquiry-specific product CTAs
