#!/usr/bin/env bash
# Bootstrap script for Iran History deployment
# Run this once on the target server to prepare for deployments
# Idempotent: safe to run multiple times
set -euo pipefail

# Configuration
DEPLOY_USER="${DEPLOY_USER:-deploy}"
DEPLOY_DIR="${DEPLOY_DIR:-/opt/iran-history}"
GHCR_USERNAME="${GHCR_USERNAME:-falahatiali}"

echo "🚀 Iran History Deployment Bootstrap"
echo "===================================="
echo ""

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   echo "❌ This script must be run as root (use sudo)"
   exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   https://docs.docker.com/engine/install/"
    exit 1
fi

echo "✓ Docker is installed ($(docker --version))"

# Check for Docker Compose (v2 plugin or standalone v1)
if docker compose version &> /dev/null; then
    echo "✓ Docker Compose plugin (v2) is installed ($(docker compose version --short))"
elif command -v docker-compose &> /dev/null; then
    echo "✓ docker-compose (standalone) is installed ($(docker-compose --version))"
    echo "   Note: On Debian/Ubuntu with docker.io package, install with:"
    echo "   sudo apt install docker-compose"
else
    echo "❌ No Docker Compose found. Install either:"
    echo "   • Docker Compose v2 plugin: https://docs.docker.com/compose/install/linux/"
    echo "   • Or standalone docker-compose: sudo apt install docker-compose"
    exit 1
fi

# Check deploy user exists
if id "$DEPLOY_USER" &>/dev/null; then
    echo "✓ User $DEPLOY_USER exists"
else
    echo "❌ User $DEPLOY_USER does not exist."
    echo "   Create it with: useradd -m -s /bin/bash -G docker $DEPLOY_USER"
    exit 1
fi

# Create deployment directory
if [[ -d "$DEPLOY_DIR" ]]; then
    echo "✓ Directory $DEPLOY_DIR already exists"
else
    echo "Creating directory $DEPLOY_DIR..."
    mkdir -p "$DEPLOY_DIR"
    echo "✓ Directory $DEPLOY_DIR created"
fi

# Set proper ownership
chown -R "$DEPLOY_USER:$DEPLOY_USER" "$DEPLOY_DIR"
chmod 750 "$DEPLOY_DIR"

# Setup GitHub Container Registry authentication
echo ""
echo "📦 GitHub Container Registry Setup"
echo "=================================="
echo ""
echo "The Iran History Docker image (ghcr.io/falahatiali/iran) is private."
echo "You need a GitHub Personal Access Token (fine-grained) with:"
echo "  - Repository: falahatiali/Iran"
echo "  - Permission: Contents (read-only)"
echo ""
echo "Create one at: https://github.com/settings/tokens?type=beta"
echo ""

# Check if already logged in
if sudo -u "$DEPLOY_USER" docker login ghcr.io --get-login 2>/dev/null | grep -q ""; then
    echo "✓ Already logged in to GHCR"
else
    read -p "Enter GitHub username [$GHCR_USERNAME]: " input_username
    GHCR_USERNAME="${input_username:-$GHCR_USERNAME}"

    read -sp "Enter GitHub fine-grained PAT (input hidden): " GHCR_TOKEN
    echo ""

    if [[ -z "$GHCR_TOKEN" ]]; then
        echo "⚠️  No token provided. You MUST login before deploying:"
        echo "   sudo -u $DEPLOY_USER docker login ghcr.io -u $GHCR_USERNAME"
        echo ""
        echo "Without GHCR authentication, docker compose pull will fail with 401."
    else
        echo "$GHCR_TOKEN" | sudo -u "$DEPLOY_USER" docker login ghcr.io -u "$GHCR_USERNAME" --password-stdin
        if [[ $? -eq 0 ]]; then
            echo "✓ Logged in to GHCR as $GHCR_USERNAME"
            echo "   Credentials saved to /home/$DEPLOY_USER/.docker/config.json"
        else
            echo "❌ Failed to login to GHCR"
            exit 1
        fi
    fi
fi

echo ""
echo "✅ Bootstrap complete!"
echo ""
echo "Next steps:"
echo "1. Place docker-compose.prod.yml in $DEPLOY_DIR/"
echo "2. Create runtime environment file at /home/$DEPLOY_USER/envFiles/.env.iran-history"
echo "   (see .env.production.example for required variables)"
echo "3. Secure the env file: chmod 600 /home/$DEPLOY_USER/envFiles/.env.iran-history"
echo "4. Add deploy SSH key to /home/$DEPLOY_USER/.ssh/authorized_keys"
echo "5. Configure GitHub Actions secrets and variables"
echo "6. Push to main branch to trigger automatic deployment"
echo ""
