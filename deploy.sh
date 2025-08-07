#!/bin/bash

# DigitalOcean Deployment Script
# This script deploys our application with specific versions

set -e

echo "🚀 Starting deployment to DigitalOcean..."

# Check if we're on the main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Please switch to main branch before deploying"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Build and push images with specific tags
echo "🏗️ Building Docker images..."

# Build frontend
echo "Building frontend..."
docker build -t roilux-frontend:latest ./frontend

# Build backend
echo "Building backend..."
docker build -t roilux-backend:latest ./backend

# Tag images with version
VERSION=$(date +%Y%m%d-%H%M%S)
docker tag roilux-frontend:latest roilux-frontend:$VERSION
docker tag roilux-backend:latest roilux-backend:$VERSION

echo "✅ Images built successfully with version: $VERSION"

# Deploy to DigitalOcean
echo "🌊 Deploying to DigitalOcean..."

# Update docker-compose with specific versions
cat > docker-compose.prod.yml << EOF
version: '3.8'

services:
  frontend:
    image: roilux-frontend:$VERSION
    ports:
      - "80:80"
    depends_on:
      - backend
    environment:
      - REACT_APP_API_URL=/api
    networks:
      - app-network
    restart: unless-stopped

  backend:
    image: roilux-backend:$VERSION
    env_file:
      - .env
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=roilux
      - POSTGRES_HOST=db
      - POSTGRES_PORT=5432
      - SECRET_KEY=your-secret-key-here
      - ADMIN_PASSWORD=admin123
      - ADMIN_EMAIL=admin@example.com
    depends_on:
      - db
    networks:
      - app-network
    restart: unless-stopped

  db:
    image: postgres:15.5
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: roilux
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5433:5432"
    networks:
      - app-network
    restart: unless-stopped

networks:
  app-network:
    driver: bridge

volumes:
  postgres_data:
EOF

echo "📋 Production docker-compose created"

# Instructions for DigitalOcean deployment
echo ""
echo "📋 Next steps for DigitalOcean deployment:"
echo "1. Upload the following files to your DigitalOcean droplet:"
echo "   - docker-compose.prod.yml"
echo "   - .env"
echo "   - frontend/nginx.conf"
echo ""
echo "2. SSH into your droplet and run:"
echo "   docker-compose -f docker-compose.prod.yml up -d"
echo ""
echo "3. Your application will be available at:"
echo "   http://your-droplet-ip"
echo ""
echo "✅ Deployment script completed!"
echo "�� Version: $VERSION" 