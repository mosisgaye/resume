/**
 * Responsive design utilities and breakpoints
 */

export const breakpoints = {
  xs: 320,    // Extra small phones
  sm: 640,    // Small devices (landscape phones)
  md: 768,    // Tablets
  lg: 1024,   // Small desktops
  xl: 1280,   // Desktop
  '2xl': 1536 // Large screens
} as const;

export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width < breakpoints.sm) return 'mobile';
  if (width < breakpoints.lg) return 'tablet';
  return 'desktop';
};

export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 || 
         (navigator as any).msMaxTouchPoints > 0;
};