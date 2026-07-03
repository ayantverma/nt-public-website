# Typography Update: Helvetica + De-italicize

## Font recommendation

**Helvetica** is the stronger fit for Northern Trust — here's why:

| Criterion | Helvetica | Montserrat |
|---|---|---|
| Heritage / institutional feel | ✅ Neutral grotesk, timeless, used across legacy finance (UBS, JPM print) | ⚠️ Geometric, modern-startup vibe (SaaS, DTC) |
| Pairs with NT's current wordmark | ✅ Same grotesk lineage as NT's logo | ⚠️ Rounder, geometric — competes with logo |
| Long-form readability (insights, disclosures) | ✅ Excellent at body sizes | ⚠️ Wider, less efficient in dense copy |
| Availability / performance | ✅ System font, zero webfont weight | ❌ Requires Google Fonts load |
| Distinct from "AI-generic" | ✅ Editorial, restrained | ⚠️ Overused in generic marketing sites |

**Recommendation: Helvetica** (system stack: `"Helvetica Neue", Helvetica, Arial, sans-serif`). It preserves the corporate-editorial gravitas we've built and matches the aesthetic of NT's actual site, while Montserrat would push the design toward a lighter, startup-y register that conflicts with the "century and a third of quiet conviction" story.

## Changes

### 1. `src/styles.css`
- Update `--font-display` and `--font-sans` from the current Arial-first stack to:
  `"Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif`
- No webfont import needed (system stack). Keeps performance and avoids remote CSS in Tailwind v4.

### 2. Remove all italics — `src/routes/index.tsx` and `src/routes/wealth-management.tsx`
- Search for and strip every `italic`, `not-italic` needing enforcement, and inline `fontStyle: "italic"`.
- Common spots to sweep: hero pullquote / eyebrow lines, legacy timeline captions, editorial insight bylines, testimonial quotes, footer fine print, wealth-management case-study attributions.
- Replace italic emphasis with either:
  - uppercase + letter-spacing (for eyebrows/labels), or
  - lighter weight / muted color (for secondary lines), or
  - plain roman where italic was purely decorative.
- Add a global safety rule in `styles.css`:
  ```css
  html, body, * { font-style: normal !important; }
  ```
  Scoped to the app; ensures no stray `<em>`, `<cite>`, `<i>`, or third-party component renders italic.

### 3. Verify
- Grep both route files after edits to confirm zero `italic` tokens remain (except the reset rule).
- Visual pass on `/` and `/wealth-management` hero, timeline, insights grid, FAQ, footer.

## Out of scope
- No layout, color, spacing, or content changes.
- No new routes or components.
