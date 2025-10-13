# Multi-stage build: Angular build -> Nginx static serve

# ----- Build stage -----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (use clean, reproducible install)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

# Allow serving the app under a sub-path by setting BASE_HREF build-arg (defaults to '/')
# Example: docker build --build-arg BASE_HREF=/portfolio/ -t portfolio-v2 .
ARG BASE_HREF=/
ENV BASE_HREF=${BASE_HREF}

# Build Angular app (production by default per angular.json)
RUN npm run build -- --base-href=${BASE_HREF}

# ----- Runtime stage -----
FROM nginx:1.27-alpine AS runtime

# Copy custom nginx config tailored for Angular SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app to Nginx web root
COPY --from=build /app/dist/portfolioV2/browser /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Use default Nginx command
CMD ["nginx", "-g", "daemon off;"]

