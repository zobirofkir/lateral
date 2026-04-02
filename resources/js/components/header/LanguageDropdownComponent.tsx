import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LanguageDropdownComponent = ({
    langOpen,
    setLangOpen,
    languages,
    currentLang,
    setCurrentLang,
    dropdownVariants
}) => {
  return (
    <>
        {/* Language Dropdown */}
        <div className="lg:block hidden" >
            <motion.button
                onClick={() => setLangOpen(!langOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-[#3E2723] hover:text-[#5C2E0B] transition-colors px-3 py-2 rounded-lg white"
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
    </>
  )
}

export default LanguageDropdownComponent