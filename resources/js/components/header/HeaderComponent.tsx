import { motion } from "framer-motion";
import LogoComponent from "../common/LogoComponent";
import DesktopMenuComponent from "./DesktopMenuComponent";
import LanguageDropdownComponent from "./LanguageDropdownComponent";
import MobileMenuButtonComponent from "./MobileMenuButtonComponent";
import MobileMenuComponent from "./MobileMenuComponent";
import BackDropOverlayComponent from "./BackDropOverlayComponent";
import { useHeader } from "@/hooks/useHeader";

const HeaderComponent = () => {

  const {
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
  } = useHeader();

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`block top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
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