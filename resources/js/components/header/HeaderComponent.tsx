import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#6B3410] to-[#4A2508] rounded-xl shadow-md">
              <img src="/assets/images/logo/logo.png" className="rounded-xl" alt="Logo" />
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-[#3E2723] hover:text-[#5C2E0B] transition-colors font-medium text-sm lg:text-base relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6B3410] to-[#4A2508] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

          </nav>

            {/* Language Dropdown */}
            <div className="lg:block hidden" >
              <motion.button
                onClick={() => setLangOpen(!langOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-[#3E2723] hover:text-[#5C2E0B] transition-colors px-3 py-2 rounded-lg bg-[#FAF6F2] hover:bg-[#F5EDE5]"
              >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-sm font-medium hidden lg:inline">{currentLang.label}</span>
                <motion.div
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-[#D4B896] overflow-hidden z-50"
                  >
                    {languages.map((lang, idx) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang);
                          setLangOpen(false);
                        }}
                        whileHover={{ x: 5, backgroundColor: "#FAF6F2" }}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                          currentLang.code === lang.code
                            ? "bg-[#FAF6F2] text-[#6B3410]"
                            : "text-[#3E2723]"
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.label}</span>
                        {currentLang.code === lang.code && (
                          <motion.div
                            layoutId="activeLang"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6B3410]"
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-[#FAF6F2] text-[#4A2508]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileTap={{ scale: 0.97 }}
                  className="block text-[#3E2723] hover:text-[#6B3410] font-medium py-2 px-3 rounded-lg hover:bg-[#FAF6F2] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}


              {/* Language Section */}
              <motion.div
                variants={mobileItemVariants}
                custom={navLinks.length + 1}
                initial="closed"
                animate="open"
                className="border-t pt-4 mt-2 border-[#D4B896]"
              >
                <p className="text-sm text-[#6B3410] mb-3 flex items-center gap-2">
                  <Globe size={14} /> Choisir la langue
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsOpen(false);
                      }}
                      className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all ${
                        currentLang.code === lang.code
                          ? "bg-[#FAF6F2] text-[#6B3410] border border-[#6B3410]"
                          : "bg-[#FAF6F2] text-[#3E2723] border border-[#D4B896]"
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-xs">{lang.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/10 z-[-1] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderComponent;