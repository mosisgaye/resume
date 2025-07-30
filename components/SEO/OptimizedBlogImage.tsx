'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedBlogImageProps {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  category?: string;
  publishDate?: string;
}

export default function OptimizedBlogImage({
  src,
  alt,
  title,
  width = 1200,
  height = 630,
  className = '',
  priority = false,
  category = 'Article',
  publishDate
}: OptimizedBlogImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Créer un alt tag SEO optimisé pour le blog
  const seoAlt = `${alt} - ${category} | WebCraft Agency Blog`;
  
  // Fallback image
  const fallbackSrc = '/images/placeholder-blog.jpg';

  return (
    <figure 
      className={`relative overflow-hidden ${className}`}
      itemScope 
      itemType="https://schema.org/ImageObject"
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      
      <Image
        src={hasError ? fallbackSrc : src}
        alt={seoAlt}
        title={`${title} - Article de blog WebCraft Agency`}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        loading={priority ? undefined : 'lazy'}
      />
      
      {/* Schema.org microdata pour l'image d'article */}
      <meta itemProp="url" content={src} />
      <meta itemProp="width" content={width.toString()} />
      <meta itemProp="height" content={height.toString()} />
      <meta itemProp="name" content={title} />
      <meta itemProp="caption" content={alt} />
      <meta itemProp="description" content={`Image pour l'article: ${title}`} />
      {publishDate && <meta itemProp="datePublished" content={publishDate} />}
      
      {/* Open Graph meta pour l'image */}
      <meta property="og:image" content={src} />
      <meta property="og:image:width" content={width.toString()} />
      <meta property="og:image:height" content={height.toString()} />
      <meta property="og:image:alt" content={seoAlt} />
      
      {/* Légende de l'image pour l'accessibilité et le SEO */}
      <figcaption className="sr-only" itemProp="caption">
        {alt} - {title}
      </figcaption>
    </figure>
  );
}