import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.products': 'Our Products',
      'nav.visit': 'Visit Us',
      'nav.contact': 'Contact',
      
      // Products
      'products.plywood': 'Plywood',
      'products.melamine': 'Prefinished Melamine',
      'products.veneer': 'Wood Veneer',
      'products.logs': 'Raw Wood Logs',
      'products.guarantee': 'Orders & Guarantee',
      
      // Product Categories
      'products.plywood.premium': 'Premium Plywood',
      'products.plywood.marine': 'Marine Plywood',
      'products.plywood.structural': 'Structural Plywood',
      
      // Wood Types
      'wood.okoume': 'Okoume (Aucoumea klaineana)',
      'wood.mahogany': 'Acajou (Mahogany)',
      'wood.ayous': 'Ayous (Triplochiton scleroxylon)',
      'wood.sapele': 'Sapele (Entandrophragma cylindricum)',
      
      // Visit
      'visit.factory': 'Factory Tour',
      'visit.schedule': 'Schedule a Tour',
      'visit.gallery': 'Factory Gallery',
      
      // Common
      'common.learnMore': 'Learn More',
      'common.contactUs': 'Contact Us',
      'common.viewDetails': 'View Details',
      'common.customOrder': 'Custom Order',
      'common.samples': 'Request Samples',
    },
  },
  fr: {
    translation: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.about': 'À Propos',
      'nav.products': 'Nos Produits',
      'nav.visit': 'Visitez-Nous',
      'nav.contact': 'Contact',
      
      // Products
      'products.plywood': 'Contreplaqué',
      'products.melamine': 'Mélaminé Préfini',
      'products.veneer': 'Placage de Bois',
      'products.logs': 'Bois Brut',
      'products.guarantee': 'Commandes & Garantie',
      
      // Product Categories
      'products.plywood.premium': 'Contreplaqué Premium',
      'products.plywood.marine': 'Contreplaqué Marine',
      'products.plywood.structural': 'Contreplaqué Structurel',
      
      // Wood Types
      'wood.okoume': 'Okoumé (Aucoumea klaineana)',
      'wood.mahogany': 'Acajou (Mahogany)',
      'wood.ayous': 'Ayous (Triplochiton scleroxylon)',
      'wood.sapele': 'Sapelli (Entandrophragma cylindricum)',
      
      // Visit
      'visit.factory': 'Visite d\'Usine',
      'visit.schedule': 'Planifier une Visite',
      'visit.gallery': 'Galerie d\'Usine',
      
      // Common
      'common.learnMore': 'En Savoir Plus',
      'common.contactUs': 'Contactez-Nous',
      'common.viewDetails': 'Voir les Détails',
      'common.customOrder': 'Commande Sur Mesure',
      'common.samples': 'Demander des Échantillons',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 