
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { formSchema, FormValues, formSections } from '@/components/devis/formConfig';
import { logger } from '@/lib/logger';

export const useDevisForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      siteStatus: '',
      siteStatusOther: '',
      objectives: [],
      objectivesOther: '',
      challenges: '',
      automation: [],
      automationOther: '',
      budget: '',
      companySize: '',
      industry: '',
      designPreferences: '',
      timeline: '',
      specificFeatures: '',
    },
  });

  const progressPercentage = ((currentStep + 1) / formSections.length) * 100;

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToNextStep = () => {
    if (currentStep < formSections.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      form.handleSubmit(handleSubmit)();
    }
  };

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      logger.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Votre demande a été envoyée avec succès!');
      setCompleted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      logger.error('Error submitting form:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  return {
    form,
    currentStep,
    isSubmitting,
    completed,
    progressPercentage,
    goToPreviousStep,
    goToNextStep,
    currentSection: formSections[currentStep],
    totalSteps: formSections.length,
  };
};
