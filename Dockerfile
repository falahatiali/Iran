# syntax=docker/dockerfile:1
FROM node:20-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production PORT=3000 DB_DRIVER=sqlite DATABASE_URL=file:/data/iran.db
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/.output ./.output
COPY migrations ./migrations
COPY scripts ./scripts
COPY src/data ./src/data
COPY src/server/db ./src/server/db
COPY tsconfig.json ./
RUN mkdir -p /data && chown -R node:node /data
USER node
VOLUME ["/data"]
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s CMD node -e "fetch('http://localhost:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["sh", "-c", "npx tsx scripts/db.ts migrate && npx tsx scripts/db.ts seed && node .output/server/index.mjs"]
