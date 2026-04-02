import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Users, BedDouble, BedSingle, Wifi, Coffee, Wind, Tv } from 'lucide-react';

const RoomsComponent = () => {
  const rooms = [
    {
      id: 1,
      title: "Chambre Simple",
      icon: BedSingle,
      price: "À partir de 450 MAD",
      description: "Une chambre de style et parfaitement équipée, idéale pour les voyageurs solos en quête de confort et de tranquillité.",
      features: ["Lit simple", "Wi-Fi gratuit", "Climatisation", "Salle de bain privée"],
      size: "15 m²",
      capacity: "1 personne",
      image: "/assets/images/rooms/single-room.jpg" 
    },
    {
      id: 2,
      title: "Chambre Double",
      icon: BedDouble,
      price: "À partir de 650 MAD",
      description: "Un espace chaleureux pensé pour les couples, offrant tout le confort nécessaire pour un séjour relaxant.",
      features: ["Lit double", "Wi-Fi gratuit", "Climatisation", "Salle de bain privée", "Télévision"],
      size: "22 m²",
      capacity: "2 personnes",
      image: "/assets/images/rooms/double-room.jpg" // Add your image path
    },
    {
      id: 3,
      title: "Chambre Double Twin",
      icon: Users,
      price: "À partir de 650 MAD",
      description: "La solution parfaite pour amis ou collègues avec deux lits séparés et un confort optimal.",
      features: ["2 lits simples", "Wi-Fi gratuit", "Climatisation", "Salle de bain privée", "Télévision"],
      size: "22 m²",
      capacity: "2 personnes",
      image: "/assets/images/rooms/twin-room.jpg" // Add your image path
    },
    {
      id: 4,
      title: "Chambre Familiale",
      icon: Users,
      price: "À partir de 950 MAD",
      description: "Un grand espace conçu pour accueillir toute la famille dans le confort et la convivialité.",
      features: ["2 lits doubles", "Wi-Fi gratuit", "Climatisation", "Salle de bain privée", "Télévision", "Espace salon"],
      size: "35 m²",
      capacity: "4 personnes",
      image: "/assets/images/rooms/family-room.jpg" // Add your image path
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4B896] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B3410] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E2723] mb-3">
            Explorez nos chambres
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D4B896]" />
            <p className="text-[#6B3410] font-medium text-sm sm:text-base uppercase tracking-wide">
              Prix, Confort et Authenticité
            </p>
            <div className="w-12 h-0.5 bg-[#D4B896]" />
          </div>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8"
        >
          {rooms.map((room) => {
            const Icon = room.icon;
            return (
              <motion.div
                key={room.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br from-[#D4B896]/20 to-[#6B3410]/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon className="w-20 h-20 text-[#D4B896] opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-[#6B3410] text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                    {room.price}
                  </div>

                  {/* Capacity Badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    {room.capacity}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#3E2723] mb-2 group-hover:text-[#6B3410] transition-colors">
                    {room.title}
                  </h3>

                  {/* Size */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#5C2E0B]/70">
                    <span className="font-medium">📐 {room.size}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[#5C2E0B] text-sm leading-relaxed mb-4 line-clamp-3">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-amber-100 text-[#6B3410] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-amber-100 text-[#6B3410] rounded-full">
                        +{room.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* See More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto group/btn flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4B896] to-[#6B3410] text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <span>Voir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 border-2 border-[#D4B896] rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-[#5C2E0B] mb-4 text-sm md:text-base">
            Toutes nos chambres incluent : Wi-Fi haut débit, climatisation, et salle de bain privative
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-[#6B3410] text-[#6B3410] rounded-lg font-semibold hover:bg-[#6B3410] hover:text-white transition-all duration-300">
            Voir toutes nos offres
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsComponent;