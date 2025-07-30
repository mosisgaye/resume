
'use client'

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const CircuitConnections = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add delay to ensure animation starts after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main circuit container */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        {/* Horizontal connector between cards */}
        <div className="absolute top-[35%] left-[25%] w-[50%] h-[2px] bg-beige-400/20">
          {/* Animated pulse effect */}
          <div className="absolute top-0 left-0 h-full w-8 bg-beige-400/40 animate-circuit"></div>
        </div>

        {/* Vertical connectors */}
        <div className="absolute top-[35%] left-[25%] w-[2px] h-[15%] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-8 w-full bg-beige-400/40 animate-circuit-vertical"></div>
        </div>
        
        <div className="absolute top-[35%] left-[50%] w-[2px] h-[15%] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-8 w-full bg-beige-400/40 animate-circuit-vertical" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="absolute top-[35%] left-[75%] w-[2px] h-[15%] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-8 w-full bg-beige-400/40 animate-circuit-vertical" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Corner connectors */}
        <div className="absolute top-[32%] left-[24%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        <div className="absolute top-[32%] left-[49%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        <div className="absolute top-[32%] left-[74%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>

        {/* Additional node points */}
        <div className="absolute top-[40%] left-[37%] w-[6px] h-[6px] rounded-full bg-beige-400/50"></div>
        <div className="absolute top-[30%] left-[62%] w-[6px] h-[6px] rounded-full bg-beige-400/50"></div>
      </div>
    </div>
  );
};

export default CircuitConnections;
