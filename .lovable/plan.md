
## Goal

Add a new **Wealth Management** route at `/wealth-management` that carries the same brand system, typography, spacing, and accessibility posture as the redesigned homepage — but is built as a *dedicated service page* benchmarked against the best-in-class private-bank / wealth pages (JPM Private Bank, Goldman Family Office, Bessemer, Bernstein, UBS Wealth) and directly addressing the gaps we found on the current NT `/what-we-do/wealth-management` page.

## What's wrong with the current NT page (quick audit)

- Generic "hero image + paragraph + tile grid" — no audience segmentation, no depth of proof.
- Weak information scent: no jump-to TOC, no clear service taxonomy, deep content buried 2–3 clicks down.
- No interactive tools (net-worth banding, "find your advisor", scenario planner).
- Insights are decoupled from the service context.
- Sparse proof: no case narratives, no tenure/AUM callouts in-context, no team faces.
- Accessibility: low-contrast greys on white, icon-only links, missing landmarks, weak focus states.

## Competitive structure standard (what the top pages do)

1. Editorial hero with a single clear promise + audience chooser
2. Sticky **table of contents / section rail** (jump-to)
3. "Who we serve" segmentation (UHNW families, executives, business owners, next-gen, foundations)
4. Service pillars, each with proof and a link deeper
5. **Your relationship team** module — the advisor, the specialists behind them
6. Planning philosophy / process (numbered steps, not paragraphs)
7. Interactive tool (net-worth range → tailored view or "connect me")
8. Case narratives / client stories (anonymized)
9. Insights curated to wealth
10. Trust strip (AUM, tenure, awards) contextual to wealth, not corporate
11. FAQ (schema.org markup for SEO)
12. Deep CTA — talk to an advisor, with a real form preview

## Page structure to build

```
/wealth-management
├─ TopBar (shared)
├─ Hero — "Wealth, stewarded." editorial banner + audience chip row
├─ Sticky Section Rail (TOC) — anchors to each section, active-state on scroll
├─ § Who we serve — 5 audience cards (Families, Executives, Business Owners, Next Gen, Foundations)
├─ § What we do — 6 service pillars (Investment Mgmt, Trust & Estate, Family Office, Banking &
│   Credit, Philanthropy, Business Owner Transitions) — each with 3 sub-capabilities + link
├─ § How we work — 4-step planning process (Listen · Design · Steward · Evolve)
├─ § Your team — advisor + specialist bench illustration, tenure stat
├─ § Wealth Compass (interactive) — investable-range slider + goal chips → tailored summary card
├─ § Client narratives — 3 anonymized case cards (situation / approach / outcome)
├─ § Insights for wealth — 1 featured + 3 supporting, filtered chips
├─ § Proof — AUM under wealth, avg client tenure, multi-gen families served, awards
├─ § FAQ — 6 Q&A, accordion, JSON-LD FAQPage
├─ § Talk to an advisor — inline lead form preview (name, region, investable range, message)
└─ Footer (shared)
```

## Brand & visual system

- Reuse the exact tokens from `src/styles.css` (NT Green `#14523A`, Deep Forest `#0A2E20`, CTA `#0A3B28`, Ivory, Mist, Stone, Charcoal, Arial stack). No new colors or fonts.
- Match homepage rhythm: full-bleed hero with green gradient overlay, ivory section bands alternating with deep-forest bands, generous vertical spacing (`py-24`), same eyebrow / rule-line / caps tracking treatment.
- Imagery: 4–6 editorial images generated via imagegen (family multigenerational portrait, executive at desk, business owner on factory floor, philanthropy scene, coastal home / legacy, advisor conversation). Green-toned duotone treatment for cohesion.
- Icons: Lucide, stroke 1.5, same style as homepage stats.

## UX & accessibility (WCAG 2.2 AA, addressing our audit)

- Semantic landmarks: one `<main>`, `<nav aria-label="On this page">` for TOC, `<section aria-labelledby>` per block.
- Skip-to-content link.
- Sticky TOC has visible focus, keyboard arrow-key nav, `aria-current="location"` on active section (IntersectionObserver).
- All CTAs are real `<button>` / `<a>` with `min-h-11` (44px), visible focus ring, no gold, contrast ≥ 4.5:1 (verified with same method used on homepage).
- Accordion FAQ uses the shadcn Radix accordion (already in project) for correct ARIA.
- Slider has `aria-label`, `aria-valuetext`, keyboard support.
- Form inputs have visible labels (never placeholder-as-label), error text linked via `aria-describedby`.
- `prefers-reduced-motion` respected on all scroll/fade animations.
- Images: meaningful `alt`, decorative use `alt=""`.
- Heading order strictly h1 → h2 → h3, no skips.

## Uniformity with homepage

- Same `TopBar` (imported / shared), same `Footer`, same smart search dropdown.
- Same section eyebrow style ("§ Ledger" / caps / rule line) and same button component.
- Same container widths and grid rhythm so the two pages feel like one publication.

## Technical approach

- New route file `src/routes/wealth-management.tsx` (flat naming; TanStack Start file-based routing).
- Route-specific `head()` with unique `title` / `description` / `og:title` / `og:description` and FAQPage JSON-LD.
- Extract `TopBar`, `Footer`, and `SmartSearchField` from `src/routes/index.tsx` into `src/components/landing/` so both pages share them (small refactor, no visual change to homepage).
- New components under `src/components/wealth/`: `WealthHero`, `SectionRail`, `AudienceGrid`, `ServicePillars`, `ProcessSteps`, `TeamModule`, `WealthCompass`, `CaseNarratives`, `WealthInsights`, `ProofStrip`, `WealthFAQ`, `AdvisorContact`.
- IntersectionObserver hook for TOC active state.
- Add link to Wealth Management in the homepage top-nav so navigation works end-to-end.
- Images generated with imagegen into `src/assets/wealth/` (jpg, green-toned).

## Out of scope for this pass

- Real form submission backend (form is a designed preview, no Cloud yet).
- Sub-pages behind each service pillar (links stub to `#`).
- Localization / region switcher beyond what the homepage already shows.

## Deliverable

A production-quality `/wealth-management` route, linked from the homepage nav, brand-uniform, WCAG 2.2 AA verified, screenshot-ready for the NT proposal deck.
