import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  BedDouble,
  Users,
  Coffee,
  ConciergeBell,
} from "lucide-react";

const features = [
  {
    icon: BedDouble,
    text: "Toutes les chambres sont équipées de salles de bain privatives",
  },
  {
    icon: ConciergeBell,
    text: "Réception ouverte 24h/24 avec un personnel multilingue",
  },
  {
    icon: Wifi,
    text: "Connexion Wi-Fi haut débit gratuite",
  },
  {
    icon: Users,
    text: "Salon commun convivial pour vous détendre",
  },
  {
    icon: Car,
    text: "Parking privé disponible à proximité",
  },
  {
    icon: Coffee,
    text: "Terrasse avec vue panoramique sur la ville",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyComponent = () => {
  return (
    <section className="relative w-full h-screen py-20 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/why/why_component_image.jpeg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4">
            Pourquoi l'Hôtel Lateral ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Situé au cœur de la médina, notre hôtel est le point de départ idéal
            pour explorer la ville et découvrir ses trésors cachés.
          </p>
          <p className="text-orange-400 mt-2 font-semibold">
            L’Hôtel Lateral mène à tout Tanger
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-orange-500 transition duration-300">
                  <Icon className="w-8 h-8 text-orange-400 group-hover:text-white transition" />
                </div>
                <p className="text-gray-200 group-hover:text-white transition">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyComponent;