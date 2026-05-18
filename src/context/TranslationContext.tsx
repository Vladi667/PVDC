import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.join': 'Rejoindre',
    
    // Hero
    'hero.eyebrow': 'LE PARTI VERT POUR LA DÉMOCRATIE AU CAMEROUN',
    'hero.title.part1': 'Un Cameroun plus juste,',
    'hero.title.part2': 'plus',
    'hero.title.highlight': 'fort',
    'hero.title.part3': ', plus propre.',
    'hero.subtitle': 'Le Parti Vert pour la Démocratie au Cameroun est un parti politique camerounais fondé en 1992 par le Dr Justin Aimé Fogoum. Depuis sa création, le PVDC porte une ambition claire : construire un Cameroun moderne, stable et prospère, où le développement économique va de pair avec le respect des populations, des territoires et des ressources nationales.',
    'hero.btn': 'Rejoindre le mouvement',

    // Vision
    'vision.eyebrow': 'Notre Vision',
    'vision.title.part1': 'Une ',
    'vision.title.highlight': 'dynamique',
    'vision.title.part2': ' de terrain.',
    'vision.subtitle': 'Aujourd’hui, sous l’impulsion de sa présidente, Michèle Bilong Fogoum, le PVDC entre dans une nouvelle dynamique politique : celle d’un parti de terrain, proche des populations et tourné vers les grands défis du Cameroun moderne. Le PVDC défend l’idée d’un Cameroun : uni, souverain, démocratique, économiquement ambitieux, et socialement équilibré. Notre vision est simple : un développement du Cameroun fondé sur la valorisation de nos ressources, de notre agriculture, de notre jeunesse et des talents camerounais, afin de bâtir un pays plus fort, plus juste et plus moderne, où le progrès et les opportunités profitent réellement aux populations.',
    'vision.point1': 'Uni',
    'vision.point2': 'Souverain',
    'vision.point3': 'Démocratique',
    'vision.point4': 'Économiquement ambitieux',
    'vision.point5': 'Socialement équilibré',

    // Priorities
    'priorities.eyebrow': 'Nos Priorités',
    'priorities.title.part1': "Six axes d'action",
    'priorities.title.part2': 'majeurs.',
    'priorities.1.title': 'Emploi et jeunesse',
    'priorities.1.desc': "Soutien à l'innovation et l'entrepreneuriat.",
    'priorities.2.title': 'Autonomie alimentaire',
    'priorities.2.desc': "Moderniser l'agriculture locale.",
    'priorities.3.title': 'Gouvernance',
    'priorities.3.desc': 'Gestion publique transparente et efficace.',
    'priorities.4.title': 'Santé & Cadre de vie',
    'priorities.4.desc': "Accès à l'eau potable et à l'énergie.",
    'priorities.5.title': 'Développement local',
    'priorities.5.desc': 'Valorisation des communes et régions.',
    'priorities.6.title': 'Ressources nationales',
    'priorities.6.desc': 'Préservation des richesses naturelles.',

    // Values
    'values.eyebrow': 'Nos Valeurs',
    'values.title.part1': 'Une politique de proximité',
    'values.title.highlight': 'tournée vers les solutions.',
    'values.1': 'Respect',
    'values.2': 'Justice',
    'values.3': 'Unité',
    'values.4': 'Dialogue',
    'values.5': 'Patriotisme',
    'values.6': 'Responsabilité',
    'values.7': 'Travail',
    'values.8': 'Solidarité',

    // Audience
    'audience.eyebrow': 'Le Parti de Tous',
    'audience.title.part1': 'Chaque citoyen',
    'audience.title.part2': 'a un rôle à jouer.',
    'audience.1': 'Les jeunes',
    'audience.2': 'Les femmes',
    'audience.3': 'Les travailleurs',
    'audience.4': 'Les entrepreneurs',
    'audience.5': 'Les agriculteurs',
    'audience.6': 'Les étudiants',
    'audience.7': 'La diaspora',
    'audience.8': "Tous les bâtisseurs de l'avenir",

    // Commitment
    'commitment.part1': 'La démocratie ',
    'commitment.highlight1': 'verte',
    'commitment.part2': ', notre choix pour un ',
    'commitment.highlight2': 'avenir meilleur',
    'commitment.part3': '.',

    // JoinCTA
    'join.eyebrow': 'Rejoignez le Mouvement',
    'join.title.part1': 'Ensemble,',
    'join.title.part2': "construisons l'avenir.",
    'join.subtitle': "Notre beau pays le Cameroun a besoin d'idées nouvelles, d'énergie nouvelle et d'une vision tournée vers l'avenir.",
    'join.btn': 'Nous contacter',

    // Footer
    'footer.tagline': 'Parti Vert pour la Démocratie au Cameroun',
    'footer.contact': 'Nous Contacter',
    'footer.legal': 'Mentions Légales',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navbar
    'nav.join': 'Join',

    // Hero
    'hero.eyebrow': 'THE GREEN PARTY FOR DEMOCRACY IN CAMEROON',
    'hero.title.part1': 'A fairer,',
    'hero.title.part2': '',
    'hero.title.highlight': 'stronger',
    'hero.title.part3': ', cleaner Cameroon.',
    'hero.subtitle': 'The Green Party for Democracy in Cameroon is a Cameroonian political party founded in 1992 by Dr. Justin Aimé Fogoum. Since its creation, the PVDC has carried a clear ambition: to build a modern, stable, and prosperous Cameroon, where economic development goes hand in hand with respect for the populations, territories, and national resources.',
    'hero.btn': 'Join the movement',

    // Vision
    'vision.eyebrow': 'Our Vision',
    'vision.title.part1': 'A ',
    'vision.title.highlight': 'grassroots',
    'vision.title.part2': ' dynamic.',
    'vision.subtitle': 'Today, driven by its president, Michèle Bilong Fogoum, the PVDC is entering a new political dynamic: that of a grassroots party, close to the people and focused on the major challenges of a modern Cameroon. The PVDC defends the idea of a Cameroon that is: united, sovereign, democratic, economically ambitious, and socially balanced. Our vision is simple: a development of Cameroon based on the valorization of our resources, our agriculture, our youth, and Cameroonian talents, in order to build a stronger, fairer, and more modern country, where progress and opportunities truly benefit the people.',
    'vision.point1': 'United',
    'vision.point2': 'Sovereign',
    'vision.point3': 'Democratic',
    'vision.point4': 'Economically ambitious',
    'vision.point5': 'Socially balanced',

    // Priorities
    'priorities.eyebrow': 'Our Priorities',
    'priorities.title.part1': 'Six major action',
    'priorities.title.part2': 'pillars.',
    'priorities.1.title': 'Employment & Youth',
    'priorities.1.desc': 'Support for innovation and entrepreneurship.',
    'priorities.2.title': 'Food Autonomy',
    'priorities.2.desc': 'Modernizing local agriculture.',
    'priorities.3.title': 'Governance',
    'priorities.3.desc': 'Transparent and efficient public management.',
    'priorities.4.title': 'Health & Environment',
    'priorities.4.desc': 'Access to clean water and energy.',
    'priorities.5.title': 'Local Development',
    'priorities.5.desc': 'Empowering municipalities and regions.',
    'priorities.6.title': 'National Resources',
    'priorities.6.desc': 'Preservation of natural wealth.',

    // Values
    'values.eyebrow': 'Our Values',
    'values.title.part1': 'A grassroots policy',
    'values.title.highlight': 'focused on solutions.',
    'values.1': 'Respect',
    'values.2': 'Justice',
    'values.3': 'Unity',
    'values.4': 'Dialogue',
    'values.5': 'Patriotism',
    'values.6': 'Responsibility',
    'values.7': 'Work',
    'values.8': 'Solidarity',

    // Audience
    'audience.eyebrow': 'The Party for All',
    'audience.title.part1': 'Every citizen',
    'audience.title.part2': 'has a role to play.',
    'audience.1': 'The Youth',
    'audience.2': 'Women',
    'audience.3': 'Workers',
    'audience.4': 'Entrepreneurs',
    'audience.5': 'Farmers',
    'audience.6': 'Students',
    'audience.7': 'The Diaspora',
    'audience.8': 'All builders of the future',

    // Commitment
    'commitment.part1': 'Green ',
    'commitment.highlight1': 'democracy',
    'commitment.part2': ', our choice for a ',
    'commitment.highlight2': 'better future',
    'commitment.part3': '.',

    // JoinCTA
    'join.eyebrow': 'Join the Movement',
    'join.title.part1': 'Together,',
    'join.title.part2': "let's build the future.",
    'join.subtitle': 'Our beautiful country, Cameroon, needs new ideas, new energy, and a vision turned towards the future.',
    'join.btn': 'Contact us',

    // Footer
    'footer.tagline': 'Green Party for Democracy in Cameroon',
    'footer.contact': 'Contact Us',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
