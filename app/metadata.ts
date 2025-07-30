import { Metadata } from 'next'

// Configuration SEO de base
export const siteConfig = {
  name: 'WebCraft Agency',
  description: 'Agence web spécialisée dans le développement d\'applications web modernes, sites e-commerce et solutions digitales sur mesure',
  url: 'https://www.webcraft-agency.com',
  ogImage: 'https://www.webcraft-agency.com/og-image.jpg',
  logo: 'https://www.webcraft-agency.com/logo.png',
  author: 'WebCraft Agency',
  twitter: '@webcraftagency',
  locale: 'fr_FR',
  type: 'website',
}

// Métadonnées de base réutilisables
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Agence de Développement Web | Solutions Digitales Sur Mesure`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'agence web',
    'développement web',
    'création site internet',
    'application mobile',
    'e-commerce',
    'SEO',
    'UX/UI design',
    'transformation digitale',
    'développeur react',
    'développeur next.js',
    'développeur node.js',
    'agence digitale',
    'webdesign',
    'responsive design',
    'progressive web app',
    'développement sur mesure',
    'maintenance web',
    'hébergement web',
    'consulting digital',
    'stratégie digitale'
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
      'ar-MA': '/ar',
      'wo-SN': '/wo'
    },
    types: {
      'application/rss+xml': `${siteConfig.url}/feed.xml`,
      'application/atom+xml': `${siteConfig.url}/atom.xml`,
      'application/json': `${siteConfig.url}/feed.json`
    }
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Agence Web`,
        type: 'image/jpeg',
      },
      {
        url: `${siteConfig.url}/og-image-square.jpg`,
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - Logo`,
        type: 'image/jpeg',
      }
    ],
    videos: [
      {
        url: `${siteConfig.url}/intro-video.mp4`,
        width: 1280,
        height: 720,
        type: 'video/mp4'
      }
    ],
    audio: [
      {
        url: `${siteConfig.url}/podcast-episode-1.mp3`,
        type: 'audio/mpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    site: siteConfig.twitter,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#8B5CF6'
      }
    ]
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      me: ['moussgaye0@gmail.com', 'https://webcraft-agency.com'],
      'facebook-domain-verification': 'facebook-domain-verification-code',
      'norton-safeweb-site-verification': 'norton-verification-code',
      'msvalidate.01': 'bing-site-verification-code'
    }
  },
  category: 'technology',
  classification: 'Business/Technology',
  referrer: 'origin-when-cross-origin',
  applicationName: siteConfig.name,
  generator: 'Next.js',
  archives: [`${siteConfig.url}/archives`],
  assets: [`${siteConfig.url}/assets`],
  bookmarks: [`${siteConfig.url}/bookmarks`],
  other: {
    'msapplication-TileColor': '#8B5CF6',
    'msapplication-TileImage': '/mstile-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteConfig.name,
    'mobile-web-app-capable': 'yes',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:locale:alternate': ['en_US', 'ar_MA', 'wo_SN'],
    'article:author': siteConfig.url,
    'article:publisher': siteConfig.url,
    'fb:app_id': 'facebook-app-id',
    'fb:pages': 'facebook-page-id',
    'pinterest-rich-pin': 'true',
    'pinterest': 'nopin',
    'format-detection': 'telephone=no',
    'skype_toolbar': 'skype_toolbar_parser_compatible',
    'x-dns-prefetch-control': 'on',
    'x-frame-options': 'SAMEORIGIN',
    'x-content-type-options': 'nosniff',
    'x-xss-protection': '1; mode=block',
    'permissions-policy': 'camera=(), microphone=(), geolocation=()',
    'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com"
  }
}

// Fonction helper pour générer des métadonnées pour une page
// Export viewport separately
export const baseViewport = {
  colorScheme: 'dark light' as const,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover' as const
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
  keywords?: string[]
): Metadata {
  const url = `${siteConfig.url}${path}`
  const pageImage = image || siteConfig.ogImage
  
  return {
    title,
    description,
    keywords: keywords || baseMetadata.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      images: [pageImage],
    },
    twitter: {
      title,
      description,
      images: [pageImage],
    },
  }
}