# syntax=docker/dockerfile:1.4

# Build stage  
FROM node:20-bookworm-slim AS build

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install all dependencies including optional (for native bindings)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# Copy source
COPY . .

# Public origin is baked into canonical, og:url, sitemap, and robots at build time.
# Never default to a placeholder — fail the image if neither ARG is a real https origin.
ARG VITE_SITE_URL
ARG APP_DOMAIN
ENV NODE_ENV=production
RUN SITE="${VITE_SITE_URL:-}" && \
    if [ -z "$SITE" ] && [ -n "$APP_DOMAIN" ]; then SITE="https://${APP_DOMAIN#https://}"; SITE="${SITE#http://}"; fi && \
    SITE="${SITE%/}" && \
    echo "Building with VITE_SITE_URL=${SITE}" && \
    case "$SITE" in \
      ""|*iran-history.example*|*://example.com*|http://*) \
        echo "Refusing empty, placeholder, or non-https VITE_SITE_URL/APP_DOMAIN: '${SITE}'" >&2; \
        exit 1 ;; \
    esac && \
    VITE_SITE_URL="$SITE" APP_DOMAIN="${APP_DOMAIN:-}" npm run build && \
    npm cache clean --force

# Production stage
FROM node:20-bookworm-slim AS runtime

# Security: Install security updates, curl for healthcheck, and create non-root user
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends dumb-init curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd --gid 1001 iran && \
    useradd --uid 1001 --gid iran --shell /bin/bash --create-home iran

WORKDIR /app

ARG VITE_SITE_URL
ARG APP_DOMAIN

# Set production environment
ENV NODE_ENV=production \
    PORT=3000 \
    DB_DRIVER=sqlite \
    DATABASE_URL=file:/data/iran.db \
    NODE_OPTIONS="--max-old-space-size=512" \
    VITE_SITE_URL=${VITE_SITE_URL} \
    APP_DOMAIN=${APP_DOMAIN}

# Copy dependency files and install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund && \
    npm cache clean --force

# Copy built application
COPY --from=build --chown=iran:iran /app/.output ./.output

# Copy runtime files
COPY --chown=iran:iran migrations ./migrations
COPY --chown=iran:iran scripts ./scripts
COPY --chown=iran:iran src/data ./src/data
COPY --chown=iran:iran src/server/db ./src/server/db
COPY --chown=iran:iran tsconfig.json ./

# Create data directory with proper permissions
RUN mkdir -p /data && \
    chown -R iran:iran /data && \
    chmod 750 /data

# Switch to non-root user
USER iran

# Volume for persistent data
VOLUME ["/data"]

# Expose port
EXPOSE 3000

# Health check - verify app responds AND doesn't show error boundary
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD sh -c "curl -sf http://localhost:3000/ | grep -q 'تاریخ ایران' && ! curl -sf http://localhost:3000/ | grep -q 'Something went wrong'"

# Use dumb-init to handle signals properly
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# Start application with migrations and seeding (idempotent)
CMD ["sh", "-c", "npx tsx scripts/db.ts migrate && npx tsx scripts/db.ts seed && node .output/server/index.mjs"]
