import { useEffect, useCallback } from 'react';

// Hook pour mesurer et optimiser les Core Web Vitals
export const usePerformance = () => {
  // Mesurer le LCP (Largest Contentful Paint)
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Envoyer à analytics si disponible
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);

  // Mesurer le FID (First Input Delay)
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            const delay = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', delay);
            
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(delay),
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, []);

  // Mesurer le CLS (Cumulative Layout Shift)
  const measureCLS = useCallback(() => {
    let clsValue = 0;
    let clsEntries = [];

    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            clsEntries.push(layoutShiftEntry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
      // Reporter la valeur finale
      window.addEventListener('beforeunload', () => {
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
          });
        }
      });
    }
  }, []);

  // Optimiser les animations pour réduire les reflows
  const optimizeAnimations = useCallback(() => {
    // Forcer l'accélération matérielle sur les éléments animés
    const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
    animatedElements.forEach((el) => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });

    // Nettoyer après les animations
    setTimeout(() => {
      animatedElements.forEach((el) => {
        (el as HTMLElement).style.willChange = 'auto';
      });
    }, 5000);
  }, []);

  // Précharger les ressources critiques
  const preloadCriticalResources = useCallback(() => {
    // Précharger les fonts
    const fontLinks = [
      'https://rsms.me/inter/inter.css',
    ];

    fontLinks.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Précharger les images critiques (hero, logo)
    const criticalImages = document.querySelectorAll('[data-priority="true"]');
    criticalImages.forEach((img) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = (img as HTMLImageElement).src;
      document.head.appendChild(link);
    });
  }, []);

  // Optimiser le rendu initial
  const optimizeInitialRender = useCallback(() => {
    // Différer les scripts non critiques
    const deferScripts = document.querySelectorAll('script:not([defer]):not([async])');
    deferScripts.forEach((script) => {
      script.setAttribute('defer', 'true');
    });

    // Lazy load des iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
      if (!iframe.hasAttribute('loading')) {
        iframe.setAttribute('loading', 'lazy');
      }
    });
  }, []);

  useEffect(() => {
    // Lancer les mesures après le chargement initial
    if (document.readyState === 'complete') {
      measureLCP();
      measureFID();
      measureCLS();
      optimizeAnimations();
      preloadCriticalResources();
      optimizeInitialRender();
    } else {
      window.addEventListener('load', () => {
        measureLCP();
        measureFID();
        measureCLS();
        optimizeAnimations();
        preloadCriticalResources();
        optimizeInitialRender();
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, [measureLCP, measureFID, measureCLS, optimizeAnimations, preloadCriticalResources, optimizeInitialRender]);

  return {
    measureLCP,
    measureFID,
    measureCLS,
    optimizeAnimations,
    preloadCriticalResources,
    optimizeInitialRender,
  };
};

// Déclaration globale pour TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}