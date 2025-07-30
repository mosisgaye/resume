
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FileText, ArrowDown, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { shouldReduceMotion } from '@/lib/mobile-utils';

const Hero = () => {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const [reduceMotion, setReduceMotion] = useState(false);

  // Only run animations after mounting to improve FCP
  useEffect(() => {
    setMounted(true);
    setReduceMotion(shouldReduceMotion());
    
    // Only add scroll listener if needed (desktop)
    if (!isMobile) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrollIndicatorVisible(false);
        } else {
          setScrollIndicatorVisible(true);
        }
      };

      // Use passive listener for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  // Determine animation delays based on device capabilities
  const getAnimationDelay = (baseDelay: number) => {
    if (!mounted || reduceMotion) return 0;
    return baseDelay;
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* Modern animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-20" />
        <div className="pattern-dots absolute inset-0 opacity-10" />
        
        {/* Animated blobs */}
        <div 
          className="absolute w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] blob gradient-aurora opacity-30 top-[-10vh] right-[-10vw] float-element"
          aria-hidden="true"
        />
        <div 
          className="absolute w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] blob bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 bottom-[-5vh] left-[-5vw] float-element"
          style={{ animationDelay: '2s' }}
          aria-hidden="true"
        />
        <div 
          className="absolute w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] blob bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-15 top-[50vh] left-[50vw] float-element"
          style={{ animationDelay: '4s' }}
          aria-hidden="true"
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-0">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-none tracking-tighter">
            <span className="relative">
              <AnimatedText 
                text="Ingénieur" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" 
                as="span"
                delay={getAnimationDelay(300)}
              />
              <span className="mx-2"></span>
              <AnimatedText 
                text="Fullstack" 
                className="font-bold" 
                as="span"
                delay={getAnimationDelay(400)}
              />
            </span>
          </h1>
          
          <p className={cn(
            "text-sm xs:text-base sm:text-lg max-w-xl mb-4 leading-relaxed text-gray-300",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.4s', animationFillMode: 'forwards'} : {}}>
            Ingénieur Fullstack Freelance basé à Dakar, intervenant au Sénégal 🇸🇳, France 🇫🇷 et Maroc 🇲🇦. Expert React, Next.js, Node.js avec +5 ans d'expérience. Développement sur mesure pour startups et entreprises.
          </p>
          
          {/* Tech stack badges */}
          <div className={cn(
            "flex flex-wrap gap-2 mb-6 sm:mb-8",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.45s', animationFillMode: 'forwards'} : {}}>
            <span className="px-3 py-1 text-xs rounded-full glass-ultra border border-cyan-500/30 text-cyan-400">
              React/Next.js
            </span>
            <span className="px-3 py-1 text-xs rounded-full glass-ultra border border-green-500/30 text-green-400">
              Node.js/NestJS
            </span>
            <span className="px-3 py-1 text-xs rounded-full glass-ultra border border-purple-500/30 text-purple-400">
              TypeScript
            </span>
            <span className="px-3 py-1 text-xs rounded-full glass-ultra border border-orange-500/30 text-orange-400">
              Docker/K8s
            </span>
            <span className="px-3 py-1 text-xs rounded-full glass-ultra border border-blue-500/30 text-blue-400">
              AWS/Cloud
            </span>
          </div>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.5s', animationFillMode: 'forwards'} : {}}>
            <Link href="/devis" className="w-full sm:w-auto">
              <Button className="gradient-vibrant text-white shadow-lg shadow-purple-500/25 h-12 px-8 w-full btn-glow hover:scale-105 transform transition-all duration-300">
                <FileText className="mr-2 h-5 w-5" />
                Consulter mon expertise
              </Button>
            </Link>
            <Link href="/documents" className="w-full sm:w-auto">
              <Button variant="outline" className="glass-ultra border-white/20 hover:bg-white/10 hover:border-white/30 h-12 px-8 w-full hover:scale-105 transform transition-all duration-300">
                <MessageSquare className="mr-2 h-5 w-5" />
                Technologies
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right side image */}
        <div className={cn(
          "w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2",
          mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
        )} style={mounted && !reduceMotion ? {animationDelay: '0.3s', animationFillMode: 'forwards'} : {}}>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 rounded-full bg-beige-400/20 blur-2xl transform -translate-x-4 translate-y-4" 
                 aria-hidden="true"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-beige-400/30 to-transparent opacity-60 blur-md"
                 aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-beige-400/10 animate-pulse opacity-70"
                 aria-hidden="true"></div>
            
            {/* Image with modern frame */}
            <div className="relative z-10 rounded-full border-2 border-beige-400/30 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30 z-20"></div>
              <img
                src="/lovable-uploads/9443308f-3e51-4cca-a797-d2666d82f27d.png"
                alt="Web Élégantes Developer Portrait"
                className="relative z-10 object-cover w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] aspect-square"
                width={340}
                height={340}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Only show scroll indicator on desktop */}
      {!isMobile && (
        <div 
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-700",
            scrollIndicatorVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <button 
            onClick={handleScrollDown}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            aria-label="Découvrir plus de contenu"
          >
            <span className="text-sm mb-2 font-medium">Découvrir</span>
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:border-beige-400 group-hover:text-beige-400 transition-colors duration-300">
              <ArrowDown className="h-5 w-5 animate-[bounce_1.5s_infinite]" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
