'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { useTheme } from '@/hooks/use-theme';
import { MapPin, Users, Briefcase, Award, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ServicesMaroc() {
  const { theme, setTheme } = useTheme();
  
  const services = [
    {
      title: "Développement Web Casablanca",
      description: "Solutions web innovantes pour les entreprises marocaines en croissance",
      features: [
        "Sites web corporate modernes",
        "Plateformes e-commerce B2B/B2C",
        "Applications métier sur mesure",
        "SEO local Maroc optimisé"
      ]
    },
    {
      title: "Applications Mobile Maroc",
      description: "Apps iOS/Android adaptées au marché maghrébin et MENA",
      features: [
        "Applications natives et hybrides",
        "Intégration paiements CMI/PayZone",
        "Support multilingue AR/FR",
        "Géolocalisation et maps"
      ]
    },
    {
      title: "Consulting Digital Rabat",
      description: "Accompagnement stratégique pour la transformation digitale au Maroc",
      features: [
        "Audit digital et roadmap",
        "Architecture cloud AWS/Azure",
        "Formation équipes techniques",
        "Support et maintenance 24/7"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Youssef Benani",
      company: "E-commerce Casablanca",
      text: "Moussa a développé notre marketplace B2B. Sa compréhension du marché marocain est un vrai atout."
    },
    {
      name: "Leila El Idrissi",
      company: "FinTech Rabat",
      text: "Application bancaire livrée dans les délais avec une qualité exceptionnelle. Je recommande vivement."
    }
  ];

  const cities = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès", "Oujda", "Kénitra", "Tétouan"
  ];

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <main className="pt-24 pb-20 min-h-screen">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 -z-10">
            <div className="gradient-mesh absolute inset-0 opacity-10" />
            <div className="pattern-dots absolute inset-0 opacity-5" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
                  Développeur Web au Maroc
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Services de développement web et mobile professionnels au Maroc.
                Expert fullstack pour startups et entreprises à Casablanca, Rabat et tout le Royaume.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>Tout le Maroc</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>+20 Startups</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-red-400" />
                  <span>Solutions MENA</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center">
                  Obtenir un Devis
                </Link>
                <a href="https://wa.me/221606213027" className="btn-secondary inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Business
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Services Digitaux au Maroc
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-ultra p-6 rounded-xl border border-white/20 hover:scale-105 transform transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-ultra p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Présent dans les Principales Villes du Maroc
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {cities.map((city) => (
                  <span key={city} className="px-4 py-2 glass-ultra rounded-full border border-red-500/30 text-sm">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-300">
                Collaboration à distance disponible pour tout le Royaume
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
                Témoignages Clients Maroc
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-ultra p-6 rounded-xl border border-white/20">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-ultra p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à Développer Votre Projet au Maroc ?
              </h2>
              <p className="text-gray-300 mb-8">
                Expert en solutions digitales pour le marché marocain et MENA.
                Devis personnalisé gratuit sous 24h.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>Support WhatsApp</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>GMT+1 Casablanca</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>Devis 24h</span>
                </div>
              </div>

              <Link href="/#contact" className="btn-primary inline-flex items-center">
                Lancer Mon Projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}