'use client';

import React, { useState } from 'react';
import AnimatedCard from './ui/AnimatedCard';
import { Code2, Wrench, Zap, Cloud, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Développement Web Fullstack",
      description: "Applications web modernes et performantes avec les dernières technologies.",
      gradient: "from-cyan-500 to-blue-600",
      shadowColor: "shadow-cyan-500/20",
      features: [
        "Applications React/Next.js",
        "Architecture scalable",
        "UX/UI moderne",
        "SEO optimisé"
      ]
    },
    {
      id: 2,
      icon: Wrench,
      title: "Maintenance & Évolution",
      description: "Support continu et améliorations pour vos applications existantes.",
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "shadow-purple-500/20",
      features: [
        "Mises à jour sécurité",
        "Optimisation performance",
        "Nouvelles fonctionnalités",
        "Support technique"
      ]
    },
    {
      id: 3,
      icon: Zap,
      title: "Automatisation",
      description: "Automatisez vos processus pour gagner en efficacité.",
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/20",
      features: [
        "Workflows automatisés",
        "Intégrations API",
        "Scripts personnalisés",
        "Rapports automatiques"
      ]
    },
    {
      id: 4,
      icon: Cloud,
      title: "Infrastructure Cloud",
      description: "Déploiement et gestion d'infrastructures cloud performantes.",
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/20",
      features: [
        "AWS / DigitalOcean",
        "Docker & Kubernetes",
        "CI/CD pipelines",
        "Monitoring 24/7"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] -top-[200px] -right-[200px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] -bottom-[200px] -left-[200px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Ce que je </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">propose</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Des solutions complètes pour transformer vos idées en produits digitaux performants
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card glow on hover */}
              <div className={cn(
                "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-all duration-500",
                service.gradient,
                hoveredService === service.id && "opacity-30"
              )} />

              <AnimatedCard
                className={cn(
                  "relative h-full p-6 sm:p-8 rounded-2xl",
                  "bg-slate-800/50 backdrop-blur-sm",
                  "border border-slate-700/50",
                  "hover:border-slate-600/50",
                  "transition-all duration-500"
                )}
                delayIndex={index}
              >
                {/* Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                  "bg-gradient-to-br",
                  service.gradient,
                  "shadow-lg",
                  service.shadowColor,
                  "group-hover:scale-110 transition-transform duration-300"
                )}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 group/item">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center",
                        "bg-gradient-to-br",
                        service.gradient,
                        "opacity-80"
                      )}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="pt-4 border-t border-slate-700/50">
                  <Link
                    href="/devis"
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-medium",
                      "text-gray-400 hover:text-white",
                      "transition-all duration-300 group/link"
                    )}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative corner */}
                <div className={cn(
                  "absolute top-0 right-0 w-20 h-20 opacity-10",
                  "bg-gradient-to-bl rounded-tr-2xl rounded-bl-full",
                  service.gradient
                )} />
              </AnimatedCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link href="/devis">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Discuter de votre projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
