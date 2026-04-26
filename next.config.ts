import type { NextConfig } from 'next'

// ─── Content Security Policy ──────────────────────────────────────────────────
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline'
    https://fonts.googleapis.com;
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://www.google-analytics.com
    https://www.googletagmanager.com;
  font-src 'self'
    https://fonts.gstatic.com;
  connect-src 'self'
    https://www.google-analytics.com
    https://analytics.google.com
    https://vitals.vercel-insights.com
    https://va.vercel-scripts.com;
  media-src 'none';
  object-src 'none';
  frame-src 'none';
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`

// ─── Security headers ─────────────────────────────────────────────────────────
const securityHeaders = [
  // Fuerza HTTPS durante 2 años, incluye subdominios y solicita preload
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Evita que el sitio se cargue dentro de iframes externos (clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Evita MIME-type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controla información de referrer enviada al hacer clic en enlaces externos
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Restringe acceso a APIs del navegador (cámara, micrófono, geolocalización, etc.)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
  // Protección XSS legacy (navegadores sin CSP)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Prefetch DNS habilitado para mejorar rendimiento en recursos propios
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Política de apertura de documentos de origen cruzado
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  // Política de recursos de origen cruzado
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-site',
  },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

// ─── Next.js config ───────────────────────────────────────────────────────────
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      {
        // Aplica los security headers a todas las rutas
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
