
'use client'

import React, { useState } from 'react';
import AnimatedCard from '../ui/AnimatedCard';
import TechBadge from '../ui/TechBadge';
import { Button } from '../ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '../ui/card';
import { logger } from '@/lib/logger';
import OptimizedProjectImage from '../SEO/OptimizedProjectImage';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  mobileSrc: string;
  dimensions: { width: number; height: number };
  technologies: string[];
  github: string;
  preview: string;
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isMobile = useIsMobile();

  return (
    <AnimatedCard
      className="overflow-hidden group h-full border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-beige-400/30"
      delayIndex={isMobile ? 0 : index}
    >
      <Card className="h-full bg-transparent border-0 overflow-hidden">
        <div className="relative h-56 overflow-hidden">
          <OptimizedProjectImage
            src={project.image}
            alt={`${project.title} - ${project.description}`}
            title={project.title}
            width={project.dimensions.width}
            height={project.dimensions.height}
            className="w-full h-full"
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 p-3">
            <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
          </div>
        </div>
        <CardContent className="relative p-4 bg-card/95 backdrop-blur-sm">
          <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, isMobile ? 2 : 4).map((tech, i) => (
              <TechBadge key={i} name={tech} index={i} className="text-xs py-0.5 px-2" />
            ))}
            {project.technologies.length > (isMobile ? 2 : 4) && (
              <span className="text-xs py-0.5 px-2 bg-gray-100 dark:bg-gray-800 rounded-full text-muted-foreground">
                +{project.technologies.length - (isMobile ? 2 : 4)}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1" aria-label={`Voir le code source de ${project.title} sur GitHub`}>
              <Button variant="outline" size="sm" className="w-full">
                <Github className="mr-1 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href={project.preview} target="_blank" rel="noopener noreferrer" className="flex-1" aria-label={`Voir la démo de ${project.title}`}>
              <Button variant="default" size="sm" className="w-full bg-beige-400 hover:bg-beige-500 text-gray-900">
                <ExternalLink className="mr-1 h-4 w-4" />
                Voir
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
};

export default ProjectCard;
