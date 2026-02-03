# ---------- Stage 1: Build Stage ----------
FROM node:18 AS builder

# Create app directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# ---------- Stage 2: Production Stage ----------
FROM node:18-slim AS production

# Create app directory
WORKDIR /app

# Copy only the built app from the builder stage
COPY --from=builder /app /app

# Expose the port your app uses
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]