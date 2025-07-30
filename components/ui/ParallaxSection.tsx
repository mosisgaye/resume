
'use client'

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection = ({
  children,
  className,
  strength = 0.1,
  direction = 'up',
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, bottom } = sectionRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom > 0;
      
      if (isVisible) {
        const scrollPosition = window.scrollY;
        const sectionPosition = sectionRef.current.offsetTop;
        const relativeScroll = scrollPosition - sectionPosition + window.innerHeight;
        setOffset(relativeScroll * strength);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(-${offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(-${offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(-${offset}px)`;
    }
  };

  return (
    <div ref={sectionRef} className={cn('overflow-hidden', className)}>
      <div
        style={{
          transform: getTransform(),
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
