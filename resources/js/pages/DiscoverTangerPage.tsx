import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

const DiscoverTangerPage = () => {
  const articles = [
    {
      id: 1,
      title: "Kasbah de Tanger",
      description:
        "La Kasbah domine la ville depuis le XVe siècle et raconte l'histoire des conquêtes et échanges qui ont façonné Tanger. Ses ruelles étroites vous plongent dans une ville médiévale animée.",
      points: [
        "Flâner dans les ruelles et admirer les panoramas",
        "Visiter des palais historiques et jardins",
        "Découvrir galeries et cafés cachés",
      ],
      location: "Kasbah de Tanger (Place de la Kasbah)",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Musée de la Kasbah",
      description:
        "Installé dans le palais du Sultan, ce musée conserve bijoux berbères, tapis et manuscrits rares, offrant une immersion dans la culture tangéroise.",
      points: [
        "Explorer les collections historiques",
        "Découvrir l'architecture du palais",
        "Profiter d'une vue panoramique",
      ],
      location: "Musée de la Kasbah, Tanger",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  /**
   * Animation variants
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const { t } = useI18n();
  const discoverModule = t.discoverModule || {};


  return (
    <div className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6B0F0F] to-[#8B1A1A] bg-clip-text text-transparent">
            {discoverModule.title}
          </h2>
          <motion.div
            className="w-28 h-1 bg-gradient-to-r from-green-500 to-green-600 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <motion.div
                  className="h-72 md:h-full overflow-hidden relative"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={false}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="p-8 md:p-10 flex flex-col justify-center"
                  variants={contentVariants}
                >
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-green-600 mb-4 relative inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {article.title}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.h3>

                  <motion.p
                    className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {article.description}
                  </motion.p>

                  <motion.ul className="space-y-2 mb-6">
                    {article.points.map((point, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start text-gray-600 group-hover:text-gray-700 transition-colors"
                      >
                        <motion.span
                          className="text-green-500 mr-3 text-lg font-bold"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          •
                        </motion.span>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="font-semibold text-gray-700 mr-2">
                        📍 Localisation :
                      </span>
                      <motion.span
                        className="text-green-600 font-medium inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {article.location}
                      </motion.span>
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverTangerPage;