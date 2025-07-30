
import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Loader2 } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  isSubmitting,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 0}
        className="flex items-center px-4 py-2 text-sm font-medium rounded-md 
                  transition-all duration-200
                  hover:bg-accent/10 disabled:opacity-50 disabled:cursor-not-allowed
                  hover:-translate-y-0.5 active:translate-y-0"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Précédent
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isSubmitting}
        className="flex items-center px-6 py-2.5 text-sm font-medium text-white
                  bg-beige-400 rounded-md hover:bg-beige-500
                  transition-all duration-200 shadow-sm
                  hover:-translate-y-0.5 active:translate-y-0
                  disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Envoi en cours...
          </>
        ) : currentStep === totalSteps - 1 ? (
          <>
            Terminer
            <CheckCircle className="w-4 h-4 ml-2" />
          </>
        ) : (
          <>
            Suivant
            <ChevronRight className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </div>
  );
};

export default FormNavigation;
