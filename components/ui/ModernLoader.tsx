import React from 'react';

const ModernLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-xl">
      <div className="relative">
        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-purple-500/20 rounded-full animate-ping" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-pink-500/30 rounded-full animate-ping animation-delay-200" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-cyan-500/40 rounded-full animate-ping animation-delay-400" />
        </div>
        
        {/* Center dot */}
        <div className="relative flex items-center justify-center w-32 h-32">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-400 text-sm font-medium tracking-wider animate-pulse">
            Chargement...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernLoader;