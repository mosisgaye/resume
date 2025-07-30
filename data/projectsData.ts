
import { ProjectType } from '@/components/projects/ProjectCard';

export const projectCategories = [
  { id: 'all', name: 'Tous' },
  { id: 'web', name: 'Web' },
  { id: 'app', name: 'Applications' },
  { id: 'automation', name: 'Automatisation' }
];

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "ComparePrix",
    description: "Plateforme de comparaison de prix pour forfaits mobiles, box internet et offres télécom",
    category: "web",
    image: "/images/optimized/compareprix.webp",
    mobileSrc: "/images/optimized/compareprix.webp",
    dimensions: { width: 800, height: 500 },
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com",
    preview: "https://ComparePrix.net"
  },
  {
    id: 2,
    title: "SimsSS - Solution Vapeur",
    description: "E-commerce pour des produits de vapeur avec boutique en ligne et système de paiement intégré",
    category: "web",
    image: "/images/optimized/simss.webp",
    mobileSrc: "/images/optimized/simss.webp",
    dimensions: { width: 800, height: 500 },
    technologies: ["Shopify", "JavaScript", "CSS", "Payment API"],
    github: "https://github.com",
    preview: "https://simss.nl"
  },
  {
    id: 3,
    title: "SimpSune Energy",
    description: "Site web pour produits d'énergie solaire avec catalogue de produits et système de commande",
    category: "web",
    image: "/images/optimized/simpsune.webp",
    mobileSrc: "/images/optimized/simpsune.webp",
    dimensions: { width: 800, height: 500 },
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    github: "https://github.com",
    preview: "https://example.com/simpsune"
  },
  {
    id: 4,
    title: "M3Flow Automation",
    description: "Plateforme d'automatisation des tâches et création de sites web innovants avec IA",
    category: "automation",
    image: "/images/optimized/noorayavoyage.webp",
    mobileSrc: "/images/optimized/noorayavoyage.webp",
    dimensions: { width: 800, height: 500 },
    technologies: ["AI", "React", "Node.js", "Automation Tools"],
    github: "https://github.com",
    preview: "https://example.com/m3flow"
  },
  {
    id: 5,
    title: "VaderHart Coaching",
    description: "Application de coaching et de bien-être mental avec fonctionnalités interactives",
    category: "app",
    image: "/images/optimized/vader.webp",
    mobileSrc: "/images/optimized/vader.webp",
    dimensions: { width: 800, height: 500 },
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/mosisgaye/vader",
    preview: "https://vader-delta.vercel.app"
  }
];
