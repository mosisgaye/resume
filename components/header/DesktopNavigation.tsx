
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from './navLinks';

interface DesktopNavigationProps {
  onNavigate?: (path: string) => void;
}

export const DesktopNavigation = ({ onNavigate }: DesktopNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleNavClick = (href: string) => {    
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        // If we're not on the homepage, navigate to homepage with the section
        if (onNavigate) {
          onNavigate(href);
        } else {
          router.push('/' + href);
        }
      } else {
        // On homepage, just scroll to the section
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="flex items-center justify-center w-full">
      <ul className="flex items-center justify-center space-x-10">
        {navLinks.map((link) => (
          <li key={link.title}>
            {link.isRoute ? (
              <Link
                href={link.href}
                className="text-lg font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400"
              >
                {link.title}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-lg font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
