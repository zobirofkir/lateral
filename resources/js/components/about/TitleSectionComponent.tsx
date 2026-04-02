import React from 'react'
import { motion } from 'framer-motion'

const TitleSectionComponent = ({
    containerVariants,
    titleVariants,
    itemVariants
}) => {
  return (
    <>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={titleVariants} className="relative inline-block">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#D4B896]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#6B3410]/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] relative z-10">
              Un Séjour Authentique au Cœur de Tanger
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410] mx-auto mt-6 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-[#5C2E0B] mt-4 max-w-2xl mx-auto text-lg"
          >
            Découvrez l'hospitalité marocaine dans un cadre d'exception
          </motion.p>
        </motion.div>
    </>
  )
}

export default TitleSectionComponent