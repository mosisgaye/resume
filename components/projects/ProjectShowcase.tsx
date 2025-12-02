'use client'

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  preview?: string;
  gradient: string;
}

const projectsShowcase: ProjectData[] = [
  {
    id: 1,
    title: "BritPetShop",
    description: "E-commerce premium pour animaux de compagnie avec catalogue de produits britanniques de qualité.",
    category: "E-commerce",
    image: "/images/optimized/britpetshop.webp",
    technologies: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    features: ["Catalogue produits", "Paiement sécurisé"],
    preview: "https://www.britpetshop.com/",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: 2,
    title: "ComparePrix",
    description: "Plateforme de comparaison de forfaits mobiles et box Internet avec tableaux comparatifs dynamiques.",
    category: "SaaS",
    image: "/images/optimized/compareprix.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind", "API REST"],
    features: ["Comparaison temps réel", "Filtres intelligents"],
    preview: "https://ComparePrix.net",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Nooraya Voyage",
    description: "Application web complète pour agence de voyage avec système de réservation intégré.",
    category: "Travel",
    image: "/images/optimized/noorayavoyage.webp",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    features: ["Réservation en ligne", "Multi-langues"],
    preview: "https://noorayavoyage.com",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    title: "Simss Store",
    description: "E-commerce moderne pour appareils de défroissage avec processus d'achat optimisé.",
    category: "E-commerce",
    image: "/images/optimized/simss.webp",
    technologies: ["React", "Redux", "PostgreSQL", "Stripe"],
    features: ["Panier dynamique", "Checkout sécurisé"],
    preview: "https://simss.nl",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Simpsune",
    description: "Boutique en ligne spécialisée dans les accessoires téléphoniques avec UX optimisée.",
    category: "E-commerce",
    image: "/images/optimized/simpsune.webp",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    features: ["Catalogue produits", "Wishlist"],
    preview: "https://simpsune.com",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Vaderhart",
    description: "Plateforme de coaching santé et bien-être avec suivi personnalisé des clients.",
    category: "Health",
    image: "/images/optimized/vader.webp",
    technologies: ["React", "Firebase", "Material UI", "Zoom API"],
    features: ["Vidéo consultations", "Suivi progrès"],
    github: "https://github.com/mosisgaye/vader",
    preview: "https://vader-delta.vercel.app",
    gradient: "from-rose-500 to-red-500",
  }
];

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'E-commerce', 'SaaS', 'Travel', 'Health'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsShowcase
    : projectsShowcase.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              selectedCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50"
            )}
          >
            {cat === 'all' ? 'Tous les projets' : cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "group relative rounded-2xl overflow-hidden",
              "bg-slate-800/30 backdrop-blur-sm",
              "border border-slate-700/50",
              "hover:border-slate-600/50",
              "transition-all duration-500",
              "animate-fade-in opacity-0"
            )}
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Glow effect on hover */}
            <div className={cn(
              "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-all duration-500",
              project.gradient,
              hoveredProject === project.id && "opacity-20"
            )} />

            {/* Image container */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
              <div
                className="absolute inset-0 transition-transform ease-out"
                style={{
                  transitionDuration: '8000ms',
                  transform: hoveredProject === project.id
                    ? 'translateY(calc(-100% + 224px))'
                    : 'translateY(0)'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* Overlay - subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Category badge */}
              <div className={cn(
                "absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-semibold text-white",
                "bg-gradient-to-r shadow-lg",
                project.gradient
              )}>
                {project.category}
              </div>

              {/* Quick link */}
              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "absolute top-4 right-4 w-10 h-10 rounded-xl",
                    "bg-white/10 backdrop-blur-sm border border-white/20",
                    "flex items-center justify-center",
                    "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
                    "transition-all duration-300",
                    "hover:bg-white/20"
                  )}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </a>
              )}
            </div>

            {/* Content */}
            <div className="relative p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-700/50 text-gray-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6 text-xs text-gray-500">
                {project.features.map((feature, i) => (
                  <span key={i} className="flex items-center gap-1">
                    <span className={cn("w-1 h-1 rounded-full bg-gradient-to-r", project.gradient)} />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex-1 inline-flex items-center justify-center gap-2",
                      "px-4 py-2.5 rounded-xl text-sm font-medium",
                      "bg-gradient-to-r text-white",
                      "hover:opacity-90 transition-opacity",
                      project.gradient
                    )}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white transition-all border border-slate-600/50"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;