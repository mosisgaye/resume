
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Option {
  value: string;
  label: string;
}

interface SelectQuestionProps {
  form: UseFormReturn<any>;
  name: string;
  options: Option[];
}

export const SelectQuestion: React.FC<SelectQuestionProps> = ({
  form,
  name,
  options,
}) => {
  const { setValue } = form;

  return (
    <div className="space-y-4">
      <Select onValueChange={(value) => setValue(name, value)}>
        <SelectTrigger 
          className="w-full border-border/50 focus:border-beige-400 focus:ring-beige-400/20"
        >
          <SelectValue placeholder="Sélectionnez une option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
