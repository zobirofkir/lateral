import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const BackDropOverlayComponent = ({
    isOpen, 
    setIsOpen
}) => {
  return (
    <>
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
    </>
  )
}

export default BackDropOverlayComponent