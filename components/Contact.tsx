
'use client'

import React, { useState } from 'react';
import AnimatedCard from './ui/AnimatedCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-10" />
        <div className="pattern-dots absolute inset-0 opacity-5" />
        
        {/* Animated gradient blobs */}
        <div 
          className="absolute w-[35vw] h-[35vw] blob gradient-aurora opacity-20 blur-3xl left-[-5vw] top-[20vh] float-element"
        />
        <div 
          className="absolute w-[30vw] h-[30vw] blob bg-gradient-to-tr from-pink-500 to-purple-500 opacity-15 blur-3xl right-[-5vw] bottom-[20vh] float-element"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="font-bold">Me Contacter</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            Prêt à donner vie à vos idées ? Contactez-moi pour discuter de votre projet et construire ensemble la solution digitale idéale pour votre entreprise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatedCard className="glass-ultra p-6 sm:p-8 border-white/10 modern-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige-400/20 mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-beige-500">
                    <path d="M20 6L9 17L4 12"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base text-white placeholder-gray-500 glass-ultra"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base text-white placeholder-gray-500 glass-ultra"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base text-white glass-ultra [&>option]:bg-gray-900 [&>option]:text-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="projet">Nouveau projet</option>
                    <option value="collaboration">Proposition de collaboration</option>
                    <option value="information">Demande d'information</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none text-sm sm:text-base text-white placeholder-gray-500 glass-ultra"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gradient-vibrant text-white shadow-lg shadow-purple-500/25 min-w-[180px] btn-glow hover:scale-105 transform transition-all duration-300 px-8 py-3 rounded-full font-medium"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatedCard>

          <div className="mt-16 text-center">
            <p className="text-xl mb-6">Ou contactez-moi directement</p>
            <div className="space-y-4">
              <a href="mailto:moussgaye0@gmail.com" className="inline-flex items-center space-x-2 text-lg hover:text-beige-500 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>moussgaye0@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
