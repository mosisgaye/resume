
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const HeaderLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Modern MG Logo */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        
        {/* Logo container */}
        <div className="relative w-10 h-10 rounded-lg glass-ultra border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          
          {/* MG monogram */}
          <span className="relative font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            MG
          </span>
        </div>
      </div>
      
      {/* Text logo */}
      <div className="flex flex-col leading-tight">
        <span className={cn(
          "text-xl font-bold text-white"
        )}>
          Moussa
        </span>
        <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Gaye
        </span>
      </div>
    </Link>
  );
};
