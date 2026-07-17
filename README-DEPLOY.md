# Northern Trust Redesign — Deployment

This is a **React + Vite** single-page application. The production build is a
static bundle in `dist/` that any static web server can serve. Nginx is the
recommended target and this repo ships with a ready-to-use config.

## 1. Build locally

Requires Node 20+ (or Bun 1.1+).

```bash
# with bun
bun install
bun run build

# or with npm
npm install
npm run build
```

The build emits everything to `./dist/`.

## 2. Deploy to an existing Nginx server (bare metal / VM)

```bash
# 1. Copy the build output onto the server
scp -r dist/* user@your-server:/var/www/nt-redesign/

# 2. Install the provided server block
sudo cp nginx.conf /etc/nginx/sites-available/nt-redesign
sudo ln -s /etc/nginx/sites-available/nt-redesign /etc/nginx/sites-enabled/

# 3. Point the `root` directive in nginx.conf at your deploy path
sudo sed -i 's|/usr/share/nginx/html|/var/www/nt-redesign|' \
  /etc/nginx/sites-available/nt-redesign

# 4. Validate & reload
sudo nginx -t && sudo systemctl reload nginx
```

The bundled config includes:
- SPA fallback (`try_files ... /index.html`) so deep links like
  `/wealth-management` work on refresh.
- Long-lived caching for hashed `/assets/*` files, no-cache for `index.html`.
- Gzip compression and baseline security headers.

For HTTPS, front the server block with your ACME/certbot config or a load
balancer terminating TLS.

## 3. Deploy with Docker

```bash
docker build -t nt-redesign .
docker run --rm -p 8080:80 nt-redesign
# open http://localhost:8080
```

The image is a two-stage build: `node:20-alpine` compiles the SPA, then the
output is copied into `nginx:1.27-alpine` with `nginx.conf` in place.

## Notes

- **AI Ask-Agent:** the hero search UI uses a client-side canned response so
  no backend is required. To wire it to a real API later, edit
  `src/components/hero-ask-agent.tsx` and replace `cannedAnswer(...)` with
  a `fetch(...)` to your endpoint.
- **Routes shipped:** `/`, `/wealth-management`, `/asset-servicing`,
  `/global-reach`. Add a new route by creating `src/pages/<name>.tsx` and
  registering it in `src/App.tsx`.
- **Environment variables** must be prefixed `VITE_` and are inlined at build
  time. There is no runtime `.env` on the Nginx server.