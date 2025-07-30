
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { TextFieldQuestion } from './TextFieldQuestion';

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

interface CheckboxQuestionProps {
  form: UseFormReturn<any>;
  name: string;
  options: Option[];
  conditionalField?: ConditionalField;
}

export const CheckboxQuestion: React.FC<CheckboxQuestionProps> = ({
  form,
  name,
  options,
  conditionalField,
}) => {
  const { watch, setValue } = form;
  
  const selectedValues = watch(name) || [];
  
  const handleCheckboxChange = (checked: boolean, value: string) => {
    if (checked) {
      setValue(name, [...selectedValues, value]);
    } else {
      setValue(name, selectedValues.filter((v: string) => v !== value));
    }
  };
  
  const isOptionSelected = (value: string) => selectedValues.includes(value);
  
  const showConditionalField = conditionalField && isOptionSelected(conditionalField.showWhen);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-3 rounded-lg border border-border/50 p-4 transition-all duration-200 hover:bg-accent/5"
          >
            <Checkbox
              id={`${name}-${option.value}`}
              checked={isOptionSelected(option.value)}
              onCheckedChange={(checked) => 
                handleCheckboxChange(checked as boolean, option.value)
              }
              className="data-[state=checked]:border-beige-400 data-[state=checked]:bg-beige-400 data-[state=checked]:text-primary-foreground"
            />
            <Label
              htmlFor={`${name}-${option.value}`}
              className="flex-grow cursor-pointer font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>

      {showConditionalField && (
        <div className="mt-4 pl-4 border-l-2 border-beige-400/30">
          <TextFieldQuestion
            form={form}
            name={conditionalField.name}
            placeholder={conditionalField.placeholder || ''}
          />
        </div>
      )}
    </div>
  );
};
