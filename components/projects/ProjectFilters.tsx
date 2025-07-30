
import React from 'react';
import { cn } from '@/lib/utils';

export interface CategoryType {
  id: string;
  name: string;
}

interface ProjectFiltersProps {
  categories: CategoryType[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isMobile: boolean;
}

const ProjectFilters = ({ 
  categories, 
  activeCategory,
  setActiveCategory,
  isMobile 
}: ProjectFiltersProps) => {
  return (
    <div className={cn(
      "flex justify-start md:justify-center gap-2 mb-6 md:mb-8",
      isMobile ? "overflow-x-auto pb-2 px-2 -mx-2 whitespace-nowrap" : ""
    )}>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0 ${
            activeCategory === category.id
              ? 'bg-beige-400 text-gray-900'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
          aria-label={`Filtrer par ${category.name}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
