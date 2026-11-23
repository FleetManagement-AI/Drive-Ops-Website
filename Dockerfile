# Serve prebuilt dist (prerendered in CI) with Nginx.
# Build dist on the host / in GitHub Actions before: docker build .
FROM nginx:alpine

# Nginx Alpine processes .template files with envsubst on start
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Prebuilt static site (must exist before docker build)
COPY dist /usr/share/nginx/html

# Overridden at runtime (e.g. www.driveopsfleet.com)
ENV NGINX_SERVER_NAME=_

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/health || exit 1
