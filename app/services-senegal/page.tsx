'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { useTheme } from '@/hooks/use-theme';
import { MapPin, Users, Briefcase, Award, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ServicesSenegal() {
  const { theme, setTheme } = useTheme();
  
  const services = [
    {
      title: "Développement Web à Dakar",
      description: "Création de sites web modernes et performants pour les entreprises sénégalaises",
      features: [
        "Sites vitrines professionnels",
        "E-commerce adaptés au marché local",
        "Applications web sur mesure",
        "Optimisation SEO Sénégal"
      ]
    },
    {
      title: "Applications Mobiles Sénégal",
      description: "Développement d'applications mobiles innovantes pour le marché ouest-africain",
      features: [
        "Applications iOS et Android",
        "Solutions de paiement mobile (Wave, Orange Money)",
        "Applications offline-first",
        "Interface en français et wolof"
      ]
    },
    {
      title: "Transformation Digitale",
      description: "Accompagnement des entreprises sénégalaises dans leur transition numérique",
      features: [
        "Audit digital complet",
        "Stratégie digitale sur mesure",
        "Formation des équipes",
        "Support technique continu"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Amadou Diallo",
      company: "Startup FinTech Dakar",
      text: "Excellent travail sur notre plateforme de paiement mobile. Moussa comprend parfaitement les besoins du marché sénégalais."
    },
    {
      name: "Fatou Sow",
      company: "E-commerce Mode",
      text: "Notre boutique en ligne a triplé ses ventes grâce à l'expertise de Moussa. Très professionnel et réactif."
    }
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
                  Développeur Web au Sénégal
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Services de développement web professionnel à Dakar et dans tout le Sénégal.
                Expert en création de sites web, applications mobiles et solutions e-commerce.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>Basé à Dakar</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span>+50 Clients Satisfaits</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>5 Ans d'Expérience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center">
                  Demander un Devis Gratuit
                </Link>
                <a href="https://wa.me/221606213027" className="btn-secondary inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Services Disponibles au Sénégal
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">
                Témoignages Clients au Sénégal
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
                Prêt à Digitaliser Votre Entreprise au Sénégal ?
              </h2>
              <p className="text-gray-300 mb-8">
                Contactez-moi pour discuter de votre projet. Devis gratuit en 24h.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+221 60 621 30 27</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>contact@webcraft-agency.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span>Lun-Ven 9h-18h GMT</span>
                </div>
              </div>

              <Link href="/#contact" className="btn-primary inline-flex items-center">
                Commencer Mon Projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}