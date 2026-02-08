# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

RUN npm install -g wrangler

COPY --from=builder /app/dist ./dist

# Create a wrangler config for serving the built output.
# The build produces dist/server/index.js (Worker entry) and dist/client/ (static assets).
# Using no_bundle since the worker is already bundled by Vite.
RUN printf '{\n\
  "name": "foundation-website",\n\
  "compatibility_date": "2025-09-02",\n\
  "compatibility_flags": ["nodejs_compat"],\n\
  "main": "dist/server/index.js",\n\
  "no_bundle": true,\n\
  "assets": {\n\
    "directory": "dist/client"\n\
  },\n\
  "rules": [\n\
    { "type": "ESModule", "globs": ["**/*.js", "**/*.mjs"] }\n\
  ]\n\
}\n' > wrangler.json

EXPOSE 8080

CMD ["wrangler", "dev", "--port", "8080", "--ip", "0.0.0.0"]
