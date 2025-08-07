#!/bin/bash

# Digital Ocean Deployment Script for Roilux Tropical Wood
# This script deploys the application to Digital Ocean App Platform

set -e

echo "🚀 Starting Digital Ocean deployment..."

# Check if doctl is installed
if ! command -v doctl &> /dev/null; then
    echo "❌ doctl is not installed. Please install it first:"
    echo "   https://docs.digitalocean.com/reference/doctl/how-to/install/"
    exit 1
fi

# Check if user is authenticated
if ! doctl account get &> /dev/null; then
    echo "❌ Not authenticated with Digital Ocean. Please run:"
    echo "   doctl auth init"
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Please create it with the required environment variables."
    exit 1
fi

echo "✅ Environment check passed"

# Create app specification
echo "📝 Creating app specification..."

# Deploy to Digital Ocean App Platform
echo "🌊 Deploying to Digital Ocean App Platform..."

# Check if app already exists
if doctl apps list --format ID,Name | grep -q "roilux-tropical-wood"; then
    echo "🔄 Updating existing app..."
    APP_ID=$(doctl apps list --format ID,Name | grep "roilux-tropical-wood" | awk '{print $1}')
    doctl apps update $APP_ID --spec .do/app.yaml
else
    echo "🆕 Creating new app..."
    doctl apps create --spec .do/app.yaml
fi

echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Set up environment variables in Digital Ocean dashboard"
echo "2. Configure custom domain (optional)"
echo "3. Set up SSL certificate"
echo ""
echo "🔗 Your app will be available at the URL provided by Digital Ocean" 