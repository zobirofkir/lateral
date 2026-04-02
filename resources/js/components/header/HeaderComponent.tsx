import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoComponent from "../common/LogoComponent";
import DesktopMenuComponent from "./DesktopMenuComponent";
import LanguageDropdownComponent from "./LanguageDropdownComponent";
import MobileMenuButtonComponent from "./MobileMenuButtonComponent";
import MobileMenuComponent from "./MobileMenuComponent";
import BackDropOverlayComponent from "./BackDropOverlayComponent";

const HeaderComponent = () => {
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
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", flag: "🇲🇦" },
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

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full h-16 sm:h-20">
          <LogoComponent />

          <DesktopMenuComponent navLinks={navLinks} linkVariants={linkVariants} />

          <LanguageDropdownComponent 
              langOpen={langOpen}
              setLangOpen={setLangOpen}
              languages={languages}
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
              dropdownVariants={dropdownVariants}
          />

          <MobileMenuButtonComponent setIsOpen={setIsOpen} isOpen={isOpen} />
          
        </div>
      </div>

      <MobileMenuComponent 
          isOpen={isOpen}
          mobileMenuVariants={mobileMenuVariants} 
          navLinks={navLinks}
          mobileItemVariants={mobileItemVariants}
          setIsOpen={setIsOpen}
          setCurrentLang={setCurrentLang}
          languages={languages}
          currentLang={currentLang}
      />

      <BackDropOverlayComponent isOpen={isOpen} setIsOpen={setIsOpen} />      
    </motion.header>
  );
};

export default HeaderComponent;