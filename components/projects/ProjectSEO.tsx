'use client';

import { ProjectType } from './ProjectCard';
import { serviceSchema } from '@/lib/seo-schema';
import Script from 'next/script';

interface ProjectSEOProps {
  project: ProjectType;
}

export default function ProjectSEO({ project }: ProjectSEOProps) {
  // Créer un schéma pour le projet comme un service/produit
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": `https://www.webcraft-agency.com${project.image}`,
    "creator": {
      "@type": "Organization",
      "name": "WebCraft Agency",
      "url": "https://www.webcraft-agency.com"
    },
    "keywords": project.technologies.join(", "),
    "url": project.preview,
    "genre": project.category,
    "potentialAction": [
      {
        "@type": "ViewAction",
        "target": project.preview,
        "name": "Voir la démo"
      },
      {
        "@type": "ViewAction", 
        "target": project.github,
        "name": "Voir le code source"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/OnlineOnly",
      "seller": {
        "@type": "Organization",
        "name": "WebCraft Agency"
      }
    }
  };

  return (
    <Script
      id={`project-schema-${project.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectSchema),
      }}
      strategy="afterInteractive"
    />
  );
}