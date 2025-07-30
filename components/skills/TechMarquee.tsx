
'use client'

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  BarChart, FileCode, Database, Server, 
  Globe, Monitor, Cpu, Braces, Code, Workflow,
  FileJson, GitBranch, Layout 
} from 'lucide-react';
import { shouldReduceMotion } from '@/lib/mobile-utils';

interface TechMarqueeProps {
  technologies: string[];
  isInView: boolean;
}

// Map of technology names to their corresponding icons
const techIcons: Record<string, React.ElementType> = {
  'Next.js': Globe,
  'React JS': Code,
  'TypeScript': FileJson,
  'Tailwind CSS': Layout,
  'Material UI': Monitor,
  'Vite': Braces,
  'Node.js': Server,
  'NestJS': Server,
  'Express.js': Server,
  'Prisma': Database,
  'PostgreSQL': Database,
  'MySQL': Database,
  'Supabase': Database,
  'Python': FileCode,
  'Docker': Cpu,
  'AWS': Server,
  'DigitalOcean': Server,
  'n8n': Workflow,
  'Zapier': Workflow,
  'CI/CD': GitBranch
};

const TechMarquee = ({ technologies, isInView }: TechMarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = React.useState(false);
  
  useEffect(() => {
    // Check if animations should be reduced
    setReduceMotion(shouldReduceMotion());
  }, []);
  
  // Only use half the technologies to reduce DOM size
  const optimizedTechnologies = technologies.slice(0, Math.ceil(technologies.length / 2));
  
  // Duplicate the array to ensure continuous scrolling
  const displayTechnologies = [...optimizedTechnologies, ...optimizedTechnologies];
  
  return (
    <div className="relative overflow-hidden h-20 my-12 md:my-16 mx-auto max-w-[90vw] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent">
      <div 
        ref={marqueeRef}
        className={cn(
          "flex whitespace-nowrap",
          isInView && !reduceMotion ? "animate-marquee" : ""
        )}
        style={{ animationDuration: reduceMotion ? '0s' : '30s' }}
      >
        {displayTechnologies.map((tech, index) => {
          const IconComponent = techIcons[tech] || BarChart;
          
          return (
            <div 
              key={`${tech}-${index}`} 
              className="mx-6 py-3 px-6 bg-card/30 rounded-full border border-border/20 backdrop-blur-sm flex items-center"
            >
              <IconComponent className="w-5 h-5 mr-2 text-beige-400" />
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
