# 1. Use Node.js as base image
FROM node:18-alpine AS base

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json and package-lock.json first
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the project files
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Use a lightweight production image
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy necessary build files
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Expose Next.js default port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
