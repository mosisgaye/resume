// Schémas JSON-LD complets pour SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.webcraft-agency.com/#organization",
  "name": "WebCraft Agency",
  "alternateName": "WebCraft Digital Agency",
  "url": "https://www.webcraft-agency.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.webcraft-agency.com/logo.png",
    "width": 512,
    "height": 512
  },
  "image": [
    "https://www.webcraft-agency.com/og-image.jpg",
    "https://www.webcraft-agency.com/logo-square.png",
    "https://www.webcraft-agency.com/logo-wide.png"
  ],
  "description": "Agence web spécialisée dans le développement d'applications web modernes, sites e-commerce, et solutions digitales sur mesure.",
  "email": "contact@webcraft-agency.com",
  "telephone": "+33-1-23-45-67-89",
  "faxNumber": "+33-1-23-45-67-90",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Avenue du Digital",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "sameAs": [
    "https://www.facebook.com/webcraftagency",
    "https://www.twitter.com/webcraftagency",
    "https://www.linkedin.com/company/webcraft-agency",
    "https://www.instagram.com/webcraftagency",
    "https://github.com/webcraft-agency",
    "https://www.youtube.com/@webcraftagency"
  ],
  "foundingDate": "2020-01-01",
  "founders": [
    {
      "@type": "Person",
      "name": "Expert Team"
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "vatID": "FR12345678901",
  "taxID": "12345678901234",
  "naics": "541511",
  "keywords": "développement web, agence digitale, création site internet, application mobile, e-commerce, SEO, UX/UI design",
  "slogan": "Votre partenaire digital de confiance",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Développement Web",
        "description": "Création de sites web sur mesure"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Application Mobile",
        "description": "Développement d'applications iOS et Android"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "E-commerce",
        "description": "Solutions e-commerce complètes"
      }
    }
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "France"
    },
    {
      "@type": "Country",
      "name": "Sénégal"
    },
    {
      "@type": "Country",
      "name": "Maroc"
    }
  ],
  "award": [
    "Best Web Agency 2023",
    "Top Digital Innovation Award 2022"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.webcraft-agency.com/#website",
  "url": "https://www.webcraft-agency.com",
  "name": "WebCraft Agency",
  "description": "Agence web spécialisée dans le développement d'applications web modernes",
  "publisher": {
    "@id": "https://www.webcraft-agency.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.webcraft-agency.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["fr-FR", "en-US"],
  "copyrightYear": 2020,
  "copyrightHolder": {
    "@id": "https://www.webcraft-agency.com/#organization"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string,
  description: string,
  price?: string,
  duration?: string,
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@id": "https://www.webcraft-agency.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "France"
    },
    {
      "@type": "Country", 
      "name": "Sénégal"
    },
    {
      "@type": "Country",
      "name": "Maroc"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        ...(service.price && {
          "price": service.price,
          "priceCurrency": "EUR"
        })
      }
    ]
  },
  ...(service.image && {
    "image": service.image
  }),
  ...(service.duration && {
    "duration": service.duration
  })
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "127",
  "reviewCount": "89"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.webcraft-agency.com/#localbusiness",
  "name": "WebCraft Agency Paris",
  "image": "https://www.webcraft-agency.com/office-paris.jpg",
  "priceRange": "€€€",
  "servesCuisine": "Technology Services",
  "telephone": "+33-1-23-45-67-89",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Avenue du Digital",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France", 
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "url": "https://www.webcraft-agency.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": reviewSchema,
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "EUR, USD, XOF, MAD"
};

export const articleSchema = (article: {
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  image: string,
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@id": "https://www.webcraft-agency.com/#organization"
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Développement Web",
  "description": "Formation complète au développement web moderne",
  "provider": {
    "@id": "https://www.webcraft-agency.com/#organization"
  }
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Webinar: Les dernières tendances du Web",
  "startDate": "2024-02-01T14:00:00+01:00",
  "endDate": "2024-02-01T16:00:00+01:00",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.webcraft-agency.com/webinar"
  },
  "organizer": {
    "@id": "https://www.webcraft-agency.com/#organization"
  }
};

export const videoSchema = (video: {
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string,
  embedUrl: string
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  "embedUrl": video.embedUrl,
  "publisher": {
    "@id": "https://www.webcraft-agency.com/#organization"
  }
});

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "WebCraft CMS",
  "operatingSystem": "Web",
  "applicationCategory": "WebApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "aggregateRating": reviewSchema
};