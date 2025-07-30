import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/*.js', '/*.css'],
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/og-image.jpg', '/logo.png'],
        disallow: ['/private/'],
      },
      {
        userAgent: ['AdsBot-Google', 'facebookexternalhit', 'Twitterbot', 'LinkedInBot', 'WhatsApp'],
        allow: '/',
      },
      {
        userAgent: ['MJ12bot', 'SemrushBot-SA', 'Bytespider'],
        disallow: '/',
      }
    ],
    sitemap: [
      'https://www.webcraft-agency.com/sitemap.xml',
      'https://www.webcraft-agency.com/sitemap-index.xml',
      'https://www.webcraft-agency.com/news-sitemap.xml',
      'https://www.webcraft-agency.com/video-sitemap.xml',
      'https://www.webcraft-agency.com/image-sitemap.xml'
    ],
    host: 'https://www.webcraft-agency.com',
  }
}