
import React from 'react';
import ProjectCard, { ProjectType } from './ProjectCard';
import { Button } from '../ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';

interface ProjectGridProps {
  projects: ProjectType[];
  isMobile: boolean;
  visibleProjects: number;
  setVisibleProjects: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectGrid = ({ 
  projects, 
  isMobile,
  visibleProjects,
  setVisibleProjects 
}: ProjectGridProps) => {
  const displayedProjects = projects.slice(0, visibleProjects);
  
  
  return (
    <>
      {isMobile ? (
        // Carousel view for mobile
        <div className="mt-6">
          <Carousel className="w-full">
            <CarouselContent>
              {displayedProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProjectCard project={project} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-1" />
              <CarouselNext className="static transform-none mx-1" />
            </div>
          </Carousel>
        </div>
      ) : (
        // Grid view for desktop
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}

      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            onClick={() => setVisibleProjects(prev => Math.min(prev + 3, projects.length))}
            className="mx-auto border-beige-400/30 hover:bg-beige-400/10 hover:border-beige-400/50"
          >
            Voir plus de projets
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
