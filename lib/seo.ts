
/**
 * SEO utilities for improving site performance and search engine visibility
 */

import { logger } from './logger';

/**
 * Generates structured data for a project
 * @param project Project details
 * @returns JSON-LD structured data
 */
export const generateProjectStructuredData = (project: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  preview: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "author": {
      "@type": "Person",
      "name": "WebCraft Agency"
    },
    "sourceOrganization": {
      "@type": "Organization",
      "name": "WebCraft Agency",
      "url": "https://www.webcraft-agency.com/"
    }
  };
};

/**
 * Helper functions for dynamic meta tag management
 */
export const updateMetaTags = (metaTags: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  if (metaTags.title) {
    document.title = metaTags.title;
    updateMetaTag('property', 'og:title', metaTags.title);
    updateMetaTag('name', 'twitter:title', metaTags.title);
  }
  
  if (metaTags.description) {
    updateMetaTag('name', 'description', metaTags.description);
    updateMetaTag('property', 'og:description', metaTags.description);
    updateMetaTag('name', 'twitter:description', metaTags.description);
  }
  
  if (metaTags.image) {
    updateMetaTag('property', 'og:image', metaTags.image);
    updateMetaTag('name', 'twitter:image', metaTags.image);
  }
  
  if (metaTags.url) {
    updateMetaTag('property', 'og:url', metaTags.url);
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalElement) {
      canonicalElement.href = metaTags.url;
    }
  }
};

const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
  const selector = `meta[${attributeName}="${attributeValue}"]`;
  let meta = document.querySelector(selector) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attributeName, attributeValue);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
};

/**
 * Lazy loads images when they enter the viewport
 */
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.onload = () => {
              image.removeAttribute('data-src');
              image.classList.remove('lazy-load');
              image.classList.add('loaded');
            };
            imageObserver.unobserve(image);
          }
        }
      });
    }, {
      rootMargin: '200px 0px', // Load images 200px before they appear
      threshold: 0.01 // Trigger when even 1% is visible
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      const image = img as HTMLImageElement;
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
      }
    });
  }
};

/**
 * Reports Core Web Vitals metrics to an analytics endpoint
 */
export const reportWebVitals = () => {
  if ('web-vitals' in window) {
    try {
      // @ts-ignore: Web Vitals API
      const { getCLS, getFID, getLCP, getFCP, getTTFB } = window['web-vitals'];
      
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getLCP(sendToAnalytics);
      getFCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    } catch (e) {
      logger.warn('Web Vitals reporting failed', e);
    }
  }
};

/**
 * Helper to send metrics to analytics
 */
const sendToAnalytics = (metric: { name: string; value: number }) => {
  // Currently just logging, but could send to an analytics endpoint
  logger.debug('Web Vitals metric:', metric.name, metric.value);
  
  // In a production app, would send to analytics service:
  // fetch('/api/vitals', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' }
  // });
};
