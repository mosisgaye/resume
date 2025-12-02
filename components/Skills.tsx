'use client'

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code2, Server, Cloud, Cpu, Layers, Database } from 'lucide-react';

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      description: "Interfaces modernes et réactives",
      skills: [
        { name: "Next.js", level: 95 },
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 85 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      description: "APIs robustes et scalables",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "NestJS", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Prisma", level: 85 },
        { name: "Python", level: 75 },
      ]
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      description: "Déploiement et DevOps",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "Vercel", level: 90 },
        { name: "DigitalOcean", level: 80 },
      ]
    }
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL",
    "Docker", "AWS", "Tailwind", "Prisma", "GraphQL", "Redis"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] -top-[200px] -left-[200px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] -bottom-[200px] -right-[200px]" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Stack Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Mes </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Compétences</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies maîtrisées pour créer des applications web performantes et évolutives
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300",
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/50"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "p-6 sm:p-8 rounded-2xl",
            "bg-slate-800/30 backdrop-blur-sm",
            "border border-slate-700/50"
          )}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                "bg-gradient-to-br",
                skillCategories[activeCategory].gradient
              )}>
                {React.createElement(skillCategories[activeCategory].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
                <p className="text-gray-400 text-sm">{skillCategories[activeCategory].description}</p>
              </div>
            </div>

            {/* Skills grid with progress bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={cn(
                    "group",
                    isInView ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out",
                        skillCategories[activeCategory].gradient
                      )}
                      style={{
                        width: isInView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div className="mt-16 sm:mt-20 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="mx-4 px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-gray-300 font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Additional skills */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 mb-6">Autres compétences</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "REST API", "GraphQL", "Agile/Scrum", "UI/UX Design", "SEO"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30 text-gray-300 text-sm hover:border-slate-600/50 hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
