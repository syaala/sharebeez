# Sharebeez Website Deployment Guide

This guide covers deploying the Sharebeez website to various platforms with production-ready configurations.

## 🚀 Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/sharebeez-website)

### Manual Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Vercel Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://sharebeez.com"
  }
}
```

## 🌐 Other Platform Deployments

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.18.0+

2. **netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18.18.0"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### AWS Amplify

1. **amplify.yml**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Railway

1. **railway.toml**
   ```toml
   [build]
   builder = "nixpacks"
   
   [deploy]
   startCommand = "npm start"
   ```

### DigitalOcean App Platform

1. **app.yaml**
   ```yaml
   name: sharebeez-website
   services:
   - name: web
     source_dir: /
     github:
       repo: your-org/sharebeez-website
       branch: main
     run_command: npm start
     build_command: npm run build
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     routes:
     - path: /
   ```

## 🔧 Environment Variables

### Required Variables

```env
NEXT_PUBLIC_SITE_URL=https://sharebeez.com
```

### Optional Variables

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SUPPORT_EMAIL=support@sharebeez.com
```

## 🏗️ Build Optimization

### Production Build

```bash
# Clean previous builds
npm run clean

# Type check
npm run type-check

# Lint code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### Bundle Analysis

```bash
npm run build:analyze
```

## 🔒 Security Configuration

### Content Security Policy

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' blob: data: *.googleapis.com;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

## 📊 Performance Monitoring

### Core Web Vitals

Monitor these metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Tools

- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals Chrome Extension
- Vercel Analytics

## 🚨 Error Monitoring

### Sentry Integration

```bash
npm install @sentry/nextjs
```

Add to `next.config.ts`:

```typescript
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  org: "sharebeez",
  project: "website",
});
```

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18.18.0'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test
      - run: npm run build
      
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📈 SEO Checklist

- [x] Meta tags and Open Graph data
- [x] XML sitemap
- [x] Robots.txt
- [x] Structured data
- [x] Canonical URLs
- [x] Performance optimization
- [x] Mobile responsiveness
- [x] Accessibility compliance

## 🔍 Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Build completes without errors
- [ ] Type checking passes
- [ ] Linting passes
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics meet targets
- [ ] SEO tags are correct
- [ ] Analytics tracking works

## 📞 Support

For deployment issues:
- Email: devops@sharebeez.com
- Slack: #deployment-support
- Documentation: [Internal Wiki]

---

Last updated: 2025-01-01
