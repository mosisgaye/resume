
import React from 'react';
import TechBadge from '../ui/TechBadge';
import AnimatedCard from '../ui/AnimatedCard';

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  delayIndex: number;
}

const SkillCard = ({ title, description, skills, delayIndex }: SkillCardProps) => {
  const getGradientByTitle = (title: string) => {
    switch(title.toLowerCase()) {
      case 'frontend': return 'from-blue-500 to-cyan-500';
      case 'backend': return 'from-purple-500 to-pink-500';
      case 'infrastructure': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <div className="relative group">
      <div className="relative">
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${getGradientByTitle(title)} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500`} />
        
        <AnimatedCard 
          className="glass-ultra p-8 z-10 relative modern-card border-white/10" 
          delayIndex={delayIndex}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${getGradientByTitle(title)} mr-3 shadow-lg`}>
              <span className="text-white text-lg">⚡</span>
            </span>
            {title}
          </h3>
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <TechBadge key={skill} name={skill} index={index} />
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default SkillCard;
