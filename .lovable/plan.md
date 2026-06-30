## Goal

Produce a client-ready proposal deliverable that identifies **5 distinguished design improvement factors** for northerntrust.com, framed for presentation to the Northern Trust team.

This builds on the existing audit at `/mnt/documents/nt-audit/report.md` but reframes it as a **focused, persuasive pitch** — not another exhaustive audit.

## The 5 proposed design factors

Each factor will be a "pillar" — distinct, defensible, and visibly different from what NT does today. Draft pillars (final wording tuned in the deliverable):

1. **Audience-First Entry Architecture** — replace the one-size homepage with HNW / Institutional / Asset Servicing routed experiences (peer benchmark: JPM Private Bank, UBS).
2. **A Unified, Modern Visual System** — single design language across `northerntrust.com`, asset management, and wealth subdomains; modernized typography, restrained luxury palette, consistent component library.
3. **Interactive Wealth Tools as Hero Moments** — calculators, scenario planners, "Find an Advisor," portfolio previews on public pages (peer benchmark: Wealthfront, Betterment, Morgan Stanley).
4. **Editorial-Grade Insights & Thought Leadership** — restructure research/insights into a magazine-style hub with topic clusters, author bios, and richer media (peer benchmark: Goldman Sachs Insights, BlackRock).
5. **Trust + Accessibility by Design** — WCAG 2.2 AA baseline, performance budget, transparent trust signals (AUM, awards, ESG, security), and inclusive imagery.

Each pillar will include: the problem at NT today, peer evidence, the proposed move, and the expected business impact.

## Deliverable format

One question for you before I build it — see below. Default plan assumes:

- **Format: PowerPoint (.pptx)** — presentation-ready, ~12–15 slides
- Structure:
  1. Title + context
  2. Executive snapshot (NT today vs. peer landscape, 1 slide)
  3. The 5 pillars — 2 slides each (problem + screenshot evidence; proposed direction + peer reference)
  4. Prioritization matrix (impact vs. effort) for the 5 pillars
  5. Suggested 0–3 / 3–6 / 6–12 month roadmap
  6. Closing / next steps
- Visual style: Northern Trust-adjacent palette (deep navy, ivory, gold accent), serif display + clean sans pairing, screenshot-driven, no generic AI-deck look
- Reuses screenshots already captured in `/mnt/documents/nt-audit/screenshots/`
- Saved to `/mnt/documents/nt-audit/nt-design-proposal.pptx`

## Technical details

- Built with `pptxgenjs` (per the pptx skill)
- Embeds screenshots as base64
- Visual QA pass: render to PDF + images, inspect, fix, re-render
- A matching 1–2 page executive brief (`nt-design-proposal-brief.md`) accompanies the deck for emailing

## One clarification before I build

Confirm two choices and I'll execute:

1. **Format** — PowerPoint deck (recommended for presenting) or Word document (like the last one)?
2. **Are the 5 pillars above the right ones**, or do you want me to swap one (e.g., drop "Trust + Accessibility" for "AI/Personalization" or "Mobile-First Experience")?
