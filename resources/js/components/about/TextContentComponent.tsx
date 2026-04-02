import React from 'react'
import { motion } from "framer-motion";
import { Star, Trophy } from 'lucide-react';

const TextContentComponent = ({
    containerVariants,
    itemVariants,
}) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 md:px-0"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-[#D4B896]" />
            <span className="text-[#6B3410] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Bienvenue
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3E2723] mb-3 sm:mb-4 leading-tight">
            L'Hôtel Lateral
          </h3>
        </motion.div>

        {/* Description Text */}
        <motion.p
          variants={itemVariants}
          className="text-[#5C2E0B] leading-relaxed text-sm sm:text-base md:text-lg"
        >
          Situé au cœur vibrant de la médina de Tanger, l'Hôtel Lateral est
          une adresse emblématique du Petit Socco. Son emplacement privilégié,
          à deux pas de la Kasbah et à seulement cinq minutes à pied du port de
          Tanger, en fait un point de départ idéal pour découvrir la ville.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[#5C2E0B] leading-relaxed text-sm sm:text-base md:text-lg"
        >
          Entouré de ruelles historiques, de cafés authentiques et d'une
          atmosphère intemporelle, l'hôtel offre à ses visiteurs une immersion
          totale dans l'âme culturelle et vivante de Tanger. Que ce soit pour
          explorer ses sites mythiques, profiter de sa lumière unique ou se
          perdre dans l'ambiance animée de la médina, l'Hôtel Lateral promet
          une expérience authentique et inoubliable.
        </motion.p>

        {/* Stats & Awards Section - Responsive layout */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
        >
          {/* Rating */}
          <div className="flex items-center gap-3 sm:gap-2 p-3 sm:p-0 rounded-lg sm:rounded-none bg-[#D4B896]/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-[#D4B896]/20 flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B3410] fill-[#6B3410]" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#5C2E0B] font-semibold sm:font-normal">
                4.8 Étoiles
              </p>
              <p className="text-xs text-[#5C2E0B]/60">
                Note des clients
              </p>
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="hidden sm:block w-px h-10 bg-[#D4B896]/30" />

          {/* Award */}
          <div className="flex items-center gap-3 sm:gap-2 p-3 sm:p-0 rounded-lg sm:rounded-none bg-[#D4B896]/5 sm:bg-transparent">
            <div className="w-10 h-10 sm:w-10 md:w-12 md:h-12 rounded-full bg-[#D4B896]/20 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B3410]" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#5C2E0B] font-semibold sm:font-normal">
                Top Choice
              </p>
              <p className="text-xs text-[#5C2E0B]/60">
                Prix d'Excellence 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Optional decorative element for mobile */}
        <motion.div 
          variants={itemVariants}
          className="block sm:hidden w-12 h-0.5 bg-gradient-to-r from-[#D4B896] to-transparent mx-auto mt-2"
        />
        
      </motion.div>
    </>
  )
}

export default TextContentComponent