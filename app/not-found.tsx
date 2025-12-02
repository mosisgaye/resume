'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { logger } from '@/lib/logger';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    logger.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="gradient-mesh absolute inset-0 opacity-10" />
          <div className="pattern-dots absolute inset-0 opacity-5" />
          
          <div 
            className="absolute w-[50vw] h-[50vw] blob gradient-aurora opacity-20 left-[-25vw] top-[20vh] float-element"
          />
          <div 
            className="absolute w-[40vw] h-[40vw] blob bg-gradient-to-br from-purple-500 to-pink-500 opacity-15 right-[-20vw] bottom-[20vh] float-element"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="text-center glass-ultra p-12 rounded-2xl border border-white/10 modern-card max-w-2xl">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 neon-text">404</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Page introuvable
            </h2>
            <p className="text-gray-300 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">
              Vous cherchez peut-être :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link href="/services-senegal" className="glass-ultra p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 transform">
                <h3 className="font-semibold text-white mb-1">🇸🇳 Services Sénégal</h3>
                <p className="text-sm text-gray-400">Développeur web Dakar</p>
              </Link>
              
              <Link href="/services-france" className="glass-ultra p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 transform">
                <h3 className="font-semibold text-white mb-1">🇫🇷 Services France</h3>
                <p className="text-sm text-gray-400">Freelance React Paris</p>
              </Link>
              
              <Link href="/services-maroc" className="glass-ultra p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 transform">
                <h3 className="font-semibold text-white mb-1">🇲🇦 Services Maroc</h3>
                <p className="text-sm text-gray-400">Développeur Casablanca</p>
              </Link>
              
              <Link href="/#contact" className="glass-ultra p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 transform">
                <h3 className="font-semibold text-white mb-1">📧 Contact</h3>
                <p className="text-sm text-gray-400">Demander un devis</p>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-flex items-center justify-center">
                <Home className="mr-2 h-5 w-5" />
                Retour à l'accueil
              </Link>
              
              <button onClick={() => router.back()} className="btn-secondary inline-flex items-center justify-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Page précédente
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400">
              Besoin d'aide ? Contactez-moi directement :
            </p>
            <a href="mailto:moussgaye0@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              moussgaye0@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}