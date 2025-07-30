
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { RadioQuestion } from './RadioQuestion';
import { CheckboxQuestion } from './CheckboxQuestion';
import { TextareaQuestion } from './TextareaQuestion';
import { TextFieldQuestion } from './TextFieldQuestion';
import { SelectQuestion } from './SelectQuestion';
import { LucideIcon } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface ConditionalField {
  showWhen: string;
  component: string;
  name: string;
  placeholder?: string;
}

interface FormSectionProps {
  form: UseFormReturn<any>;
  section: {
    title: string;
    icon: LucideIcon;
    component: string;
    name: string;
    placeholder?: string;
    options?: Option[];
    conditionalField?: ConditionalField;
  };
  stepNumber: number;
  totalSteps: number;
}

export const FormSection: React.FC<FormSectionProps> = ({
  form,
  section,
  stepNumber,
  totalSteps,
}) => {
  const { title, icon: Icon } = section;

  const renderQuestion = () => {
    switch (section.component) {
      case 'RadioQuestion':
        return (
          <RadioQuestion
            form={form}
            name={section.name}
            options={section.options || []}
            conditionalField={section.conditionalField}
          />
        );
      case 'CheckboxQuestion':
        return (
          <CheckboxQuestion
            form={form}
            name={section.name}
            options={section.options || []}
            conditionalField={section.conditionalField}
          />
        );
      case 'TextareaQuestion':
        return (
          <TextareaQuestion
            form={form}
            name={section.name}
            placeholder={section.placeholder || ''}
          />
        );
      case 'TextField':
        return (
          <TextFieldQuestion
            form={form}
            name={section.name}
            placeholder={section.placeholder || ''}
          />
        );
      case 'SelectQuestion':
        return (
          <SelectQuestion
            form={form}
            name={section.name}
            options={section.options || []}
          />
        );
      default:
        return <p>Type de question non reconnu</p>;
    }
  };

  return (
    <div className="rounded-xl p-6 md:p-8 glass-ultra border border-white/10 shadow-lg relative overflow-hidden modern-card">
      {/* Gradient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20" />
      
      {/* Circuit-like decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
      
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="ml-3 text-xl font-semibold">{title}</h2>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          Étape {stepNumber}/{totalSteps}
        </span>
      </div>
      
      {/* Question content */}
      <div className="mt-6">{renderQuestion()}</div>
    </div>
  );
};
