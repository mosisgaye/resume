
import { z } from 'zod';
import { 
  Globe, 
  Target, 
  PieChart, 
  FileText, 
  Briefcase, 
  User, 
  Brush, 
  Clock, 
  CheckCircle,
  LucideIcon
} from 'lucide-react';

// Define form schema using Zod
export const formSchema = z.object({
  siteStatus: z.string(),
  siteStatusOther: z.string().optional(),
  objectives: z.array(z.string()),
  objectivesOther: z.string().optional(),
  challenges: z.string().optional(),
  automation: z.array(z.string()),
  automationOther: z.string().optional(),
  budget: z.string(),
  companySize: z.string(),
  industry: z.string(),
  designPreferences: z.string().optional(),
  timeline: z.string(),
  specificFeatures: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

// Define section interface
interface FormSection {
  title: string;
  icon: LucideIcon;
  component: string;
  name: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  conditionalField?: {
    showWhen: string;
    component: string;
    name: string;
    placeholder?: string;
  };
}

// Form sections definition
export const formSections: FormSection[] = [
  {
    title: 'État actuel du site web',
    icon: Globe,
    component: 'RadioQuestion',
    name: 'siteStatus',
    options: [
      { value: 'no-site', label: 'Pas de site web' },
      { value: 'needs-update', label: 'Site existant qui nécessite une mise à jour' },
      { value: 'needs-automation', label: 'Site existant qui a besoin d\'automatisation' },
      { value: 'other', label: 'Autre' },
    ],
    conditionalField: {
      showWhen: 'other',
      component: 'TextField',
      name: 'siteStatusOther',
      placeholder: 'Veuillez préciser',
    },
  },
  {
    title: 'Objectifs pour le site web',
    icon: Target,
    component: 'CheckboxQuestion',
    name: 'objectives',
    options: [
      { value: 'increase-sales', label: 'Augmenter les ventes' },
      { value: 'improve-ux', label: 'Améliorer l\'expérience utilisateur' },
      { value: 'automate-processes', label: 'Automatiser des processus' },
      { value: 'strengthen-brand', label: 'Renforcer la visibilité de la marque' },
      { value: 'other', label: 'Autre' },
    ],
    conditionalField: {
      showWhen: 'other',
      component: 'TextField',
      name: 'objectivesOther',
      placeholder: 'Veuillez préciser',
    },
  },
  {
    title: 'Défis rencontrés',
    icon: PieChart,
    component: 'TextareaQuestion',
    name: 'challenges',
    placeholder: 'Quels défis spécifiques rencontrez-vous avec votre site web actuel ou votre présence numérique ?',
  },
  {
    title: 'Intérêts en automatisation',
    icon: FileText,
    component: 'CheckboxQuestion',
    name: 'automation',
    options: [
      { value: 'customer-support', label: 'Automatisation du support client' },
      { value: 'marketing', label: 'Automatisation marketing' },
      { value: 'data-management', label: 'Automatisation de la gestion des données' },
      { value: 'other', label: 'Autre' },
    ],
    conditionalField: {
      showWhen: 'other',
      component: 'TextField',
      name: 'automationOther',
      placeholder: 'Veuillez préciser',
    },
  },
  {
    title: 'Budget',
    icon: Briefcase,
    component: 'RadioQuestion',
    name: 'budget',
    options: [
      { value: 'less-than-1000', label: 'Moins de 1 000 €' },
      { value: '1000-5000', label: '1 000 € – 5 000 €' },
      { value: '5000-10000', label: '5 000 € – 10 000 €' },
      { value: 'more-than-10000', label: 'Plus de 10 000 €' },
    ],
  },
  {
    title: 'Taille de l\'entreprise',
    icon: User,
    component: 'RadioQuestion',
    name: 'companySize',
    options: [
      { value: 'small', label: 'Petite (1–10 employés)' },
      { value: 'medium', label: 'Moyenne (11–50 employés)' },
      { value: 'large', label: 'Grande (51+ employés)' },
    ],
  },
  {
    title: 'Secteur d\'activité',
    icon: Briefcase,
    component: 'SelectQuestion',
    name: 'industry',
    options: [
      { value: 'commerce', label: 'Commerce' },
      { value: 'health', label: 'Santé' },
      { value: 'technology', label: 'Technologie' },
      { value: 'finance', label: 'Finance' },
      { value: 'education', label: 'Éducation' },
      { value: 'real-estate', label: 'Immobilier' },
      { value: 'restaurant', label: 'Restauration' },
      { value: 'tourism', label: 'Tourisme' },
      { value: 'other', label: 'Autre' },
    ],
  },
  {
    title: 'Préférences de design',
    icon: Brush,
    component: 'TextareaQuestion',
    name: 'designPreferences',
    placeholder: 'Avez-vous des préférences de design spécifiques ou des lignes directrices de marque ?',
  },
  {
    title: 'Délai du projet',
    icon: Clock,
    component: 'RadioQuestion',
    name: 'timeline',
    options: [
      { value: 'less-than-1-month', label: 'Moins d\'1 mois' },
      { value: '1-3-months', label: '1–3 mois' },
      { value: '3-6-months', label: '3–6 mois' },
      { value: 'more-than-6-months', label: 'Plus de 6 mois' },
    ],
  },
  {
    title: 'Fonctionnalités spécifiques',
    icon: CheckCircle,
    component: 'TextareaQuestion',
    name: 'specificFeatures',
    placeholder: 'Y a-t-il des fonctionnalités ou caractéristiques spécifiques que vous souhaitez pour votre site ?',
  },
];
