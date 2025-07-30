
'use client'

import React, { useRef, useEffect, useState } from 'react';
import CircuitConnections from './ui/CircuitConnections';
import SkillCard from './skills/SkillCard';
import TechMarquee from './skills/TechMarquee';
import OtherSkills from './skills/OtherSkills';
import CircuitStyles from './skills/CircuitStyles';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills = [
    "Next.js", "React JS", "TypeScript", "Tailwind CSS", "Material UI", "Vite"
  ];

  const backendSkills = [
    "Node.js", "NestJS", "Express.js", "Prisma", "PostgreSQL", "MySQL", "Supabase", "Python"
  ];
  
  const infrastructureSkills = [
    "Docker", "AWS", "DigitalOcean", "n8n", "Zapier", "CI/CD"
  ];
  
  const otherSkills = [
    "HTML & CSS", "JavaScript", "Gestion de bases de données", "RESTful API", "GraphQL"
  ];

  const allTechLogos = [
    ...frontendSkills, ...backendSkills, ...infrastructureSkills
  ].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      description: "Création d'interfaces dynamiques et réactives pour une expérience utilisateur optimale.",
      skills: frontendSkills
    },
    {
      title: "Backend",
      description: "Développement d'applications robustes et scalables avec des architectures modernes.",
      skills: backendSkills
    },
    {
      title: "Infrastructure",
      description: "Déploiement et maintenance d'infrastructures performantes, sécurisées et évolutives.",
      skills: infrastructureSkills
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-10" />
        <div className="pattern-dots absolute inset-0 opacity-5" />
        
        {/* Animated gradient blobs */}
        <div 
          className="absolute w-[40vw] h-[40vw] blob gradient-aurora opacity-20 left-[-20vw] top-[10vh] float-element"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute w-[30vw] h-[30vw] blob bg-gradient-to-br from-purple-500 to-pink-500 opacity-15 right-[-10vw] bottom-[20vh] float-element"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Circuit connections between skill cards */}
      <CircuitConnections />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 neon-text">Mes Compétences</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            Un ensemble complet de compétences techniques pour créer des applications web modernes, performantes et scalables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
              delayIndex={index}
            />
          ))}
        </div>

        <TechMarquee 
          technologies={allTechLogos} 
          isInView={isInView} 
        />

        <OtherSkills skills={otherSkills} />
      </div>

      <CircuitStyles />
    </section>
  );
};

export default Skills;
