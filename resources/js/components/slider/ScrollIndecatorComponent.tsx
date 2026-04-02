import React from 'react'
import { motion } from 'framer-motion'

const ScrollIndecatorComponent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Animated line that extends */}
          <div className="relative h-12 w-px bg-white/30 overflow-hidden">
            <motion.div
              animate={{ y: [-20, 20] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 w-full h-1/2 bg-white/80"
            />
          </div>
          
          {/* Pulsing dot */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white/80 rounded-full"
          />
        </div>
      </motion.div>
    </>
  )
}

export default ScrollIndecatorComponent