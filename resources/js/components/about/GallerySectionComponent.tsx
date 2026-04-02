import React from 'react'
import { motion } from "framer-motion";

const GallerySectionComponent = ({
    itemVariants,
    galleryVariants,
    images,
    galleryItemVariants,
    setHoveredIndex,
    setSelectedImage,
    imageVariants,
    selectedImage,
    hoveredIndex

}) => {
  return (
    <>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={galleryVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-2">
              Notre Galerie
            </h3>
            <p className="text-[#5C2E0B]">
              Cliquez sur une image pour changer la vue principale
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                variants={galleryItemVariants}
                custom={index}
                onHoverStart={() => setHoveredIndex(image.id)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group"
              >
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
                    selectedImage.id === image.id
                      ? "ring-2 ring-[#6B3410] ring-offset-2 shadow-xl"
                      : "hover:shadow-lg"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-28 md:h-32 object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === image.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-medium px-2 py-1 bg-black/50 rounded-full">
                      Click to view
                    </span>
                  </motion.div>
                  {selectedImage.id === image.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
                <p className="text-xs text-center mt-2 text-[#5C2E0B] font-medium">
                  {image.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </>
  )
}

export default GallerySectionComponent