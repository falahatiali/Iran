# syntax=docker/dockerfile:1.4

# Build stage  
FROM node:26-bookworm-slim AS build

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install all dependencies including optional (for native bindings)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# Copy source
COPY . .

# Build application (requires rolldown native bindings)
RUN npm run build && \
    npm cache clean --force

# Production stage
FROM node:26-bookworm-slim AS runtime

# Security: Install security updates and create non-root user
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends dumb-init && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd --gid 1001 iran && \
    useradd --uid 1001 --gid iran --shell /bin/bash --create-home iran

WORKDIR /app

# Set production environment
ENV NODE_ENV=production \
    PORT=3000 \
    DB_DRIVER=sqlite \
    DATABASE_URL=file:/data/iran.db \
    NODE_OPTIONS="--max-old-space-size=512"

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

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "fetch('http://localhost:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# Use dumb-init to handle signals properly
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# Start application with migrations
CMD ["sh", "-c", "npx tsx scripts/db.ts migrate && node .output/server/index.mjs"]
