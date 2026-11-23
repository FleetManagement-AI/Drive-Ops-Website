# GitHub Actions secrets for Build And Deploy

Production-only deploy (no staging). Jobs use `environment: production`.
VPS / registry access stays as **repository secrets** (same host pattern as DriveOps-UI).

## Repository secrets (Settings → Secrets and variables → Actions)

Configure once at repo level:

| Secret | Purpose | Example / notes |
|--------|---------|-----------------|
| `VPS_SSH_KEY` | SSH private key used by Actions to reach the VPS | Full PEM (`-----BEGIN ... PRIVATE KEY-----`) |
| `VPS_HOST` | VPS hostname or IP | e.g. `203.0.113.10` |
| `VPS_USER` | SSH login user | e.g. `ubuntu` / `deploy` |
| `GHCR_TOKEN` | Push/pull images from GHCR | PAT with `read:packages` + `write:packages` |

## Environment secrets (Settings → Environments → production)

| Secret | Required | Notes |
|--------|----------|-------|
| `PORT` | Yes | Host port mapped to container `:80`. Must not collide with UI/server containers. |

## Fixed deploy values (in workflow)

| Value | Setting |
|-------|---------|
| Environment | `production` only |
| `NGINX_SERVER_NAME` | `www.driveopsfleet.com` |
| `VITE_SITE_URL` | `https://www.driveopsfleet.com` |
| Container name | `driveops-website-production` |

## Checklist

1. Create Environment `production` on this repo.
2. Set repository secrets: `VPS_SSH_KEY`, `VPS_HOST`, `VPS_USER`, `GHCR_TOKEN`.
3. Set Environment secret `PORT` on `production`.
4. Point DNS for `www.driveopsfleet.com` at the VPS reverse proxy / published port.
5. Push to `main` or run **Build And Deploy** via workflow_dispatch.
6. Confirm Actions logs show health check success and `docker ps` shows `driveops-website-production`.
