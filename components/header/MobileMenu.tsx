
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MessageSquare, FileText, X } from 'lucide-react';
import { navLinks } from './navLinks';
import ThemeToggle from '../ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onNavigate?: (path: string) => void;
}

export const MobileMenu = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  theme, 
  setTheme,
  onNavigate 
}: MobileMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  
  const handleNavClick = (link: { href: string, isRoute?: boolean, name: string }) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    if (link.isRoute) {
      return; // Let React Router handle this
    }
    
    if (link.href.startsWith('#')) {
      if (pathname !== '/') {
        if (onNavigate) {
          onNavigate(link.href);
        } else {
          router.push('/' + link.href);
        }
      } else {
        // On homepage, just scroll to the section
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile/Tablet Menu Button - Now aligned to the far right */}
      <div className="flex items-center space-x-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button
          className="flex items-center justify-center rounded-md p-2 hover:bg-accent/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "rotate-45 top-2" : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current top-2 transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 top-2" : "top-4"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[60px] bg-background/95 backdrop-blur-lg transition-all duration-300 lg:hidden z-50",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="relative w-full h-full">
          {/* Close button for tablets */}
          {!isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          )}
          
          <nav className="flex flex-col h-full px-6 py-8 overflow-y-auto">
            <div className="w-full max-w-md mx-auto">
              {/* Section title for better organization */}
              <h3 className="text-md font-medium text-muted-foreground mb-4 md:text-lg" id="nav-heading">Navigation</h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full" aria-labelledby="nav-heading">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    {link.isRoute ? (
                      <Link
                        href={link.href}
                        className="block w-full text-xl font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent/10 hover:text-beige-400 active:scale-[0.98] md:text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        className="text-center w-full text-xl font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent/10 hover:text-beige-400 active:scale-[0.98]"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link);
                        }}
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 space-y-4 w-full md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                <h3 className="text-md font-medium text-muted-foreground mb-2 md:text-lg md:col-span-2" id="contact-heading">Contact</h3>
                <a 
                  href="https://wa.me/21606213027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                  aria-labelledby="contact-heading"
                >
                  <button 
                    className="w-full bg-transparent hover:bg-beige-400/10 hover:text-beige-400 border border-beige-400/20 py-4 text-base rounded-lg font-medium inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
                    WhatsApp
                  </button>
                </a>
                <Link 
                  href="/devis" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                  aria-labelledby="contact-heading"
                >
                  <button 
                    className="w-full bg-beige-400 hover:bg-beige-500 text-gray-900 py-4 text-base rounded-lg font-medium inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
                  >
                    <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
                    Devis
                  </button>
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/40 md:flex md:justify-center">
                <Link 
                  href="/chat" 
                  className="flex items-center justify-center gap-2 text-sm font-medium py-3 px-6 rounded-lg bg-accent/5 hover:bg-accent/10 hover:text-beige-400 transition-all duration-200 active:scale-[0.98] md:w-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>Chat avec un expert</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
