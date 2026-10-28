#!/usr/bin/env bash
set -euo pipefail

# Zero-downtime deployment script for Iran History
# Uses blue/green strategy: start new container, verify health, switch traffic, stop old

COMPOSE_PROJECT="${COMPOSE_PROJECT:-iran-history}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.prod.yml}"
DEPLOY_DIR="${DEPLOY_DIR:-/opt/iran-history}"
APP_ENV_FILE="${APP_ENV_FILE:-/home/deploy/envFiles/.env.iran-history}"
HEALTHCHECK_TIMEOUT="${HEALTHCHECK_TIMEOUT:-60}"

# Auto-detect docker compose command
if command -v "docker compose" &>/dev/null && docker compose version &>/dev/null; then
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
IMAGE="ghcr.io/falahatiali/iran:${IMAGE_TAG}"

echo "🚀 Zero-Downtime Deployment: Iran History"
echo "=========================================="
echo "Image: $IMAGE"
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

# Store current container ID for rollback
OLD_CONTAINER=$(docker ps -q -f name=^${COMPOSE_PROJECT}$ 2>/dev/null || echo "")

echo "📥 Pulling new image..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" pull

# Start new container with temporary name
echo "🔵 Starting new container (blue/green)..."
NEW_CONTAINER_NAME="${COMPOSE_PROJECT}-new"

# Stop and remove any existing -new container
docker stop "$NEW_CONTAINER_NAME" 2>/dev/null || true
docker rm "$NEW_CONTAINER_NAME" 2>/dev/null || true

# Create new container with same config but different name
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" up -d --no-deps --force-recreate
docker rename "${COMPOSE_PROJECT}" "$NEW_CONTAINER_NAME" 2>/dev/null || true

echo "⏳ Waiting for new container to be healthy..."
ELAPSED=0
while [ $ELAPSED -lt $HEALTHCHECK_TIMEOUT ]; do
    HEALTH=$(docker inspect --format='{{.State.Health.Status}}' "$NEW_CONTAINER_NAME" 2>/dev/null || echo "starting")
    
    if [ "$HEALTH" = "healthy" ]; then
        echo "✅ New container is healthy!"
        
        # Verify it's serving real content
        if docker exec "$NEW_CONTAINER_NAME" node -e "fetch('http://localhost:3000/').then(r=>r.text()).then(t=>{if(!t.includes('تاریخ ایران'))throw new Error();process.exit(0)}).catch(()=>process.exit(1))" 2>/dev/null; then
            echo "✅ New container serving content!"
            break
        else
            echo "⚠️  Container healthy but not serving content yet..."
        fi
    fi
    
    if [ "$HEALTH" = "unhealthy" ]; then
        echo "❌ New container is unhealthy!"
        docker logs "$NEW_CONTAINER_NAME" --tail 50
        
        # Rollback
        echo "🔄 Rolling back..."
        docker stop "$NEW_CONTAINER_NAME" 2>/dev/null || true
        docker rm "$NEW_CONTAINER_NAME" 2>/dev/null || true
        
        if [ -n "$OLD_CONTAINER" ]; then
            echo "✅ Old container still running, no downtime"
        fi
        exit 1
    fi
    
    sleep 2
    ELAPSED=$((ELAPSED + 2))
    echo "  Status: $HEALTH (${ELAPSED}s / ${HEALTHCHECK_TIMEOUT}s)"
done

# Check if we timed out
FINAL_HEALTH=$(docker inspect --format='{{.State.Health.Status}}' "$NEW_CONTAINER_NAME" 2>/dev/null || echo "unknown")
if [ "$FINAL_HEALTH" != "healthy" ]; then
    echo "❌ Timeout waiting for health check: $FINAL_HEALTH"
    docker logs "$NEW_CONTAINER_NAME" --tail 50
    
    # Rollback
    docker stop "$NEW_CONTAINER_NAME" 2>/dev/null || true
    docker rm "$NEW_CONTAINER_NAME" 2>/dev/null || true
    exit 1
fi

# Rename new container to production name (atomic switchover for Traefik)
echo "🔀 Switching traffic to new container..."
if [ -n "$OLD_CONTAINER" ]; then
    docker stop "${COMPOSE_PROJECT}" 2>/dev/null || true
fi
docker rename "$NEW_CONTAINER_NAME" "${COMPOSE_PROJECT}"

# Clean up old container
if [ -n "$OLD_CONTAINER" ]; then
    echo "🧹 Removing old container..."
    docker rm "$OLD_CONTAINER" 2>/dev/null || true
fi

# Prune old images for this project only
echo "🧹 Pruning old images..."
docker image prune -f --filter "label=org.opencontainers.image.source=https://github.com/falahatiali/Iran" || true

echo ""
echo "✅ Zero-downtime deployment successful!"
echo "Container: ${COMPOSE_PROJECT}"
FINAL_STATUS=$(docker inspect --format='{{.State.Status}} ({{.State.Health.Status}})' "${COMPOSE_PROJECT}" 2>/dev/null)
echo "Status: $FINAL_STATUS"
