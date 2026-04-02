import React from 'react'
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';

const MobileMenuButtonComponent = ({
    setIsOpen,
    isOpen
}) => {
  return (
    <>
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
    </>
  )
}

export default MobileMenuButtonComponent