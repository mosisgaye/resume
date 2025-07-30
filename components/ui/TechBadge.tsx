
import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
  index?: number;
}

const TechBadge = ({ name, className, index = 0 }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all',
        'bg-gray-800/60 text-gray-100 dark:bg-gray-700/40 backdrop-blur-md',
        'border border-gray-700/20 dark:border-gray-600/20',
        'hover:bg-beige-400/20 hover:border-beige-400/30 hover:scale-105',
        'animate-fade-in',
        className
      )}
      style={{
        animationDelay: `${index * 60}ms`,
        animationFillMode: 'both',
      }}
    >
      {name}
    </div>
  );
};

export default TechBadge;
