
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  delayIndex?: number;
}

const AnimatedCard = ({
  children,
  className,
  glowColor = 'rgba(230, 177, 126, 0.15)',
  hoverEffect = true,
  delayIndex = 0,
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsInView(true);
            }, delayIndex * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delayIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-2xl transition-all duration-500',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        hoverEffect ? 'transform hover:scale-[1.02] hover:shadow-xl' : '',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isHovered ? glowColor : 'transparent'}, transparent 40%)`,
      }}
    >
      {children}

      {/* Animated circuit pulses */}
      <div className="top-pulse"></div>
      <div className="right-pulse"></div>
      <div className="bottom-pulse"></div>
      <div className="left-pulse"></div>
    </div>
  );
};

export default AnimatedCard;
