'use client';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import { useTheme } from '@/hooks/use-theme';
import { MapPin, Users, Briefcase, Award, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ServicesFrance() {
  const { theme, setTheme } = useTheme();
  
  const services = [
    {
      title: "Développeur React Freelance Paris",
      description: "Expert React.js et Next.js pour vos projets web modernes en France",
      features: [
        "Applications React performantes",
        "Sites Next.js avec SSR/SSG",
        "Progressive Web Apps (PWA)",
        "Optimisation Core Web Vitals"
      ]
    },
    {
      title: "Consultant Node.js France",
      description: "Architecture backend scalable et APIs RESTful/GraphQL professionnelles",
      features: [
        "APIs Node.js haute performance",
        "Microservices avec NestJS",
        "Intégration bases de données",
        "DevOps et CI/CD"
      ]
    },
    {
      title: "Mission Fullstack Remote",
      description: "Développeur fullstack disponible pour missions longue durée en télétravail",
      features: [
        "Stack MERN/MEAN complète",
        "TypeScript et tests unitaires",
        "Méthodologie Agile/Scrum",
        "Code review et mentoring"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Pierre Dubois",
      company: "Startup Tech Paris",
      text: "Moussa a transformé notre MVP en une plateforme robuste. Son expertise technique et sa rigueur sont remarquables."
    },
    {
      name: "Sophie Martin",
      company: "Agence Digitale Lyon",
      text: "Collaboration excellente sur plusieurs projets React. Toujours disponible et force de proposition."
    }
  ];

  const cities = [
    "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                  Développeur Freelance en France
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert React.js, Next.js et Node.js disponible pour vos projets en France.
                Missions sur site à Paris ou 100% remote depuis toute la France.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Paris & Remote</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                  <span>+30 Clients France</span>
                </div>
                <div className="flex items-center gap-2 glass-ultra px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-red-400" />
                  <span>TJM Compétitif</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary inline-flex items-center">
                  Discuter de Votre Projet
                </Link>
                <a href="mailto:moussgaye0@gmail.com" className="btn-secondary inline-flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Direct
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Services Freelance en France
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
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
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
                Disponible dans Toute la France
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {cities.map((city) => (
                  <span key={city} className="px-4 py-2 glass-ultra rounded-full border border-blue-500/30 text-sm">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-300">
                Et bien d'autres villes en remote !
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                Témoignages Clients France
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
                Besoin d'un Développeur React/Node.js en France ?
              </h2>
              <p className="text-gray-300 mb-8">
                Disponible immédiatement pour missions courtes ou longues. Remote ou sur site.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span>Freelance/Portage</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>Disponible ASAP</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Award className="w-5 h-5 text-red-400" />
                  <span>5+ ans d'XP</span>
                </div>
              </div>

              <Link href="/#contact" className="btn-primary inline-flex items-center">
                Démarrer une Mission
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}