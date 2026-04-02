import React from 'react'
import { motion } from 'framer-motion';

const DecorativeElementComponent = () => {
  return (
    <>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute left-0 right-0 bottom-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4B896]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-[#6B3410]/5 rounded-full blur-3xl" />
        </motion.div>
    </>
  )
}

export default DecorativeElementComponent