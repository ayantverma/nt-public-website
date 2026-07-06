# Hero AI Search Agent — Plan

Add a prominent "Ask Northern Trust" search/assistant bar directly under the hero CTAs on `/`, matching the reference screenshot's pattern (pill input + sparkle icon + submit arrow + suggested-query chips), then wire it to a lightweight assistant panel.

## UX shape (matches reference)

Placed under the "Talk to an advisor / What we do" buttons in `src/routes/index.tsx`.

```
┌──────────────────────────────────────────────────────────────────────┐
│  ✦  Ask Northern Trust anything — "How should a family office…"  → │
└──────────────────────────────────────────────────────────────────────┘
   [Plan a multigenerational estate]  [Compare custody solutions]  [2026 market outlook]
```

- Rotating placeholder examples (pauses on focus, respects `prefers-reduced-motion`).
- 3 suggestion chips as one-tap prompts.
- Submit opens an expanding results panel below the bar (in-page, no route change) with:
  - Instant matches: curated site links (Wealth Management, Insights, FAQs) filtered client-side.
  - "Ask the assistant" answer streamed from Lovable AI Gateway (`google/gemini-3-flash-preview`).
  - Sources list linking to real site sections.
- Empty state before submit: shows popular questions + "Talk to an advisor" fallback.
- Escape closes the panel and returns focus to the input.

## Accessibility (WCAG 2.2 AA)

- Semantic `<form role="search">` with visually-hidden `<label for="nt-ask">`.
- Combobox pattern (WAI-ARIA 1.2): `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-autocomplete="list"`, results as `role="listbox"` with `role="option"` items, `aria-activedescendant` for keyboard highlight.
- Full keyboard support: ↑/↓ through suggestions, Enter submits, Esc closes, Tab order preserved. **2.4.11 Focus Not Obscured**: sticky header offset accounted for on focus. **2.5.8 Target Size**: submit + chips ≥ 24×24 CSS px (using 44px).
- `aria-live="polite"` region announces "Answer ready" / "Searching…" / error states.
- Contrast: input placeholder ≥ 4.5:1 against the hero overlay (darken overlay behind the bar, or use an ivory pill on the green). Focus ring uses existing `--color-ivory` outline token in `src/styles.css`.
- `prefers-reduced-motion`: disables placeholder rotation and panel slide.
- Errors (rate limit, network): inline `role="alert"` under the bar; input remains editable.

## Technical section

**Files**
- `src/routes/index.tsx` — insert `<HeroAskAgent />` under CTA row in the hero.
- `src/components/hero-ask-agent.tsx` — new. Combobox + suggestions + results panel. Uses `useChat` from `@ai-sdk/react` with `DefaultChatTransport({ api: "/api/chat" })`.
- `src/routes/api/chat.ts` — new server route. `streamText` via Lovable AI Gateway helper, model `google/gemini-3-flash-preview`, system prompt scoped to Northern Trust concept site (services, sections, escalation to advisor). Streams `toUIMessageStreamResponse`.
- `src/lib/ai-gateway.server.ts` — new provider helper per `ai-sdk-lovable-gateway` (openai-compatible, `Lovable-API-Key` header).
- `src/lib/site-index.ts` — new. Small static array of `{title, href, keywords, summary}` for instant local matches (Home, Wealth Management, etc.) — no DB.
- `src/styles.css` — add one utility for the hero pill (backdrop-blur + border) using existing tokens; no new colors.

**Backend**
- Uses Lovable AI Gateway (no Supabase needed). `LOVABLE_API_KEY` server-only, provisioned via `lovable_api_key--create` if missing.
- Rate/credit errors (429/402) surfaced as inline alerts.

**Out of scope**
- No auth, no persistence of chat history (single-session, per contract choice; if you want saved threads, we'll add that separately).
- No changes to `/wealth-management`, footer, typography, or existing hero copy/layout beyond inserting the agent block.
- MCP server stays untouched.

Confirm and I'll build it.