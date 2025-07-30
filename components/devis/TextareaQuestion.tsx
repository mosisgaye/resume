
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';

interface TextareaQuestionProps {
  form: UseFormReturn<any>;
  name: string;
  placeholder: string;
}

export const TextareaQuestion: React.FC<TextareaQuestionProps> = ({
  form,
  name,
  placeholder,
}) => {
  const { register } = form;

  return (
    <div className="space-y-4">
      <Textarea
        {...register(name)}
        placeholder={placeholder}
        className="min-h-[160px] resize-none border-border/50 focus:border-beige-400 focus:ring-beige-400/20"
      />
    </div>
  );
};
