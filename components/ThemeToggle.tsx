
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  className?: string;
}

const ThemeToggle = ({ theme, setTheme, className }: ThemeToggleProps) => {
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Apply theme class to document and body
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Sun className={cn(
        "h-[1.2rem] w-[1.2rem] transition-all duration-300",
        theme === 'dark' ? "text-gray-500 opacity-50" : "text-amber-500 opacity-100"
      )} />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className={cn(
          "transition-colors",
          theme === 'dark'
            ? "data-[state=checked]:bg-purple-500"
            : "data-[state=unchecked]:bg-amber-400"
        )}
      />
      <Moon className={cn(
        "h-[1.2rem] w-[1.2rem] transition-all duration-300",
        theme === 'dark' ? "text-purple-400 opacity-100" : "text-gray-400 opacity-50"
      )} />
    </div>
  );
};

export default ThemeToggle;
