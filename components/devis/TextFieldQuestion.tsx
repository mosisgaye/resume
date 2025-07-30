
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface TextFieldQuestionProps {
  form: UseFormReturn<any>;
  name: string;
  placeholder: string;
}

export const TextFieldQuestion: React.FC<TextFieldQuestionProps> = ({
  form,
  name,
  placeholder,
}) => {
  const { register } = form;

  return (
    <div className="space-y-4">
      <Input
        {...register(name)}
        placeholder={placeholder}
        className="border-border/50 focus:border-beige-400 focus:ring-beige-400/20"
      />
    </div>
  );
};
