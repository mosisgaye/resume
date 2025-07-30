// Performance optimization configuration

export const performanceConfig = {
  // Reduce animations on mobile and low-performance devices
  reduceMotion: {
    mobile: true,
    lowPerformance: true,
  },
  
  // Image optimization settings
  images: {
    lazyLoadOffset: 50, // Start loading 50px before entering viewport
    quality: {
      mobile: 75,
      desktop: 85,
    },
    formats: ['webp', 'avif'],
  },
  
  // Animation settings
  animations: {
    // Disable heavy animations on mobile
    disableOnMobile: [
      'parallax',
      'marquee',
      'circuit-animations',
    ],
    
    // Simplified durations for mobile
    durations: {
      mobile: {
        fast: 150,
        normal: 200,
        slow: 300,
      },
      desktop: {
        fast: 200,
        normal: 300,
        slow: 500,
      },
    },
  },
  
  // Component lazy loading
  lazyComponents: {
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: '50px', // Start loading 50px before
  },
};

// Check if device is mobile
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 'ontouchstart' in window;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimized animation duration
export const getAnimationDuration = (type: 'fast' | 'normal' | 'slow' = 'normal') => {
  const isMobile = isMobileDevice();
  return performanceConfig.animations.durations[isMobile ? 'mobile' : 'desktop'][type];
};

// Check if animation should be disabled
export const shouldDisableAnimation = (animationType: string) => {
  if (prefersReducedMotion()) return true;
  if (!isMobileDevice()) return false;
  return performanceConfig.animations.disableOnMobile.includes(animationType);
};