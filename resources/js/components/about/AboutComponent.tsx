import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    alt: "Hotel exterior",
    title: "Hotel Exterior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1590080877777-98c04d4c5c14",
    alt: "Luxury room",
    title: "Luxury Suite"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
    alt: "Restaurant area",
    title: "Fine Dining"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    alt: "Swimming pool",
    title: "Infinity Pool"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    alt: "Spa center",
    title: "Luxury Spa"
  },
];

const AboutComponent = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const mainImageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#faf6f2] via-[#f8f5f0] to-[#f5efe8] py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Main Image Section */}
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

          {/* Text Content */}
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
                L'Hôtel Mauritania
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#5C2E0B] leading-relaxed text-base md:text-lg"
            >
              Situé au cœur vibrant de la médina de Tanger, l'Hôtel Mauritania est
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
              perdre dans l'ambiance animée de la médina, l'Hôtel Mauritania promet
              une expérience authentique et inoubliable.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4B896]/20 flex items-center justify-center">
                  <span className="text-[#6B3410] text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-[#5C2E0B]">4.8 Étoiles</p>
                  <p className="text-xs text-[#5C2E0B]/60">Note des clients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D4B896]/20 flex items-center justify-center">
                  <span className="text-[#6B3410] text-xl">🏆</span>
                </div>
                <div>
                  <p className="text-sm text-[#5C2E0B]">Top Choice</p>
                  <p className="text-xs text-[#5C2E0B]/60">2024 Award</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Gallery Section */}
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

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute left-0 right-0 bottom-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4B896]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-[#6B3410]/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComponent;