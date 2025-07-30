
import React from 'react';
import ProjectShowcase from './projects/ProjectShowcase';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-[40vw] h-[40vw] sm:w-[35vw] sm:h-[35vw] rounded-full bg-beige-400/5 blur-3xl top-[10vh] right-[-10vw]"
          style={{ transform: 'translateZ(0)' }}
        />
        <div 
          className="absolute w-[35vw] h-[35vw] sm:w-[30vw] sm:h-[30vw] rounded-full bg-gray-500/5 blur-3xl bottom-[10vh] left-[-10vw]"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>
    

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="font-bold">Mes Projets</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Découvrez mes réalisations récentes, des applications web modernes et performantes
            qui répondent aux besoins spécifiques de chaque client.
          </p>
        </div>

        <ProjectShowcase />

        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base md:text-lg">
            Chaque projet est une opportunité d'innover et de créer des solutions sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary inline-flex items-center">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Discuter de votre projet
            </a>
            <a href="/devis" className="btn-secondary inline-flex items-center">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
