FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund --legacy-peer-deps

COPY . .

ARG BASE_HREF=/
ARG BUILD_ENV=production
ENV BUILD_ENV=${BUILD_ENV}
ENV BASE_HREF=${BASE_HREF}

RUN npm run build -- --base-href=${BASE_HREF}

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/portfolioV2/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

