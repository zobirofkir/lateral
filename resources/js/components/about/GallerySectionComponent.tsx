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
        viewport={{ once: true, amount: 0.1 }}
        variants={galleryVariants}
        className="px-4 sm:px-6"
      >
        {/* Title Section - Optimized for mobile */}
        <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3E2723] mb-2 sm:mb-3">
            Notre Galerie
          </h3>
          <p className="text-sm sm:text-base text-[#5C2E0B] px-4 sm:px-0">
            Cliquez sur une image pour changer la vue principale
          </p>
        </motion.div>

        {/* Gallery Grid - Responsive layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={galleryItemVariants}
              custom={index}
              onHoverStart={() => setHoveredIndex(image.id)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer group"
              whileTap={{ scale: 0.98 }} // Added tap feedback for mobile
            >
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-md transition-all duration-300 ${
                  selectedImage.id === image.id
                    ? "ring-2 ring-[#6B3410] ring-offset-2 ring-offset-white shadow-xl scale-[0.98] sm:scale-100"
                    : "hover:shadow-lg active:shadow-lg"
                }`}
              >
                {/* Image with improved mobile handling */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" // Lazy loading for better performance
                  />
                  
                  {/* Hover/Active Overlay - Optimized for touch */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === image.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-[2px]"
                  >
                    <span className="text-white text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 bg-black/60 rounded-full backdrop-blur-sm whitespace-nowrap">
                      👆 Click to view
                    </span>
                  </motion.div>
                  
                  {/* Active indicator */}
                  {selectedImage.id === image.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
                
                {/* Image title - responsive text */}
                <p className="text-[10px] sm:text-xs text-center mt-1.5 sm:mt-2 text-[#5C2E0B] font-medium truncate px-1">
                  {image.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile hint - visible only on small screens */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="block sm:hidden text-center mt-6 text-xs text-[#5C2E0B]/60"
        >
          💡 Appuyez sur une image pour la sélectionner
        </motion.div>
      </motion.div>
    </>
  )
}

export default GallerySectionComponent