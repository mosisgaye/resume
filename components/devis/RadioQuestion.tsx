
'use client'

import React, { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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

interface RadioQuestionProps {
  form: UseFormReturn<any>;
  name: string;
  options: Option[];
  conditionalField?: ConditionalField;
}

export const RadioQuestion: React.FC<RadioQuestionProps> = ({
  form,
  name,
  options,
  conditionalField,
}) => {
  const { control, watch, setValue } = form;
  const selectedValue = watch(name);
  
  // When this component mounts and no value is selected yet, select the first option
  useEffect(() => {
    if (!selectedValue && options.length > 0) {
      setValue(name, options[0].value);
    }
  }, [setValue, selectedValue, options, name]);

  const showConditionalField = conditionalField && selectedValue === conditionalField.showWhen;

  return (
    <div className="space-y-6">
      <RadioGroup
        value={selectedValue}
        onValueChange={(value) => setValue(name, value)}
        className="space-y-3"
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="flex items-center space-x-3 rounded-lg border border-border/50 p-4 transition-all duration-200 hover:bg-accent/5"
          >
            <RadioGroupItem
              value={option.value}
              id={`${name}-${option.value}`}
              className="data-[state=checked]:border-beige-400 data-[state=checked]:text-beige-400"
            />
            <Label
              htmlFor={`${name}-${option.value}`}
              className="flex-grow cursor-pointer font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

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
