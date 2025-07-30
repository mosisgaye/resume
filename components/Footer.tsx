
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 sm:py-10 md:py-12 glass-dark border-t border-white/10 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-5" />
        <div className="pattern-dots absolute inset-0 opacity-5" />
        
        {/* Animated gradient blobs */}
        <div 
          className="absolute w-[30vw] h-[30vw] blob bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl left-[-10vw] top-[-10vh] float-element"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute w-[25vw] h-[25vw] blob bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl right-[-10vw] bottom-[-10vh] float-element"
          style={{ animationDelay: '5s' }}
        />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="">
            <a href="#home" className="flex items-center gap-2">
              {/* Logo WC */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded blur opacity-30"></div>
                <div className="relative w-8 h-8 rounded glass-ultra border border-white/10 flex items-center justify-center">
                  <span className="font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">WC</span>
                </div>
              </div>
              <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 neon-text">WebCraft Agency</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mx-auto">
            <a href="#home" className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all">
              Accueil
            </a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all">
              Compétences
            </a>
            <a href="#services" className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all">
              Services
            </a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all">
              Projets
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all">
              Contact
            </a>
          </div>
          
          <div className="flex gap-3 sm:gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass-ultra border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 transform"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass-ultra border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass-ultra border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-110 transform"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-gray-400">
          <p>© {currentYear} WebCraft Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
