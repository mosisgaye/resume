
/**
 * Mobile optimization utilities
 */

/**
 * Determines the optimal image size based on device viewport
 * @param url The image URL
 * @param requestedWidth The requested width of the image
 * @returns The optimized image URL
 */
export const getOptimalImageSize = (url: string, requestedWidth?: number): string => {
  // Don't process SVGs or data URLs
  if (url.includes('.svg') || url.startsWith('data:')) {
    return url;
  }

  // Only process URLs from providers that support dynamic resizing
  const supportedProviders = ['unsplash.com', 'images.pexels.com', 'cloudinary.com'];
  const isSupported = supportedProviders.some(provider => url.includes(provider));
  
  if (!isSupported) {
    return url;
  }

  // Get device pixel ratio and viewport width
  const pixelRatio = window.devicePixelRatio || 1;
  const viewportWidth = window.innerWidth;
  
  // Calculate optimal width based on device
  let optimalWidth = Math.round((requestedWidth || viewportWidth) * pixelRatio);
  
  // Cap maximum width to avoid unnecessarily large images
  const maxWidth = 1920;
  if (optimalWidth > maxWidth) {
    optimalWidth = maxWidth;
  }
  
  // Apply resizing parameters based on the provider
  if (url.includes('unsplash.com')) {
    // Unsplash format: https://images.unsplash.com/photo-xxx?w=800&q=80
    const hasParams = url.includes('?');
    const connector = hasParams ? '&' : '?';
    return `${url}${connector}w=${optimalWidth}&q=80&auto=format`;
  } 
  else if (url.includes('images.pexels.com')) {
    // Pexels format: https://images.pexels.com/photos/xxx/pexels-photo-xxx.jpeg?auto=compress&cs=tinysrgb&w=800
    const hasParams = url.includes('?');
    const connector = hasParams ? '&' : '?';
    return `${url}${connector}auto=compress&cs=tinysrgb&w=${optimalWidth}`;
  } 
  else if (url.includes('cloudinary.com')) {
    // Cloudinary format: https://res.cloudinary.com/demo/image/upload/w_800,q_auto/sample.jpg
    if (url.includes('/upload/')) {
      return url.replace('/upload/', `/upload/w_${optimalWidth},q_auto,f_auto/`);
    }
  }
  
  return url;
};

/**
 * Checks if the user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export const shouldReduceMotion = (): boolean => {
  // Check for reduced motion preference
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Detects if the device is likely to be low-end based on hardware concurrency
 * and memory
 * @returns boolean indicating if device is likely low-end
 */
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check hardware concurrency (available CPU cores)
  const lowConcurrency = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  
  // Check memory (if available in browser)
  let lowMemory = false;
  if ('deviceMemory' in navigator) {
    // @ts-ignore - deviceMemory is not in the standard Navigator type
    lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
  }
  
  // Also consider mobile devices generally lower-end for complex animations
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  return (lowConcurrency || lowMemory || isMobile);
};

/**
 * Optimizes scroll animations based on device capabilities
 * @returns object with optimal scroll settings
 */
export const getScrollSettings = () => {
  const reducedMotion = shouldReduceMotion();
  const lowEnd = isLowEndDevice();
  
  // Return appropriate settings
  return {
    behavior: reducedMotion ? 'auto' : 'smooth',
    throttleMs: lowEnd ? 100 : 50, // Higher throttle for low-end devices
    useNativeWhenAvailable: true
  };
};

/**
 * Determines if the browser supports passive event listeners and returns
 * the appropriate options object
 * @returns object with passive property for event listeners
 */
export const getPassiveListenerOptions = (): AddEventListenerOptions => {
  // Check if the browser supports passive event listeners
  let passiveSupported = false;
  
  try {
    // Test via a getter in the options object to see if the passive property is accessed
    const options = {
      get passive() {
        passiveSupported = true;
        return true;
      }
    };
    
    // Use a throwaway event listener with a proper event type and handler function
    // Use "scroll" as it's a valid event type and commonly used with passive listeners
    window.addEventListener("scroll", function() {}, options as AddEventListenerOptions);
    window.removeEventListener("scroll", function() {}, options as AddEventListenerOptions);
  } catch (err) {
    passiveSupported = false;
  }
  
  return passiveSupported ? { passive: true } : { passive: false };
};
