#!/usr/bin/env bash
# Bootstrap script for Iran History deployment
# Run this once on the target server to prepare for deployments
set -euo pipefail

# Configuration
DEPLOY_USER="${DEPLOY_USER:-iran-deploy}"
DEPLOY_DIR="${DEPLOY_DIR:-/opt/iran-history}"
GHCR_USERNAME="${GHCR_USERNAME:-falahatiali}"
COMPOSE_VERSION="2.24.5"

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

echo "✓ Docker is installed"

# Check if Docker Compose plugin is installed
if ! docker compose version &> /dev/null; then
    echo "⚠️  Docker Compose plugin not found. Installing..."
    
    # Install Docker Compose plugin
    mkdir -p /usr/local/lib/docker/cli-plugins
    curl -SL "https://github.com/docker/compose/releases/download/v${COMPOSE_VERSION}/docker-compose-linux-$(uname -m)" \
        -o /usr/local/lib/docker/cli-plugins/docker-compose
    chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
    
    if docker compose version &> /dev/null; then
        echo "✓ Docker Compose plugin installed"
    else
        echo "❌ Failed to install Docker Compose plugin"
        exit 1
    fi
else
    echo "✓ Docker Compose plugin is installed"
fi

# Create deploy user if it doesn't exist
if id "$DEPLOY_USER" &>/dev/null; then
    echo "✓ User $DEPLOY_USER already exists"
else
    echo "Creating user $DEPLOY_USER..."
    useradd -r -m -s /bin/bash -G docker "$DEPLOY_USER"
    echo "✓ User $DEPLOY_USER created"
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

# Create docker-compose.prod.yml symlink location
mkdir -p "$DEPLOY_DIR/config"
chown "$DEPLOY_USER:$DEPLOY_USER" "$DEPLOY_DIR/config"

# Setup GitHub Container Registry authentication
echo ""
echo "📦 GitHub Container Registry Setup"
echo "=================================="
echo ""
echo "To pull images from GHCR, you need a Personal Access Token (PAT)"
echo "with 'read:packages' scope."
echo ""
read -p "Enter GitHub username [$GHCR_USERNAME]: " input_username
GHCR_USERNAME="${input_username:-$GHCR_USERNAME}"

read -sp "Enter GitHub PAT (input hidden): " GHCR_TOKEN
echo ""

if [[ -z "$GHCR_TOKEN" ]]; then
    echo "⚠️  No token provided. Skipping GHCR login."
    echo "   You can login later as $DEPLOY_USER:"
    echo "   sudo -u $DEPLOY_USER docker login ghcr.io -u $GHCR_USERNAME"
else
    echo "$GHCR_TOKEN" | sudo -u "$DEPLOY_USER" docker login ghcr.io -u "$GHCR_USERNAME" --password-stdin
    if [[ $? -eq 0 ]]; then
        echo "✓ Logged in to GHCR as $GHCR_USERNAME"
    else
        echo "❌ Failed to login to GHCR"
        exit 1
    fi
fi

# Create .env template
cat > "$DEPLOY_DIR/.env.example" << 'EOF'
# Iran History Production Configuration
IMAGE_TAG=latest
BIND_HOST=127.0.0.1
BIND_PORT=3000
# DOMAIN=iran.example.com  # For Traefik/external proxy
EOF

chown "$DEPLOY_USER:$DEPLOY_USER" "$DEPLOY_DIR/.env.example"

if [[ ! -f "$DEPLOY_DIR/.env" ]]; then
    cp "$DEPLOY_DIR/.env.example" "$DEPLOY_DIR/.env"
    echo "✓ Created $DEPLOY_DIR/.env from example"
fi

# Setup log directory
mkdir -p /var/log/iran-history
chown "$DEPLOY_USER:$DEPLOY_USER" /var/log/iran-history

echo ""
echo "✅ Bootstrap complete!"
echo ""
echo "Next steps:"
echo "1. Place docker-compose.prod.yml in $DEPLOY_DIR/"
echo "2. Configure $DEPLOY_DIR/.env with your settings"
echo "3. Add the deploy SSH key to $DEPLOY_USER's authorized_keys"
echo "4. Configure your reverse proxy (see deploy/examples/)"
echo "5. Run: sudo -u $DEPLOY_USER docker compose -f $DEPLOY_DIR/docker-compose.prod.yml pull"
echo "6. Run: sudo -u $DEPLOY_USER docker compose -f $DEPLOY_DIR/docker-compose.prod.yml up -d"
echo ""
