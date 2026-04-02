import { useState, useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale, dir } = useI18n();

  /**
   * Handle scroll effect for header background
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: t.header?.navLinks?.home || (locale === 'fr' ? "Accueil" : "Home"), 
      href: "/", 
      key: "home" 
    },
    { 
      name: t.header?.navLinks?.discover || (locale === 'fr' ? "Découvrir Tanger" : "Discover Tangier"), 
      href: "/decouvrir-tanger", 
      key: "discover" 
    },
    { 
      name: t.header?.navLinks?.rooms || (locale === 'fr' ? "Chambres" : "Rooms"), 
      href: "/rooms", 
      key: "rooms" 
    },
    { 
      name: t.header?.navLinks?.booking || (locale === 'fr' ? "Réservation" : "Booking"), 
      href: "#", 
      key: "booking" 
    },
    { 
      name: t.header?.navLinks?.rules || (locale === 'fr' ? "Règlement de l'hôtel" : "Hotel Rules"), 
      href: "#", 
      key: "rules" 
    },
  ];

  const languages = [
    { code: "fr", label: t.header?.language?.french || "Français", flag: "🇫🇷" },
    { code: "en", label: t.header?.language?.english || "English", flag: "🇬🇧" }
  ];

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  const changeLanguage = (langCode: 'en' | 'fr') => {
    setLocale(langCode);
    setLangOpen(false);
  };

  /**
   * Animation variants
   */
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#5C2E0B", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return {
    isOpen,
    setIsOpen,
    langOpen,
    setLangOpen,
    scrolled,
    navLinks,
    languages,
    currentLang,
    changeLanguage,
    dir,
    locale,
    headerVariants,
    mobileMenuVariants,
    linkVariants,
    dropdownVariants,
    mobileItemVariants,
  }
}