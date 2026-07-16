## Changes

### 1) Consistent header nav across pages
On `/wealth-management` and `/asset-servicing`, the active nav link is rendered with `fontWeight: 600` and a permanent full-width underline, while on `/` all links are regular weight. The bolder text is wider than the regular text, which shifts the position of every nav item to the right of it — so items appear to "move" when navigating.

Fix: keep the font weight identical across states (regular), and indicate the active page using only the underline (which is absolutely positioned and does not affect layout). This makes item positions identical on every page.

- `src/routes/wealth-management.tsx` (Wealth Management link, ~L191–201): remove `style={{ fontWeight: 600 }}`; keep the persistent underline via `w-full`.
- `src/routes/asset-servicing.tsx` (Asset Servicing link, ~L114–120): same treatment — remove any bold weight on the active link, keep persistent underline.
- Verify `/` (`src/routes/index.tsx`) uses the same regular weight (it does).

### 2) Hero headline must stay on exactly two lines
`"A century and a third"` is currently in a `<span style={{ display: "block" }}>` with no wrap protection. On narrower viewports (and when the agent hero column is constrained), "third" wraps down, producing three visual lines.

Fix in `src/routes/index.tsx` (~L430–441):
- Add `whiteSpace: "nowrap"` to both `<span>` blocks so each line stays intact.
- Tighten the H1 `clamp()` so the largest size can't overflow the column at any breakpoint: `fontSize: "clamp(1.9rem, 4.4vw, 4.25rem)"`.
- Result: exactly two lines at every viewport (mobile through desktop), no future breaks.

No other content, styling, or behavior changes.