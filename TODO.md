# Tarot App TODO

## P0 Core Features

- [ ] **Guidebook data model (mock → structured source)**
  - Define a canonical schema for card meanings (upright/reversed), keywords, archetypes, and spread-position nuances.
  - Move hardcoded meaning snippets from page-level code into a shared guidebook module.
  - Add deck-aware lookup so meanings can vary by selected deck while preserving mock fallback text.

- [ ] **Guidebook service layer**
  - Add a server-safe guidebook accessor API (e.g., `lib/guidebook.ts`) to keep route/page code clean.
  - Validate all drawn cards against guidebook data and return deterministic fallback when missing.

- [ ] **Collectible reading report domain model**
  - Formalize a `ReadingReport` object that includes spread, deck, question, cards, interpretations, and timestamp.
  - Version report payloads so future schema changes do not break existing links.

- [ ] **Result route hardening**
  - Add safer parsing/validation for `report` query payloads (type guards + bounds checks).
  - Handle malformed/oversized payloads with user-friendly fallback UI.

- [ ] **Routing/data flow stabilization**
  - Keep all spread/deck metadata server-safe (`lib/*`) and all interactive logic client-only (`components/*`).
  - Add regression checks for `/draw/one-card`, `/draw/three-card`, `/draw/celtic-cross`, and `/reading/result`.

## P1 UX Improvements

- [ ] **Deck and spread selection UX**
  - Add explicit two-step flow indicator: (1) choose deck, (2) choose spread.
  - Provide “selected deck” sticky summary when entering draw screens.

- [ ] **Collectible report UX**
  - Add report metadata panel (date/time, deck version, spread layout summary).
  - Add “copy share link” and “start similar reading” CTAs.

- [ ] **Mobile UX pass (high priority)**
  - Optimize card layout and spacing for small screens (especially 3-card and 10-card displays).
  - Improve tap targets for draw/continue actions and prevent accidental double-draw.
  - Ensure text blocks on result page remain readable without horizontal overflow.

- [ ] **Question input UX**
  - Add optional prompts/examples to help users phrase better questions.
  - Persist draft question while navigating between deck/spread selection steps.

## P2 Visual Polish

- [ ] **Spread-specific card layouts**
  - Replace generic grid with canonical visual arrangements:
    - One-card: centered spotlight card
    - Three-card: horizontal timeline
    - Celtic Cross: cross + staff layout

- [ ] **Card reveal interaction polish**
  - Add staged reveal/flip animation and subtle orientation indicators.
  - Improve empty/drawn states with progressive feedback.

- [ ] **Deck identity visuals**
  - Add deck badges, theme accents, and lightweight artwork placeholders.
  - Differentiate deck styling without coupling styles to logic.

## Future Ideas

- [ ] **PDF guidebook integration**
  - Ingest deck guidebook PDFs and map extracted meanings to card ids.
  - Build import pipeline with extraction review UI and conflict resolution.

- [ ] **AI interpretation architecture (no production AI yet)**
  - Define provider-agnostic interpretation interface (`generateInterpretation(report, guidebookContext)`).
  - Compose prompt/context from spread position + deck guidebook + user question.
  - Add mock adapter now, real LLM adapter later behind feature flags.

- [ ] **Saved readings and collection**
  - Add local history first, then optional cloud sync.
  - Let users bookmark favorite readings as “collectibles”.

- [ ] **Shareable collectible artifacts**
  - Generate image/poster-style exports of a reading.
  - Add optional printable format and social sharing metadata.

## Bugs / Technical Debt

- [ ] **Type safety hardening**
  - Replace broad casts in route params parsing with typed helpers.
  - Add runtime validation utilities for query/search payloads.

- [ ] **Testing coverage gaps**
  - Add unit tests for spread/deck lookup and draw randomization constraints.
  - Add integration tests for draw→result flow with deck query params.

- [ ] **Manifest-boundary regression guard**
  - Add lint/documentation rule: do not import named exports from client modules into server routes.
  - Document server/client boundary patterns in project README.

- [ ] **Performance and payload size**
  - Reduce serialized report query payload size; move toward compact IDs + server reconstruction.
  - Consider route-safe encoding utilities and payload length guardrails.

- [ ] **tsconfig/path alias cleanup follow-up**
  - Verify all aliases map to real folders and remove unused aliases.
  - Keep `tsconfig.json` minimal, valid, and aligned with Next.js defaults.
