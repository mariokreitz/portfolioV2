p#!/usr/bin/env bash
# Stops the running container, removes the local image, pulls the latest image and starts via docker compose.
# Usage: ./scripts/deploy.sh [TAG]
# Example: ./scripts/deploy.sh latest

set -euo pipefail
IFS=$'\n\t'

# --- Configuration (edit if needed) ---
CONTAINER_NAME="portfolio-v2"                      # container name used when running the app
IMAGE_NAME="cqmariokreitz/portfoliov2"             # docker image repository/name
COMPOSE_DIR="/opt/portfolio-v2"                    # directory on the server that contains docker-compose.yml
COMPOSE_COMMAND="docker compose"                   # command to run docker compose (could be `docker-compose` or `docker compose`)
# ---------------------------------------

TAG="${1:-latest}"
FULL_IMAGE="$IMAGE_NAME:$TAG"

log() { printf '%s\n' "[$(date --iso-8601=seconds)] $*"; }
err() { log "ERROR: $*" >&2; }

if ! command -v docker >/dev/null 2>&1; then
  err "docker is not installed or not in PATH"
  exit 2
fi

if [ ! -d "$COMPOSE_DIR" ]; then
  err "compose directory '$COMPOSE_DIR' does not exist. Adjust COMPOSE_DIR in the script or create this directory on the server."
  exit 3
fi

cd "$COMPOSE_DIR"

log "Deploy starting for image: $FULL_IMAGE"

if docker ps --filter "name=^/${CONTAINER_NAME}$" --format '{{.ID}}' | grep -q .; then
  log "Stopping and removing container '$CONTAINER_NAME'"
  docker rm -f "$CONTAINER_NAME"
else
  log "No running container named '$CONTAINER_NAME' found"
fi

if docker image inspect "$FULL_IMAGE" >/dev/null 2>&1; then
  log "Removing local image $FULL_IMAGE"
  docker image rm -f "$FULL_IMAGE" || log "Failed to remove image (it may be in use)"
else
  log "Local image $FULL_IMAGE not found, skipping remove"
fi

log "Pulling image $FULL_IMAGE"
docker pull "$FULL_IMAGE"

if [ ! -f "docker-compose.yml" ] && [ ! -f "docker-compose.yaml" ]; then
  err "No docker-compose.yml found in $COMPOSE_DIR"
  exit 4
fi

log "Updating services with docker compose"
if ! $COMPOSE_COMMAND pull --ignore-pull-failures; then
  log "docker compose pull returned non-zero (continuing)"
fi

$COMPOSE_COMMAND up -d --remove-orphans

sleep 2
log "Container status for '$CONTAINER_NAME':"
docker ps --filter "name=^/${CONTAINER_NAME}$" --format 'table {{.Names}}	{{.Status}}	{{.Ports}}'

log "Deploy finished successfully"

exit 0

