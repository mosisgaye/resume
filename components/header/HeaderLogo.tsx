
'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const HeaderLogo = () => {
  return (
    <Link href="/" className="flex items-center group ml-4 sm:ml-8 lg:ml-12">
      {/* Premium MG Logo */}
      <div className="relative">
        {/* Animated glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105"></div>

        {/* Outer ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-80"></div>

        {/* Logo container */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden">
          {/* Inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-slate-900 to-pink-900/50"></div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>

          {/* MG monogram - premium typography */}
          <div className="relative flex items-center justify-center">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-300 to-purple-300 drop-shadow-lg">
              MG
            </span>
          </div>

          {/* Corner accent */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-80"></div>
        </div>
      </div>
    </Link>
  );
};
