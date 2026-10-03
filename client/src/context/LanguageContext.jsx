import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// ============================================
// SUPPORTED LANGUAGES (2 only)
// ============================================
export const LANGUAGES = {
  en: { name: 'English', native: 'English', flag: '🇬🇧', code: 'en-IN' },
  hi: { name: 'Hindi', native: 'हिंदी', flag: '🇮🇳', code: 'hi-IN' },
};

// ============================================
// TRANSLATIONS (2 languages)
// ============================================
export const translations = {
  en: {
    appName: 'Scheme Saathi',
    tagline: 'Right Scheme, Right Time',
    badge: "India's First AI Scheme Navigator",
    heroSubtitle: 'AI-powered platform that finds the right government schemes for you.',
    findSchemes: 'Find My Schemes',
    howItWorks: 'How It Works',
    schemesLoaded: 'Government Schemes',
    loadedFromDb: 'Loaded from database',
    profileTitle: 'Tell Us About Yourself',
    profileSubtitle: "We'll find the perfect schemes for you",
    backHome: 'Back to Home',
    age: 'Age',
    agePlaceholder: 'e.g., 25',
    gender: 'Gender',
    selectGender: 'Select Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    state: 'State',
    selectState: 'Select State',
    income: 'Annual Income (₹)',
    incomePlaceholder: 'e.g., 250000',
    category: 'Category',
    selectCategory: 'Select Category',
    general: 'General',
    obc: 'OBC',
    sc: 'SC',
    st: 'ST',
    ews: 'EWS',
    occupation: 'Occupation',
    occupationPlaceholder: 'e.g., Student, Farmer',
    additionalInfo: 'Additional Info',
    iAmFarmer: 'I am a Farmer',
    iAmStudent: 'I am a Student',
    iHaveBusiness: 'I have a Business',
    findMySchemes: 'Find My Schemes',
    findingSchemes: 'Finding Schemes...',
    schemesFound: 'Schemes Found!',
    basedOnProfile: 'Based on your profile',
    years: 'years',
    applyNow: 'Apply Now',
    backToProfile: 'Back to Profile',
    noSchemesFound: 'No Schemes Found',
    tryAgain: 'Try Again',
    adjustProfile: 'Try adjusting your profile details',
    showMore: 'Show More Details',
    showLess: 'Show Less',
    cost: 'Cost',
    processingTime: 'Processing Time',
    validity: 'Validity',
    launched: 'Launched',
  },
  hi: {
    appName: 'योजना साथी',
    tagline: 'सही योजना, सही समय पर',
    badge: 'भारत का पहला AI योजना नेविगेटर',
    heroSubtitle: 'AI-आधारित प्लेटफॉर्म जो आपके लिए सही सरकारी योजनाएं खोजता है।',
    findSchemes: 'मेरी योजनाएं खोजें',
    howItWorks: 'कैसे काम करता है',
    schemesLoaded: 'सरकारी योजनाएं',
    loadedFromDb: 'डेटाबेस से लोड',
    profileTitle: 'अपने बारे में बताएं',
    profileSubtitle: 'हम आपके लिए सही सरकारी योजनाएं खोजेंगे',
    backHome: 'होम पर वापस',
    age: 'उम्र',
    agePlaceholder: 'जैसे, 25',
    gender: 'लिंग',
    selectGender: 'लिंग चुनें',
    male: 'पुरुष',
    female: 'महिला',
    other: 'अन्य',
    state: 'राज्य',
    selectState: 'राज्य चुनें',
    income: 'वार्षिक आय (₹)',
    incomePlaceholder: 'जैसे, 250000',
    category: 'श्रेणी',
    selectCategory: 'श्रेणी चुनें',
    general: 'सामान्य',
    obc: 'OBC',
    sc: 'SC',
    st: 'ST',
    ews: 'EWS',
    occupation: 'व्यवसाय',
    occupationPlaceholder: 'जैसे, छात्र, किसान',
    additionalInfo: 'अतिरिक्त जानकारी',
    iAmFarmer: 'मैं किसान हूं',
    iAmStudent: 'मैं छात्र हूं',
    iHaveBusiness: 'मेरा व्यवसाय है',
    findMySchemes: 'मेरी योजनाएं खोजें',
    findingSchemes: 'योजनाएं खोज रहे हैं...',
    schemesFound: 'योजनाएं मिलीं!',
    basedOnProfile: 'आपकी प्रोफ़ाइल के आधार पर',
    years: 'वर्ष',
    applyNow: 'अभी आवेदन करें',
    backToProfile: 'प्रोफ़ाइल पर वापस',
    noSchemesFound: 'कोई योजना नहीं मिली',
    tryAgain: 'फिर से कोशिश करें',
    adjustProfile: 'अपनी प्रोफ़ाइल जानकारी बदलें',
    showMore: 'विस्तार से देखें',
    showLess: 'कम दिखाएं',
    cost: 'खर्च',
    processingTime: 'प्रक्रिया समय',
    validity: 'वैधता',
    launched: 'शुरू हुआ',
  },
};

// ============================================
// LANGUAGE PROVIDER
// ============================================
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) return saved;

    const browserLang = (navigator.language || 'en').toLowerCase();
    const langCode = browserLang.split('-')[0];

    if (translations[langCode]) return langCode;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}