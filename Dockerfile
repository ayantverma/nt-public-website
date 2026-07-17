# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (Bun-first, npm fallback)
COPY package.json bun.lock* package-lock.json* ./
RUN corepack enable && \
    if [ -f bun.lock ]; then \
      npm install -g bun && bun install --frozen-lockfile; \
    else \
      npm ci; \
    fi

# Build the SPA
COPY . .
RUN if [ -f bun.lock ]; then bun run build; else npm run build; fi

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine AS runtime

# Replace the default site config with our SPA-aware one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]