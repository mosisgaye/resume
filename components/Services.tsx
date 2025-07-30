
import React from 'react';
import AnimatedCard from './ui/AnimatedCard';
import ServiceCircuitConnections from './services/ServiceCircuitConnections';
import ServiceCardStyles from './services/ServiceCardStyles';
import { Code2, Wrench, Zap, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Développement Web Fullstack",
      description: "Création d'interfaces captivantes et implémentation d'une logique métier optimisée pour des applications web performantes et évolutives.",
      features: [
        "Applications web réactives et performantes",
        "Architecture moderne et modulaire",
        "Expérience utilisateur intuitive et élégante",
        "Optimisation pour le référencement (SEO)"
      ]
    },
    {
      id: 2,
      icon: Wrench,
      title: "Maintenance & Évolution",
      description: "Suivi technologique constant et améliorations continues pour garantir la pérennité et la compétitivité de vos solutions digitales.",
      features: [
        "Mises à jour de sécurité régulières",
        "Corrections de bugs et optimisations",
        "Ajout de nouvelles fonctionnalités",
        "Amélioration continue des performances"
      ]
    },
    {
      id: 3,
      icon: Zap,
      title: "Automatisation des Processus",
      description: "Développement de scripts et d'outils personnalisés pour réduire les tâches répétitives et libérer du temps pour des activités à plus forte valeur ajoutée.",
      features: [
        "Automatisation des tâches répétitives",
        "Intégration entre différents services",
        "Workflows de traitement de données",
        "Tableaux de bord et rapports automatisés"
      ]
    },
    {
      id: 4,
      icon: Cloud,
      title: "Infrastructure Scalable",
      description: "Mise en place et optimisation des ressources cloud pour garantir des performances optimales tout en maîtrisant les coûts.",
      features: [
        "Déploiement sur infrastructures cloud",
        "Containerisation avec Docker",
        "Pipelines CI/CD pour déploiements automatisés",
        "Monitoring et alerting proactif"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-10" />
        <div className="pattern-dots absolute inset-0 opacity-5" />
        
        {/* Animated gradient blobs */}
        <div 
          className="absolute w-[40vw] h-[40vw] blob gradient-vibrant opacity-20 blur-3xl right-[-10vw] bottom-[10vh] float-element"
        />
        <div 
          className="absolute w-[35vw] h-[35vw] blob bg-gradient-to-br from-cyan-500 to-blue-500 opacity-15 blur-3xl left-[-10vw] top-[10vh] float-element"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Circuit connections between service cards */}
      <ServiceCircuitConnections />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="font-bold">Mes Services</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            Des solutions sur mesure pour répondre à vos besoins digitaux et propulser votre entreprise vers le succès.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10">
          {services.map((service, index) => (
            <div key={service.id} className="relative group">
              <div className="relative">
                {/* Card glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <AnimatedCard 
                  className="glass-ultra p-6 sm:p-8 flex flex-col h-full modern-card border-white/20 bg-white/5" 
                  delayIndex={index}
                >
                  {/* Service Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110 transform">
                      <service.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="text-green-400 mr-2 group-hover/item:scale-125 transition-transform font-bold">✓</span>
                        <span className="text-gray-200 group-hover/item:text-white transition-colors text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Circuit pulses */}
                  <div className="top-pulse"></div>
                  <div className="right-pulse"></div>
                  <div className="bottom-pulse"></div>
                  <div className="left-pulse"></div>
                </AnimatedCard>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Discuter de votre projet
          </a>
        </div>
      </div>
      
      <ServiceCardStyles />
    </section>
  );
};

export default Services;
