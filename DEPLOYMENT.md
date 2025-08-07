# Digital Ocean Deployment Guide

This guide will help you deploy the Roilux Tropical Wood application to Digital Ocean App Platform.

## Prerequisites

1. **Digital Ocean Account**: Sign up at [digitalocean.com](https://digitalocean.com)
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **doctl CLI** (optional): Install the Digital Ocean CLI tool

## Method 1: Deploy via Digital Ocean Dashboard (Recommended)

### Step 1: Create App Platform App

1. Log in to your Digital Ocean account
2. Navigate to **Apps** in the left sidebar
3. Click **Create App**
4. Connect your GitHub account and select the `appfrabric/twood` repository
5. Choose the `main` branch

### Step 2: Configure the App

1. **App Name**: `roilux-tropical-wood`
2. **Region**: Choose the closest region to your users (e.g., NYC1)
3. **Source Directory**: `/` (root)
4. **Build Command**: Leave empty (Docker will handle this)
5. **Run Command**: Leave empty (Docker will handle this)
6. **Dockerfile Path**: `Dockerfile.production` ⭐ **Important: Set this to `Dockerfile.production`**
7. **HTTP Port**: `80`

### Step 3: Set Environment Variables

Add the following environment variables in the Digital Ocean dashboard:

```
POSTGRES_USER=roilux
POSTGRES_PASSWORD=your-secure-password
POSTGRES_DB=roilux
SECRET_KEY=your-very-secure-secret-key
ADMIN_EMAIL=admin@roilux.com
ADMIN_PASSWORD=your-admin-password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
REACT_APP_API_URL=/api
```

### Step 4: Configure Resources

- **Instance Size**: Basic XXS (1 vCPU, 512MB RAM)
- **Instance Count**: 1
- **Health Check Path**: `/`

### Step 5: Deploy

Click **Create Resources** to deploy your application.

## Method 2: Deploy via CLI

### Step 1: Install doctl

```bash
# macOS
brew install doctl

# Linux
snap install doctl

# Windows
# Download from https://github.com/digitalocean/doctl/releases
```

### Step 2: Authenticate

```bash
doctl auth init
```

### Step 3: Deploy

```bash
# Make the deployment script executable
chmod +x deploy-digitalocean.sh

# Run the deployment script
./deploy-digitalocean.sh
```

## Method 3: Automated Deployment via GitHub Actions

### Step 1: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add the following secret:
   - `DIGITALOCEAN_ACCESS_TOKEN`: Your Digital Ocean API token

### Step 2: Push to Main Branch

The GitHub Actions workflow will automatically deploy your app when you push to the `main` branch.

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. In the Digital Ocean dashboard, go to your app
2. Navigate to **Settings** > **Domains**
3. Add your custom domain
4. Update your DNS records as instructed

### 2. SSL Certificate

Digital Ocean automatically provides SSL certificates for your app.

### 3. Environment Variables

You can update environment variables anytime in the Digital Ocean dashboard:
1. Go to your app
2. Navigate to **Settings** > **Environment Variables**
3. Add or modify variables as needed

## Monitoring and Logs

### View Logs

1. In the Digital Ocean dashboard, go to your app
2. Click on the **Logs** tab
3. View real-time logs from your application

### Health Checks

The app includes health checks that monitor:
- Application availability
- Database connectivity
- Nginx service status

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Digital Ocean dashboard
   - Ensure all dependencies are properly specified

2. **Database Connection Issues**
   - Verify PostgreSQL is running inside the container
   - Check environment variables are correctly set

3. **Nginx Configuration**
   - Verify the nginx configuration is valid
   - Check that static files are being served correctly

### Debug Commands

If you have access to the container:

```bash
# Check if PostgreSQL is running
ps aux | grep postgres

# Check nginx status
nginx -t

# View application logs
tail -f /var/log/supervisor/backend.log

# Check environment variables
env | grep POSTGRES
```

## Cost Optimization

- **Instance Size**: Start with Basic XXS ($5/month)
- **Scaling**: Scale up only when needed
- **Monitoring**: Use Digital Ocean's built-in monitoring

## Security Best Practices

1. **Environment Variables**: Never commit sensitive data to Git
2. **Database**: Use strong passwords for PostgreSQL
3. **Admin Access**: Change default admin credentials
4. **SSL**: Always use HTTPS in production
5. **Updates**: Regularly update dependencies

## Support

For issues with:
- **Digital Ocean**: Contact Digital Ocean support
- **Application**: Check the logs and GitHub issues
- **Deployment**: Review this guide and Digital Ocean documentation 