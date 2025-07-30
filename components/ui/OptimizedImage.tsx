
'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { getOptimalImageSize } from '@/lib/mobile-utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  mobileSrc?: string;
  threshold?: number;
  priority?: boolean;
  format?: 'webp' | 'avif' | 'auto';
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async',
  mobileSrc,
  threshold = 0.1,
  priority = false,
  format = 'auto',
}: OptimizedImageProps) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(loading === 'eager' || priority);
  const [currentSrc, setCurrentSrc] = React.useState<string | null>(
    loading === 'eager' || priority ? (window.innerWidth < 768 && mobileSrc ? mobileSrc : src) : null
  );
  
  // Force eager loading for priority images
  const effectiveLoading = priority ? 'eager' : loading;
  
  // For external URLs vs local images
  const isExternal = src.startsWith('http');
  
  // Setup intersection observer for better lazy loading
  React.useEffect(() => {
    if (!imgRef.current || effectiveLoading === 'eager' || currentSrc) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use optimal image size and format based on viewport
            const optimalSrc = window.innerWidth < 768 && mobileSrc ? mobileSrc : src;
            const sizedSrc = isExternal ? getOptimalImageSize(optimalSrc, width) : optimalSrc;
            
            setCurrentSrc(sizedSrc);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "200px" }
    );
    
    observer.observe(imgRef.current);
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [src, mobileSrc, effectiveLoading, threshold, currentSrc, isExternal, width]);
  
  // Precompute aspect ratio style to prevent layout shifts
  const aspectRatioStyle = width && height ? { aspectRatio: `${width}/${height}` } : undefined;
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        !isLoaded && "bg-gray-100 dark:bg-gray-800 animate-pulse",
        className
      )} 
      style={aspectRatioStyle}
    >
      {currentSrc && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={effectiveLoading}
          decoding={decoding}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "max-w-full h-auto object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
          sizes={width ? `(max-width: 768px) 100vw, ${width}px` : "100vw"}
          {...(isExternal ? { referrerPolicy: "no-referrer" } : {})}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
