# ── Build stage — compile the Vite/React SPA ─────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Install ALL deps (incl. Vite + React) to build the frontend.
COPY package.json package-lock.json* ./
RUN npm ci

# Build the SPA into /app/dist
COPY . .
RUN npm run build

# ── Deps stage — production-only node_modules for the server ──
FROM node:20-alpine AS deps

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# ── Runtime stage ─────────────────────────────────────────────
FROM node:20-alpine AS runtime

# Non-root user for security
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Production dependencies, built assets, and the server.
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY server.js package.json ./

RUN chown -R app:app /app
USER app

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
