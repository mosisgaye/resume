
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card rounded-xl p-8 shadow-lg flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </motion.div>
      </div>
      <h2 className="text-2xl font-bold mb-3">Merci pour votre demande!</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Nous avons bien reçu votre demande de devis. Notre équipe l'examinera et vous contactera dans les plus brefs délais.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-muted-foreground">Vous allez être redirigé vers la page d'accueil...</p>
      </motion.div>
    </motion.div>
  );
};

export default SuccessSection;
