import React from 'react';
import { MapPin, Clock, Globe, CheckCircle } from 'lucide-react';

const LocalPresence = () => {
  const locations = [
    {
      country: "Sénégal",
      flag: "🇸🇳",
      cities: ["Dakar", "Saint-Louis", "Thiès"],
      clients: "+50 projets réalisés",
      gradient: "from-green-500 to-yellow-500"
    },
    {
      country: "France",
      flag: "🇫🇷",
      cities: ["Paris", "Lyon", "Marseille"],
      clients: "+30 clients satisfaits",
      gradient: "from-blue-500 to-red-500"
    },
    {
      country: "Maroc",
      flag: "🇲🇦",
      cities: ["Casablanca", "Rabat", "Marrakech"],
      clients: "+20 startups accompagnées",
      gradient: "from-red-500 to-green-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh absolute inset-0 opacity-5" />
        <div className="pattern-dots absolute inset-0 opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 neon-text">
              Présence Internationale
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Développeur Fullstack Freelance disponible pour vos projets en Afrique de l'Ouest et en Europe.
            Collaboration à distance ou sur site selon vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={location.country}
              className="glass-ultra p-6 rounded-xl border border-white/20 hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{location.flag}</span>
                  <h3 className="text-xl font-bold text-white">{location.country}</h3>
                </div>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${location.gradient} opacity-20`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-purple-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">Villes principales:</p>
                    <p className="text-sm text-gray-200 font-medium">
                      {location.cities.join(", ")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <p className="text-sm text-gray-200">{location.clients}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services par région */}
        <div className="glass-ultra p-6 rounded-xl border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">
              Disponibilité & Services
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-white mb-2">🇸🇳 Sénégal (GMT)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Développement site web Dakar</li>
                <li>• Application mobile Sénégal</li>
                <li>• Formation React.js Dakar</li>
                <li>• Startup tech africaine</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">🇫🇷 France (GMT+1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Freelance React Paris</li>
                <li>• Développeur Node.js Lyon</li>
                <li>• Mission Next.js Marseille</li>
                <li>• Consulting tech France</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">🇲🇦 Maroc (GMT+1)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Développeur web Casablanca</li>
                <li>• Application React Rabat</li>
                <li>• E-commerce Marrakech</li>
                <li>• Transformation digitale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPresence;