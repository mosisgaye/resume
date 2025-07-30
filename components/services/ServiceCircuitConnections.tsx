
'use client'

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const ServiceCircuitConnections = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add delay to ensure animation starts after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main circuit container */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        {/* Horizontal connectors between cards */}
        <div className="absolute top-[25%] left-[20%] w-[60%] h-[2px] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-full w-8 bg-beige-400/40 animate-circuit"></div>
        </div>
        
        <div className="absolute top-[75%] left-[20%] w-[60%] h-[2px] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-full w-8 bg-beige-400/40 animate-circuit" 
               style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Vertical connector */}
        <div className="absolute top-[25%] left-[50%] w-[2px] h-[50%] bg-beige-400/20">
          <div className="absolute top-0 left-0 h-8 w-full bg-beige-400/40 animate-circuit-vertical"
               style={{ animationDelay: '0.75s' }}></div>
        </div>

        {/* Corner connectors */}
        <div className="absolute top-[24%] left-[19%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        <div className="absolute top-[24%] left-[49%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        <div className="absolute top-[24%] left-[79%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        
        <div className="absolute top-[74%] left-[19%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>
        <div className="absolute top-[74%] left-[79%] w-[10px] h-[10px] rounded-full bg-beige-400/30"></div>

        {/* Additional decoration nodes */}
        <div className="absolute top-[37%] left-[35%] w-[6px] h-[6px] rounded-full bg-beige-400/50"></div>
        <div className="absolute top-[62%] left-[65%] w-[6px] h-[6px] rounded-full bg-beige-400/50"></div>
        <div className="absolute top-[50%] left-[50%] w-[8px] h-[8px] rounded-full bg-beige-400/60"></div>
      </div>
    </div>
  );
};

export default ServiceCircuitConnections;
