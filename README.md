# PortfolioV2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Installation

To install dependencies, run:

```bash
npm install
```

Or for a clean install (recommended for CI/CD):

```bash
npm ci
```

> **Note:** This project uses `legacy-peer-deps=true` in `.npmrc` to resolve a peer dependency conflict between
`@fortawesome/angular-fontawesome@3.0.0` (requires Angular 20.x) and Angular 21.x. This is safe and allows FontAwesome
> to work correctly with Angular 21.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will
automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build
optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Docker

This repo includes a multi-stage Dockerfile that builds the Angular app and serves it with Nginx (SPA routing + optimal
caching). A `docker-compose.yml` is also provided for convenience.

- Image exposes port `80`.
- Nginx is configured to:
    - Serve the built SPA with `index.html` fallback for client-side routes.
    - Cache hashed assets for 1 year and avoid caching `index.html`.
    - Enable gzip and basic security headers.

### Build

- Serve at domain root (e.g., `https://app.example.com`):
    - Build: `docker build -t portfolio-v2 .`
- Serve under a sub-path (e.g., `https://example.com/portfolio/`):
    - Build with base href: `docker build --build-arg BASE_HREF=/portfolio/ -t portfolio-v2 .`

### Run

- Run with Docker:
    - `docker run --rm -p 8080:80 portfolio-v2`
    - App available at: `http://localhost:8080`
- Or with docker-compose:
    - `docker compose up --build`
    - App available at: `http://localhost:8080`

### Nginx Proxy Manager (NPM)

You can add this container behind Nginx Proxy Manager as either a subdomain or a sub-path.

1) Subdomain (recommended)

- Create a new Proxy Host in NPM: `app.example.com`
- Forward Hostname/IP: your Docker host (e.g., `localhost` if NPM runs on same host)
- Forward Port: `8080`
- Enable SSL as needed
- No special base href required; build image normally.

2) Sub-path (e.g., `https://example.com/portfolio/`)

- Build the image with matching base href: `--build-arg BASE_HREF=/portfolio/`
- In NPM, add a Location: Path `/portfolio/` -> Forward to the container at `http://<docker-host>:8080`
- Ensure NPM doesn’t strip the prefix, or configure a custom location that proxies `/portfolio/` as-is.

Tip: If you change the sub-path, rebuild the image with the new `BASE_HREF` so `index.html` references and asset URLs
remain correct.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit
the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
