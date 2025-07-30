'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/header';
import { Progress } from '@/components/ui/progress';
import { FormSection } from '@/components/devis/FormSection';
import { useTheme } from '@/hooks/use-theme';
import { useDevisForm } from '@/hooks/use-devis-form';
import SuccessSection from '@/components/devis/SuccessSection';
import FormNavigation from '@/components/devis/FormNavigation';
import Footer from '@/components/Footer';

export default function DevisPage() {
  const { theme, setTheme } = useTheme();
  const {
    form,
    currentStep,
    isSubmitting,
    completed,
    progressPercentage,
    goToPreviousStep,
    goToNextStep,
    currentSection,
    totalSteps,
  } = useDevisForm();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <main className="pt-24 pb-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="gradient-mesh absolute inset-0 opacity-10" />
          <div className="pattern-dots absolute inset-0 opacity-5" />
          
          <div 
            className="absolute w-[45vw] h-[45vw] blob gradient-aurora opacity-15 left-[-20vw] top-[5vh] float-element"
          />
          <div 
            className="absolute w-[35vw] h-[35vw] blob bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 right-[-15vw] bottom-[10vh] float-element"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 neon-text">Demander un devis</span>
          </h1>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Répondez à ces quelques questions pour nous aider à comprendre votre projet et vous fournir un devis personnalisé.
          </p>

          <div className="relative mb-12 mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm" />
            <Progress 
              value={progressPercentage} 
              className="h-2 bg-gray-200/20 dark:bg-gray-700/20 relative" 
            />
          </div>

          {completed ? (
            <SuccessSection />
          ) : (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <FormSection
                    form={form}
                    section={currentSection}
                    stepNumber={currentStep + 1}
                    totalSteps={totalSteps}
                  />
                </motion.div>
              </AnimatePresence>

              <FormNavigation
                currentStep={currentStep}
                totalSteps={totalSteps}
                isSubmitting={isSubmitting}
                onPrevious={goToPreviousStep}
                onNext={goToNextStep}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}