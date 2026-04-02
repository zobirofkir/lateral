import React from 'react'
import { motion } from "framer-motion";

const DesktopMenuComponent = ({
    navLinks, 
    linkVariants
}) => {
  return (
    <>
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
    </>
  )
}

export default DesktopMenuComponent