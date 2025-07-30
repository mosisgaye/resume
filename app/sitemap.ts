import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webcraft-agency.com'
  const currentDate = new Date().toISOString()

  // Pages principales avec leurs priorités et fréquences de mise à jour
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          title: 'WebCraft Agency - Agence Web',
          caption: 'Agence de développement web moderne'
        }
      ]
    },
    {
      url: `${baseUrl}/services-france`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/images/services-france.jpg`,
          title: 'Services Web France',
          caption: 'Nos services de développement web en France'
        }
      ]
    },
    {
      url: `${baseUrl}/services-maroc`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/images/services-maroc.jpg`,
          title: 'Services Web Maroc',
          caption: 'Nos services de développement web au Maroc'
        }
      ]
    },
    {
      url: `${baseUrl}/services-senegal`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/images/services-senegal.jpg`,
          title: 'Services Web Sénégal', 
          caption: 'Nos services de développement web au Sénégal'
        }
      ]
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }
  ]

  // Pages de services supplémentaires
  const servicePages = [
    'developpement-web',
    'application-mobile',
    'e-commerce',
    'seo-referencement',
    'maintenance-web',
    'formation',
    'consulting',
    'ux-ui-design'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Pages de projets/portfolio
  const portfolioPages = [
    'portfolio',
    'projets/e-commerce-fashion',
    'projets/app-mobile-banking',
    'projets/plateforme-education',
    'projets/site-corporate',
    'projets/marketplace-b2b'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  // Pages de blog/actualités
  const blogPages = [
    'blog',
    'blog/tendances-web-2024',
    'blog/importance-seo-local',
    'blog/choisir-cms-entreprise',
    'blog/securite-application-web',
    'blog/performance-core-web-vitals'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5
  }))

  // Pages légales et informations
  const legalPages = [
    'mentions-legales',
    'politique-confidentialite',
    'conditions-generales-vente',
    'politique-cookies',
    'plan-site'
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3
  }))

  // Pages additionnelles
  const additionalPages = [
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    },
    {
      url: `${baseUrl}/technologies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    },
    {
      url: `${baseUrl}/processus`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/temoignages`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6
    },
    {
      url: `${baseUrl}/partenaires`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/certifications`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.4
    }
  ]

  // Combinaison de toutes les pages
  return [
    ...mainPages,
    ...servicePages,
    ...portfolioPages,
    ...blogPages,
    ...legalPages,
    ...additionalPages
  ]
}