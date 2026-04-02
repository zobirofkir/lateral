import React from 'react'
import { motion } from "framer-motion";
import { ArrowLeft, Link, Users } from 'lucide-react';

const ShowRoomHeroSectionComponent = ({
    roomImages,
    room
}) => {
  return (
    <>
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomImages[room.id % roomImages.length]}
            alt={room.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-4 md:top-8 md:left-8 z-20">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Rooms</span>
          </Link>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 text-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#D4B896] text-[#3E2723] text-sm font-semibold rounded-full">
                  {room.size}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {room.capacity}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                {room.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-4">
                {room.description.split('.')[0]}.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4B896] text-[#3E2723] rounded-lg font-bold text-xl">
                {room.price}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowRoomHeroSectionComponent