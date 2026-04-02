import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const MainImageSectionComponent = ({
    itemVariants,
    selectedImage,
    mainImageVariants

}) => {
  return (
    <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4B896]/30 to-[#6B3410]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                  variants={mainImageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={mainImageVariants.transition}
                />
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
              >
                <h3 className="text-white text-xl font-semibold">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-sm">
                  Cliquez sur les images ci-dessous pour explorer
                </p>
              </motion.div>
            </div>
          </motion.div>
    </>
  )
}

export default MainImageSectionComponent