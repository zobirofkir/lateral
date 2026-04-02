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
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-[#D4B896]" />
                <span className="text-[#6B3410] font-semibold uppercase tracking-wider text-sm">
                  Bienvenue
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4">
                L'Hôtel Lateral
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#5C2E0B] leading-relaxed text-base md:text-lg"
            >
              Situé au cœur vibrant de la médina de Tanger, l'Hôtel Lateral est
              une adresse emblématique du Petit Socco. Son emplacement privilégié,
              à deux pas de la Kasbah et à seulement cinq minutes à pied du port de
              Tanger, en fait un point de départ idéal pour découvrir la ville.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#5C2E0B] leading-relaxed text-base md:text-lg"
            >
              Entouré de ruelles historiques, de cafés authentiques et d'une
              atmosphère intemporelle, l'hôtel offre à ses visiteurs une immersion
              totale dans l'âme culturelle et vivante de Tanger. Que ce soit pour
              explorer ses sites mythiques, profiter de sa lumière unique ou se
              perdre dans l'ambiance animée de la médina, l'Hôtel Lateral promet
              une expérience authentique et inoubliable.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4B896]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#6B3410] fill-[#6B3410]" />
                </div>
                <div>
                  <p className="text-sm text-[#5C2E0B]">4.8 Étoiles</p>
                  <p className="text-xs text-[#5C2E0B]/60">Note des clients</p>
                </div>
              </div>

              {/* Award */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4B896]/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-[#6B3410]" />
                </div>
                <div>
                  <p className="text-sm text-[#5C2E0B]">Top Choice</p>
                  <p className="text-xs text-[#5C2E0B]/60">2024 Award</p>
                </div>
              </div>

            </motion.div>

          </motion.div>
    </>
  )
}

export default TextContentComponent