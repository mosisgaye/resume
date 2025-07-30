'use client'

import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
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
}

const projectsShowcase: ProjectData[] = [
  {
    id: 1,
    title: "ComparePrix",
    description: "Plateforme de comparaison de forfaits mobiles et box Internet avec tableaux comparatifs dynamiques et filtres avancés.",
    category: "SaaS",
    image: "/images/optimized/compareprix.webp",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API REST"],
    features: ["Comparaison en temps réel", "Filtres intelligents", "Recommandations personnalisées"],
    preview: "https://compareprix.com",
  },
  {
    id: 2,
    title: "Nooraya Voyage",
    description: "Application web complète pour une agence de voyage avec système de réservation intégré et gestion des clients.",
    category: "Travel",
    image: "/images/optimized/noorayavoyage.webp",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API", "EmailJS"],
    features: ["Réservation en ligne", "Paiement sécurisé", "Espace client", "Multi-langues"],
    preview: "https://noorayavoyage.com",
  },
  {
    id: 3,
    title: "Simss Store",
    description: "E-commerce moderne pour appareils de défroissage avec interface intuitive et processus d'achat optimisé.",
    category: "E-commerce",
    image: "/images/optimized/simss.webp",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Stripe"],
    features: ["Panier dynamique", "Checkout sécurisé", "Gestion des stocks", "Reviews clients"],
    github: "https://github.com/username/simss",
    preview: "https://simss.com",
  },
  {
    id: 4,
    title: "Simpsune",
    description: "Boutique en ligne spécialisée dans les accessoires téléphoniques avec design minimaliste et UX optimisée.",
    category: "E-commerce",
    image: "/images/optimized/simpsune.webp",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    features: ["Catalogue produits", "Filtres avancés", "Wishlist", "Quick view"],
    preview: "https://simpsune.com",
  },
  {
    id: 5,
    title: "Vaderhart",
    description: "Plateforme de coaching santé et bien-être avec système de réservation et suivi personnalisé des clients.",
    category: "Health & Wellness",
    image: "/images/optimized/vader.webp",
    technologies: ["React", "Firebase", "Material UI", "Google Calendar API", "Zoom API"],
    features: ["Réservation en ligne", "Vidéo consultations", "Suivi des progrès", "Blog intégré"],
    github: "https://github.com/username/vaderhart",
    preview: "https://vaderhart.com",
  }
];

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'E-commerce', 'SaaS', 'Travel', 'Health & Wellness'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projectsShowcase 
    : projectsShowcase.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "capitalize transition-all",
              selectedCategory === cat 
                ? "bg-beige-400 text-gray-900 hover:bg-beige-500" 
                : "hover:border-beige-400/50"
            )}
          >
            {cat === 'all' ? 'Tous' : cat}
          </Button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "group relative rounded-xl overflow-hidden",
              "bg-card border border-border/50",
              "hover:border-beige-400/30 transition-all duration-500",
              "animate-fade-in opacity-0"
            )}
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image container avec scroll au hover */}
            <div className="relative h-[300px] sm:h-[350px] overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div 
                className={cn(
                  "absolute inset-0 transition-transform duration-[10000ms] ease-in-out",
                  hoveredProject === project.id ? "transform-gpu" : ""
                )}
                style={{
                  transform: hoveredProject === project.id 
                    ? 'translateY(calc(-100% + 350px))' 
                    : 'translateY(0)'
                }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot de ${project.title}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quick actions */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 bg-white/90 hover:bg-white"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>

              {/* Category badge */}
              <Badge 
                className="absolute top-4 left-4 bg-beige-400/90 text-gray-900 hover:bg-beige-500"
              >
                {project.category}
              </Badge>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-beige-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              {/* Features */}
              <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                {project.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-beige-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-3">
                {project.preview && (
                  <a 
                    href={project.preview} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full bg-beige-400 hover:bg-beige-500 text-gray-900"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Voir le site
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
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