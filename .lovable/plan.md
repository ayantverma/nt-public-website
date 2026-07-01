## Goal

Build a redesigned **Northern Trust landing page** as a live, high-fidelity React prototype — visual-heavy, UX-forward, functional, and rooted in NT's brand identity (deep navy, ivory, gold accent, serif + refined sans). This becomes the visual anchor of the proposal deck: "here's what the future northerntrust.com could feel like."

The page will directly address the top gaps from the audit:
- One-size-fits-all homepage → audience-routed hero
- Weak/hidden search → prominent, intelligent search
- No legacy narrative → NT's 135+ year heritage woven in as a signature moment
- Generic corporate feel → editorial, luxury, trust-forward craft

## Design direction

Brand identity (kept, refined — not reinvented):
- **Palette**: Deep navy `#0A1F44`, ivory `#F5F1E8`, muted gold `#B48A3C`, warm charcoal, subtle stone accents
- **Type**: Editorial serif display (e.g. Fraunces / Cormorant) paired with a refined humanist sans (e.g. Inter Tight / Söhne-style)
- **Feel**: Private-bank editorial — closer to Goldman Insights, JPM Private Bank, Hermès Finance than to a SaaS marketing site. Generous whitespace, restrained gold accents, cinematic imagery.

## Landing page structure

1. **Top bar + intelligent search**
   - Slim nav (Wealth · Asset Servicing · Asset Management · Insights · About)
   - Prominent search that expands to an overlay with: recent, suggested topics, categorized results (Insights / Services / People / Tools), keyboard nav
2. **Audience-routed hero**
   - Editorial split layout: serif headline + supporting line + three audience entry cards ("Individuals & Families", "Institutions", "Advisors & Family Offices") that hover-preview tailored content
3. **The Northern Trust Legacy** (signature moment)
   - Horizontal timeline / scroll-driven section: 1889 founding → milestones → today. Archival-feel imagery, gold rule lines, pull quotes. Establishes trust without being stuffy.
4. **Trust-by-numbers strip**
   - AUM, AUC/A, client tenure, global offices, ESG — animated counters, ivory band
5. **Insights hub preview**
   - Magazine-grid: 1 featured long-read + 3 supporting pieces, author bios, topic chips
6. **Interactive wealth tool teaser**
   - "Plan your legacy" / "Find an advisor" — inline mini-form that visibly demonstrates the tool before routing deeper
7. **Global reach map**
   - Understated dotted-line world map, offices highlighted in gold
8. **Awards & recognition** + **Footer**
   - Restrained logo strip, comprehensive editorial footer with sitemap, legal, regions

## Technical approach

- Route: replace `src/routes/index.tsx` placeholder with the new landing page
- Componentize under `src/components/landing/` (Nav, SearchOverlay, Hero, AudienceCards, LegacyTimeline, TrustStats, InsightsGrid, WealthToolTeaser, GlobalMap, Footer)
- Design tokens added to `src/styles.css` (navy/ivory/gold, serif+sans font stack via `<link>` in `__root.tsx`)
- Motion via `framer-motion` (already-common) for scroll reveals, counter animation, search overlay
- Imagery: a small set of generated editorial images (archival portrait, cityscape, family, institutional) via imagegen — no stock-photo look
- SEO: proper title/meta/OG on the route head
- Accessibility: WCAG 2.2 AA — semantic landmarks, focus states, keyboard-navigable search, prefers-reduced-motion respected

## Out of scope (for this pass)

- Auth, real backend, real search index (search is a designed, populated demo)
- Inner pages beyond the landing route
- Mobile-only polish beyond responsive baseline (desktop-first for the pitch; responsive works but is not the hero view)

## Deliverable

A running landing page at `/` in the preview — presentation-ready, screenshottable for the deck, and defensible as "this is the direction."

## One quick check before I build

Want me to also add **one visual design-directions round** (3 rendered hero variants for you to pick from) before I implement the full page, or should I commit to the direction above and build straight through? The direct build is faster; the directions round gives you a visual say on the hero before the rest is wired up.
