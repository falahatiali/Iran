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

echo "🔄 Stopping current container..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" down

echo "🚀 Starting new container..."
$DOCKER_COMPOSE -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" up -d

echo "⏳ Waiting for health check..."
ELAPSED=0
while [ $ELAPSED -lt $HEALTHCHECK_TIMEOUT ]; do
    HEALTH=$(docker inspect --format='{{.State.Health.Status}}' "iran-history" 2>/dev/null || echo "starting")
    
    if [ "$HEALTH" = "healthy" ]; then
        echo "✅ Container is healthy!"
        
        # Prune old images for this project only
        echo "🧹 Pruning old images..."
        docker image prune -f --filter "label=org.opencontainers.image.source=https://github.com/falahatiali/Iran"
        
        echo ""
        echo "✅ Deployment successful!"
        echo "Container: $(docker ps --filter name=${COMPOSE_PROJECT} --format '{{.Names}}')"
        echo "Status: $(docker ps --filter name=${COMPOSE_PROJECT} --format '{{.Status}}')"
        exit 0
    fi
    
    if [ "$HEALTH" = "unhealthy" ]; then
        echo "❌ Container is unhealthy!"
        break
    fi
    
    sleep 2
    ELAPSED=$((ELAPSED + 2))
    echo "  Status: $HEALTH (${ELAPSED}s / ${HEALTHCHECK_TIMEOUT}s)"
done

# Health check failed
echo ""
echo "❌ Deployment failed! Container did not become healthy within ${HEALTHCHECK_TIMEOUT}s"

if [ "$ROLLBACK_ON_FAILURE" = "true" ] && [ -n "$CURRENT_IMAGE" ]; then
    echo ""
    echo "🔄 Rolling back to previous image..."
    docker compose -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" down
    
    # Restore previous image tag
    OLD_TAG=$(docker inspect "$CURRENT_IMAGE" --format '{{index .RepoTags 0}}' 2>/dev/null || echo "")
    if [ -n "$OLD_TAG" ]; then
        echo "IMAGE_TAG=${OLD_TAG##*:}" > "${DEPLOY_DIR}/.env.rollback"
        docker compose -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" --env-file "${DEPLOY_DIR}/.env.rollback" up -d
        echo "✅ Rolled back to previous version"
    else
        echo "⚠️  Could not determine previous image tag, manual intervention required"
    fi
fi

# Show logs
echo ""
echo "📋 Recent logs:"
docker compose -f "$COMPOSE_FILE" -p "$COMPOSE_PROJECT" logs --tail=50

exit 1
