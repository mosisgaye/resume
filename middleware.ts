import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Security Headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self), payment=()')
  
  // HSTS
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  
  // CSP
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://static.hotjar.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; " +
    "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:; " +
    "img-src 'self' data: https: blob:; " +
    "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://www.facebook.com; " +
    "frame-src 'self' https://www.youtube.com https://www.google.com; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'self'; " +
    "upgrade-insecure-requests;"
  )
  
  // Cache Control for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Redirects for SEO
  const redirects: { [key: string]: string } = {
    '/developpeur-web-dakar': '/services-senegal',
    '/agence-web-paris': '/services-france',
    '/developpeur-casablanca': '/services-maroc',
    '/portfolio': '/projets',
    '/about': '/a-propos',
    '/services': '/#services',
  }
  
  const pathname = request.nextUrl.pathname
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url), 301)
  }
  
  // Remove trailing slashes
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(new URL(pathname.slice(0, -1), request.url), 301)
  }
  
  // Add hreflang link headers for i18n
  const hreflangLinks = [
    '<https://www.webcraft-agency.com/>; rel="alternate"; hreflang="fr"',
    '<https://www.webcraft-agency.com/en/>; rel="alternate"; hreflang="en"',
    '<https://www.webcraft-agency.com/ar/>; rel="alternate"; hreflang="ar"',
    '<https://www.webcraft-agency.com/>; rel="alternate"; hreflang="x-default"'
  ]
  response.headers.set('Link', hreflangLinks.join(', '))
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}