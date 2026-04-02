import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Coffee,
  Wifi,
  Users,
  Shield,
  Star,
  Heart,
  Calendar,
  Award,
  Sparkles,
  Compass,
} from "lucide-react";

const WhyComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      id: 1,
      icon: MapPin,
      title: "Emplacement Privilégié",
      description:
        "Situé au cœur de la médina de Tanger, à deux pas du Petit Socco et de la Kasbah, offrant un accès facile aux principales attractions.",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      delay: 0.1,
    },
    {
      id: 2,
      icon: Clock,
      title: "Histoire & Authenticité",
      description:
        "Un établissement chargé d'histoire qui préserve l'authenticité marocaine tout en offrant un confort moderne à ses visiteurs.",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50",
      delay: 0.2,
    },
    {
      id: 3,
      icon: Coffee,
      title: "Hospitalité Marocaine",
      description:
        "Un accueil chaleureux et personnalisé, typique de l'hospitalité marocaine, avec un service attentionné 24h/24.",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      delay: 0.3,
    },
    {
      id: 4,
      icon: Wifi,
      title: "Confort Moderne",
      description:
        "Équipements contemporains incluant WiFi haut débit, climatisation et chambres rénovées pour un séjour agréable.",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      delay: 0.4,
    },
    {
      id: 5,
      icon: Users,
      title: "Ambiance Unique",
      description:
        "Une atmosphère intemporelle qui attire voyageurs, artistes et écrivains du monde entier, créant un mélange culturel fascinant.",
      color: "from-red-600 to-rose-600",
      bgColor: "bg-red-50",
      delay: 0.5,
    },
    {
      id: 6,
      icon: Shield,
      title: "Sécurité & Tranquillité",
      description:
        "Un environnement sûr et paisible, idéal pour se détendre après une journée d'exploration dans la médina animée.",
      color: "from-indigo-600 to-violet-600",
      bgColor: "bg-indigo-50",
      delay: 0.6,
    },
  ];

  const stats = [
    { value: "100+", label: "Clients Satisfaits", icon: Star },
    { value: "50+", label: "Années d'Histoire", icon: Award },
    { value: "24/7", label: "Service Disponible", icon: Clock },
    { value: "4.8", label: "Note Clients", icon: Heart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (delay) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: delay * 0.1 },
    }),
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const statVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#faf6f2] via-white to-[#f8f5f0] py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4B896]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B3410]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4B896]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4B896]" />
              <span className="text-[#6B3410] font-semibold uppercase tracking-wider text-sm">
                Pourquoi Nous Choisir
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4B896]" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2723] mb-4"
          >
            Pourquoi l'Hôtel Mauritania?
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410] mx-auto rounded-full mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-[#5C2E0B] max-w-2xl mx-auto text-lg"
          >
            Découvrez ce qui rend notre établissement unique et pourquoi nos
            clients nous font confiance depuis des générations
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D4B896]/20"
            >
              <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-[#D4B896]/20 to-[#6B3410]/10 mb-4">
                <stat.icon className="w-6 h-6 text-[#6B3410]" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-[#5C2E0B]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              custom={reason.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B896]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative ${reason.bgColor} rounded-2xl p-6 h-full transition-all duration-300 shadow-md hover:shadow-xl border border-[#D4B896]/20`}>
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.color} text-white shadow-lg`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredCard === reason.id ? 1 : 0 }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4B896]" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#3E2723] mb-3 group-hover:text-[#6B3410] transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-[#5C2E0B]/80 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4B896] to-[#6B3410] rounded-b-2xl"
                />

                {/* Read More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center gap-2 text-[#6B3410] text-sm font-medium"
                >
                  <span>En savoir plus</span>
                  <Compass className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#3E2723] to-[#5C2E0B] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.6 }}
                className="inline-flex p-3 rounded-full bg-white/20 mb-6"
              >
                <Calendar className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à vivre l'expérience Hôtel Mauritania?
              </h3>
              
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Réservez votre séjour dès maintenant et découvrez le charme authentique de Tanger
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#3E2723] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Réserver Maintenant
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyComponent;