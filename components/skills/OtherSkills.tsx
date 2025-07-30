
import React from 'react';
import TechBadge from '../ui/TechBadge';

interface OtherSkillsProps {
  skills: string[];
}

const OtherSkills = ({ skills }: OtherSkillsProps) => {
  return (
    <div className="mt-20 text-center">
      <p className="text-xl font-medium mb-8">
        Également expert en
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <TechBadge 
            key={skill} 
            name={skill} 
            index={index} 
            className="bg-beige-400/10 text-beige-600 dark:text-beige-300 border-beige-400/20" 
          />
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
