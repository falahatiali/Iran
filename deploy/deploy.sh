#!/usr/bin/env bash
# Deploy script for Iran History
# This script is executed by GitHub Actions on the target server
set -euo pipefail

# Configuration from environment variables
IMAGE_TAG="${IMAGE_TAG:-latest}"
DEPLOY_DIR="${DEPLOY_DIR:-/opt/iran-history}"
APP_ENV_FILE="${APP_ENV_FILE:-/home/deploy/envFiles/.env.iran-history}"
COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.prod.yml"
COMPOSE_PROJECT="iran-history"
HEALTHCHECK_TIMEOUT="${HEALTHCHECK_TIMEOUT:-60}"
ROLLBACK_ON_FAILURE="${ROLLBACK_ON_FAILURE:-true}"

# Detect Docker Compose command (v2 plugin or standalone)
if docker compose version &>/dev/null; then
    DOCKER_COMPOSE="docker compose"
elif command -v docker-compose &>/dev/null; then
    DOCKER_COMPOSE="docker-compose"
else
    echo "❌ Neither 'docker compose' (v2 plugin) nor 'docker-compose' (standalone) found"
    echo "   Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi
echo "Using: $DOCKER_COMPOSE"

# Read IMAGE_TAG from .env file if present (for pinned deployments)
if [ -f "$DEPLOY_DIR/.env" ]; then
    source "$DEPLOY_DIR/.env"
fi
IMAGE_TAG="${IMAGE_TAG:-latest}"

echo "🚀 Deploying Iran History"
echo "========================"
echo "Image: ghcr.io/falahatiali/iran:${IMAGE_TAG}"
echo "Directory: ${DEPLOY_DIR}"
echo "Env file: ${APP_ENV_FILE}"
echo ""

cd "$DEPLOY_DIR"

# Fail fast if runtime environment file is missing
if [[ ! -f "$APP_ENV_FILE" ]]; then
    echo "❌ Runtime environment file not found: $APP_ENV_FILE"
    echo ""
    echo "Please create it from .env.production.example:"
    echo "  mkdir -p $(dirname "$APP_ENV_FILE")"
    echo "  cp .env.production.example $APP_ENV_FILE"
    echo "  nano $APP_ENV_FILE  # Edit with your values"
    echo "  chmod 600 $APP_ENV_FILE"
    echo ""
    exit 1
fi

echo "📥 Pulling new image..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" pull

# Get old containers and their creation times before scaling
OLD_CONTAINERS_INFO=$($DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" ps -q app 2>/dev/null | xargs -r docker inspect --format='{{.Id}} {{.Created}}' 2>/dev/null || echo "")

# Clean up any orphaned containers from old deployment
ORPHANS=$(docker ps -a --filter "name=^iran-history$" --format "{{.ID}}" 2>/dev/null || echo "")
if [ -n "$ORPHANS" ]; then
    echo "🧹 Removing orphaned container from old deployment..."
    docker rm -f $ORPHANS 2>/dev/null || true
fi

echo "🔵 Starting new container alongside old (scale=2 for zero-downtime)..."
# Scale to 2: new container starts with same labels, Traefik will load-balance
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" up -d --no-deps --no-recreate --scale app=2

# Find the newest container (last one created)
sleep 2
NEW_CONTAINER=$($DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" ps -q app 2>/dev/null | xargs docker inspect --format='{{.Id}} {{.Created}}' | sort -k2 | tail -1 | cut -d' ' -f1)

if [ -z "$NEW_CONTAINER" ]; then
    echo "❌ Could not identify new container!"
    $DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" ps
    exit 1
fi

OLD_CONTAINERS=$(echo "$OLD_CONTAINERS_INFO" | cut -d' ' -f1)
NEW_CONTAINER_NAME=$(docker inspect --format='{{.Name}}' "$NEW_CONTAINER" | sed 's/^\///')
echo "New container: $NEW_CONTAINER_NAME ($NEW_CONTAINER)"

echo "⏳ Waiting for new container to be healthy..."
ELAPSED=0
CONTENT_VERIFIED=false
while [ $ELAPSED -lt $HEALTHCHECK_TIMEOUT ]; do
    HEALTH=$(docker inspect --format='{{.State.Health.Status}}' "$NEW_CONTAINER" 2>/dev/null || echo "starting")
    
    if [ "$HEALTH" = "healthy" ] && [ "$CONTENT_VERIFIED" = "false" ]; then
        # Verify serving real content from inside container
        if docker exec "$NEW_CONTAINER" node -e "fetch('http://localhost:3000/').then(r=>r.text()).then(t=>{if(!t.includes('تاریخ ایران'))throw new Error();process.exit(0)}).catch(()=>process.exit(1))" 2>/dev/null; then
            echo "✅ New container is healthy and serving content!"
            CONTENT_VERIFIED=true
            break
        fi
    fi
    
    if [ "$HEALTH" = "unhealthy" ]; then
        echo "❌ New container is unhealthy!"
        docker logs "$NEW_CONTAINER" --tail 50
        
        # Rollback: remove only new container, old keeps serving
        echo "🔄 Rolling back: removing new container..."
        docker stop "$NEW_CONTAINER" 2>/dev/null || true
        docker rm "$NEW_CONTAINER" 2>/dev/null || true
        echo "✅ Rollback complete - old container still running (zero downtime)"
        exit 1
    fi
    
    sleep 2
    ELAPSED=$((ELAPSED + 2))
    echo "  Status: $HEALTH (${ELAPSED}s / ${HEALTHCHECK_TIMEOUT}s)"
done

if [ "$CONTENT_VERIFIED" != "true" ]; then
    echo "❌ New container failed to become healthy within ${HEALTHCHECK_TIMEOUT}s"
    docker logs "$NEW_CONTAINER" --tail 50
    docker stop "$NEW_CONTAINER" 2>/dev/null || true
    docker rm "$NEW_CONTAINER" 2>/dev/null || true
    echo "✅ Rollback complete - old container still running (zero downtime)"
    exit 1
fi

# Give Traefik a moment to discover the new healthy container
echo "⏳ Waiting for Traefik to discover new container..."
sleep 5

# Verify public URL is serving (both containers should be load-balanced now)
echo "🔍 Verifying public URL is responding..."
PUBLIC_URL="https://${APP_DOMAIN}"
for i in 1 2 3; do
    if curl -sf "$PUBLIC_URL" | grep -q 'تاریخ ایران' 2>/dev/null; then
        echo "✅ Public URL verified (attempt $i)"
        break
    fi
    if [ $i -eq 3 ]; then
        echo "⚠️  Public URL verification failed after 3 attempts - continuing anyway (Traefik may need more time)"
        echo "Container is healthy and serving internally, proceeding with cutover"
    fi
    sleep 2
done

# Gracefully stop and remove old container(s)
echo "🔀 Removing old container(s)..."
if [ -n "$OLD_CONTAINERS" ]; then
    for OLD in $OLD_CONTAINERS; do
        OLD_NAME=$(docker inspect --format='{{.Name}}' "$OLD" 2>/dev/null | sed 's/^\///' || echo "$OLD")
        echo "  Stopping $OLD_NAME..."
        docker stop "$OLD" || true
        docker rm "$OLD" 2>/dev/null || true
    done
fi

# Scale back to 1
echo "📉 Scaling back to 1 instance..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" up -d --no-deps --scale app=1

# Prune old images for this project only
echo "🧹 Pruning old images..."
docker image prune -f --filter "label=org.opencontainers.image.source=https://github.com/falahatiali/Iran" >/dev/null || true

echo ""
echo "✅ Zero-downtime deployment successful!"
FINAL_CONTAINER=$($DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" ps -q app)
FINAL_NAME=$(docker inspect --format='{{.Name}}' "$FINAL_CONTAINER" | sed 's/^\///')
FINAL_STATUS=$(docker inspect --format='{{.State.Status}} ({{.State.Health.Status}})' "$FINAL_CONTAINER")
echo "Container: $FINAL_NAME"
echo "Status: $FINAL_STATUS"
