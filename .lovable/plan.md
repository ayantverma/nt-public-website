&nbsp;

## 3. Competitor set (per your selection)

- **Direct US peers:** BNY Mellon, State Street, JPMorgan Private Bank, Goldman Sachs Private Wealth
- **Global private banks:** UBS, Morgan Stanley Wealth Management, Citi Private Bank
- **Modern fintech challengers (UX inspiration only):** Addepar, Betterment Premium, Wealthfront, Altruist

Comparison matrix dimensions:

- Information architecture & audience segmentation (HNW vs institutional split)
- Homepage hierarchy & hero strategy (value prop clarity)
- Navigation pattern (mega-menu depth, search, login placement)
- Insights/Thought-leadership surfacing
- Personalization & client portal entry points
- Visual design language (typography, color, imagery, motion)
- Trust signals (AUM, awards, ESG, regulatory)
- Accessibility posture (spot-check contrast + keyboard)
- Performance (LCP, CLS via Playwright)
- Mobile experience
- SEO footprint (Semrush traffic, top pages, keyword gaps)

## 4. Report structure

1. **Executive Summary** — top 5 wins, top 5 gaps, strategic positioning vs peers
2. **Heuristic Evaluation** — 10 heuristics × scored findings, with screenshots
3. **WCAG 2.2 Accessibility Audit** — automated + manual findings, prioritized
4. **Competitor Analysis**
  - Per-competitor mini teardown (1 page each, 11 competitors)
  - Cross-competitor comparison matrix
  - Best-in-class patterns NT should adopt
5. **SEO & Visibility Benchmark** — Semrush data, gap keywords, content opportunities
6. **Feature Gap Analysis** — features competitors offer that NT lacks (client portal UX, interactive tools, calculators, personalization, AI/chat, ESG dashboards, etc.)
7. **Facelift Recommendations** — prioritized roadmap (Quick wins / 0–3mo / 3–6mo / 6–12mo), each tied back to a finding
8. **Appendix** — methodology, tool list, raw screenshots index

## Technical Details

- Save artifacts to `/mnt/documents/nt-audit/`: `report.md`, `screenshots/`, `axe-results.json`, `semrush/*.json`
- Use Playwright (headless Chromium, viewport 1280×1800 desktop + 390×844 mobile) for screenshots, axe-core injection, and basic perf timings
- Semrush calls limited to `us` database; competitor SEO limited to organic snapshots (no paid)
- Report length target: ~25–40 pages of Markdown, render-ready (could be PDF-exported later)
- No code added to the Lovable project; this is research output only

## Out of scope

- Building a redesigned site or prototype
- User research / interviews / analytics from NT's own systems
- Paid-media, security pen-testing, or back-office systems
- Full WCAG conformance audit (this is a heuristic-level a11y spot-check, not a certification)

Approve and I'll execute end-to-end and deliver the report.