FROM node:20-alpine AS base

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Create data directory and run migrations + seed
RUN mkdir -p data && \
    pnpm run db:generate && \
    pnpm run db:migrate && \
    pnpm run db:seed

# Build
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
