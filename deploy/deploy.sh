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

# Store current image for potential rollback
CURRENT_IMAGE=$($DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" images -q web 2>/dev/null || echo "")

echo "📥 Pulling new image..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" pull

# Blue/Green deployment: start new container alongside old one
echo "🔵 Starting new container (blue/green)..."
NEW_NAME="${COMPOSE_PROJECT}-new"

# Clean up any existing -new container
docker stop "$NEW_NAME" 2>/dev/null || true
docker rm "$NEW_NAME" 2>/dev/null || true

# Start new container with temporary name
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" up -d --no-deps
docker rename "$COMPOSE_PROJECT" "$NEW_NAME"

echo "⏳ Waiting for new container to be healthy and serving content..."
ELAPSED=0
CONTENT_VERIFIED=false
while [ $ELAPSED -lt $HEALTHCHECK_TIMEOUT ]; do
    HEALTH=$(docker inspect --format='{{.State.Health.Status}}' "$NEW_NAME" 2>/dev/null || echo "starting")
    
    if [ "$HEALTH" = "healthy" ] && [ "$CONTENT_VERIFIED" = "false" ]; then
        # Verify serving real content
        if docker exec "$NEW_NAME" node -e "fetch('http://localhost:3000/').then(r=>r.text()).then(t=>{if(!t.includes('تاریخ ایران'))throw new Error();process.exit(0)}).catch(()=>process.exit(1))" 2>/dev/null; then
            echo "✅ New container healthy and serving content!"
            CONTENT_VERIFIED=true
            break
        fi
    fi
    
    if [ "$HEALTH" = "unhealthy" ]; then
        echo "❌ New container is unhealthy!"
        docker logs "$NEW_NAME" --tail 50
        
        # Rollback: remove new container, old one stays running
        docker stop "$NEW_NAME" 2>/dev/null || true
        docker rm "$NEW_NAME" 2>/dev/null || true
        echo "✅ Rollback complete - old container still running (zero downtime)"
        exit 1
    fi
    
    sleep 2
    ELAPSED=$((ELAPSED + 2))
    echo "  Status: $HEALTH (${ELAPSED}s / ${HEALTHCHECK_TIMEOUT}s)"
done

if [ "$CONTENT_VERIFIED" != "true" ]; then
    echo "❌ New container failed to serve content within ${HEALTHCHECK_TIMEOUT}s"
    docker logs "$NEW_NAME" --tail 50
    docker stop "$NEW_NAME" 2>/dev/null || true
    docker rm "$NEW_NAME" 2>/dev/null || true
    echo "✅ Rollback complete - old container still running (zero downtime)"
    exit 1
fi

# Atomic switchover: rename new to production name
echo "🔀 Switching traffic (Traefik will route to new container)..."
docker stop "$COMPOSE_PROJECT" 2>/dev/null || true
docker rename "$NEW_NAME" "$COMPOSE_PROJECT"

# Remove old container
echo "🧹 Cleaning up old container..."
OLD_CONTAINER=$(docker ps -aq -f name="^${COMPOSE_PROJECT}\$" -f status=exited 2>/dev/null | head -1)
if [ -n "$OLD_CONTAINER" ]; then
    docker rm "$OLD_CONTAINER" 2>/dev/null || true
fi

# Prune old images for this project only
echo "🧹 Pruning old images..."
docker image prune -f --filter "label=org.opencontainers.image.source=https://github.com/falahatiali/Iran" >/dev/null || true

echo ""
echo "✅ Zero-downtime deployment successful!"
echo "Container: $COMPOSE_PROJECT"
FINAL_STATUS=$(docker inspect --format='{{.State.Status}} ({{.State.Health.Status}})' "$COMPOSE_PROJECT" 2>/dev/null)
echo "Status: $FINAL_STATUS"
