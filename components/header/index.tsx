'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from './ThemeProvider';
import { MobileMenu } from './MobileMenu';
import { DesktopNavigation } from './DesktopNavigation';
import { HeaderLogo } from './HeaderLogo';
import { cn } from '@/lib/utils';
import { useScrollDetection } from './useScrollDetection';
import { Phone, MessageCircle } from 'lucide-react';

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
        'relative w-full z-[90] transition-all duration-300',
        'bg-transparent py-4 lg:py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLogo />

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <DesktopNavigation onNavigate={onNavigate} />
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden flex-1 justify-center">
          <DesktopNavigation onNavigate={onNavigate} />
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeProvider theme={theme} setTheme={setTheme} />

          <a
            href="https://wa.me/212606213027"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl",
              "bg-gradient-to-r from-emerald-500 to-green-600",
              "text-white text-sm font-medium",
              "shadow-lg shadow-emerald-500/20",
              "hover:shadow-emerald-500/30 hover:scale-[1.02]",
              "transition-all duration-300"
            )}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
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
