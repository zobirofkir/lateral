import { useState, useEffect } from "react";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { name: "Accueil", href: "#" },
    { name: "Découvrir Tanger", href: "#" },
    { name: "Chambres", href: "#" },
    { name: "Réservation", href: "#" },
    { name: "Règlement de l'hôtel", href: "#" },
  ];

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" }
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

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
    setCurrentLang,
    headerVariants,
    mobileMenuVariants,
    linkVariants,
    dropdownVariants,
    mobileItemVariants,
  }
}