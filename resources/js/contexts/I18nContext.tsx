import LoadingComponent from '@/components/loading/LoadingComponent';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'fr';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
  dir: 'ltr' | 'rtl';
  loading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en';
  const savedLocale = localStorage.getItem('locale') as Locale | null;

  return savedLocale && (savedLocale === 'en' || savedLocale === 'fr') 
    ? savedLocale 
    : 'en';
};

const loadLocalTranslations = async (locale: Locale) => {
  try {

    const headerModule = await import(`../locales/${locale}/${locale}-header.json`);
    const leftSlideModule = await import(`../locales/${locale}/${locale}-leftslide.json`);
    const titleSectionModule = await import(`../locales/${locale}/${locale}-abouttitle.json`);
    const textContentModule = await import(`../locales/${locale}/${locale}-text-content.json`);
    const galleryTitle = await import(`../locales/${locale}/${locale}-gallerytitle.json`);
    const whyModule = await import(`../locales/${locale}/${locale}-why.json`);
    const roomsModule = await import(`../locales/${locale}/${locale}-rooms.json`);
    const discoverModule = await import(`../locales/${locale}/${locale}-discover.json`);
    const rulesModule = await import(`../locales/${locale}/${locale}-rules.json`);

    return {
      header: headerModule.default,
      leftslide: leftSlideModule.default,
      titleSection: titleSectionModule.default,
      textContent: textContentModule.default,
      galleryTitle: galleryTitle.default,
      whyModule: whyModule.default,
      roomsModule: roomsModule.default,
      discoverModule: discoverModule.default,
      rulesModule: rulesModule.default,
    };
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {
      header: {},
      leftslide: {},
    };
  }
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [translations, setTranslations] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchTranslations = async () => {
    try {
      setLoading(true);
      
      const enTranslations = await loadLocalTranslations('en');
      const frTranslations = await loadLocalTranslations('fr');
      
      const formatted: any = {
        en: enTranslations,
        fr: frTranslations
      };
      
      setTranslations(formatted);
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTranslations();
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = 'ltr'; 
  }, [locale]);

  // إصلاح: التأكد من وجود t دائماً
  const currentTranslations = translations[locale];
  const value: I18nContextType = {
    locale,
    setLocale,
    t: currentTranslations || { header: {}, leftslide: {} },
    dir: 'ltr', 
    loading,
  };

  if (loading) {
    return (
      <LoadingComponent />
    );
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};