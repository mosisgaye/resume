'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/mosisgaye/Moussa-Gaye', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/moussa-gaye-0a6455162/', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-800">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-slate-900" />

      {/* Main footer content */}
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-4 group mb-6">
              {/* Premium MG Logo - matching header */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl opacity-70"></div>
                <div className="relative w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-slate-900 to-pink-900/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                  <span className="relative font-black text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-pink-300 to-purple-300">MG</span>
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-80"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Ingénieur Fullstack</span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              Expert en développement web moderne. Je crée des applications performantes et scalables pour startups et entreprises.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Casablanca, Maroc</span>
              </div>
              <a href="mailto:moussgaye0@gmail.com" className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>moussgaye0@gmail.com</span>
              </a>
              <a href="tel:+212606213027" className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+212 606 213 027</span>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Démarrer un projet</h3>
            <p className="text-gray-400 text-sm mb-6">
              Prêt à concrétiser votre idée ? Discutons de votre projet.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/20"
            >
              Demander un devis
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-gray-500 text-xs mb-4">Suivez-moi</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center",
                      "text-gray-400 transition-all duration-300 hover:scale-110 hover:border-slate-600",
                      social.color
                    )}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} Moussa Gaye. Fait avec <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> au Maroc
            </p>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
