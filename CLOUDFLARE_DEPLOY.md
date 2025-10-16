# Cloudflare Pages Configuration

This file documents the configuration for deploying this site on Cloudflare Pages.

## Build Configuration

- **Framework preset**: None (Static HTML)
- **Build command**: (leave empty)
- **Build output directory**: `/`
- **Root directory**: `/`

## Environment Variables

No environment variables are required for this static site.

## Custom Headers (Optional)

To add security headers, you can create a `_headers` file in the root directory:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Redirects (Optional)

To add redirects, create a `_redirects` file in the root directory:

```
# Example: Redirect old paths to new ones
/old-page /new-page 301
```

## Deployment

The site will automatically deploy when you push to the main branch.

## Performance

Cloudflare Pages provides:
- Global CDN distribution
- Automatic HTTPS
- HTTP/2 and HTTP/3 support
- DDoS protection
- Unlimited bandwidth

## Custom Domain

To use a custom domain:
1. Go to your Pages project settings
2. Navigate to "Custom domains"
3. Add your domain
4. Update your DNS records as instructed

## Preview Deployments

Every pull request automatically gets a preview deployment URL for testing changes before merging.
