#!/usr/bin/env bash
# Zero-downtime deployment proof script - Run during deployment to verify no downtime
set -euo pipefail

PRODUCTION_URL="${1:-https://history.verzav.ir}"
DURATION="${2:-120}"  # seconds to monitor
INTERVAL="${3:-0.5}"  # seconds between requests

echo "🔍 Zero-Downtime Deployment Proof"
echo "URL: $PRODUCTION_URL"
echo "Duration: ${DURATION}s"
echo "Interval: ${INTERVAL}s"
echo ""

# Test both homepage and a dynamic route
URLS=(
  "$PRODUCTION_URL/"
  "$PRODUCTION_URL/dynasty/achaemenids"
)

TOTAL_REQUESTS=0
SUCCESS_200=0
NON_200=0
FAILED_REQUESTS=0

START_TIME=$(date +%s)
END_TIME=$((START_TIME + DURATION))

echo "Starting continuous request loop..."
echo "Press Ctrl+C to stop early"
echo ""

trap 'echo ""; echo "⏹️  Stopped by user"' INT TERM

while [ $(date +%s) -lt $END_TIME ]; do
  for URL in "${URLS[@]}"; do
    TOTAL_REQUESTS=$((TOTAL_REQUESTS + 1))
    
    # Make request and capture status
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL" -m 5 || echo "000")
    
    TIMESTAMP=$(date '+%H:%M:%S.%3N')
    
    if [ "$STATUS" = "200" ]; then
      SUCCESS_200=$((SUCCESS_200 + 1))
      echo "[$TIMESTAMP] ✅ $URL → $STATUS"
    elif [ "$STATUS" = "000" ]; then
      FAILED_REQUESTS=$((FAILED_REQUESTS + 1))
      echo "[$TIMESTAMP] 💥 $URL → CONNECTION_FAILED"
    else
      NON_200=$((NON_200 + 1))
      echo "[$TIMESTAMP] ⚠️  $URL → $STATUS"
    fi
  done
  
  sleep "$INTERVAL"
done

ELAPSED=$(($(date +%s) - START_TIME))

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 ZERO-DOWNTIME PROOF RESULTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Duration:          ${ELAPSED}s"
echo "Total requests:    $TOTAL_REQUESTS"
echo "Success (200):     $SUCCESS_200"
echo "Non-200 responses: $NON_200"
echo "Failed requests:   $FAILED_REQUESTS"
echo ""

if [ $NON_200 -eq 0 ] && [ $FAILED_REQUESTS -eq 0 ]; then
  SUCCESS_RATE=$(awk "BEGIN {printf \"%.2f\", ($SUCCESS_200 / $TOTAL_REQUESTS) * 100}")
  echo "✅ ZERO DOWNTIME ACHIEVED!"
  echo "   Success rate: ${SUCCESS_RATE}%"
  echo "   All $TOTAL_REQUESTS requests returned 200 OK"
  exit 0
else
  DOWNTIME_COUNT=$((NON_200 + FAILED_REQUESTS))
  DOWNTIME_RATE=$(awk "BEGIN {printf \"%.2f\", ($DOWNTIME_COUNT / $TOTAL_REQUESTS) * 100}")
  echo "❌ DOWNTIME DETECTED"
  echo "   Failure rate: ${DOWNTIME_RATE}%"
  echo "   ${NON_200} non-200 responses, ${FAILED_REQUESTS} connection failures"
  exit 1
fi
