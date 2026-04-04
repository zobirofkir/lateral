import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Users, BedDouble, BedSingle, Wifi, Coffee, Wind, Tv } from 'lucide-react';
import { useI18n } from '@/contexts/I18nContext';
import { Link } from '@inertiajs/react';

const getRoomIcon = (title: string) => {
  if (title.includes("Single") || title.includes("Simple")) return BedSingle;
  if (title.includes("Double") && !title.includes("Twin")) return BedDouble;
  if (title.includes("Twin")) return Users;
  if (title.includes("Family") || title.includes("Familiale")) return Users;
  return BedDouble;
};

const RoomsComponent = () => {
  const { t } = useI18n();
  
  const roomsContent = t.roomsModule || {};
  const roomsList = roomsContent.rooms || [];

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

  const roomImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705",
    "https://images.unsplash.com/photo-1548013146-72479768bada",
    "https://images.unsplash.com/photo-1558981285-6f0c94958bb6",
    "https://images.unsplash.com/photo-1548013146-72479768bada"
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E2723] mb-3">
            {roomsContent.title}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D4B896]" />
            <p className="text-[#6B3410] font-medium text-sm sm:text-base uppercase tracking-wide">
              {roomsContent.subtitle}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {roomsList.map((room: any, index: number) => {
            const Icon = getRoomIcon(room.title);
            return (
              <motion.div
                key={room.id || index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br from-[#D4B896]/20 to-[#6B3410]/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <img 
                    src={roomImages[index % roomImages.length]} 
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                  
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

                  {/* Description */}
                  <p className="text-[#5C2E0B] text-sm leading-relaxed mb-4 line-clamp-3">
                    {room.description}
                  </p>

                  {/* See More Button */}
                  <Link
                    href={`/rooms/${room.id}`}
                    className="w-full sm:w-auto group/btn flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4B896] to-[#6B3410] text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <span>{roomsContent.see_more}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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
            {roomsContent.included_features}
          </p>
          <Link src='/rooms' className="px-8 py-3 bg-transparent border-2 border-[#6B3410] text-[#6B3410] rounded-lg font-semibold hover:bg-[#6B3410] hover:text-white transition-all duration-300">
            {roomsContent.view_all_offers}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsComponent;