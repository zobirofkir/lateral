import React from 'react'
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenuComponent = ({
    isOpen,
    mobileMenuVariants, 
    navLinks,
    mobileItemVariants,
    setIsOpen,
    setCurrentLang,
    languages,
    currentLang
}) => {
  return (
    <>
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
    </>
  )
}

export default MobileMenuComponent