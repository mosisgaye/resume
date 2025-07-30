'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePerformance } from '@/hooks/use-performance';
import Header from '@/components/header';
import Hero from '@/components/Hero';
import { shouldReduceMotion } from '@/lib/mobile-utils';

// Composants dynamiques
const Skills = React.lazy(() => import('@/components/Skills'));
const Services = React.lazy(() => import('@/components/Services'));
const Projects = React.lazy(() => import('@/components/Projects'));
const Contact = React.lazy(() => import('@/components/Contact'));
const Footer = React.lazy(() => import('@/components/Footer'));

// Fallback de chargement léger
const SectionLoading = () => (
  <div className="h-[40vh] flex items-center justify-center">
    <div className="h-8 w-8 border-4 border-beige-400 border-l-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  const isMobile = useIsMobile();
  usePerformance();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  
  useEffect(() => {
    // Initialisation du thème
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    
    // Appliquer le thème au document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Vérifier la préférence de réduction de mouvement
    setReduceMotion(shouldReduceMotion());
    
    // Marquer comme chargé
    setIsLoaded(true);

    // Écouter les changements de préférence système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Gestion de la navigation interne
  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ 
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header theme={theme} setTheme={setTheme} onNavigate={handleNavigation} />
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoading />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
      
      {/* Bouton de chat flottant - rendu conditionnel */}
      
      
      {/* Arrière-plan optimisé pour mobile */}
      <div className="fixed -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[60vw] h-[60vw] md:w-[80vw] md:h-[80vw] rounded-full bg-beige-400/5 blur-3xl top-[-30vh] left-[-30vw] animate-float will-change-transform"
          style={{ 
            animationDelay: '0s',
            transform: 'translateZ(0)'
          }}
        />
        <div 
          className="absolute w-[40vw] h-[40vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gray-500/5 blur-3xl bottom-[-20vh] right-[-20vw] animate-float will-change-transform"
          style={{ 
            animationDelay: '-2s',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    </div>
  );
}