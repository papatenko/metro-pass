# Build Stage
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci # like npm install but for CI server
COPY . .

# Production stage (no tag so it's the default)
FROM build 
RUN npm run build
EXPOSE 4001
CMD ["npm", "run", "preview"]
