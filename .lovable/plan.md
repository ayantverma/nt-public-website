# Goal
Deliver the Northern Trust redesign as a plain **React + Vite SPA** that builds to a static `dist/` directory and runs on Nginx — no SSR, no Cloudflare Worker, no server functions required.

# Approach

Convert the current TanStack Start project into a standard **Vite + React + React Router** SPA in-place. Reuse all existing UI code (design system, pages, hero agent, components) with minimal edits — mostly swapping `@tanstack/react-router` primitives for `react-router-dom` equivalents.

## What changes

1. **Build tooling**
   - Replace `@lovable.dev/vite-tanstack-config` / TanStack Start plugins with a minimal `vite.config.ts` using `@vitejs/plugin-react` + `@tailwindcss/vite`.
   - Remove `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `src/router.tsx`, and everything under `src/routes/api/`, `src/routes/[.mcp]/`, `src/routes/[.well-known]/`, `src/lib/mcp/`, `src/lib/ai-gateway.server.ts`.
   - Add `index.html` at project root as the Vite entry.
   - Add `src/main.tsx` mounting `<App />` with `BrowserRouter`.

2. **Routing**
   - New `src/App.tsx` with `<Routes>`:
     - `/` → home
     - `/wealth-management`
     - `/asset-servicing`
     - `/global-reach`
     - `*` → 404
   - Each page moves from `src/routes/*.tsx` to `src/pages/*.tsx`, stripping `createFileRoute` wrappers — keep the component bodies as-is.
   - Swap `Link`/`useNavigate` imports from `@tanstack/react-router` → `react-router-dom`. Keep `to="/path"` props unchanged.
   - Move head/meta tags into `index.html` (static) plus a lightweight `useDocumentMeta` hook per page for title/description.

3. **AI Ask-Agent (hero search)**
   - The current `/api/chat` streaming endpoint won't exist on Nginx. Two options — I'll implement **option A** by default:
     - **A. Client-side fallback** (default): keep the UI, replace the stream call with a small canned-response function that returns the same dummy results already shown when a query is entered. Zero backend dependency.
     - B. Point it at an external URL via `VITE_CHAT_API_URL` env var, so you can wire your own backend later.

4. **MCP / server functions**
   - Deleted. Not applicable for a static Nginx deploy.

5. **Deployment artifacts** (new files)
   - `nginx.conf` — production server block with SPA fallback (`try_files $uri /index.html`), gzip, long-cache for `/assets/*` (hashed), no-cache for `index.html`, security headers.
   - `Dockerfile` — multi-stage: `node:20-alpine` build → `nginx:alpine` serve `dist/`.
   - `.dockerignore`
   - `README-DEPLOY.md` — build + Nginx deploy instructions (both bare-metal `dist/` copy and Docker).

## Technical details

- **Package changes:** remove `@tanstack/react-router`, `@tanstack/react-start`, `@lovable.dev/*`, `nitro`, `ai`, `@ai-sdk/*`. Add `react-router-dom`. Keep React 19, Tailwind v4, shadcn primitives, lucide-react.
- **Build output:** `vite build` → `dist/` (static HTML + hashed JS/CSS + assets). Deploy = copy `dist/` to `/usr/share/nginx/html` (or any static root).
- **Nginx SPA fallback** ensures deep links like `/wealth-management` resolve to `index.html` so React Router can take over client-side.
- **Assets:** existing imports from `src/assets/*` continue to work via Vite's asset pipeline.

## File tree after

```text
index.html                      # new — Vite SPA entry
vite.config.ts                  # rewritten — plain React + Tailwind
nginx.conf                      # new
Dockerfile                      # new
README-DEPLOY.md                # new
src/
  main.tsx                      # new — ReactDOM.createRoot + BrowserRouter
  App.tsx                       # new — <Routes>
  pages/
    home.tsx                    # from routes/index.tsx
    wealth-management.tsx
    asset-servicing.tsx
    global-reach.tsx
    not-found.tsx
  components/hero-ask-agent.tsx # edited — client-side canned response
  components/... (unchanged)
  styles.css                    # unchanged
  assets/... (unchanged)
```

## Verification

- `bun run build` succeeds and emits `dist/index.html` + `dist/assets/*`.
- Local sanity: `bunx serve dist -s` (or Docker build) — routes `/`, `/wealth-management`, `/asset-servicing`, `/global-reach` load and deep-linking works with the SPA fallback.
- All four pages render with the existing visual system intact.

## Out of scope (call out to user)

- Real AI chat backend: the streaming `/api/chat` is replaced with a canned client-side response. If you want live AI, host a small backend separately and set `VITE_CHAT_API_URL`.
- MCP endpoints (`/mcp`, `/.well-known/*`) are removed — those required a server runtime.
- Sitemap/robots and any real SEO metadata beyond static tags in `index.html`.

Confirm and I'll build it.
