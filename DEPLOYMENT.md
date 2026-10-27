<div dir="rtl">

# راهنمای استقرار • Deployment Guide

[![CI/CD](https://github.com/falahatiali/Iran/actions/workflows/ci.yml/badge.svg)](https://github.com/falahatiali/Iran/actions/workflows/ci.yml)

این راهنما نحوه‌ی استقرار خودکار Iran History را روی سرور شخصی شما با استفاده از GitHub Actions CI/CD توضیح می‌دهد.

## 📋 پیش‌نیازها

### روی سرور

- **سیستم‌عامل**: Ubuntu 22.04+ یا Debian 12+ (توصیه می‌شود)
- **Docker**: نسخه 24.0+ با Docker Compose plugin
- **دسترسی SSH**: با کلید SSH (رمز عبور امن نیست)
- **حداقل منابع**: 1 GB RAM، 10 GB فضای دیسک، 1 CPU core
- **پورت**: یک پورت آزاد (پیش‌فرض: 3000)
- **Reverse Proxy**: Nginx، Caddy یا Traefik برای HTTPS

### روی GitHub

- **GitHub Repository**: دسترسی مدیریت برای تنظیم Secrets
- **GHCR Access**: مخزن به‌طور خودکار به GitHub Container Registry دسترسی دارد

---

## 🚀 راه‌اندازی اولیه (یکبار)

### مرحله ۱: تولید کلید SSH

روی کامپیوتر محلی خود، یک جفت کلید SSH اختصاصی برای استقرار تولید کنید:

```bash
ssh-keygen -t ed25519 -C "iran-deploy@github-actions" -f ~/.ssh/iran_deploy_key
```

دو فایل ایجاد می‌شود:
- `~/.ssh/iran_deploy_key` (کلید خصوصی - به GitHub می‌رود)
- `~/.ssh/iran_deploy_key.pub` (کلید عمومی - به سرور می‌رود)

### مرحله ۲: راه‌اندازی سرور

۱. **انتقال اسکریپت bootstrap به سرور**:

```bash
scp deploy/bootstrap.sh your-user@your-server:/tmp/
```

۲. **اجرای bootstrap به‌عنوان root**:

```bash
ssh your-user@your-server
sudo bash /tmp/bootstrap.sh
```

این اسکریپت:
- Docker Compose plugin را نصب می‌کند (در صورت نیاز)
- یک کاربر سیستمی `iran-deploy` ایجاد می‌کند
- دایرکتوری `/opt/iran-history` را با مجوزهای صحیح می‌سازد
- به GHCR وارد می‌شود (یک GitHub Personal Access Token با scope `read:packages` لازم است)

۳. **افزودن کلید عمومی SSH**:

```bash
sudo mkdir -p /home/iran-deploy/.ssh
sudo bash -c "cat ~/.ssh/iran_deploy_key.pub >> /home/iran-deploy/.ssh/authorized_keys"
sudo chmod 600 /home/iran-deploy/.ssh/authorized_keys
sudo chown -R iran-deploy:iran-deploy /home/iran-deploy/.ssh
```

۴. **دریافت SSH host fingerprint**:

```bash
ssh-keyscan -H your-server.com
```

خروجی را ذخیره کنید - به زودی نیاز خواهید داشت.

### مرحله ۳: پیکربندی GitHub Secrets

در مخزن GitHub خود به **Settings → Secrets and variables → Actions** بروید:

#### Secrets (حساس - هرگز در لاگ‌ها نمایش داده نمی‌شوند)

| Secret | مقدار | توضیحات |
|--------|-------|---------|
| `DEPLOY_SSH_KEY` | محتوای `~/.ssh/iran_deploy_key` | کلید خصوصی SSH (کل فایل را کپی کنید) |
| `DEPLOY_HOST` | `your-server.com` یا IP | نام میزبان یا آدرس IP سرور |
| `DEPLOY_KNOWN_HOSTS` | خروجی `ssh-keyscan` | SSH host key برای اعتبارسنجی |
| `DEPLOY_USER` | `iran-deploy` (اختیاری) | نام کاربری SSH (پیش‌فرض: iran-deploy) |
| `DEPLOY_PORT` | `22` (اختیاری) | پورت SSH (پیش‌فرض: 22) |

#### Variables (غیرحساس - برای پیکربندی)

| Variable | مقدار | توضیحات |
|----------|-------|---------|
| `DEPLOY_DIR` | `/opt/iran-history` (اختیاری) | مسیر استقرار (پیش‌فرض: /opt/iran-history) |
| `PRODUCTION_URL` | `https://iran.example.com` (اختیاری) | URL سایت شما (برای لینک Environment) |

### مرحله ۴: پیکربندی Environment Protection (اختیاری اما توصیه می‌شود)

به **Settings → Environments** بروید و برای environment `production`:

- **Required reviewers**: افزودن خود یا اعضای تیم برای تایید استقرارها
- **Wait timer**: تاخیر ۵ دقیقه‌ای برای استقرارها
- **Deployment branches**: فقط اجازه استقرار از `main`

---

## 🔧 پیکربندی Reverse Proxy

اپلیکیشن به `127.0.0.1:3000` متصل می‌شود (یا پورت پیکربندی شده). برای دسترسی عمومی، یک reverse proxy برای HTTPS نیاز دارید.

### گزینه ۱: Nginx

۱. نصب Nginx و Certbot:

```bash
sudo apt install nginx certbot python3-certbot-nginx
```

۲. کپی پیکربندی:

```bash
sudo cp deploy/examples/nginx.conf /etc/nginx/sites-available/iran-history
```

۳. ویرایش دامنه:

```bash
sudo nano /etc/nginx/sites-available/iran-history
# جایگزین کنید: iran.example.com با دامنه واقعی خود
```

۴. فعال‌سازی و گواهی:

```bash
sudo ln -s /etc/nginx/sites-available/iran-history /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d iran.example.com
```

### گزینه ۲: Caddy

۱. نصب Caddy:

```bash
# دستورات نصب از https://caddyserver.com/docs/install
```

۲. کپی پیکربندی:

```bash
sudo cp deploy/examples/Caddyfile /etc/caddy/sites/iran-history.caddy
```

۳. Include در Caddyfile اصلی:

```bash
echo "import /etc/caddy/sites/*.caddy" | sudo tee -a /etc/caddy/Caddyfile
```

۴. بارگذاری مجدد Caddy:

```bash
sudo systemctl reload caddy
```

### گزینه ۳: Traefik

اگر از قبل Traefik را اجرا می‌کنید:

۱. شبکه proxy ایجاد کنید (اگر وجود ندارد):

```bash
docker network create proxy
```

۲. `docker-compose.prod.yml` را ویرایش کنید:
   - `ports` section را comment کنید
   - `networks` section را uncomment کنید
   - برچسب‌ها را از `deploy/examples/traefik-labels.yml` اضافه کنید
   - دامنه خود را جایگزین کنید

۳. دوباره راه‌اندازی کنید:

```bash
cd /opt/iran-history
docker compose -p iran-history -f docker-compose.prod.yml up -d
```

---

## 🔄 گردش کار استقرار

### استقرار خودکار

هر بار که به `main` push می‌کنید:

۱. **بررسی کیفیت** اجرا می‌شود (lint، typecheck، smoke test، build)
۲. **Docker image** ساخته می‌شود و به GHCR push می‌شود با تگ‌های:
   - `ghcr.io/falahatiali/iran:<commit-sha>`
   - `ghcr.io/falahatiali/iran:latest`
۳. **اسکن آسیب‌پذیری** با Trivy اجرا می‌شود
۴. **استقرار به production** اتفاق می‌افتد:
   - image جدید pull می‌شود
   - کانتینر فعلی متوقف می‌شود
   - کانتینر جدید شروع می‌شود
   - health check منتظر می‌ماند (۶۰ ثانیه)
   - اگر ناسالم باشد، به نسخه قبلی rollback می‌شود

### استقرار/Rollback دستی

برای استقرار یک نسخه خاص:

۱. به **Actions → Manual Deploy/Rollback** بروید
۲. **Run workflow** را کلیک کنید
۳. SHA commit یا `latest` را وارد کنید
۴. تایید کنید

این برای rollback به نسخه‌های قبلی مفید است:

```
# پیدا کردن commit SHA از تاریخچه
git log --oneline

# استقرار آن نسخه از طریق UI Actions
```

---

## 📊 نظارت و لاگ‌ها

### بررسی وضعیت

```bash
# وضعیت کانتینر
docker ps --filter name=iran-history

# لاگ‌ها (زنده)
docker logs -f iran-history

# بررسی health
docker inspect iran-history --format='{{.State.Health.Status}}'

# لاگ‌های استقرار
sudo journalctl -u docker -f | grep iran-history
```

### مسیرهای لاگ

- **Application logs**: `docker logs iran-history`
- **Nginx logs**: `/var/log/nginx/iran-history.{access,error}.log`
- **Caddy logs**: `/var/log/caddy/iran-history.log`
- **Deploy logs**: `/var/log/iran-history/deploy.log` (اگر پیکربندی شده باشد)

---

## 🔐 امنیت

### بهترین روش‌ها اعمال‌شده

✅ **کانتینر non-root**: به‌عنوان کاربر `iran` (UID 1001) اجرا می‌شود  
✅ **Image signing**: SBOM و provenance برای supply chain security  
✅ **اسکن آسیب‌پذیری**: Trivy در هر build  
✅ **Action versions pinned**: همه اکشن‌ها به SHA commit pinned هستند  
✅ **Least-privilege**: مجوزهای محدود برای GITHUB_TOKEN  
✅ **Deploy key isolation**: کلید SSH اختصاصی، نه کلید اصلی  
✅ **Resource limits**: CPU و memory محدود در docker-compose  
✅ **Health checks**: خودکار rollback در صورت شکست  

### به‌روزرسانی‌های امنیتی

Dependabot برای به‌روزرسانی‌های هفتگی پیکربندی شده است:
- GitHub Actions
- npm dependencies
- Docker base images

PR‌های Dependabot را بررسی و merge کنید به‌طور منظم.

---

## 🐛 عیب‌یابی

### استقرار شکست می‌خورد با "Permission denied"

```bash
# بررسی مجوزهای کلید SSH
ls -la /home/iran-deploy/.ssh/
# باید 700 برای .ssh و 600 برای authorized_keys باشد

# بررسی مالکیت
sudo chown -R iran-deploy:iran-deploy /home/iran-deploy/.ssh
sudo chmod 700 /home/iran-deploy/.ssh
sudo chmod 600 /home/iran-deploy/.ssh/authorized_keys
```

### کانتینر شروع نمی‌شود

```bash
# بررسی لاگ‌ها
docker logs iran-history

# مشکلات رایج:
# - پورت 3000 قبلاً استفاده شده → پورت را در .env تغییر دهید
# - مجوزهای volume → sudo chown -R 1001:1001 /var/lib/docker/volumes/iran-history-data
```

### Health check ناموفق

```bash
# تست دستی health check
docker exec iran-history node -e "fetch('http://localhost:3000/').then(r=>console.log(r.status))"

# بررسی اینکه اپ در حال listen است
docker exec iran-history netstat -tlnp | grep 3000
```

### Image pull ناموفق

```bash
# دوباره login به GHCR
sudo -u iran-deploy docker login ghcr.io -u falahatiali

# بررسی اینکه image وجود دارد
docker pull ghcr.io/falahatiali/iran:latest
```

---

## 📚 منابع اضافی

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Nginx SSL Configuration](https://ssl-config.mozilla.org/)
- [Caddy Documentation](https://caddyserver.com/docs/)
- [Traefik Documentation](https://doc.traefik.io/traefik/)

---

</div>

---

# Deployment Guide • راهنمای استقرار

[![CI/CD](https://github.com/falahatiali/Iran/actions/workflows/ci.yml/badge.svg)](https://github.com/falahatiali/Iran/actions/workflows/ci.yml)

This guide explains how to automatically deploy Iran History to your own server using GitHub Actions CI/CD.

## 📋 Prerequisites

### On the Server

- **OS**: Ubuntu 22.04+ or Debian 12+ (recommended)
- **Docker**: Version 24.0+ with Docker Compose plugin
- **SSH Access**: With SSH key (password not secure)
- **Minimum Resources**: 1 GB RAM, 10 GB disk space, 1 CPU core
- **Port**: One available port (default: 3000)
- **Reverse Proxy**: Nginx, Caddy, or Traefik for HTTPS

### On GitHub

- **GitHub Repository**: Admin access to configure Secrets
- **GHCR Access**: Repository automatically has GitHub Container Registry access

---

## 🚀 One-Time Setup

### Step 1: Generate SSH Key

On your local computer, generate a dedicated SSH keypair for deployment:

```bash
ssh-keygen -t ed25519 -C "iran-deploy@github-actions" -f ~/.ssh/iran_deploy_key
```

This creates two files:
- `~/.ssh/iran_deploy_key` (private key - goes to GitHub)
- `~/.ssh/iran_deploy_key.pub` (public key - goes to server)

### Step 2: Bootstrap the Server

1. **Transfer bootstrap script to server**:

```bash
scp deploy/bootstrap.sh your-user@your-server:/tmp/
```

2. **Run bootstrap as root**:

```bash
ssh your-user@your-server
sudo bash /tmp/bootstrap.sh
```

This script will:
- Install Docker Compose plugin (if needed)
- Create a system user `iran-deploy`
- Create directory `/opt/iran-history` with proper permissions
- Log in to GHCR (requires a GitHub Personal Access Token with `read:packages` scope)

3. **Add the public SSH key**:

```bash
sudo mkdir -p /home/iran-deploy/.ssh
sudo bash -c "cat ~/.ssh/iran_deploy_key.pub >> /home/iran-deploy/.ssh/authorized_keys"
sudo chmod 600 /home/iran-deploy/.ssh/authorized_keys
sudo chown -R iran-deploy:iran-deploy /home/iran-deploy/.ssh
```

4. **Get SSH host fingerprint**:

```bash
ssh-keyscan -H your-server.com
```

Save the output - you'll need it soon.

### Step 3: Configure GitHub Secrets

In your GitHub repository, go to **Settings → Secrets and variables → Actions**:

#### Secrets (Sensitive - never shown in logs)

| Secret | Value | Description |
|--------|-------|-------------|
| `DEPLOY_SSH_KEY` | Contents of `~/.ssh/iran_deploy_key` | SSH private key (copy entire file) |
| `DEPLOY_HOST` | `your-server.com` or IP | Server hostname or IP address |
| `DEPLOY_KNOWN_HOSTS` | Output of `ssh-keyscan` | SSH host key for verification |
| `DEPLOY_USER` | `iran-deploy` (optional) | SSH username (default: iran-deploy) |
| `DEPLOY_PORT` | `22` (optional) | SSH port (default: 22) |

#### Variables (Non-sensitive - for configuration)

| Variable | Value | Description |
|----------|-------|-------------|
| `DEPLOY_DIR` | `/opt/iran-history` (optional) | Deployment path (default: /opt/iran-history) |
| `PRODUCTION_URL` | `https://iran.example.com` (optional) | Your site URL (for Environment link) |

### Step 4: Configure Environment Protection (Optional but Recommended)

Go to **Settings → Environments** and for the `production` environment:

- **Required reviewers**: Add yourself or team members to approve deployments
- **Wait timer**: 5-minute delay for deployments
- **Deployment branches**: Only allow deployment from `main`

---

## 🔧 Reverse Proxy Configuration

The application binds to `127.0.0.1:3000` (or configured port). For public access, you need a reverse proxy for HTTPS.

### Option 1: Nginx

1. Install Nginx and Certbot:

```bash
sudo apt install nginx certbot python3-certbot-nginx
```

2. Copy configuration:

```bash
sudo cp deploy/examples/nginx.conf /etc/nginx/sites-available/iran-history
```

3. Edit domain:

```bash
sudo nano /etc/nginx/sites-available/iran-history
# Replace: iran.example.com with your actual domain
```

4. Enable and get certificate:

```bash
sudo ln -s /etc/nginx/sites-available/iran-history /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d iran.example.com
```

### Option 2: Caddy

1. Install Caddy:

```bash
# Install instructions from https://caddyserver.com/docs/install
```

2. Copy configuration:

```bash
sudo cp deploy/examples/Caddyfile /etc/caddy/sites/iran-history.caddy
```

3. Include in main Caddyfile:

```bash
echo "import /etc/caddy/sites/*.caddy" | sudo tee -a /etc/caddy/Caddyfile
```

4. Reload Caddy:

```bash
sudo systemctl reload caddy
```

### Option 3: Traefik

If you're already running Traefik:

1. Create proxy network (if not exists):

```bash
docker network create proxy
```

2. Edit `docker-compose.prod.yml`:
   - Comment out `ports` section
   - Uncomment `networks` section
   - Add labels from `deploy/examples/traefik-labels.yml`
   - Replace domain

3. Restart:

```bash
cd /opt/iran-history
docker compose -p iran-history -f docker-compose.prod.yml up -d
```

---

## 🔄 Deployment Workflow

### Automatic Deployment

Every time you push to `main`:

1. **Quality checks** run (lint, typecheck, smoke test, build)
2. **Docker image** is built and pushed to GHCR with tags:
   - `ghcr.io/falahatiali/iran:<commit-sha>`
   - `ghcr.io/falahatiali/iran:latest`
3. **Vulnerability scan** runs with Trivy
4. **Deploy to production** happens:
   - New image is pulled
   - Current container stops
   - New container starts
   - Health check waits (60s)
   - If unhealthy, rolls back to previous version

### Manual Deploy/Rollback

To deploy a specific version:

1. Go to **Actions → Manual Deploy/Rollback**
2. Click **Run workflow**
3. Enter commit SHA or `latest`
4. Confirm

This is useful for rolling back to previous versions:

```
# Find commit SHA from history
git log --oneline

# Deploy that version via Actions UI
```

---

## 📊 Monitoring and Logs

### Check Status

```bash
# Container status
docker ps --filter name=iran-history

# Logs (live)
docker logs -f iran-history

# Health check
docker inspect iran-history --format='{{.State.Health.Status}}'

# Deploy logs
sudo journalctl -u docker -f | grep iran-history
```

### Log Paths

- **Application logs**: `docker logs iran-history`
- **Nginx logs**: `/var/log/nginx/iran-history.{access,error}.log`
- **Caddy logs**: `/var/log/caddy/iran-history.log`
- **Deploy logs**: `/var/log/iran-history/deploy.log` (if configured)

---

## 🔐 Security

### Best Practices Implemented

✅ **Non-root container**: Runs as user `iran` (UID 1001)  
✅ **Image signing**: SBOM and provenance for supply chain security  
✅ **Vulnerability scanning**: Trivy on every build  
✅ **Action versions pinned**: All actions pinned to commit SHA  
✅ **Least-privilege**: Limited permissions for GITHUB_TOKEN  
✅ **Deploy key isolation**: Dedicated SSH key, not main key  
✅ **Resource limits**: CPU and memory capped in docker-compose  
✅ **Health checks**: Automatic rollback on failure  

### Security Updates

Dependabot is configured for weekly updates of:
- GitHub Actions
- npm dependencies
- Docker base images

Review and merge Dependabot PRs regularly.

---

## 🐛 Troubleshooting

### Deploy fails with "Permission denied"

```bash
# Check SSH key permissions
ls -la /home/iran-deploy/.ssh/
# Should be 700 for .ssh and 600 for authorized_keys

# Fix ownership
sudo chown -R iran-deploy:iran-deploy /home/iran-deploy/.ssh
sudo chmod 700 /home/iran-deploy/.ssh
sudo chmod 600 /home/iran-deploy/.ssh/authorized_keys
```

### Container won't start

```bash
# Check logs
docker logs iran-history

# Common issues:
# - Port 3000 already in use → change port in .env
# - Volume permissions → sudo chown -R 1001:1001 /var/lib/docker/volumes/iran-history-data
```

### Health check failing

```bash
# Test health check manually
docker exec iran-history node -e "fetch('http://localhost:3000/').then(r=>console.log(r.status))"

# Check if app is listening
docker exec iran-history netstat -tlnp | grep 3000
```

### Image pull failing

```bash
# Re-login to GHCR
sudo -u iran-deploy docker login ghcr.io -u falahatiali

# Verify image exists
docker pull ghcr.io/falahatiali/iran:latest
```

---

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Nginx SSL Configuration](https://ssl-config.mozilla.org/)
- [Caddy Documentation](https://caddyserver.com/docs/)
- [Traefik Documentation](https://doc.traefik.io/traefik/)

---

**Quick Start Summary**:

1. Run `deploy/bootstrap.sh` on server as root
2. Add SSH public key to `/home/iran-deploy/.ssh/authorized_keys`
3. Configure 5 GitHub Secrets (DEPLOY_SSH_KEY, DEPLOY_HOST, DEPLOY_KNOWN_HOSTS, etc.)
4. Set up reverse proxy (nginx/caddy/traefik)
5. Push to `main` → automatic deployment!

For rollback: Go to Actions → Manual Deploy/Rollback → enter previous commit SHA
