
'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from './ThemeProvider';
import { MobileMenu } from './MobileMenu';
import { DesktopNavigation } from './DesktopNavigation';
import { HeaderLogo } from './HeaderLogo';
import { cn } from '@/lib/utils';
import { useScrollDetection } from './useScrollDetection';

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onNavigate?: (path: string) => void;
}

const Header = ({ theme, setTheme, onNavigate }: HeaderProps) => {
  const { scrolled, mobileMenuOpen, setMobileMenuOpen } = useScrollDetection();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'glass-dark py-2 sm:py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-3 sm:py-4 lg:py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLogo />

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <DesktopNavigation onNavigate={onNavigate} />
        </div>
          
        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center justify-end space-x-4">
          <ThemeProvider theme={theme} setTheme={setTheme} />
          <a 
            href="https://wa.me/21606213027" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <button 
              className="glass-ultra hover:bg-white/10 border border-white/20 h-10 xl:h-11 text-sm xl:text-base px-4 xl:px-5 rounded-full font-medium inline-flex items-center hover:scale-105 transform transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              WhatsApp
            </button>
          </a>
        </div>

        {/* Mobile Menu Button - Now positioned on the far right */}
        <div className="lg:hidden ml-auto">
          <MobileMenu 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} 
            theme={theme}
            setTheme={setTheme}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
