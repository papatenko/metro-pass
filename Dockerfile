# Build Stage
FROM node:alpine AS build
WORKDIR /app
RUN npm install -g pnpm@12.8.1 serve
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .

# Production stage (no tag so it's the default)
FROM build
RUN pnpm run build
EXPOSE 4001
CMD ["serve", "-s", "dist", "-p", "4001"]
