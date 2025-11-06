#!/usr/bin/env bash
# Stops the running container, removes the local image, pulls the latest image and starts via docker compose.
# Usage: ./scripts/deploy.sh [TAG]
# Example: ./scripts/deploy.sh latest

set -euo pipefail
IFS=$'\n\t'

# --- Configuration (edit if needed) ---
CONTAINER_NAME="portfolio-v2"                      # container name used when running the app
IMAGE_NAME="cqmariokreitz/portfoliov2"             # docker image repository/name
COMPOSE_DIR="/opt/portfolioV2"                    # directory on the server that contains docker-compose.yml
# Note: we will auto-detect whether to use 'docker compose' (Docker CLI v2) or 'docker-compose' (v1)
# ---------------------------------------

TAG="${1:-latest}"
FULL_IMAGE="$IMAGE_NAME:$TAG"

# portable iso timestamp (works on both GNU date and BSD/macOS)
_timestamp() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }
log() { printf '%s\n' "[$(_timestamp)] $*"; }
err() { log "ERROR: $*" >&2; }

if ! command -v docker >/dev/null 2>&1; then
  err "docker is not installed or not in PATH"
  exit 2
fi

# detect compose command
COMPOSE_TOOL=""
if docker compose version >/dev/null 2>&1; then
  COMPOSE_TOOL="docker"
  log "Using 'docker compose' (Docker CLI v2)"
elif command -v docker-compose >/dev/null 2>&1; then
  COMPOSE_TOOL="docker-compose"
  log "Using 'docker-compose' (legacy docker-compose)"
else
  err "Neither 'docker compose' nor 'docker-compose' are available. Install docker-compose or upgrade Docker CLI."
  exit 5
fi

# helper wrappers
compose_pull() {
  if [ "$COMPOSE_TOOL" = "docker" ]; then
    docker compose pull --ignore-pull-failures
  else
    docker-compose pull --ignore-pull-failures
  fi
}

compose_up() {
  if [ "$COMPOSE_TOOL" = "docker" ]; then
    docker compose up -d --remove-orphans
  else
    docker-compose up -d --remove-orphans
  fi
}

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

log "Updating services with compose (using $COMPOSE_TOOL)"
if ! compose_pull; then
  log "compose pull returned non-zero (continuing)"
fi

compose_up

sleep 2
log "Container status for '$CONTAINER_NAME':"
docker ps --filter "name=^/${CONTAINER_NAME}$" --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'

log "Deploy finished successfully"

exit 0
