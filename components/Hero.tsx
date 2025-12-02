
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FileText, ArrowDown, MessageSquare, Sparkles, Rocket } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { shouldReduceMotion } from '@/lib/mobile-utils';

const Hero = () => {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReduceMotion(shouldReduceMotion());

    if (!isMobile) {
      const handleScroll = () => {
        setScrollIndicatorVisible(window.scrollY <= 100);
      };
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

  const getAnimationDelay = (baseDelay: number) => {
    if (!mounted || reduceMotion) return 0;
    return baseDelay;
  };

  const techBadges = [
    { name: 'React/Next.js', color: 'cyan', icon: '⚛️' },
    { name: 'Node.js/NestJS', color: 'green', icon: '🟢' },
    { name: 'TypeScript', color: 'blue', icon: '📘' },
    { name: 'Docker/K8s', color: 'purple', icon: '🐳' },
    { name: 'AWS/Cloud', color: 'orange', icon: '☁️' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating orbs with improved animations */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-[100px] top-[-100px] right-[-100px] animate-pulse"
          style={{ animationDuration: '4s' }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[80px] bottom-[-50px] left-[-100px] animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 blur-[60px] top-[40%] left-[30%] animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
          aria-hidden="true"
        />

        {/* Sparkle particles */}
        {mounted && !reduceMotion && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 sm:mt-8 lg:mt-0">

          {/* Status badge */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 mb-6",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.1s', animationFillMode: 'forwards'} : {}}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-emerald-400 font-medium">Disponible pour de nouveaux projets</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="block text-white/90">
              <AnimatedText
                text="Ingénieur"
                className="inline"
                as="span"
                delay={getAnimationDelay(200)}
              />
            </span>
            <span className="block mt-2">
              <AnimatedText
                text="Fullstack"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x"
                as="span"
                delay={getAnimationDelay(400)}
              />
            </span>
          </h1>

          <p className={cn(
            "text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed text-gray-300/90",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.5s', animationFillMode: 'forwards'} : {}}>
            Expert <span className="text-cyan-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Next.js</span> & <span className="text-yellow-400 font-semibold">Node.js</span> avec +5 ans d'expérience.
            Je crée des applications web performantes pour startups et entreprises au <span className="whitespace-nowrap">🇸🇳 Sénégal</span>, <span className="whitespace-nowrap">🇫🇷 France</span> et <span className="whitespace-nowrap">🇲🇦 Maroc</span>.
          </p>

          {/* Enhanced tech stack badges */}
          <div className={cn(
            "flex flex-wrap gap-2 sm:gap-3 mb-8",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.6s', animationFillMode: 'forwards'} : {}}>
            {techBadges.map((badge, index) => (
              <span
                key={badge.name}
                className={cn(
                  "group px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl",
                  "bg-white/5 backdrop-blur-sm border border-white/10",
                  "hover:bg-white/10 hover:border-white/20 hover:scale-105",
                  "transition-all duration-300 cursor-default",
                  "flex items-center gap-2"
                )}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <span className="text-sm">{badge.icon}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">{badge.name}</span>
              </span>
            ))}
          </div>

          {/* Enhanced CTA buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 w-full sm:w-auto",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '0.8s', animationFillMode: 'forwards'} : {}}>
            <Link href="/devis" className="w-full sm:w-auto group">
              <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/30 h-14 px-8 w-full rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.02]">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <Rocket className="mr-2 h-5 w-5" />
                Démarrer un projet
              </Button>
            </Link>
            <Link href="#projects" className="w-full sm:w-auto">
              <Button variant="outline" className="h-14 px-8 w-full rounded-xl font-semibold text-base bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                <Sparkles className="mr-2 h-5 w-5" />
                Voir mes projets
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className={cn(
            "flex flex-wrap justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-white/10",
            mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
          )} style={mounted && !reduceMotion ? {animationDelay: '1s', animationFillMode: 'forwards'} : {}}>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">+5</div>
              <div className="text-sm text-gray-400">Années d'exp.</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">+50</div>
              <div className="text-sm text-gray-400">Projets livrés</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right side - Enhanced profile image */}
        <div className={cn(
          "w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2",
          mounted && !reduceMotion ? "animate-fade-in opacity-0" : "opacity-100"
        )} style={mounted && !reduceMotion ? {animationDelay: '0.3s', animationFillMode: 'forwards'} : {}}>
          <div className="relative">
            {/* Animated rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '20s' }} aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] h-[145%] rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} aria-hidden="true" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/40 to-pink-500/40 blur-[60px] scale-110" aria-hidden="true" />

            {/* Floating badges around image */}
            {mounted && !reduceMotion && (
              <>
                <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  Next.js 14
                </div>
                <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  TypeScript
                </div>
                <div className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  Node.js
                </div>
              </>
            )}

            {/* Image container with enhanced styling */}
            <div className="relative z-10 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500">
              <div className="rounded-full p-1 bg-slate-900">
                <div className="relative rounded-full overflow-hidden">
                  <Image
                    src="/images/mosis.jpeg"
                    alt="Moussa Gaye - Développeur Fullstack"
                    className="object-cover w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]"
                    width={380}
                    height={380}
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQQBBAMBAAAAAAAAAAAAAQACAwQRBRIhMQYTFEH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8AMvG5Jq0DmODfbxkDHRVB8s3Ekt2luG8ds9pRIWFStn/2Q=="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      {!isMobile && (
        <div
          className={cn(
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700",
            scrollIndicatorVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center group"
            aria-label="Découvrir plus de contenu"
          >
            <span className="text-sm mb-3 text-gray-400 group-hover:text-white transition-colors font-medium">Explorer</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400/50 group-hover:border-white/50 flex justify-center pt-2 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
